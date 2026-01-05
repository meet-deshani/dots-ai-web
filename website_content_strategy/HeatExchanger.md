# Page: HeatExchanger
**Route**: `/he-design`

## Content Source
```tsx
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm"; // Import ContactForm
import { Button } from "@/components/ui/button";
import { ArrowRight, Thermometer, Box, FileOutput, Gauge, Settings, Factory, ShieldCheck, CheckCircle2, RefreshCw, PenTool } from "lucide-react";
import { logEvent } from "@/lib/analytics";
import SEO from "@/components/SEO";

const HeatExchanger = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false); // State for form

    const handleOpenForm = (source: string) => {
        logEvent("HE Design", "Click CTA", source);
        setIsContactFormOpen(true);
    };

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="TEMA Shell & Tube Heat Exchanger Design Service"
                description="HTRI Certified thermal design and rating. Precision engineering for new designs and rating of existing exchangers. Get a TEMA datasheet starting at ₹10k."
                keywords="Heat Exchanger Design, HTRI Consultant, TEMA Datasheet, Shell and Tube, Thermal Analysis"
            />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background via-purple-900/5 to-background">
                <div className="container mx-auto max-w-6xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 mb-6 animate-fade-in">
                        <Thermometer size={16} />
                        <span className="font-semibold text-sm">HTRI Certified Design</span>
                    </div>
                    <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                        Precision <span className="text-primary">Thermal Design</span> <br />
                        of Shell & Tube Exchangers
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in delay-100">
                        We use <span className="font-bold text-foreground">HTRI software</span> to deliver TEMA-standard thermal ratings.
                        Optimized for heat transfer efficiency and pressure drop constraints.
                    </p>
                    <div className="flex justify-center gap-4 animate-fade-in delay-200">
                        <Button size="lg" className="gradient-primary text-white font-semibold shadow-glow" onClick={() => handleOpenForm("Hero Section")}>
                            Get a Quote
                        </Button>
                    </div>
                </div>
            </section>

            {/* The MOAT: Design vs Rating */}
            <section className="py-12 px-4 border-b border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Design / Simulation */}
                        <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl relative overflow-hidden group hover:bg-primary/10 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <PenTool size={100} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                <PenTool className="text-primary" /> Design & Simulation
                            </h3>
                            <p className="text-lg text-primary/80 mb-4 font-semibold">Building from Scratch</p>
                            <p className="text-muted-foreground leading-relaxed">
                                Complete thermal design for new equipment. We iterate geometry to find the most efficient shell & tube configuration for your specific process duty.
                            </p>
                        </div>

                        {/* Rating / Revamp */}
                        <div className="bg-orange-500/5 border border-orange-500/20 p-8 rounded-2xl relative overflow-hidden group hover:bg-orange-500/10 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <RefreshCw size={100} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                <RefreshCw className="text-orange-500" /> Rating & Revamp
                            </h3>
                            <p className="text-lg text-orange-500/80 mb-4 font-semibold">Optimizing the Old</p>
                            <p className="text-muted-foreground leading-relaxed">
                                Performance validation for existing exchangers. We analyze fouling, check standard margins, and simulate new process conditions for revamps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Engineering Capabilities</h2>
                        <p className="text-muted-foreground">Certified expertise in thermal and mechanical constraints.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group">
                            <Box className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-3">HTRI Xchanger Suite 9.0</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Licensed users of <span className="text-foreground font-semibold">Version 9.0</span>. We utilize <strong>Xist</strong> for rigorous incremental analysis and predictive simulation, ensuring theoretical values match real-world plant performance.
                            </p>
                        </div>
                        <div className="glass p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group">
                            <Settings className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-3">TEMA Standards</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Full compliance with TEMA (R, C, B) classes. We optimize baffle spacing, tube layout, and shell type (E, F, G, H, J, K, X).
                            </p>
                        </div>
                        <div className="glass p-8 rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors group">
                            <Gauge className="w-12 h-12 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-3">Mechanical Design</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Comprehensive mechanical consideration for tube sheets, baffles, and tie rods. We ensure structural integrity alongside thermal performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process */}
            <section className="py-20 bg-muted/20 border-y border-white/5">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                                From Process Data <br /> to <span className="text-primary">Final Datasheet</span>
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Input Analysis & Validation</h4>
                                        <p className="text-sm text-muted-foreground">We validate physical properties, check <strong>Fouling Factors</strong>, and assess allowable pressure drops against process criticality.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Thermal Simulation (HTRI Xist)</h4>
                                        <p className="text-sm text-muted-foreground">Iterative design to optimize <strong>Rho-V²</strong>, check Baffle cuts, and prevent acoustic resonance issues.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Optimization & Deliverables</h4>
                                        <p className="text-sm text-muted-foreground">Balancing Heat Transfer Coefficient vs Pumping Cost. Delivering a <strong className="text-foreground">TEMA Class R/C/B</strong> Datasheet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black/40 p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full -mr-32 -mt-32" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">Pricing Model</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold">₹10k - 25k</span>
                                    <span className="text-muted-foreground">/ thermal run</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-8">Pricing varies based on complexity (Phases, Mixture, Geometry).</p>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle2 size={16} className="text-green-500" /> <span>PDF Datasheet (TEMA Format)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle2 size={16} className="text-green-500" /> <span>HTRI Native File (.htri)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle2 size={16} className="text-green-500" /> <span>Vibration Analysis Report (Xvib)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle2 size={16} className="text-green-500" /> <span>Free Revision (Geometry Tweaks)</span>
                                    </div>
                                </div>

                                <Button className="w-full bg-white text-black hover:bg-gray-200" onClick={() => handleOpenForm("Pricing Section")}>Start a Design</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vendor Network (Ecosystem) */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <Factory className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
                    <h2 className="font-heading text-3xl font-bold mb-6">Beyond Design: <span className="text-primary">Fabrication Support</span></h2>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        We don't leave you with just <span className="text-foreground font-semibold">thermal design</span>. We connect you with our vetted network of Heat Exchanger Fabricators
                        who understand our designs and can build them to TEMA class precision.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-semibold text-muted-foreground">
                        <div className="p-4 bg-muted/20 rounded-lg">Material Procurement</div>
                        <div className="p-4 bg-muted/20 rounded-lg">Machining & Drilling</div>
                        <div className="p-4 bg-muted/20 rounded-lg">Welding & Assembly</div>
                        <div className="p-4 bg-muted/20 rounded-lg">Hydro-Testing</div>
                    </div>
                </div>
            </section>

            <ContactForm
                open={isContactFormOpen}
                onOpenChange={setIsContactFormOpen}
                defaultSubject="HE Design Inquiry"
            />

            <Footer />
        </div>
    );
};

export default HeatExchanger;
```
