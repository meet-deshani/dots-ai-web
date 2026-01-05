import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ShieldCheck,
    CheckCircle2
} from "lucide-react";
import { logEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";

const DigitalAuthority = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [formSubject, setFormSubject] = useState("Integrated Authority Inquiry");

    const openForm = (subject: string) => {
        logEvent("Digital Authority", "Click CTA", subject);
        setFormSubject(subject);
        setIsContactFormOpen(true);
    };

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="The Authority Audit - Fix Your AI Invisibility"
                description="Get your AI Presence Score (0-100). A 5-Day Diagnostic to ensure your brand is cited by ChatGPT, Perplexity, and Gemini. One-time fee: ₹25,000."
                keywords="AI Presence Score, Authority Audit, Generative Engine Optimization, Brand Visibility"
            />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 bg-background">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 mb-6 animate-fade-in">
                        <ShieldCheck size={16} />
                        <span className="font-semibold text-sm">Critical Warning: AI Discovery Gap</span>
                    </div>
                    <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                        If ChatGPT can't find you, <br />
                        <span className="text-primary">you don't exist.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in delay-100 leading-relaxed">
                        Search traffic is dying. 50% of your customers now ask AI for answers instead of Googling.
                        <br />
                        <strong>The Problem:</strong> You are invisible to these AI models.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-200">
                        <Button size="lg" className="gradient-primary text-white font-semibold h-14 px-8 text-lg shadow-glow" onClick={() => openForm("Hero - Buy Audit")}>
                            Get Your AI Visibility Score
                        </Button>
                    </div>
                </div>
            </section>

            {/* The Product: Concrete & Numbered */}
            <section className="py-20 px-4 bg-muted/20 border-y border-border">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Left: What You Get */}
                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                                The Product: <span className="text-primary">Authority Audit</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                We don't sell "consulting". We sell a <strong>5-Day Diagnostic</strong> that tells you exactly how AI sees your brand.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <span className="text-2xl font-bold text-blue-600">1</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">AI Presence Score (0-100)</h4>
                                        <p className="text-muted-foreground">A concrete metric measuring your visibility across ChatGPT, Perplexity, and Gemini.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                                        <span className="text-2xl font-bold text-purple-600">2</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">20-Page Strategy PDF</h4>
                                        <p className="text-muted-foreground">No fluff. A tactical report listing the exact "Knowledge Gaps" you need to fill to be cited by AI.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                        <span className="text-2xl font-bold text-green-600">3</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Competitor Trust Index</h4>
                                        <p className="text-muted-foreground">See exactly why AI recommends your competitors over you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: The Offer Card */}
                        <div className="bg-background border border-border rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8"></div>

                            <div className="relative z-10 text-center">
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Fixed Price • One Time</p>
                                <div className="text-5xl font-bold text-foreground mb-2">₹25,000</div>
                                <p className="text-green-500 font-medium mb-8">100% Money-Back Guarantee</p>

                                <div className="space-y-4 text-left max-w-xs mx-auto mb-8 text-sm">
                                    <div className="flex justify-between border-b border-dashed border-border pb-2">
                                        <span className="text-muted-foreground">Turnaround Time</span>
                                        <span className="font-bold">5 Days</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dashed border-border pb-2">
                                        <span className="text-muted-foreground">Format</span>
                                        <span className="font-bold">PDF Report</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dashed border-border pb-2">
                                        <span className="text-muted-foreground">Consultation</span>
                                        <span className="font-bold">60 Min Debrief</span>
                                    </div>
                                </div>

                                <Button size="lg" className="w-full gradient-primary font-bold text-lg h-12" onClick={() => openForm("Purchase - Authority Audit (25k)")}>
                                    Secure Your Audit
                                </Button>
                                <p className="text-xs text-muted-foreground mt-4">
                                    *Currently limiting to 5 audits/month to ensure quality.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ROI Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="font-heading text-3xl font-bold mb-12">The ROI is Simple.</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                            <div className="text-4xl font-bold text-primary mb-2">4.4x</div>
                            <p className="text-sm font-medium">Higher Conversion</p>
                            <p className="text-xs text-muted-foreground mt-2">AI-referred visitors convert 4x better than Google search.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                            <div className="text-4xl font-bold text-primary mb-2">72%</div>
                            <p className="text-sm font-medium">Faster Closing</p>
                            <p className="text-xs text-muted-foreground mt-2">Deals influenced by "High Trust" authority close faster.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                            <div className="text-4xl font-bold text-primary mb-2">0%</div>
                            <p className="text-sm font-medium">Risk</p>
                            <p className="text-xs text-muted-foreground mt-2">If we can't find a gap, you don't pay.</p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm
                open={isContactFormOpen}
                onOpenChange={setIsContactFormOpen}
                defaultSubject={formSubject}
            />
            <Footer />
        </div>
    );
};

export default DigitalAuthority;
