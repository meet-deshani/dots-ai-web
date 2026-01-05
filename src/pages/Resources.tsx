import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calculator, FileText, ArrowRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";

const Resources = () => {
    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Engineering Resources & Tools"
                description="Free process engineering tools including LMTD Calculator (Log Mean Temperature Difference) and technical articles on Heat Exchanger design."
                keywords="LMTD Calculator, Engineering Tools, Heat Exchanger Design, TEMA Standards, Process Engineering"
            />
            <Navigation />

            {/* Hero */}
            <div className="pt-32 pb-20 px-4 text-center">
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Engineering Resources</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Tools, technical articles, and design guides for the process industry.
                </p>
            </div>

            <div className="container mx-auto px-4 pb-20 max-w-6xl">
                {/* Tools Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-8">
                        <Calculator className="text-primary" />
                        <h2 className="text-2xl font-bold">Free Calculation Tools</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link to="/resources/lmtd-calculator" className="group">
                            <Card className="glass h-full hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        LMTD Calculator
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                    </CardTitle>
                                    <CardDescription>Log Mean Temperature Difference</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Calculate LMTD for counter-current heat exchangers. Essential for preliminary sizing and efficiency checks.
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>

                {/* Articles Section */}
                <div>
                    <div className="flex items-center gap-2 mb-8">
                        <BookOpen className="text-primary" />
                        <h2 className="text-2xl font-bold">Technical Articles</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link to="/resources/baffle-cut-optimization" className="group">
                            <Card className="glass h-full hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="mb-2">
                                        <Badge variant="secondary" className="text-xs">Heat Exchangers</Badge>
                                    </div>
                                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                                        Optimizing Baffle Cut in TEMA Shell & Tube Exchangers
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        Why 25% isn't always the answer. A deep dive into window velocity, pressure drop, and vibration analysis (Xvib).
                                    </p>
                                    <div className="mt-4 flex items-center text-sm font-medium text-primary">
                                        Read Article <ArrowRight className="ml-1 w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Resources;
