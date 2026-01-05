import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Eye } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ContactForm from "@/components/ContactForm";

const HeroSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
      </div>



      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
          {/* USP Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 shadow-glow">
            <Shield className="text-primary" size={16} />
            <span className="text-sm font-semibold gradient-text">
              Pay Only for Outcomes
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            <span className="text-foreground">We help Business / Brands</span>
            <br />
            <span className="gradient-text">recover 13% in lost margins</span>
            <br />
            <span className="text-foreground">through AI-Driven Analytics.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stop flying blind. See where you are losing money, shipping slowly, or churning clients. We build custom <span className="text-foreground font-semibold">Self-Analytics Tools</span> that fix expensive problems.
          </p>

          {/* Proof strip */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-secondary" />
              <span>PII-minimised</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={14} className="text-secondary" />
              <span>AES-256 at rest</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-secondary" />
              <span>TLS 1.2+ in transit</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye size={14} className="text-secondary" />
              <span>Role-based access</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-secondary" />
              <span>Audit logs</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={14} className="text-secondary" />
              <span>BYO-VPC option</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold text-lg px-8 shadow-glow hover:scale-105 transition-transform"
              onClick={() => setIsContactFormOpen(true)}
            >
              Get Your Data Hygiene & Growth Audit
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Link to="/work">
              <Button size="lg" variant="outline" className="font-semibold text-lg px-8 hover:bg-primary/5">
                See Permissionless Portfolio
              </Button>
            </Link>
          </div>

          {/* Microcopy */}
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto pt-8 leading-relaxed">
            We design, deploy, and maintain custom AI agents that drive real business growth
            and plug into your existing tools.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary/50" />
        </div>
      </div>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Data Hygiene & Growth Audit"
      />
    </section>
  );
};

export default HeroSection;
