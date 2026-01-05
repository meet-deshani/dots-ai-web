# Page: OvertradeOP
**Route**: `/overtrade-op`

## Content Source
```tsx
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CheckCircle2, Zap, BarChart2, Shield, Activity, Globe, Lock, Code2, AlertTriangle, PlayCircle, Star, Sparkles } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { logEvent } from "@/lib/analytics";

const OvertradeOP = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [contactSubject, setContactSubject] = useState("Start Your Algo Project");

    const openContactForm = (subject: string) => {
        logEvent("OvertradeOP", "Click Contact", subject);
        setContactSubject(subject);
        setIsContactFormOpen(true);
    };

    // Simple fade-in animation to match SLM page feel
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                {/* Subtle SLM-like background blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto max-w-5xl text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="flex flex-col items-center"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
                            <Sparkles size={16} />
                            <span className="font-semibold text-sm">Next-Gen Algo Ecosystem</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="font-heading text-5xl md:text-7xl font-bold mb-6"
                        >
                            Overtrade<span className="text-primary">OP</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
                        >
                            Automate your edge with <span className="text-foreground font-semibold">institutional-grade</span> low latency infrastructure.
                            Stop guessing. Start executing.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 font-medium text-sm">
                                <CheckCircle2 size={16} />
                                Profit in 30 days — or 100% refund. Guaranteed.
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
                            <Button
                                size="lg"
                                className="gradient-primary text-white text-lg h-14 px-8 shadow-lg hover:shadow-primary/25 transition-all"
                                onClick={() => openContactForm("Start Your Algo Project")}
                            >
                                <Zap className="mr-2 fill-current" size={20} /> Start Your Algo Project
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto border-t border-border pt-12"
                    >
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-foreground">7+</h3>
                            <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold mt-2">Years Experience</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-foreground">10+</h3>
                            <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold mt-2">Platforms Built</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-green-600">100%</h3>
                            <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold mt-2">Refund Guarantee</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Smart Risk Features - Muted Background like SLM Value Prop */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                            Smart Risk Assessment
                        </h2>
                        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                            The name is Overtrade, but it actually restricts you from overtrading.
                            AI-powered alerts based on your style.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: AlertTriangle,
                                color: "text-red-500",
                                bg: "bg-red-500/10",
                                title: "Mistake-Based Alerts",
                                desc: "Real-time alerts triggered by patterns similar to your past losses. AI detects 'tilt' trading before you click execute."
                            },
                            {
                                icon: Activity,
                                color: "text-blue-500",
                                bg: "bg-blue-500/10",
                                title: "No Journal Needed",
                                desc: "Forget manual spreadsheets. OvertradeOP automatically logs, categorizes, and analyzes every trade for behavioral insights."
                            },
                            {
                                icon: Shield,
                                color: "text-green-500",
                                bg: "bg-green-500/10",
                                title: "AI Risk Guard",
                                desc: "AI-Powered Risk Assessment of your style. Takes the emotion out of sizing and stops you from forcing trades."
                            }
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all text-center group shadow-sm"
                            >
                                <div className={`w-16 h-16 rounded-full ${feature.bg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className={feature.color} size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* No-Code AI Builder */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6">
                                <Code2 size={16} /> No-Code Platform
                            </div>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                                Drag. Drop. <span className="text-primary">Deploy.</span>
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Build complete strategies in plain English. Our No-Code AI Builder lets you automate complex logic in minutes without writing a single line of code.
                            </p>

                            <div className="space-y-4 mb-8">
                                <Card className="border-l-4 border-l-green-500 shadow-sm">
                                    <CardContent className="p-6">
                                        <h4 className="font-bold mb-3 flex items-center gap-2">
                                            <PlayCircle size={20} className="text-green-500" /> BUY BTCUSD Strategy
                                        </h4>
                                        <div className="space-y-2 font-mono text-sm bg-muted/50 p-4 rounded-lg">
                                            <div className="flex gap-4">
                                                <span className="text-muted-foreground w-12 text-xs uppercase">Entry</span>
                                                <span className="text-foreground">If EMA(50) crosses &gt; EMA(200) AND RSI(14) &lt; 60</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="text-muted-foreground w-12 text-xs uppercase">Exit</span>
                                                <span className="text-foreground">Take Profit 3% OR Stop Loss 1.5%</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <Button
                                size="lg"
                                className="gradient-primary text-white h-12 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
                                onClick={() => openContactForm("Try No-Code Builder")}
                            >
                                Try No-Code Builder
                            </Button>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 shadow-2xl text-white">
                                <div className="text-center mb-6 pb-6 border-b border-white/10">
                                    <h3 className="text-xl font-bold mb-2">90-Day Performance</h3>
                                    <div className="inline-flex items-center gap-2 text-xs font-bold text-green-400 bg-green-950/30 px-3 py-1 rounded-full border border-green-900">
                                        <CheckCircle2 size={12} /> BACKTEST COMPLETED
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                                        <div className="text-2xl font-black text-green-400 mb-1">71%</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">Win Rate</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                                        <div className="text-2xl font-black text-blue-400 mb-1">482</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">Total Hits</div>
                                    </div>
                                    <div className="p-6 bg-primary/20 rounded-xl border border-primary/30 text-center col-span-2">
                                        <div className="text-4xl font-black text-white mb-1">$42,610</div>
                                        <div className="text-sm text-primary-foreground/80 uppercase tracking-wider font-bold">Total Profit</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                                        <div className="text-xl font-bold text-white">178.2%</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">Return</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                                        <div className="text-xl font-bold text-white">410</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">Hits</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Gallery - Muted Background */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                            Real Algos. Real Profits.
                        </h2>
                        <p className="text-muted-foreground text-xl">See what traders are building with our No-Code AI-Powered Platform.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "BUY BTCUSD Strategy", rule: "EMA 50 &gt; EMA 200 and RSI &lt; 60", color: "green", win: "71%", ret: "178.2%", pl: "$42,610" },
                            { name: "XAUUSD Mean-Revert", rule: "Price < VWAP – 1 ATR", color: "blue", win: "68%", ret: "142%", pl: "$28,500" },
                            { name: "EURUSD Breakout", rule: "Break of last 20-bar high", color: "purple", win: "70%", ret: "163%", pl: "$36,900" }
                        ].map((study, idx) => (
                            <Card key={idx} className="hover:border-primary/50 transition-all hover:shadow-lg">
                                <CardHeader>
                                    <CardTitle>{study.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="font-mono text-xs p-3 bg-muted rounded-lg mb-6 text-foreground border border-border">
                                        {study.rule} → <span className="font-bold text-green-600">BUY</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-center mb-6">
                                        <div>
                                            <div className={`text-2xl font-bold text-${study.color}-600`}>{study.win}</div>
                                            <div className="text-xs text-muted-foreground uppercase">Win Rate</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-foreground">{study.ret}</div>
                                            <div className="text-xs text-muted-foreground uppercase">Return</div>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-border text-center">
                                        <div className="text-3xl font-bold text-foreground">{study.pl}</div>
                                        <div className="text-xs text-muted-foreground uppercase mt-1">Total P/L</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Choose Your Path to Profit</h2>
                        <p className="text-muted-foreground text-xl">Every plan includes our 30-day profit guarantee.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        {/* Starter */}
                        <Card className="p-6">
                            <CardHeader className="p-0 mb-6">
                                <CardTitle className="text-2xl">Starter</CardTitle>
                                <CardDescription>Perfect for individual traders</CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="text-4xl font-bold mb-6">$499</div>
                                <ul className="space-y-4 mb-8 text-sm text-muted-foreground">
                                    {["Personal AI Builder", "Basic Backtesting Tools", "Email & SMS Alerts", "Community Support", "30-Day Profit Guarantee"].map(item => (
                                        <li key={item} className="flex items-center gap-3">
                                            <CheckCircle2 size={18} className="text-primary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full" variant="outline" onClick={() => openContactForm("Starter Plan")}>
                                    Get Started
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Pro - Highlighted */}
                        <Card className="p-6 border-primary shadow-2xl relative scale-105 z-10">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                                POPULAR
                            </div>
                            <CardHeader className="p-0 mb-6">
                                <CardTitle className="text-2xl text-primary">Pro</CardTitle>
                                <CardDescription>For serious algo traders</CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="text-5xl font-bold mb-8">$1,499</div>
                                <ul className="space-y-4 mb-8 text-sm font-medium">
                                    {["Custom Platform Builder", "Advanced Dashboards", "Telegram & Discord Alerts", "Python Strategy Integration", "Priority Support", "30-Day Profit Guarantee"].map(item => (
                                        <li key={item} className="flex items-center gap-3">
                                            <CheckCircle2 size={18} className="text-primary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full gradient-primary text-white" onClick={() => openContactForm("Pro Plan")}>
                                    Get Started
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Enterprise */}
                        <Card className="p-6">
                            <CardHeader className="p-0 mb-6">
                                <CardTitle className="text-2xl">Enterprise</CardTitle>
                                <CardDescription>For institutions & teams</CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="text-4xl font-bold mb-6">Custom</div>
                                <ul className="space-y-4 mb-8 text-sm text-muted-foreground">
                                    {["Full White-Label Platform", "Execution Integration", "Institutional APIs", "Dedicated Engineer", "Custom Development", "30-Day Profit Guarantee"].map(item => (
                                        <li key={item} className="flex items-center gap-3">
                                            <CheckCircle2 size={18} className="text-primary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full" variant="outline" onClick={() => openContactForm("Enterprise Plan")}>
                                    Contact Sales
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
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

export default OvertradeOP;
```
