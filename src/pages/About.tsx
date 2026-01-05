import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, Zap, Shield, Gauge, Users, Briefcase } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const About = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const values = [
    {
      icon: Zap,
      title: "Action > Advice",
      description: "Consultants give you slides. We give you working code and deployed agents.",
    },
    {
      icon: Target,
      title: "Outcomes > Hours",
      description: "We hate hourly billing. It incentivizes slowness. We bill for results.",
    },
    {
      icon: Shield,
      title: "Ownership",
      description: "You own the IP. You own the code. No vendor lock-in.",
    },
    {
      icon: Gauge,
      title: "Simplicity",
      description: "Complex systems break. We build 'boring' reliable tech that scales.",
    },
    {
      icon: Users,
      title: "Small Teams",
      description: "1 PM + 10 Agents beats a team of 10 average humans any day.",
    },
    {
      icon: Briefcase,
      title: "Business First",
      description: "Tech is just a tool. If it doesn't improve the P&L, we don't build it.",
    },
  ];

  const moatItems = [
    {
      title: "The Anti-Consultancy Model",
      description: "No junior analyst armies. No hourly padding. Just fixed-cost sprints and verified outcomes.",
    },
    {
      title: "Zero-Knowledge Interface",
      description: "Our proprietary layer lets non-tech teams talk to databases without SQL.",
    },
    {
      title: "Outcome-Based Billing",
      description: "For build projects, you don't pay the final milestone until you accept the system.",
    },
    {
      title: "1 PM + Network of Agents",
      description: "A single point of contact orchestrating a digital workforce. Speed without the chaos.",
    },
  ];

  const stats = [
    { value: "4.5 Months", label: "Avg. ROI Time" },
    { value: "50+", label: "Agents Deployed" },
    { value: "12%", label: "Avg. Margin Recovery" },
    { value: "100%", label: "Code Ownership" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            The <span className="text-primary">Anti-Consultancy</span>. <br />
            No Slides. Just Systems.
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in max-w-2xl mx-auto">
            We exist to kill the "Hourly Billing" model. We build autonomous agents that solve expensive problems, and then we leave you with the keys.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="card-elevated p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Target size={200} />
            </div>
            <h2 className="font-heading text-3xl font-bold mb-6 relative z-10">Why We Started ZeroOne</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed relative z-10">
              <p>
                We watched too many founders get burned by "Digital Transformation" agencies. They'd spend $50k on "Strategy" and get a 100-page PDF, but still have zero automation in their actual operations.
              </p>
              <p>
                The problem wasn't a lack of strategy. It was a lack of <strong>builders</strong>.
              </p>
              <p>
                Founders didn't need more advice. They needed someone to wire up the API, clean the database, and automate the invoice reconciliation <em>today</em>.
              </p>
              <p>
                So we built ZeroOne DOTS on a simple premise: <span className="text-foreground font-bold">We sell outcomes, not hours.</span>
              </p>
              <p>
                We use AI Agents to do the heavy lifting, which allows us to operate faster, cheaper, and more accurately than any human team. And when we're done, we hand you the code and walk away. No handcuffs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we operate differently from the "Big 4" and traditional agencies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover-lift border-2 hover:border-primary/50 transition-all bg-card/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4 shadow-glow">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Moat */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center">Your Structural Advantage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {moatItems.map((item, index) => (
              <div key={index} className="card-elevated p-8 flex flex-col md:flex-row gap-6 items-start hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <CheckCircle2 className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-r from-primary/90 to-secondary/90 rounded-2xl p-12 text-white shadow-glow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
                  <p className="text-sm md:text-base opacity-90 font-medium uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ready to Fire Your Consultants?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's build a system that pays for itself in months, not years.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-primary text-white text-lg px-8 shadow-xl"
              onClick={() => setIsContactFormOpen(true)}
            >
              Start Your Audit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8"
              onClick={() => setIsContactFormOpen(true)}
            >
              Talk to a Builder
            </Button>
          </div>
        </div>
      </section>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Start My Audit"
      />

      <Footer />
    </div>
  );
};

export default About;
