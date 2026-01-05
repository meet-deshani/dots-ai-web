import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Hammer, Rocket } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ApproachSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const steps = [
    {
      icon: Search,
      phase: "1",
      title: "The Wedge (Audit)",
      description: "We audit your data hygiene and identify bleed. Low risk, high value blueprint.",
      deliverables: ["Data Hygiene Score", "Leakage Report", "Growth Roadmap"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Hammer,
      phase: "2",
      title: "The Build",
      description: "We deploy custom Self-Analytics Tools. No billing until the dashboard loads correctly.",
      deliverables: ["Custom Dashboards", "No-SQL Interface", "Real-time Visibility"],
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
    },
    {
      icon: Rocket,
      phase: "3",
      title: "The Scale",
      description: "We use the new visibility to recover margins and speed up operations.",
      deliverables: ["Margin Recovery", "Churn Reduction", "Revenue Growth"],
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              The ZeroOne{" "}
              <span className="gradient-text font-mono">Process Blueprint</span>{" "}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From "Blind Spots" to "Strategic Clarity" in 3 steps.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-light to-secondary -translate-y-1/2" />

            {/* Steps Grid */}
            <div className="grid md:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card */}
                  <div className="glass rounded-2xl p-8 hover-lift h-full">
                    {/* Icon Badge */}
                    <div className="flex items-center justify-center mb-6">
                      <div className={`relative w-20 h-20 rounded-2xl ${step.bgColor} flex items-center justify-center shadow-glow transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]`}>
                        <step.icon className={step.color} size={36} strokeWidth={2.5} />
                        <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-md`}>
                          <span className={`text-2xl font-bold font-mono ${step.color}`}>
                            {step.phase}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-heading font-bold">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="pt-4 space-y-2">
                        {step.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className={`inline-block px-3 py-1 rounded-full ${step.bgColor} ${step.color} text-sm font-medium mr-2 mb-2`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome Highlight */}
          <div className="mt-12 text-center glass rounded-2xl p-8 animate-fade-up" style={{ animationDelay: "450ms" }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
              💡 Key Principle
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We bill only on <span className="font-bold text-foreground">outcome acceptance</span>. Discovery & scoping are free. You pay when you're 99% satisfied.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: "500ms" }}>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold"
              onClick={() => setIsContactFormOpen(true)}
            >
              Get Your Blueprint
            </Button>
          </div>
        </div>
      </div>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Get Process Blueprint"
      />
    </section>
  );
};

export default ApproachSection;
