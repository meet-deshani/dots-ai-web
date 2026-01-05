import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Calculator, RefreshCw } from "lucide-react";
import { logEvent } from "@/lib/analytics";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const LMTDCalculator = () => {
    const [t1, setT1] = useState(""); // Hot Fluid In
    const [t2, setT2] = useState(""); // Hot Fluid Out
    const [t3, setT3] = useState(""); // Cold Fluid In
    const [t4, setT4] = useState(""); // Cold Fluid Out
    const [lmtd, setLmtd] = useState<number | null>(null);
    const [error, setError] = useState("");
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    const calculateLMTD = () => {
        const thIn = parseFloat(t1);
        const thOut = parseFloat(t2);
        const tcIn = parseFloat(t3);
        const tcOut = parseFloat(t4);

        if (isNaN(thIn) || isNaN(thOut) || isNaN(tcIn) || isNaN(tcOut)) {
            setError("Please enter valid numbers for all temperatures.");
            setLmtd(null);
            return;
        }

        // Counter-Current Flow
        const dt1 = thIn - tcOut;
        const dt2 = thOut - tcIn;

        if (dt1 <= 0 || dt2 <= 0) {
            setError("Invalid temperature approach (Temperature cross). Check your values.");
            setLmtd(null);
            return;
        }

        if (dt1 === dt2) {
            setLmtd(dt1);
        } else {
            const result = (dt1 - dt2) / Math.log(dt1 / dt2);
            setLmtd(result);
        }
        setError("");
        logEvent("Tools", "Calculate LMTD", "Success");
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "LMTD Calculator",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Calculate Log Mean Temperature Difference (LMTD) for counter-current heat exchangers."
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Free LMTD Calculator | Counter-Current Heat Exchanger"
                description="Calculate Log Mean Temperature Difference (LMTD) instantly. Essential tool for TEMA shell and tube exchanger sizing. HTRI compatible methodology."
                keywords="LMTD Calculator, Heat Exchanger Sizing, TEMA Design, Log Mean Temperature Difference"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>
            <Navigation />

            <div className="pt-32 pb-20 px-4 container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                        <Calculator size={16} />
                        <span className="font-semibold text-sm">Free Engineering Tool</span>
                    </div>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">LMTD Calculator</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Calculate the Log Mean Temperature Difference for Counter-Current heat exchangers.
                        Essential for preliminary TEMA sizing.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <Card className="glass border-white/10">
                        <CardHeader>
                            <CardTitle>Process Parameters</CardTitle>
                            <CardDescription>Enter temperatures in °C or °F (units must be consistent).</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Hot Fluid In (T1)</Label>
                                    <Input
                                        type="number"
                                        placeholder="e.g. 150"
                                        value={t1}
                                        onChange={(e) => setT1(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Hot Fluid Out (T2)</Label>
                                    <Input
                                        type="number"
                                        placeholder="e.g. 90"
                                        value={t2}
                                        onChange={(e) => setT2(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Cold Fluid In (t1)</Label>
                                    <Input
                                        type="number"
                                        placeholder="e.g. 30"
                                        value={t3}
                                        onChange={(e) => setT3(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Cold Fluid Out (t2)</Label>
                                    <Input
                                        type="number"
                                        placeholder="e.g. 80"
                                        value={t4}
                                        onChange={(e) => setT4(e.target.value)}
                                    />
                                </div>
                            </div>

                            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                            <Button onClick={calculateLMTD} className="w-full gradient-primary">
                                Calculate LMTD
                            </Button>
                        </CardContent>
                    </Card>

                    <div className="space-y-6">
                        {/* Result Card */}
                        <Card className="bg-primary/5 border-primary/20">
                            <CardHeader>
                                <CardTitle className="text-primary">Calculation Result</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {lmtd !== null ? (
                                    <div className="text-center py-4">
                                        <div className="text-6xl font-bold text-foreground mb-2">{lmtd.toFixed(2)}</div>
                                        <div className="text-muted-foreground">LMTD Value</div>
                                    </div>
                                ) : (
                                    <div className="text-center py-12 text-muted-foreground flex flex-col items-center">
                                        <RefreshCw className="mb-4 opacity-50" />
                                        Enter values to see result
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* CTA Card */}
                        <div className="glass p-6 rounded-xl border border-white/10 text-center">
                            <h3 className="font-bold text-lg mb-2">Need a Full Thermal Design?</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Our HTRI-certified experts can turn this LMTD into a complete TEMA datasheet.
                            </p>
                            <Button variant="outline" className="w-full gap-2" onClick={() => setIsContactFormOpen(true)}>
                                Get Custom Design <ArrowRight size={16} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm
                open={isContactFormOpen}
                onOpenChange={setIsContactFormOpen}
                defaultSubject="LMTD Tool Inquiry"
            />
            <Footer />
        </div>
    );
};

export default LMTDCalculator;
