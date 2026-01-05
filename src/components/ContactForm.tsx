import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { notifyFormSubmission, notifyFormAbandonment, notifyFormOpened } from "@/lib/telegram";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultSubject?: string;
  messagePlaceholder?: string;
  messageLabel?: string;
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = ({
  open,
  onOpenChange,
  defaultSubject = "Launch My Agent",
  messagePlaceholder = "Describe your challenge...",
  messageLabel = "Tell us about your challenge *"
}: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    subject: defaultSubject,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  // Tracking for form abandonment
  const formOpenedAt = useRef<number | null>(null);
  const hasNotifiedOpened = useRef(false);

  // Track when form opens
  useEffect(() => {
    if (open && !hasNotifiedOpened.current) {
      formOpenedAt.current = Date.now();
      hasNotifiedOpened.current = true;
      // Notify form opened
      notifyFormOpened(window.location.pathname);
    }
    if (!open) {
      hasNotifiedOpened.current = false;
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Create FormData for Google Forms submission
      const googleFormData = new FormData();
      googleFormData.append("entry.1400476538", validatedData.name);
      googleFormData.append("entry.1670634388", validatedData.email);
      googleFormData.append("entry.1880035332", validatedData.company || "");
      googleFormData.append("entry.1372522944", validatedData.subject);
      googleFormData.append("entry.277616799", validatedData.message);

      // Submit to Google Form
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScIw02tLym0pvsog9a-Kyk4usNa4kvO3Za5hg9aRGT00aGlcw/formResponse",
        {
          method: "POST",
          body: googleFormData,
          mode: "no-cors", // Google Forms doesn't support CORS
        }
      );

      // Send Telegram notification for form submission
      await notifyFormSubmission(validatedData, window.location.pathname);

      toast({
        title: "Request Submitted!",
        description: "We'll get back to you within 24 hours.",
      });

      // Show success state with WhatsApp button
      setIsSubmitted(true);
      formOpenedAt.current = null; // Reset tracking
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please check your inputs and try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!open) return;
    setFormData((prev) => ({
      ...prev,
      subject: defaultSubject,
    }));
  }, [defaultSubject, open]);

  const handleClose = () => {
    // Check for form abandonment (only if form was opened and not submitted)
    if (!isSubmitted && formOpenedAt.current) {
      const filledFields: string[] = [];
      if (formData.name.trim()) filledFields.push('Name');
      if (formData.email.trim()) filledFields.push('Email');
      if (formData.company?.trim()) filledFields.push('Company');
      if (formData.message.trim()) filledFields.push('Message');

      const timeInFormSeconds = Math.floor((Date.now() - formOpenedAt.current) / 1000);

      // Notify about abandonment
      notifyFormAbandonment(filledFields, window.location.pathname, timeInFormSeconds);
    }

    // Reset state
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: defaultSubject,
      message: "",
    });
    setErrors({});
    formOpenedAt.current = null;
    onOpenChange(false);
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/918320065658?text=${encodeURIComponent("Hi! I just submitted a form on ZeroOne DOTS.ai")}`;
    window.open(whatsappUrl, "_blank");
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] animate-scale-in max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          // Success state with WhatsApp button
          <div className="text-center space-y-6 py-8">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="text-primary" size={32} />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-2xl font-bold">Request Submitted!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
            </div>
            <div className="space-y-3 pt-4">
              <Button
                size="lg"
                className="w-full gradient-primary text-white font-semibold"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2" size={20} />
                Chat on WhatsApp Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          </div>
        ) : (
          // Form state
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">Get Started</DialogTitle>
              <DialogDescription>
                Tell us about your challenge and we'll reach out within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Dhaval P"
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@company.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your company name"
                  className={errors.company ? "border-destructive" : ""}
                />
                {errors.company && <p className="text-sm text-destructive mt-1">{errors.company}</p>}
              </div>
              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What do you need help with?"
                  className={errors.subject ? "border-destructive" : ""}
                />
                {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
              </div>
              <div>
                <Label htmlFor="message">{messageLabel}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={messagePlaceholder}
                  rows={4}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" className="w-full gradient-primary text-white" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
