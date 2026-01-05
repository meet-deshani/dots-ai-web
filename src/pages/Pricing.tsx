import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

const Pricing = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState("Start a Discovery");

  const openContactForm = (subject: string) => {
    setContactSubject(subject);
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            Stop the <span className="text-secondary">Margin Leakage</span>.
            <br />
            Start the <span className="gradient-text">Acceleration</span>.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            No complex SQL. No technical debt. Just analytical sense delivered via tools that pay for themselves in months, not years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-100">
            <Button
              size="lg"
              className="gradient-primary text-white text-lg px-8 shadow-glow hover:scale-105 transition-transform"
              onClick={() => openContactForm("Get Strategic Growth Blueprint")}
            >
              Get Your Blueprint
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8"
              onClick={() => openContactForm("Book a Sprint")}
            >
              Book 5-Day Sprint
            </Button>
          </div>
        </div>
      </section>

      {/* Price of Inaction Box */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <AlertTriangle size={120} className="text-destructive" />
            </div>
            <h3 className="text-2xl font-bold text-destructive mb-8 relative z-10 flex items-center justify-center gap-2 text-center">
              <AlertTriangle size={24} />
              The Price of Inaction: Choose Your Pain
            </h3>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {/* Scenario 1: D2C RTO */}
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-destructive/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📦</span>
                  <h4 className="text-lg font-bold">The "RTO Margin Bleed"</h4>
                  <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground ml-auto">D2C E-Commerce</span>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-destructive mb-1">The Scenario:</p>
                    <p className="text-muted-foreground">Processing 1,000 orders/mo with 15% RTO because of no risk flagging.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-destructive mb-1">Cost of Waiting:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>~$20 loss per failed order</li>
                      <li><span className="font-bold text-foreground">$3,000/mo</span> direct cash burn</li>
                      <li>Inventory tied up in transit</li>
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="font-semibold text-green-600 mb-1">Automation ROI:</p>
                    <p className="text-muted-foreground">Predictive Guard cuts RTO by 50%. <span className="font-bold text-foreground">Payback in 4 months.</span></p>
                  </div>
                </div>
              </div>

              {/* Scenario 2: High-Value Leads */}
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-destructive/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">⚖️</span>
                  <h4 className="text-lg font-bold">The "Missed Lead"</h4>
                  <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground ml-auto">Legal / High-Ticket</span>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-destructive mb-1">The Scenario:</p>
                    <p className="text-muted-foreground">Missing just 3 qualified leads/mo due to after-hours calls or slow response.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-destructive mb-1">Cost of Waiting:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Avg Client Value (LTV): $15,000</li>
                      <li><span className="font-bold text-foreground">$45,000/mo</span> walking to competitors</li>
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="font-semibold text-green-600 mb-1">Automation ROI:</p>
                    <p className="text-muted-foreground">24/7 AI Voice Intake ensures 0 leakage. <span className="font-bold text-foreground">Payback on 1st lead.</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* Tier 1: The Wedge */}
            <Card className="flex flex-col h-full border-2 hover:border-primary/50 transition-all hover-lift">
              <CardHeader>
                <div className="mb-2 text-sm font-semibold text-primary uppercase tracking-wider">Tier 1: The Wedge</div>
                <CardTitle className="text-2xl font-bold">Strategic Growth Blueprint</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground mt-2">
                  $2.5k - $3.5k <span className="text-base font-normal text-muted-foreground">/ one-time</span>
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  Low-risk entry. Diagnosis of "invisible" manual inefficiencies. 1 Week.
                </p>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Data Hygiene & Privacy Audit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Process Blueprint (Visual Map)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Custom ROI Roadmap</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => openContactForm("Strategic Growth Blueprint")}>
                  Start Blueprint
                </Button>
              </CardFooter>
            </Card>

            {/* Tier 2: The Sprint */}
            <Card className="flex flex-col h-full border-2 border-primary shadow-glow relative overflow-hidden transform md:-translate-y-4">
              <div className="absolute top-0 center w-full bg-primary text-white text-xs font-bold text-center py-1">
                POPULAR: TECHNICAL VALIDATION
              </div>
              <CardHeader className="pt-10">
                <div className="mb-2 text-sm font-semibold text-primary uppercase tracking-wider">Tier 2: The Sprint</div>
                <CardTitle className="text-2xl font-bold">5-Day Automation Sprint</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground mt-2">
                  $5,000 <span className="text-base font-normal text-muted-foreground">/ fixed</span>
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  Eliminate "Vaporware Fatigue". A functional prototype on actual data. 1 Sprint.
                </p>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Functional Prototype (Sandbox)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Zero-Knowledge Interface Integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Technical Proof of Concept</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gradient-primary text-white" onClick={() => openContactForm("Automation Sprint")}>
                  Book Sprint
                </Button>
              </CardFooter>
            </Card>

            {/* Tier 3: The Build */}
            <Card className="flex flex-col h-full border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="mb-2 text-sm font-semibold text-primary uppercase tracking-wider">Tier 3: The Build</div>
                <CardTitle className="text-2xl font-bold">Custom Analytics Transformation</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground mt-2">
                  From $15k <span className="text-base font-normal text-muted-foreground">/ project</span>
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  Full implementation of your MOAT. Revenue recovery & speed.
                </p>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Full Vertical Integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Secured Data Pipeline (RAG/SLM)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Training & 30-Day Support</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => openContactForm("Custom Build")}>
                  Discuss Build
                </Button>
              </CardFooter>
            </Card>

            {/* Tier 4: The Retainer */}
            <Card className="flex flex-col h-full border-2 hover:border-primary/50 transition-all bg-muted/20">
              <CardHeader>
                <div className="mb-2 text-sm font-semibold text-primary uppercase tracking-wider">Tier 4: The Retainer</div>
                <CardTitle className="text-2xl font-bold">Managed AI Operations</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground mt-2">
                  $3k - $5k <span className="text-base font-normal text-muted-foreground">/ month</span>
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  Recurring stability. We act as your "backend AI team".
                </p>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Model Performance Monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Continuous Optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span>Unlimited Priority Support</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => openContactForm("Managed Operations")}>
                  Partner With Us
                </Button>
              </CardFooter>
            </Card>

          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <ShieldCheck size={16} className="text-primary" />
              <strong>Strict SOW Policy:</strong> We provide rigid, clear deliverables. No nebulous "science projects".
            </p>
            <p className="flex items-center justify-center gap-2 mt-2">
              <Zap size={16} className="text-primary" />
              <strong>Note:</strong> All tiers include our proprietary "Zero-Knowledge Interface" (Talk to your Data).
            </p>
          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Common Questions</h2>
          <Accordion type="single" collapsible className="space-y-4 shadow-none">
            <AccordionItem value="item-1" className="bg-background rounded-lg border px-4">
              <AccordionTrigger className="text-left font-medium">
                Why start with an Audit (The Wedge)?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Buying complex AI solutions upfront is risky. The Audit (Wedge) is a low-cost "first date" where we uncover invisible inefficiencies and prove our value before you commit to a larger build.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-background rounded-lg border px-4">
              <AccordionTrigger className="text-left font-medium">
                What is the "Zero-Knowledge Interface"?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                It's our propriety layer that allows non-technical staff to query databases using natural language (Voice/Text) or Drag-and-Drop. No SQL knowledge required.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-background rounded-lg border px-4">
              <AccordionTrigger className="text-left font-medium">
                How fast is a "Sprint"?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Exactly 5 days (1 week). We scope it tightly to deliver a working Sandbox prototype that solves ONE specific pain point (e.g., Parsing Invoices or Lead Qualification).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-background rounded-lg border px-4">
              <AccordionTrigger className="text-left font-medium">
                Do you offer refunds?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our "Outcome-Based" philosophy means we define acceptance criteria upfront. For Build projects, billing often triggers only upon acceptance. For Audits/Sprints, we guarantee the agreed deliverables.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject={contactSubject}
      />

      <Footer />
    </div>
  );
};

export default Pricing;
