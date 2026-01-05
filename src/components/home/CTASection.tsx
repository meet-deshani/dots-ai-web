import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const CTASection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center space-y-8 animate-fade-up shadow-glow">
            {/* Headline */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                🎯 Ready to Scale?
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Stop Losing Money
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get a "Data Hygiene & Growth Audit" for $2k-5k. No long-term commitment. Stop the bleeding first.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="gradient-primary text-white font-semibold text-lg px-8 py-6 shadow-glow hover:shadow-lg transition-all hover-lift"
                onClick={() => setIsContactFormOpen(true)}
              >
                <Calendar className="mr-2" size={20} />
                Get Your Audit
              </Button>
              <a href="mailto:hello@zeroonedotsai.consulting">
                <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 border-2 hover:bg-muted/50 transition-all">
                  <Mail className="mr-2" size={20} />
                  Email Us Directly
                </Button>
              </a>
            </div>

            {/* Trust Elements */}
            <div className="pt-8 border-t border-border space-y-3">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">We reply within 24 hours.</span> NDA available on request.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center">
                  <ArrowRight size={14} className="mr-1 text-secondary" />
                  No commitment required
                </span>
                <span className="flex items-center">
                  <ArrowRight size={14} className="mr-1 text-secondary" />
                  Fixed-cost projects
                </span>
                <span className="flex items-center">
                  <ArrowRight size={14} className="mr-1 text-secondary" />
                  Outcome-based billing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Schedule Discovery Call"
      />
    </section>
  );
};

export default CTASection;
