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

const EnquiryForm = ({ open, onOpenChange }: EnquiryFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiry: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use Formspree or custom API endpoint
      // Formspree is free and works without backend setup
      // Sign up at https://formspree.io/ and get your form endpoint
      const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID';
      
      // Send email to business
      const businessResponse = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          enquiry: formData.enquiry,
          _subject: 'Enquiry from Website - Marino Corporation',
          _to: 'marinocoindia@gmail.com,marinocorporationofindia@gmail.com',
          _replyto: formData.email,
          _cc: formData.email, // Send copy to sender
        }),
      });

      if (businessResponse.ok) {
        // Show success message
        toast({
          title: "Enquiry Submitted Successfully!",
          description: "Your enquiry has been sent and a confirmation copy has been sent to your email address.",
          duration: 5000,
        });

        // Reset form and close dialog
        setFormData({
          name: '',
          phone: '',
          email: '',
          enquiry: '',
        });
        setIsSubmitting(false);
        onOpenChange(false);
      } else {
        const errorData = await businessResponse.json();
        throw new Error(errorData.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Fallback: Use mailto to open email client with CC to sender
      const emailAddresses = [
        'marinocoindia@gmail.com',
        'marinocorporationofindia@gmail.com'
      ];
      const subject = encodeURIComponent('Enquiry from Website - Marino Corporation');
      const body = encodeURIComponent(
        `Hello,\n\nI am interested in your products.\n\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n\n` +
        `Enquiry:\n${formData.enquiry}\n\n` +
        `Thank you.`
      );
      // Include CC to sender for confirmation copy
      const cc = encodeURIComponent(formData.email);
      const mailtoUrl = `mailto:${emailAddresses.join(',')}?subject=${subject}&body=${body}&cc=${cc}`;
      window.location.href = mailtoUrl;

      toast({
        title: "Opening Email Client",
        description: "Your email client will open. Please send the email manually. You are CC'd so you'll receive a copy.",
        duration: 5000,
      });

      setIsSubmitting(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Enquiry Form</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll get back to you soon.
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
