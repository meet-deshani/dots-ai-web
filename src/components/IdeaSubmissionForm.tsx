import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Loader2, Lightbulb, FileSpreadsheet, FileText, CheckCircle2, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface IdeaSubmissionFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

// Zod Schema for Validation
const ideaSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    industry: z.string().min(1, "Please select an industry"),
    problem: z.string().min(20, "Please describe the problem in at least 20 characters"),
    solution: z.string().min(20, "Please describe your solution/idea"),
    balanceSheetLink: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
    productDocLink: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

type IdeaFormData = z.infer<typeof ideaSchema>;

// Google Apps Script Web App URL
// Google Apps Script Web App URL
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx72oClTKHTKLr5Nsi8YdfU6rclf0JbHx-hCwvF6yK4yhYMkqo4mXNA-BAObrrVy7KY/exec";

const IdeaSubmissionForm = ({ open, onOpenChange }: IdeaSubmissionFormProps) => {
    const { toast } = useToast();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<IdeaFormData>({
        name: "",
        email: "",
        industry: "",
        problem: "",
        solution: "",
        balanceSheetLink: "",
        productDocLink: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Available Industries
    const industries = [
        "Fintech", "Healthcare", "E-commerce", "Edutech",
        "Real Estate", "Logistics", "Manufacturing", "AgriTech", "Other"
    ];

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            // Validate all data before sending
            const result = ideaSchema.safeParse(formData);
            if (!result.success) {
                toast({
                    title: "Validation Error",
                    description: result.error.errors[0].message,
                    variant: "destructive"
                });
                setIsSubmitting(false);
                return;
            }

            // Prepare data for Google Apps Script (x-www-form-urlencoded)
            const params = new URLSearchParams();
            params.append("name", formData.name);
            params.append("email", formData.email);
            params.append("industry", formData.industry);
            params.append("problem", formData.problem);
            params.append("solution", formData.solution);
            params.append("balanceSheetLink", formData.balanceSheetLink || "");
            params.append("productDocLink", formData.productDocLink || "");
            params.append("timestamp", new Date().toISOString());

            await fetch(WEB_APP_URL, {
                method: "POST",
                body: params,
                mode: "no-cors",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            setIsSubmitted(true);
            toast({
                title: "Idea Submitted!",
                description: "Good luck! Passing this to our AI jury.",
            });

        } catch (error) {
            console.error(error);
            toast({ title: "Error", description: "Submission failed. Please try again.", variant: "destructive" });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNext = () => {
        // Basic validation for step 1
        if (step === 1) {
            if (!formData.name || !formData.email || !formData.industry) {
                toast({ title: "Missing Fields", description: "Please fill out all fields.", variant: "destructive" });
                return;
            }
            setStep(2);
        }
        // Basic validation for step 2
        else if (step === 2) {
            if (!formData.problem || !formData.solution) {
                toast({ title: "Missing Fields", description: "Please describe the problem and solution.", variant: "destructive" });
                return;
            }
            setStep(3);
        }
    };

    const resetForm = () => {
        setFormData({
            name: "", email: "", industry: "", problem: "", solution: "", balanceSheetLink: "", productDocLink: ""
        });
        setStep(1);
        setIsSubmitted(false);
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={resetForm}>
            <DialogContent className="sm:max-w-[600px] bg-background/95 backdrop-blur-xl border-white/10 p-0 overflow-hidden text-foreground">

                {/* Header / Progress */}
                {!isSubmitted && (
                    <div className="p-6 pb-0">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                                <Lightbulb className="text-yellow-400" />
                                Submit Your Masterpiece
                            </DialogTitle>
                            <DialogDescription>
                                ZeroOne Student Idea Contest. Win mentorship & build support.
                            </DialogDescription>
                        </DialogHeader>

                        {/* Progress Bar */}
                        <div className="flex gap-2 mt-6 mb-2">
                            {[1, 2, 3].map((s) => (
                                <div key={s} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${s <= step ? "bg-primary" : "bg-muted"}`} />
                            ))}
                        </div>
                    </div>
                )}

                <div className="p-6">
                    <AnimatePresence mode="wait">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center text-center space-y-4 py-8"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-4">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold">Received!</h3>
                                <p className="text-muted-foreground max-w-sm">
                                    Your idea is now safely in our vault. Our AI Agents are reviewing the initial hygiene checks.
                                </p>
                                <div className="flex flex-col gap-3 w-full max-w-xs">
                                    <Button onClick={() => window.open(`https://wa.me/918320065658?text=${encodeURIComponent("Hi! I just submitted an Idea to ZeroOne DOTS.ai")}`, "_blank")} className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                                        <MessageCircle className="mr-2" size={18} />
                                        Connect on WhatsApp
                                    </Button>
                                    <Button variant="outline" onClick={resetForm} className="w-full">
                                        Close
                                    </Button>
                                </div>
                            </motion.div>
                        ) : (
                            // FORM STEPS
                            <>
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-4"
                                    >
                                        <div className="space-y-2">
                                            <Label>Name</Label>
                                            <Input
                                                placeholder="Dhaval P"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Email</Label>
                                            <Input
                                                placeholder="dhaval@college.edu"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Industry Category</Label>
                                            <Select
                                                value={formData.industry}
                                                onValueChange={(val) => setFormData({ ...formData, industry: val })}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Industry" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {industries.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-4"
                                    >
                                        <div className="space-y-2">
                                            <Label>The Problem</Label>
                                            <Textarea
                                                placeholder="What specific pain point are you solving?"
                                                className="h-24 resize-none"
                                                value={formData.problem}
                                                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>The Solution</Label>
                                            <Textarea
                                                placeholder="How does your AI agent fix this?"
                                                className="h-24 resize-none"
                                                value={formData.solution}
                                                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div className="bg-accent/5 p-4 rounded-lg border border-accent/10 space-y-4">
                                            <div className="flex items-start gap-4">
                                                <FileSpreadsheet className="text-green-500 mt-1" />
                                                <div className="flex-1 space-y-2">
                                                    <Label>Balance Sheet / Financials (Optional)</Label>
                                                    <Input
                                                        placeholder="https://docs.google.com/spreadsheets/..."
                                                        value={formData.balanceSheetLink}
                                                        onChange={(e) => setFormData({ ...formData, balanceSheetLink: e.target.value })}
                                                    />
                                                    <p className="text-xs text-muted-foreground">Link to G-Sheet or Drive file</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <FileText className="text-blue-500 mt-1" />
                                                <div className="flex-1 space-y-2">
                                                    <Label>Product Doc / Deck (Optional)</Label>
                                                    <Input
                                                        placeholder="https://docs.google.com/document/..."
                                                        value={formData.productDocLink}
                                                        onChange={(e) => setFormData({ ...formData, productDocLink: e.target.value })}
                                                    />
                                                    <p className="text-xs text-muted-foreground">Link to Notion, PDF, or Doc</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </>
                        )}
                    </AnimatePresence>

                    {/* Footer Controls */}
                    {!isSubmitted && (
                        <div className="flex justify-between mt-8 pt-4 border-t border-border/40">
                            <Button
                                variant="ghost"
                                onClick={() => setStep(s => Math.max(1, s - 1))}
                                disabled={step === 1}
                            >
                                Back
                            </Button>

                            {step < 3 ? (
                                <Button onClick={handleNext} className="gradient-primary text-white">
                                    Next Step
                                </Button>
                            ) : (
                                <Button onClick={handleSubmit} disabled={isSubmitting} className="gradient-primary text-white">
                                    {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : null}
                                    Submit Idea
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default IdeaSubmissionForm;
