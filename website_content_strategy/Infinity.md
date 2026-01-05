# Page: Infinity CRM
**Route**: `/infinity-crm`

## Content Source
```tsx
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
const agentCards = [
  {
    title: "DOTS.ai Infinity CRM",
    description:
      "An AI-first CRM layer that sits above your tools, giving a unified, action-ready view of customers, leads, and workflows.",
  },
  {
    title: "Data Agent",
    description:
      "Connects to your databases, dashboards, and APIs to answer questions and trigger data workflows.",
  },
  {
    title: "Ops Agent",
    description:
      "Understands your operations (calls, visits, tickets, SLAs) and automates follow-ups, escalations, and reminders.",
  },
  {
    title: "Tech Agent",
    description:
      "Talks to your tech stack, APIs, and tools to orchestrate automations and integrations.",
  },
  {
    title: "Strategy Agent",
    description:
      "Turns your data and operations into strategic insights, playbooks, and next best actions for teams.",
  },
];

const processSteps = [
  {
    title: "Discover your stack & opportunities",
    text: "We map your tools, data sources, and workflows, then identify where AI agents and automation create real ROI.",
  },
  {
    title: "Design the DOTS.ai middleware layer",
    text: "Infinity CRM plus Data, Ops, Tech, and Strategy agents are positioned between your systems and teams.",
  },
  {
    title: "Implement agents & automations",
    text: "We connect APIs, build middle-layer logic, and set up agents that your team can rely on.",
  },
  {
    title: "Measure, iterate, and scale",
    text: "We track operational, revenue, and productivity impact, then expand the layer to more teams.",
  },
];

const beforeAfter = [
  {
    before: "Ops team manually pulls reports from CRM and Excel, then writes updates and follow-ups by hand.",
    after: "Ops Agent reads events, auto-prioritises leads, and serves ready-to-act views inside Infinity CRM.",
  },
  {
    before: "Leadership waits for weekly decks to see performance.",
    after: "Strategy Agent answers questions like “What changed in growth this week by cohort?” directly from your data.",
  },
  {
    before: "D2C brand manually copies customer signals between ads, support, and the CRM.",
    after: "Strategy Agent syncs Infinity CRM with your D2C stack and delivers instant insights + automations.",
  },
];

const whoTiles = [
  { title: "B2B & B2C marketplaces", text: "Bring real-time guidance to operations and risk management." },
  { title: "Fintech & D2C CRMs", text: "Orchestrate sellers, buyers, and support with agent-driven actions." },
  { title: "Ops-heavy businesses", text: "Give operations clarity via AI without replacing their existing tools." },
  { title: "Any team with APIs, data, and tools", text: "Layer DOTS.ai agents on top of your stack and unlock automation instantly." },
];

const faqItems = [
  {
    question: "Do you need direct access to all our raw data?",
    answer:
      "No. We can operate with summary data, anonymised datasets, or only via your APIs and existing tools without storing anything sensitive.",
  },
  {
    question: "Will we have to replace our CRM or core systems?",
    answer: "No. DOTS.ai sits on top of your existing stack; we do not replace your tools, we augment them via middleware agents.",
  },
  {
    question: "How long does it take to see value?",
    answer:
      "Most clients see their first DOTS.ai agents in production within weeks, starting with a focused use-case that proves ROI quickly.",
  },
  {
    question: "Can we start only with automation agents?",
    answer: "Yes. You can begin with purely middle-layer automation (Ops Agent / Tech Agent) without exposing AI directly to end users.",
  },
];

const Infinity = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState("Talk to DOTS.ai");

  const openContactForm = (subject: string) => {
    setContactSubject(subject);
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      <Navigation />

      <main>
        <section className="pt-32 px-4 pb-10">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.5em] text-muted-foreground">ZeroOne DOTS.ai</p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
                Plug DOTS.ai into your existing stack – not the other way around.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We add an AI middleware layer on top of your current tools and APIs, so your teams and clients can use AI
                agents without rebuilding anything. Infinity CRM pulls from warehouses, CRMs, helpdesks, analytics tools,
                dialers, and other stack signals through DOTS.ai middleware to deliver the right actions to the people
                who need them.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="gradient-primary text-white"
                  onClick={() => openContactForm("See DOTS.ai middleware flow")}
                >
                  See how the middleware works
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => openContactForm("Book a DOTS.ai discovery call")}
                >
                  Book a DOTS.ai discovery call
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-white shadow-[0_25px_45px_rgba(15,23,42,0.12)] p-6 flex flex-col gap-6 min-h-[620px]">
              <div className="space-y-4">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.5em]">
                  Your stack & APIs
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Warehouses & DBs", icon: "🗄️" },
                    { label: "Cloud Platforms", icon: "☁️" },
                    { label: "CRMs", icon: "📋" },
                    { label: "Dialers & IVR", icon: "📞" },
                    { label: "Helpdesks", icon: "🎧" },
                    { label: "Analytics Tools", icon: "📊" },
                  ].map((tool) => (
                    <div
                      key={tool.label}
                      className="flex items-center gap-2 rounded-full border border-primary/20 px-3 py-2 text-sm text-foreground hover:border-primary transition-all"
                    >
                      <span className="text-base">{tool.icon}</span>
                      <span>{tool.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-px h-8 bg-gradient-to-b from-primary to-secondary" />
              </div>
              <div className="rounded-3xl border border-primary/40 p-4 bg-gradient-to-b from-purple-500/20 to-cyan-400/30 text-white space-y-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em]">DOTS.ai middleware</p>
                  <p className="text-xs text-white/80">Agents that sit on top of your stack</p>
                </div>
                <div className="space-y-2">
                  {[
                    { title: "Infinity CRM", copy: "Unified, action-ready customer layer." },
                    { title: "Data Agent", copy: "Answers questions from warehouses & APIs." },
                    { title: "Ops Agent", copy: "Automates follow-ups and SLA nudges." },
                    { title: "Tech Agent", copy: "Orchestrates automations and integrations." },
                    { title: "Strategy Agent", copy: "Surfaced insights and next actions." },
                  ].map((agent) => (
                    <div
                      key={agent.title}
                      className="flex items-start gap-3 rounded-2xl bg-white bg-opacity-90 px-3 py-2"
                    >
                      <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold text-sm">
                        {agent.title[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{agent.title}</p>
                        <p className="text-xs text-muted-foreground">{agent.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-px h-8 bg-gradient-to-b from-primary to-secondary" />
              </div>
              <div className="space-y-3">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.5em]">
                  Your teams & clients
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Your Stack Again" },
                    { label: "Internal users (Ops, Sales, Product)" },
                    { label: "Leadership (CXOs, Strategy)" },
                    { label: "Selected clients" },
                  ].map((item) => (
                    <span
                      key={item.label}
                      className="px-3 py-2 rounded-full border border-primary/30 bg-white/60 text-xs font-semibold text-foreground"
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Infinity CRM exposes the right views and actions to the right people — without changing your existing tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="container mx-auto max-w-6xl space-y-10">
            <div className="text-center space-y-3">
              <p className="text-sm uppercase tracking-[0.5em] text-muted-foreground">How it works</p>
              <h2 className="text-4xl font-heading font-bold">How DOTS.ai sits in your world</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                ZeroOne DOTS.ai is a consulting + AI middleware layer that orchestrates intelligence between your stack and
                your people. We bring AI Masters to handle your data with ethics and security.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Your existing stack & APIs</h3>
                <p className="text-muted-foreground text-sm">
                  Core systems you already use: CRM, ERP, data warehouse, call center tools, marketing tools,
                  internal APIs.
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  {["Core Product / App", "CRM / Ticketing", "Data Warehouse / Database", "Internal / External APIs"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">DOTS.ai as your AI Middleware</h3>
                <p className="text-sm text-muted-foreground">
                  A layer of agents that talk to your stack and expose intelligence to the right people.
                </p>
                <div className="space-y-3">
                  {agentCards.map((agent) => (
                    <div key={agent.title} className="border border-border rounded-2xl p-4 bg-gray-50">
                      <div className="text-lg font-semibold">{agent.title}</div>
                      <p className="text-sm text-muted-foreground">{agent.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Who actually uses DOTS.ai</h3>
                {["Your internal users", "Your leadership", "Your clients"].map((title) => (
                  <div key={title} className="rounded-2xl border border-border bg-gradient-to-br from-white to-primary/5 p-4">
                    <p className="font-semibold">{title}</p>
                    <p className="text-xs text-muted-foreground">
                      {title === "Your internal users"
                        ? "operations, sales, product, tech teams"
                        : title === "Your leadership"
                          ? "CXOs, founders, strategy"
                          : "selected use-cases where you expose AI insights to clients"}
                    </p>
                  </div>
                ))}
                <p className="text-sm text-muted-foreground mt-3">
                  Company Stack → DOTS.ai Middleware → Internal Users + Clients
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button
                size="md"
                variant="ghost"
                className="text-primary hover:text-secondary"
                onClick={() => openContactForm("Schedule Infinity CRM review")}
              >
                Schedule Infinity CRM review
              </Button>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-gradient-to-br from-primary/5 to-white">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 border border-primary/20 rounded-full px-4 py-2 mx-auto mb-4">
              <ShieldCheck className="text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.4em]">No PII</span>
            </div>
            <h2 className="text-3xl font-heading font-bold mb-3">No PII or sensitive data required</h2>
            <p className="text-muted-foreground mb-8">
              DOTS.ai is designed to work safely with your existing systems. We don’t need to store PII or sensitive records.
              For many use-cases we work with summary or aggregated data. For others, we only trigger automations without
              exporting raw data.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  heading: "No PII data sharing needed",
                  copy: "We respect your data boundaries and compliance requirements.",
                },
                {
                  heading: "No sensitive data needed",
                  copy: "Keep customer details inside your own environment and tools.",
                },
                {
                  heading: "Summary data or pure automation",
                  copy: "Work with summary metrics, anonymised signals, or just run middle-layer automation.",
                },
              ].map((card) => (
                <div key={card.heading} className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-2">
                  <p className="font-semibold">{card.heading}</p>
                  <p className="text-sm text-muted-foreground">{card.copy}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button
                size="md"
                variant="outline"
                className="text-primary border-primary"
                onClick={() => openContactForm("Talk about safe data for DOTS.ai")}
              >
                Talk about safe data
              </Button>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="container mx-auto max-w-6xl space-y-8">
            <div className="text-center space-y-3">
              <p className="text-sm uppercase tracking-[0.5em] text-muted-foreground">Consulting + Build</p>
              <h2 className="text-3xl font-heading font-bold">Consulting + AI Middleware Implementation</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We don’t sell yet another SaaS. We realize AI inside your stack via the DOTS.ai middle layer,
                built by AI Masters who prioritize security and credibility.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {processSteps.map((step, idx) => (
                <div key={step.title} className="rounded-2xl border border-border p-6 bg-gradient-to-br from-white to-primary/5">
                  <div className="text-xs font-semibold text-primary mb-2">Step {idx + 1}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-muted/30">
          <div className="container mx-auto max-w-5xl space-y-8">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Before & after</p>
              <h2 className="text-3xl font-heading font-bold">Example stories</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {beforeAfter.map((example, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-6 border border-border space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Before DOTS.ai</p>
                    <p className="text-sm text-foreground">{example.before}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">After DOTS.ai</p>
                    <p className="text-sm text-foreground">{example.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="container mx-auto max-w-5xl space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Tailored for</p>
              <h2 className="text-3xl font-heading font-bold">Who is DOTS.ai for?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {whoTiles.map((tile) => (
                <div key={tile.title} className="rounded-2xl border border-border p-6 bg-gradient-to-br from-primary/5 to-white">
                  <h3 className="font-semibold text-xl">{tile.title}</h3>
                  <p className="text-sm text-muted-foreground">{tile.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-gradient-to-br from-primary/5 to-white">
          <div className="container mx-auto max-w-5xl space-y-6">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">FAQ</p>
              <h2 className="text-3xl font-heading font-bold">Data & integration questions</h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-border bg-white p-4 open:ring-2 open:ring-primary/50">
                  <summary className="flex items-center justify-between font-semibold cursor-pointer">
                    {faq.question}
                    <span className="text-primary">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center space-y-4 shadow-xl">
              <p className="text-xl font-semibold">Want AI agents on top of your existing stack – without sharing PII?</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  size="lg"
                  className="gradient-primary text-white px-8"
                  onClick={() => openContactForm("Talk to DOTS.ai")}
                >
                  Talk to DOTS.ai
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => openContactForm("Request architecture sample")}
                >
                  See architecture sample
                </Button>
              </div>
            </div>
          </div>
        </section>
        <ContactForm
          open={isContactFormOpen}
          onOpenChange={setIsContactFormOpen}
          defaultSubject={contactSubject}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Infinity;
```
