import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface EnquiryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// WhatsApp Configuration
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '919831144669';

const EnquiryForm = ({ open, onOpenChange }: EnquiryFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiry: '',
    attachment: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      attachment: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format the message with all form data
      const message = `*New Enquiry from Website*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}

*Enquiry:*
${formData.enquiry}

${formData.attachment ? `*Attachment:* ${formData.attachment.name} (${(formData.attachment.size / 1024).toFixed(2)} KB)` : ''}

---
_This message was sent from the Marino Corporation website enquiry form._`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      toast({
        title: "Opening WhatsApp",
        description: "Your enquiry details have been prepared. WhatsApp will open in a new tab.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({ name: '', phone: '', email: '', enquiry: '', attachment: null });
      setIsSubmitting(false);
      onOpenChange(false);
      
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      
      toast({
        title: "Error",
        description: "Failed to open WhatsApp. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
      
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Enquiry Form</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll open WhatsApp with your enquiry ready to send.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="enquiry">Enquiry *</Label>
            <Textarea
              id="enquiry"
              name="enquiry"
              required
              value={formData.enquiry}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="attachment">Attachment (Optional)</Label>
            <Input
              id="attachment"
              name="attachment"
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xls,.xlsx"
              className="cursor-pointer"
            />
            {formData.attachment && (
              <p className="text-sm text-muted-foreground">
                Selected: {formData.attachment.name} ({(formData.attachment.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="btn-accent flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryForm;
