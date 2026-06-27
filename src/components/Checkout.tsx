import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useCart } from '@/contexts/CartContext';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { RAZORPAY_KEY_ID, openRazorpay } from '@/lib/razorpay';
import { business } from '@/data/business';

interface CheckoutProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const Checkout = ({ open, onOpenChange }: CheckoutProps) => {
  const { items, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    landmark: '',
  });

  const MINIMUM_ORDER_FOR_DELIVERY = 5000;
  const expressDeliveryCharge = 500;
  const subtotal = getTotalPrice();
  const isEligibleForDelivery = subtotal >= MINIMUM_ORDER_FOR_DELIVERY;
  const deliveryCharge = isEligibleForDelivery && expressDelivery ? expressDeliveryCharge : 0;
  const total = subtotal + deliveryCharge;
  const onlinePaymentsEnabled = Boolean(RAZORPAY_KEY_ID);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '', landmark: '' });
    setExpressDelivery(false);
    setAgreedToTerms(false);
    setIsProcessing(false);
  };

  // Build a WhatsApp message capturing the full order. On a static host this is
  // how the order details (items + address) reach the business, since there is
  // no backend to store them.
  const buildWhatsAppOrder = (paymentId?: string) => {
    const orderType = isEligibleForDelivery ? 'Delivery' : 'Pick-up at Store';
    const lines: string[] = [];
    lines.push('*New Order — Marino Webshop*', '');
    lines.push('*Items:*');
    items.forEach((item) => {
      lines.push(`• ${item.name} (${item.size}) × ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}`);
    });
    lines.push('');
    lines.push(`Subtotal: ₹${subtotal.toLocaleString('en-IN')}`);
    if (deliveryCharge) lines.push(`Express Delivery: ₹${deliveryCharge.toLocaleString('en-IN')}`);
    lines.push(`*Total: ₹${total.toLocaleString('en-IN')}*`, '');
    lines.push(`*Order Type:* ${orderType}`);
    lines.push(`*Name:* ${formData.name}`);
    lines.push(`*Phone:* ${formData.phone}`);
    if (formData.email) lines.push(`*Email:* ${formData.email}`);
    if (isEligibleForDelivery) {
      lines.push(`*Address:* ${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`);
      if (formData.landmark) lines.push(`*Landmark:* ${formData.landmark}`);
    }
    lines.push('');
    lines.push(paymentId ? `*Payment:* PAID via Razorpay (ID: ${paymentId})` : '*Payment:* To be arranged');
    return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const finalizeOrder = (paymentId?: string) => {
    const orderType = isEligibleForDelivery ? 'Delivery' : 'Pick-up at Store';
    // Send full order details to the business via WhatsApp.
    window.open(buildWhatsAppOrder(paymentId), '_blank', 'noopener,noreferrer');
    toast({
      title: paymentId ? 'Payment Successful!' : 'Order Sent!',
      description: paymentId
        ? `Payment received (₹${total.toLocaleString('en-IN')}). Your order has been sent to us on WhatsApp for ${orderType.toLowerCase()}. We will confirm shortly.`
        : `Your order has been sent to us on WhatsApp for ${orderType.toLowerCase()}. We will confirm price and payment shortly.`,
    });
    clearCart();
    onOpenChange(false);
    resetForm();
  };

  const validate = () => {
    if (items.length === 0) {
      toast({ title: 'Your cart is empty', variant: 'destructive' });
      return false;
    }
    if (!agreedToTerms) {
      toast({
        title: 'Please accept the policies',
        description: 'You must agree to the Terms & Conditions and Privacy Policy to continue.',
        variant: 'destructive',
      });
      return false;
    }
    if (isEligibleForDelivery) {
      if (!formData.name || !formData.phone || !formData.address || !formData.city || !formData.state || !formData.pincode) {
        toast({ title: 'Missing Information', description: 'Please fill in all required fields.', variant: 'destructive' });
        return false;
      }
    } else if (!formData.name || !formData.phone) {
      toast({ title: 'Missing Information', description: 'Please provide your name and phone number.', variant: 'destructive' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // No gateway configured → fall back to a WhatsApp order (no online payment).
    if (!onlinePaymentsEnabled) {
      finalizeOrder();
      return;
    }

    setIsProcessing(true);
    const opened = await openRazorpay({
      key: RAZORPAY_KEY_ID as string,
      amount: Math.round(total * 100),
      currency: 'INR',
      name: business.legalName,
      description: `Order of ${items.reduce((n, i) => n + i.quantity, 0)} item(s)`,
      image: '/logo/logo_marino.jpeg',
      prefill: { name: formData.name, email: formData.email, contact: formData.phone },
      notes: { orderType: isEligibleForDelivery ? 'Delivery' : 'Pick-up at Store' },
      theme: { color: '#0d3d26' },
      handler: (response) => finalizeOrder(response.razorpay_payment_id),
      modal: { ondismiss: () => setIsProcessing(false) },
    });

    if (!opened) {
      setIsProcessing(false);
      toast({
        title: 'Could not open payment',
        description: 'Please check your connection and try again, or place your order on WhatsApp.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
          <DialogDescription>
            {isEligibleForDelivery
              ? 'Complete your order by providing delivery details'
              : 'Complete your order for pick-up at store'}
          </DialogDescription>
        </DialogHeader>

        {!isEligibleForDelivery && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-900 font-semibold">
              ⚠️ Minimum order of ₹{MINIMUM_ORDER_FOR_DELIVERY.toLocaleString('en-IN')} required for delivery
            </p>
            <p className="text-sm text-yellow-800 mt-1">
              Your order total is ₹{subtotal.toLocaleString('en-IN')}. This order is available for pick-up at store only.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Delivery Address */}
          {isEligibleForDelivery && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Delivery Address</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required placeholder="Enter your phone number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email (optional)" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Street Address *</Label>
                <Textarea id="address" name="address" value={formData.address} onChange={handleInputChange} required placeholder="Enter your street address" rows={3} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required placeholder="Enter city" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Input id="state" name="state" value={formData.state} onChange={handleInputChange} required placeholder="Enter state" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input id="pincode" name="pincode" value={formData.pincode} onChange={handleInputChange} required placeholder="Enter pincode" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="landmark">Landmark (Optional)</Label>
                <Input id="landmark" name="landmark" value={formData.landmark} onChange={handleInputChange} placeholder="Enter nearby landmark" />
              </div>
            </div>
          )}

          {/* Pick-up Information */}
          {!isEligibleForDelivery && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Pick-up Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required placeholder="Enter your phone number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email (optional)" />
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Store Address:</strong> {business.address.line1}, {business.address.city} – {business.address.pincode}. We will contact you once your order is ready for pick-up.
                </p>
              </div>
            </div>
          )}

          {/* Express Delivery */}
          {isEligibleForDelivery && (
            <div className="space-y-4 p-4 border rounded-lg">
              <div className="flex items-center space-x-2">
                <Checkbox id="express-delivery" checked={expressDelivery} onCheckedChange={(checked) => setExpressDelivery(checked as boolean)} />
                <Label htmlFor="express-delivery" className="font-semibold cursor-pointer">
                  Express Delivery (3 days) - Extra ₹{expressDeliveryCharge.toLocaleString('en-IN')}
                </Label>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                Standard delivery is within 7 days of payment - All over India
              </p>
            </div>
          )}

          {/* Order Summary */}
          <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
            <h3 className="text-lg font-semibold">Order Summary</h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
                  <span>{item.name} ({item.size}) × {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                </div>
              ))}
              <div className="flex justify-between text-sm pt-2 border-t">
                <span>Subtotal:</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {deliveryCharge > 0 && (
                <div className="flex justify-between text-sm">
                  <span>Express Delivery:</span>
                  <span>₹{deliveryCharge.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                <span>Total:</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
              <p className="text-xs text-muted-foreground pt-1">
                Prices are indicative and exclusive of GST unless stated. GST is added as per prevailing rates.
              </p>
            </div>
          </div>

          {/* Payment */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Payment</h3>
            {onlinePaymentsEnabled ? (
              <div className="flex items-start gap-3 p-4 border rounded-lg bg-emerald-50/50">
                <ShieldCheck className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/80">
                  Pay securely via <strong>Razorpay</strong> — UPI, Credit/Debit Cards, Net-banking & Wallets.
                  Your card/UPI details are handled by Razorpay and never stored by us.
                </p>
              </div>
            ) : (
              <div className="flex items-start gap-3 p-4 border rounded-lg bg-blue-50/50">
                <ShieldCheck className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/80">
                  Your order will be sent to us on <strong>WhatsApp</strong>. We will confirm the final price
                  (incl. GST) and share secure payment options to complete your purchase.
                </p>
              </div>
            )}
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor="consent" className="text-sm font-normal cursor-pointer leading-relaxed">
              I agree to the{' '}
              <Link to="/terms" target="_blank" className="text-emerald-700 underline">Terms &amp; Conditions</Link>,{' '}
              <Link to="/privacy-policy" target="_blank" className="text-emerald-700 underline">Privacy Policy</Link>,{' '}
              <Link to="/refund-policy" target="_blank" className="text-emerald-700 underline">Replacement &amp; Refund Policy</Link>{' '}
              and{' '}
              <Link to="/shipping-policy" target="_blank" className="text-emerald-700 underline">Shipping Policy</Link>.
            </Label>
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1" disabled={isProcessing}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={isProcessing}>
              {isProcessing ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing…</>
              ) : onlinePaymentsEnabled ? (
                `Pay ₹${total.toLocaleString('en-IN')}`
              ) : (
                'Place Order on WhatsApp'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
