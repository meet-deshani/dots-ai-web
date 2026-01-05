import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const CaseStudiesSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const caseStudies = [
    {
      title: "⚖️ Personal Injury Law",
      industry: "Legal Tech",
      problem: "Revenue Leakage from Missed Intake. Potential high-value clients calling after hours were lost to competitors.",
      agentDeployed: "📞 24/7 AI Voice Intake & Discovery Engine",
      agentDescription: "A voice agent that captures leads instantly and a semantic document reviewer that flags critical case evidence.",
      howItWorked: "Client used Type, Speak, or Drag-and-Drop to interact with the data, requiring zero technical knowledge.",
      outcome: "✅ 5x ROI via Captured Leads. 40% reduction in associate review time. Strategic Shift from 'IT housekeeping' to direct revenue capture.",
      metrics: [
        { label: "5x ROI", icon: "💰" },
        { label: "40% less review time", icon: "⏱️" },
        { label: "35% conversion lift", icon: "📈" },
      ],
    },
    {
      title: "🚛 3PL Logistics & Supply Chain",
      industry: "Logistics",
      problem: "Margin Erosion via Manual Oversight. Invoice discrepancies were delaying payments and 'Where is my truck?' inquiries overwhelmed staff.",
      agentDeployed: "🚚 OCR Invoice Matcher + Predictive ETA Agent",
      agentDescription: "Automated matching of POs to Invoices with 99% accuracy and predictive route flagging pushed to WhatsApp.",
      howItWorked: "Client used Type, Speak, or Drag-and-Drop to interact with the data, requiring zero technical knowledge.",
      outcome: "✅ 70% Reduction in Processing Costs. 50% faster invoicing cycles. Strategic Shift from 'visibility' to cash flow acceleration.",
      metrics: [
        { label: "70% cost reduction", icon: "📉" },
        { label: "50% faster invoicing", icon: "⚡" },
        { label: "8L/year saved", icon: "💰" },
      ],
    },
    {
      title: "🛒 D2C E-Commerce",
      industry: "D2C E-Commerce",
      problem: "P&L Destruction via RTO & Ad Fatigue. High Return-to-Origin (RTO) rates were eating 15% of gross margins.",
      agentDeployed: "📦 Predictive RTO Guard & Creative Velocity Agent",
      agentDescription: "Analyzes customer profiles to flag high-RTO risks before shipping and generates 10x the ad creative volume.",
      howItWorked: "Client used Type, Speak, or Drag-and-Drop to interact with the data, requiring zero technical knowledge.",
      outcome: "✅ 15% Recovery of Lost Margins. 20% Increase in ROAS. Strategic Shift from 'unclear P&L' to active margin protection.",
      metrics: [
        { label: "15% margin recovery", icon: "💰" },
        { label: "20% ROAS increase", icon: "📈" },
        { label: "3-month ROI", icon: "⚡" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Trust <span className="gradient-text">Architecture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Permissionless Portfolio. See how we solved boring but expensive problems for others.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <article
                key={index}
                className="card-elevated group hover-lift cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  {/* Title with emoji */}
                  <h3 className="font-heading text-2xl font-bold mb-4 text-center">
                    {study.title}
                  </h3>

                  <div className="space-y-4 text-sm">
                    {/* Problem */}
                    <div className="border-l-2 border-destructive pl-3">
                      <p className="font-semibold text-destructive mb-1 uppercase text-xs tracking-wide">Problem</p>
                      <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                    </div>

                    {/* AI Agent Deployed */}
                    <div className="border-l-2 border-primary pl-3">
                      <p className="font-semibold text-primary mb-1 uppercase text-xs tracking-wide">AI Agent Deployed</p>
                      <p className="text-foreground font-semibold">{study.agentDeployed}</p>
                      <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{study.agentDescription}</p>
                    </div>

                    {/* How It Worked */}
                    <div className="border-l-2 border-primary-light pl-3">
                      <p className="font-semibold text-primary-light mb-1 uppercase text-xs tracking-wide">How It Worked</p>
                      <p className="text-muted-foreground leading-relaxed">{study.howItWorked}</p>
                    </div>

                    {/* Outcome */}
                    <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 border border-primary/20 rounded-lg p-3">
                      <p className="font-semibold text-primary mb-2 uppercase text-xs tracking-wide flex items-center gap-1">
                        <TrendingUp size={14} />
                        Outcome
                      </p>
                      <p className="text-foreground font-medium leading-relaxed">{study.outcome}</p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 gap-2 pt-2">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <span className="text-lg">{metric.icon}</span>
                          <span className="font-medium text-foreground">{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer note */}
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground italic text-center">
                        Deployed Custom Analytics Tool
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Footer tagline & CTA */}
          <div className="text-center space-y-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <p className="text-sm text-muted-foreground">
              Powered by ZeroOne DOTS.ai Agents – seamlessly embedded in client environments
            </p>
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold shadow-glow"
              onClick={() => setIsContactFormOpen(true)}
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Launch My Agent"
      />
    </section>
  );
};

export default CaseStudiesSection;
