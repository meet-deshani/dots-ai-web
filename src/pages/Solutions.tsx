import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Database, LineChart, LayoutDashboard, Eraser,
  ClipboardList, Bell, Calendar, Timer, TrendingUp,
  Rocket, Wrench,
  DollarSign, Zap, Scale,
  ArrowRight, CheckCircle2
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipProvider,
} from "@/components/ui/tooltip";
import ContactForm from "@/components/ContactForm";

const Solutions = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState("Launch My Agent");

  const openContactForm = (subject: string) => {
    setContactSubject(subject);
    setIsContactFormOpen(true);
  };
  const agentCategories = [
    {
      title: "Data Guardians (Revenue Protection)",
      color: "from-primary to-primary-light",
      description: "Stop flying blind. We build agents that clean data and surface profit-killing anomalies.",
      agents: [
        {
          icon: LineChart,
          name: "Margin Leakage Detective",
          oneLiner: "Surfaces hidden costs and lost revenue in your logs.",
          inputs: ["Transaction Logs", "Inventory Data", "Ad Spend"],
          actions: ["Profile for discrepancies", "Detect margin erosion", "Identify fraud/waste"],
          outputs: ["Ranked Revenue Alerts", "Leakage Report", "Corrective Actions"],
        },
        {
          icon: Database,
          name: "Data Pipeline Autopilot",
          oneLiner: "Ensures your dashboards are never empty or wrong.",
          inputs: ["API Sources", "Legacy DBs", "Excel Sheets"],
          actions: ["Auto-heal pipelines", "Retry failed jobs", "Backfill missing days"],
          outputs: ["Fresh Data 24/7", "0 Downtime Alerts", "Self-Healing Logs"],
        },
        {
          icon: LayoutDashboard,
          name: "The 'Board-Ready' Dashboard",
          oneLiner: "Exec-grade visibility without asking analysts for favors.",
          inputs: ["Metrics Catalog", "KPI Definitions"],
          actions: ["Real-time consolidation", "Trend analysis", "Variance explanation"],
          outputs: ["Live P&L View", "Investor Updates", "Drill-down Capability"],
        },
        {
          icon: Eraser,
          name: "Automated Hygiene Agent",
          oneLiner: "Dedupes and validates customer data so you stop marketing to ghosts.",
          inputs: ["CRM Contacts", "Email Lists"],
          actions: ["Validate emails/phones", "Merge duplicates", "Standardize formats"],
          outputs: ["Clean Customer Golden Record", "Bounce Reduction", "Higher Deliverability"],
        },
      ],
    },
    {
      title: "Ops Velocity (Speed & Scale)",
      color: "from-primary-light to-secondary",
      description: "Replace manual 'glued together' spreadsheets with autonomous workflows.",
      agents: [
        {
          icon: ClipboardList,
          name: "Daily MIS Reporting Agent",
          oneLiner: "End the morning scramble. Reports land in your inbox by 8 AM.",
          inputs: ["CRM/Ticketing", "Dialer Logs", "Payment Gateways"],
          actions: ["Aggregate overnight data", "Calculate WoW growth", "Flag SLA breaches"],
          outputs: ["Auto-emailed PDF/Excel", "Slack Summary", "Exception List"],
        },
        {
          icon: Bell,
          name: "Noise-Canceling Alert Bot",
          oneLiner: "Pages you only when money is at risk. Ignores the rest.",
          inputs: ["System Health", "Business KPIs", "Thresholds"],
          actions: ["Filter noise", "Correlate symptoms", "Suggest root cause"],
          outputs: ["High-Fidelity Alerts", "Incident Context", "One-Click Fixes"],
        },
        {
          icon: Calendar,
          name: "Demand Forecasting Agent",
          oneLiner: "Predicts volume spikes so you don't overhire or underdeliver.",
          inputs: ["Historical Volume", "Seasonality Trends", "Marketing Calendar"],
          actions: ["Model capacity needs", "Simulate shock scenarios", "Optimize scheduling"],
          outputs: ["Staffing Plan", "Budget Forecast", "Capacity Risk Flags"],
        },
        {
          icon: Timer,
          name: "SLA Enforcer",
          oneLiner: "Chases your team for you. Nudges tickets *before* they breach.",
          inputs: ["Support Queue", "Order Fulfillment", "TAT Targets"],
          actions: ["Monitor countdowns", "Auto-escalate", "Nudge owners via Slack"],
          outputs: ["99% SLA Adherence", "Reduced Churn", "Happy Customers"],
        },
      ],
    },
    {
      title: "Tech Stability (Risk Reduction)",
      color: "from-secondary to-primary",
      description: "Make your tech stack boringly reliable. Less firefighting, more building.",
      agents: [
        {
          icon: Rocket,
          name: "Release Guardian",
          oneLiner: "Prevents bad code from breaking revenue flows.",
          inputs: ["CI/CD Pipeline", "Test Suites", "Error Rates"],
          actions: ["Canary deployment checks", "Auto-rollback on error spike", "Verify core flows"],
          outputs: ["Safe Releases", "0 Downtime Deployments", "Sleep-Filled Nights"],
        },
        {
          icon: Wrench,
          name: "Boilerplate Builder",
          oneLiner: "Spins up standardized, secure microservices in minutes.",
          inputs: ["Service Specs", "Security Policies"],
          actions: ["Generate repo structure", "Configure CI/CD", "Inject auth middleware"],
          outputs: ["Ready-to-Code Repos", "Standardized Architecture", "Faster Time-to-Market"],
        },
      ],
    },
    {
      title: "Strategic Clarity (Financial Outcomes)",
      color: "from-primary to-secondary",
      description: "Simulate decisions before you make them. CFO-level power in a bot.",
      agents: [
        {
          icon: DollarSign,
          name: "Unit Economics Simulator",
          oneLiner: "Live LTV/CAC modeling. Know exactly when to step on the gas.",
          inputs: ["Ad Spend", "Churn Rate", "Expansion Revenue"],
          actions: ["Calculate repayment periods", "Simulate pricing changes", "Cohort analysis"],
          outputs: ["Live Unit Economics Model", "Breakeven Alerts", "Growth Levers"],
        },
        {
          icon: Zap,
          name: "Efficiency Hunter",
          oneLiner: "Finds process waste and recommends exactly what to automate next.",
          inputs: ["Time Tracking", "Process Maps", "Error Logs"],
          actions: ["Identify bottlenecks", "Quantify manual toil", "Estimate ROI of automation"],
          outputs: ["Automation Roadmap", "Cost-Savings Leaderboard", "Efficiency Score"],
        },
      ],
    },
  ];

  const faqs = [
    {
      question: "How do you define 'outcome' and acceptance?",
      answer: "We don't bill for effort. We bill for results. Each agent has specific success criteria (e.g., 'Reduce Invoice Processing time by 80%' or 'Achieve 99% Data Accuracy'). You sign off on the Proof of Concept before full implementation billing kicks in.",
    },
    {
      question: "Can we start small (The Wedge)?",
      answer: "Yes. In fact, we insist on it. We start with a low-risk 'Sprint' or 'Audit' to prove value on a specific pain point. Only after you see the ROI do we discuss scaling to a full system.",
    },
    {
      question: "Do I need a technical team to manage this?",
      answer: "No. That's our job. We offer 'Managed AI Operations' where we act as your backend intelligence team, keeping the agents running, optimizing prompts, and handling any API changes.",
    },
    {
      question: "What if the agent makes a mistake?",
      answer: "Our agents are designed with 'Human-in-the-Loop' guardrails for critical decisions. High-confidence actions are automated; low-confidence ones are flagged for human review. We prioritize safety and accuracy over raw speed.",
    },
    {
      question: "Do you own the code or do we?",
      answer: "You do. Unlike SaaS where you rent the software, we build *your* intellectual property. Upon completion, you own the code, the agents, and the workflows. No vendor lock-in.",
    },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen w-full">
        <Navigation />

        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
                <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                  Automated Systems for <br />
                  <span className="gradient-text">Margin & Revenue</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We don't just "do data." We build autonomous agents that protect your P&L,
                  accelerate operations, and eliminate expensive manual grunt work.
                </p>
                <div className="pt-8 flex flex-wrap gap-4 justify-center">
                  <Button
                    size="lg"
                    className="gradient-primary text-white font-semibold shadow-glow"
                    onClick={() => openContactForm("Get Your Data Hygiene Audit")}
                  >
                    Get Your Data Audit (The Wedge)
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                  <Link to="/pricing">
                    <Button size="lg" variant="outline" className="font-semibold">
                      View Outcome Pricing
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Agent Categories */}
          {agentCategories.map((category, catIdx) => (
            <section key={catIdx} className={catIdx % 2 === 0 ? "py-20" : "py-20 bg-muted/30"}>
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="mb-12 animate-fade-up">
                    <h2 className="text-3xl font-heading font-bold mb-2">
                      <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.title}
                      </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">{category.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
                    {category.agents.map((agent, agentIdx) => (
                      <div key={agentIdx} className="glass rounded-2xl p-6 hover-lift border-2 border-transparent hover:border-primary/10 transition-all">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                            <agent.icon className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-heading font-semibold mb-1">
                              {agent.name}
                            </h3>
                            <p className="text-sm text-foreground/80 leading-snug">
                              {agent.oneLiner}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 text-sm mt-6 bg-background/50 p-4 rounded-lg">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <div className="col-span-1 border-r border-border/50 pr-2">
                              <p className="font-bold text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Reads From</p>
                              <div className="flex flex-wrap gap-1">
                                {agent.inputs.slice(0, 2).map((i, x) => (<span key={x} className="bg-primary/5 text-primary-dark text-xs px-1.5 py-0.5 rounded">{i}</span>))}
                              </div>
                            </div>
                            <div className="col-span-2 pl-2">
                              <p className="font-bold text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Delivers Outcome</p>
                              <ul className="space-y-1">
                                {agent.outputs.slice(0, 2).map((o, x) => (
                                  <li key={x} className="flex items-start text-xs">
                                    <CheckCircle2 size={10} className="text-green-600 mr-1 mt-0.5" />
                                    <span>{o}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border flex justify-end">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:text-primary-dark group-hover:translate-x-1 transition-transform"
                            onClick={() => openContactForm(`Interested in ${agent.name}`)}
                          >
                            Deploy This Agent <ArrowRight size={14} className="ml-1" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Approach CTA - Replaced "Approach Preview" with strong value prop */}
          <section className="py-24 bg-primary text-primary-foreground text-center">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Stop Paying for "Effort". Start Paying for Outcomes.
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Traditional consultants bill by the hour. We bill by the milestone.
                If the system doesn't work, you don't pay for the build.
              </p>
              <Button size="lg" variant="secondary" className="font-semibold text-lg hover-lift" onClick={() => openContactForm("Discuss Outcome Pricing")}>
                See Our Guarantee
              </Button>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-center mb-12 animate-fade-up">
                  Common Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
                  {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="glass rounded-xl px-6 border hover:border-primary/20 transition-colors">
                      <AccordionTrigger className="text-left font-semibold text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

        </main>

        <ContactForm
          open={isContactFormOpen}
          onOpenChange={setIsContactFormOpen}
          defaultSubject={contactSubject}
        />

        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Solutions;
