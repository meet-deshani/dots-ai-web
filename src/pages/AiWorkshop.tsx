import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Shield, Zap, Lightbulb, ChevronRight, Presentation, Laptop, FileText } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { logEvent } from "@/lib/analytics";

const AiWorkshop = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [contactSubject, setContactSubject] = useState("Book AI Workshop");

    const openContactForm = (subject: string) => {
        logEvent("AiWorkshop", "Click Contact", subject);
        setContactSubject(subject);
        setIsContactFormOpen(true);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const modules = [
        {
            icon: Presentation,
            title: "Simplicity & Ethics",
            desc: "Demystifying AI. We teach your team to handle AI securely and with credibility, removing fear and adding value."
        },
        {
            icon: Shield,
            title: "Privacy & Security",
            desc: "The Right Practice. Learn how to use AI power without ever sending company secrets to open systems."
        },
        {
            icon: Users,
            title: "Tailored Team Sessions",
            desc: "We spend 30-60 mins with each department (Sales, HR, Dev, etc.) to solve their specific bottlenecks."
        },
        {
            icon: Laptop,
            title: "The 100+ Tool Box",
            desc: "Access to a curated list of 100+ AI tools and wrappers that are ready to deploy for immediate efficiency."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6"
                    >
                        <Zap size={16} />
                        <span className="font-semibold text-sm">1-Day Corporate Transformation</span>
                    </motion.div>

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="font-heading text-5xl md:text-7xl font-bold mb-6"
                    >
                        AI Made IT <span className="text-primary">Easy</span>
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        Boost productivity, protect your data, and demystify AI.
                        We spend a day with your team to unlock efficiency without the complexity.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <Button
                            size="lg"
                            className="gradient-primary text-white text-lg h-14 px-10 shadow-lg hover:shadow-primary/25 transition-all rounded-full"
                            onClick={() => openContactForm("Book Workshop - Hero")}
                        >
                            Book Workshop - ₹9,999
                        </Button>
                        <p className="mt-4 text-sm text-muted-foreground">Limited slots available for in-person sessions.</p>
                    </motion.div>
                </div>
            </section>

            {/* The Problem / Value Prop */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold">
                                You know AI is the future. <br />
                                <span className="text-muted-foreground">But is your team ready?</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Most companies are stuck. They see the hype but don't know how to implement it safely.
                                Or worse, employees are secretly using unsafe tools that leak proprietary data.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our "AI Made IT Easy" workshop bridges the gap. We don't just lecture;
                                we sit down with your teams to find practical, safe, and immediate wins.
                            </p>

                            <ul className="space-y-3 mt-4">
                                {[
                                    "No technical background required",
                                    "Zero data sharing risks",
                                    "Immediate productivity boost",
                                    "Customized for YOUR industry"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-medium">
                                        <CheckCircle2 size={20} className="text-green-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {modules.map((mod, idx) => (
                                <Card key={idx} className="border-border/50 hover:border-primary/50 transition-all hover:shadow-md">
                                    <CardContent className="p-6">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                            <mod.icon size={24} />
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{mod.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {mod.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Section: Is it worth it? */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12">Is it actually worth it?</h2>

                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Lightbulb size={120} />
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 text-left relative z-10">
                            <div>
                                <h3 className="text-xl font-bold mb-4">The Investment</h3>
                                <div className="text-5xl font-black text-primary mb-2">₹9,999</div>
                                <p className="text-muted-foreground mb-6">One-time workshop fee for the whole office.</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Less than the cost of a single software license or a team lunch.
                                    A trivial investment for a permanent skill upgrade.
                                </p>
                            </div>
                            <div className="border-l border-border pl-0 md:pl-12">
                                <h3 className="text-xl font-bold mb-4">The Return</h3>
                                <div className="text-5xl font-black text-green-500 mb-2">10x+</div>
                                <p className="text-muted-foreground mb-6">In immediate efficiency gains.</p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <ChevronRight size={16} className="text-green-500" />
                                        Save 5-10 hours per employee/week
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ChevronRight size={16} className="text-green-500" />
                                        Automate repetitive reporting
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ChevronRight size={16} className="text-green-500" />
                                        Faster emails, faster queries, faster code
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA / Booking */}
            <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to empower your workforce?</h2>
                    <p className="text-xl opacity-90 mb-10">
                        Let's spend a day together. We'll bring the tools, the strategies, and the energy.
                        You bring the team.
                    </p>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="text-primary font-bold text-lg h-14 px-12 shadow-2xl hover:scale-105 transition-transform"
                        onClick={() => openContactForm("Book Workshop - Bottom CTA")}
                    >
                        Schedule Your Workshop
                    </Button>
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

export default AiWorkshop;
