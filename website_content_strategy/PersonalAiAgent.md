# Page: PersonalAiAgent
**Route**: `/personal-ai-agent`

## Content Source
```tsx
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    CheckCircle2,
    Hammer,
    Wrench,
    HardHat,
    DraftingCompass,
    ShieldCheck,
    Zap,
    Users,
    ArrowRight,
    Lock
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { logEvent } from "@/lib/analytics";

const PersonalAiAgent = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [contactSubject, setContactSubject] = useState("Join the 4-Week Sprint");

    const openContactForm = (subject: string) => {
        logEvent("PersonalAiAgent", "Click Contact", subject);
        setContactSubject(subject);
        setIsContactFormOpen(true);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero Section (The Hook) */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden text-center">
                {/* Blueprint grid background effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
                    >
                        <DraftingCompass size={16} />
                        <span className="font-semibold text-sm tracking-wide uppercase">Nuanced. Private. Yours.</span>
                    </motion.div>

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        Learn to Build Your Own <br />
                        <span className="text-primary">Personal AI Agent</span>
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        Pay once for the skill, benefit for a lifetime. <br />
                        A <span className="font-bold text-foreground">4-week sprint</span> to 10X your career.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            size="lg"
                            className="gradient-primary text-white text-lg h-14 px-10 shadow-lg hover:shadow-primary/25 transition-all rounded-full min-w-[240px]"
                            onClick={() => openContactForm("Start Building - Hero")}
                        >
                            Start Building Now
                            <Hammer className="ml-2" size={18} />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* The "Why You Build It" Section (The Logic) */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                            Why Generic AI Fails High-Level Careers
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            ChatGPT doesn't know your context. It doesn't know your history. <br />
                            To truly scale yourself, you need to build the tool yourself.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Nuance */}
                        <Card className="border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-all">
                            <CardHeader>
                                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-600">
                                    <DraftingCompass size={32} />
                                </div>
                                <CardTitle className="text-xl font-bold">Nuance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    Train your agent on <span className="font-semibold text-foreground">YOUR specific data</span> and decision-making style. It doesn't guess; it replicates your best thinking.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Speed */}
                        <Card className="border-t-4 border-t-green-500 shadow-sm hover:shadow-md transition-all">
                            <CardHeader>
                                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 text-green-600">
                                    <Zap size={32} />
                                </div>
                                <CardTitle className="text-xl font-bold">Speed</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    Stop tinkering with tutorials. Our sprint is designed for outcome. See tangible, working results in <span className="font-semibold text-foreground">Month 1. Guaranteed.</span>
                                </p>
                            </CardContent>
                        </Card>

                        {/* Ownership */}
                        <Card className="border-t-4 border-t-purple-500 shadow-sm hover:shadow-md transition-all">
                            <CardHeader>
                                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 text-purple-600">
                                    <Lock size={32} />
                                </div>
                                <CardTitle className="text-xl font-bold">Ownership</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    You keep the IP. You own the code. The agent works for you <span className="font-semibold text-foreground">forever</span>, on your private infrastructure.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* The "Community" Section (The Upsell) */}
            <section className="py-24 px-4 bg-background">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent text-sm font-bold tracking-wide uppercase">
                                <Users size={14} /> The Elite Network
                            </div>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold">
                                The ZeroOne <span className="text-primary">100X Community</span>
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Building is just the start. Staying ahead is the journey.
                                Join an elite group of professionals leveraging AI to multiply their output.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Stay updated on the latest AI tools & models",
                                    "Copy advanced agent workflows from peers",
                                    "Network with other 10x performers",
                                    "Direct access to ZeroOne architects"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg">
                                        <CheckCircle2 size={24} className="text-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative">
                            {/* Abstract Visualization of Network */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />
                            <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">SD</div>
                                        <div>
                                            <div className="font-bold text-sm">Sidhharth D. just shared a workflow</div>
                                            <div className="text-xs text-muted-foreground">"Automated my entire morning briefing..."</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50 translate-x-4">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">DP</div>
                                        <div>
                                            <div className="font-bold text-sm">Dhaval P. updated Agent "SalesBot"</div>
                                            <div className="text-xs text-muted-foreground">"Now handling objection handling automatically."</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
                                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">KH</div>
                                        <div>
                                            <div className="font-bold text-sm">Keval H. asked a question</div>
                                            <div className="text-xs text-muted-foreground">"Best vector DB for legal documents?"</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 px-4 bg-muted/30">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Start Building. Keep Growing.</h2>
                        <p className="text-muted-foreground text-xl">Choose your entry point.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Monthly Mentorship */}
                        <Card className="flex flex-col h-full border-2 hover:border-primary/50 transition-all">
                            <CardHeader className="text-center pb-2">
                                <CardTitle className="text-2xl font-bold">Monthly Mentorship</CardTitle>
                                <CardDescription className="text-base mt-2">Focus: <span className="font-semibold text-foreground">Start Building</span></CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col h-full pt-6">
                                <div className="text-center mb-8">
                                    <div className="text-5xl font-bold">₹9,999<span className="text-xl font-normal text-muted-foreground">/mo</span></div>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {[
                                        "Intensive 4-Week Sprint curriculum",
                                        "Weekly live coaching calls",
                                        "Access to base agent templates",
                                        "Month-1 Money Back Guarantee"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className="w-full h-12 text-lg"
                                    variant="outline"
                                    onClick={() => openContactForm("Monthly Mentorship - Start Building")}
                                >
                                    Start Monthly
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Yearly Community */}
                        <Card className="flex flex-col h-full border-2 border-primary shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                                BEST FOR LONG-TERM GROWTH
                            </div>
                            <CardHeader className="text-center pb-2">
                                <CardTitle className="text-2xl font-bold">Yearly Community</CardTitle>
                                <CardDescription className="text-base mt-2">Focus: <span className="font-semibold text-foreground">Keep Growing</span></CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col h-full pt-6">
                                <div className="text-center mb-8">
                                    <div className="text-muted-foreground line-through text-lg mb-1">₹119,988</div>
                                    <div className="text-5xl font-bold text-primary">₹83,990<span className="text-xl font-normal text-muted-foreground">/yr</span></div>
                                    <div className="text-sm font-bold text-green-600 mt-2 bg-green-500/10 inline-block px-3 py-1 rounded-full">
                                        SAVE 30%
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {[
                                        "Everything in Monthly Mentorship",
                                        "Full Year of 100X Community Access",
                                        "Advanced Workflow Library",
                                        "Priority Architectural Review",
                                        "Peer Networking Events"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className="w-full h-12 text-lg gradient-primary text-white"
                                    onClick={() => openContactForm("Yearly Community - Keep Growing")}
                                >
                                    Join Yearly & Save
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Risk Reversal */}
            <section className="py-24 px-4 bg-background border-t border-border/50">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 text-green-600 mb-8 border border-green-500/20">
                        <ShieldCheck size={40} />
                    </div>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                        The Month-1 Guarantee
                    </h2>
                    <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                        If you don't have a working AI Agent by <span className="font-bold text-foreground">Day 30</span>,
                        we will issue a <span className="text-primary font-bold">100% Refund</span>.
                    </p>
                    <div className="mt-12">
                        <Button
                            size="lg"
                            className="gradient-primary text-white text-lg h-14 px-12 shadow-glow rounded-full"
                            onClick={() => openContactForm("Claim Guarantee Offer")}
                        >
                            Build Risk-Free
                            <ArrowRight className="ml-2" size={20} />
                        </Button>
                    </div>
                </div>
            </section>

            <ContactForm
                open={isContactFormOpen}
                onOpenChange={setIsContactFormOpen}
                defaultSubject={contactSubject}
                messageLabel="What process do you want to automate first?"
                messagePlaceholder="E.g., Sorting my emails, summarizing daily news, analyzing sales reports..."
            />
            <Footer />
        </div>
    );
};

export default PersonalAiAgent;
```
