# Page: Security
**Route**: `/security`

## Content Source
```tsx
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Key, FileCheck, Server, CheckCircle2, Download } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Security = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const securityFeatures = [
    {
      icon: Shield,
      title: "Least Privilege & Separation of Duties",
      description: "Access is scoped, reviewed, and time-bound with minimum needed privileges.",
    },
    {
      icon: Lock,
      title: "Encryption",
      description: "AES (128/192/256) at rest; TLS 1.2+ in transit with TLS 1.3 roadmap.",
    },
    {
      icon: Eye,
      title: "Privacy & Minimization",
      description: "Collect/process only what's needed; prefer tokenization/redaction.",
    },
    {
      icon: FileCheck,
      title: "AppSec",
      description: "Build & test against OWASP ASVS controls with shift-left security in CI.",
    },
    {
      icon: Server,
      title: "Auditability",
      description: "Comprehensive audit trails, access logs, and break-glass procedures.",
    },
    {
      icon: CheckCircle2,
      title: "Compliance Alignment",
      description: "SOC 2 Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, Privacy.",
    },
  ];

  const dataHandling = [
    {
      title: "PII Strategy",
      points: [
        "Default to minimization",
        "Pseudonymize where feasible",
        "Manage secrets via KMS/Secret Manager",
        "Rotate keys regularly",
      ],
    },
    {
      title: "Storage & Transit",
      points: [
        "AES at rest",
        "TLS 1.2+ in transit",
        "Migration track to TLS 1.3",
        "FIPS-compliant cipher suites",
      ],
    },
    {
      title: "Residency & Isolation",
      points: [
        "Per-customer isolation",
        "BYO-VPC option when required",
        "Data residency options",
        "NIST CSF alignment",
      ],
    },
  ];

  const benefits = [
    {
      title: "Lower Risk",
      description: "Measurable risk reduction through least-privilege design and strong cryptography.",
      icon: Shield,
    },
    {
      title: "Faster, Safer Change",
      description: "SLO-aware alerting and canary releases ensure safe deployments.",
      icon: Lock,
    },
    {
      title: "Easier Audits",
      description: "SOC 2-aligned controls and OWASP ASVS coverage simplify compliance.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 shadow-glow">
                <Shield className="text-primary" size={16} />
                <span className="text-sm font-semibold gradient-text">
                  Responsible AI • Outcome First • Data Safeguard First
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold">
                <span className="gradient-text">Security</span> by Design
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Enterprise-grade security, privacy-first architecture, and compliance-ready controls
                for safe, responsible AI.
              </p>

            </div>
          </div>
        </section>

        {/* Security Layer PDF */}
        <section className="py-12 bg-white border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <p className="text-xs uppercase tracking-[0.6em] text-muted-foreground">Security Layer PDF</p>
              <h2 className="text-3xl font-heading font-bold">
                Secure AI Middleware by DOTS.ai
              </h2>
              <p className="text-sm text-muted-foreground">
                This brief is built from the “Security by Design” narrative: it packs the posture-at-a-glance view, data handling policies (PII strategy, encryption, residency), identity & access controls, reliability practices, and the high-impact outcomes you can expect (lower risk, faster/safer change, easier audits).
              </p>
              <p className="text-sm text-muted-foreground">
                DOTS.ai runs outside your systems, talking only through APIs/webhooks, so no sensitive data leaves your perimeter. Every agent (Infinity CRM, Data, Ops, Tech, Strategy) operates with read-only signals and transmits metadata-only summaries.
              </p>
              <div className="inline-flex justify-center mt-6">
                <a
                  href="/ZeroOne_Security_Layer.pdf"
                  download="ZeroOne_Security_Layer.pdf"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white shadow-[0_12px_36px_rgba(108,69,226,0.35)] bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-400 hover:to-cyan-300 transition-all"
                >
                  <Download size={18} />
                  Download our Security Layer PDF
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Security Posture */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <h2 className="text-4xl font-heading font-bold mb-4">
                  Security Posture <span className="gradient-text">at a Glance</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
                {securityFeatures.map((feature, idx) => (
                  <div key={idx} className="glass rounded-2xl p-6 hover-lift">
                    <feature.icon className="text-primary mb-4" size={32} />
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Handling */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <h2 className="text-4xl font-heading font-bold mb-4">
                  Data <span className="gradient-text">Handling</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
                {dataHandling.map((section, idx) => (
                  <div key={idx} className="glass rounded-2xl p-6">
                    <h3 className="text-xl font-heading font-semibold mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex items-start text-sm">
                          <CheckCircle2 size={14} className="text-secondary mr-2 flex-shrink-0 mt-1" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Identity & Access, Reliability, Development */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="glass rounded-2xl p-8 animate-fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <Key className="text-primary" size={28} />
                  <h3 className="text-2xl font-heading font-bold">Identity & Access</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-secondary mr-3 flex-shrink-0 mt-1" />
                    <span><strong>RBAC & short-lived credentials:</strong> Enforce least privilege; automatic expiry; periodic reviews.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-secondary mr-3 flex-shrink-0 mt-1" />
                    <span><strong>SSO & MFA:</strong> Strong authentication for admin and data-path roles.</span>
                  </li>
                </ul>
              </div>

              <div className="glass rounded-2xl p-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Server className="text-primary" size={28} />
                  <h3 className="text-2xl font-heading font-bold">Reliability & Operations</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-secondary mr-3 flex-shrink-0 mt-1" />
                    <span><strong>SLOs & error budgets:</strong> Alert on multi-window burn-rate policies tied to user impact.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-secondary mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Change safety:</strong> Canary/blue-green deployments with automatic rollback on SLO breach.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-secondary mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Incident response:</strong> Runbooks, post-incident reviews, and captured learnings.</span>
                  </li>
                </ul>
              </div>

              <div className="glass rounded-2xl p-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="text-primary" size={28} />
                  <h3 className="text-2xl font-heading font-bold">Development Lifecycle</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-secondary mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Secure defaults:</strong> Templates enforce security checks; CI pipelines block on security tests.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-secondary mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Secrets management:</strong> No secrets in code; centralized KMS/Secret Manager; audit and rotation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What This Means */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <h2 className="text-4xl font-heading font-bold mb-4">
                  What This Means <span className="gradient-text">for You</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="glass rounded-2xl p-8 text-center hover-lift">
                    <benefit.icon className="mx-auto mb-4 text-primary" size={40} />
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
              <h2 className="text-4xl font-heading font-bold">
                Ready to Build Securely?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss your security requirements and compliance needs.
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  className="gradient-primary text-white font-semibold shadow-glow"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Schedule a Security Review
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Schedule a Security Review"
      />

      <Footer />
    </div>
  );
};

export default Security;
```
