# Page: Insights
**Route**: `/insights`

## Content Source
```tsx
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Bot,
  Cpu,
  Lock,
  ArrowRight,
  Lightbulb,
  GraduationCap,
  Trophy,
  Sparkles,
  Users,
  Zap,
  TrendingUp,
  ShieldAlert,
  Clock,
  Activity,
  Smartphone,
  Leaf,
  Tv
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import IdeaSubmissionForm from "@/components/IdeaSubmissionForm";
import { motion } from "framer-motion";
import { logEvent } from "@/lib/analytics";

const Insights = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isIdeaFormOpen, setIsIdeaFormOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState("Information Request");
  const [contactLabel, setContactLabel] = useState("Tell us about your challenge *");
  const [contactPlaceholder, setContactPlaceholder] = useState("Describe your challenge...");

  const openContactForm = (subject: string, label?: string, placeholder?: string) => {
    logEvent("Insights", "Click Contact", subject);
    setContactSubject(subject);
    if (label) setContactLabel(label);
    if (placeholder) setContactPlaceholder(placeholder);
    setIsContactFormOpen(true);
  };

  const industries = {

    fintech: {
      label: "FinTech",
      pain: {
        title: "The Payment Blackhole",
        desc: "Payment gateway failures during peak loads (Tier-2/3 towns). Transactions get stuck, causing massive support ticket spikes.",
        icon: ShieldAlert,
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20"
      },
      agent: {
        title: "The Transaction Rescuer",
        desc: "Auto-switches gateways upon failure detection. Automatically reconciles stuck payments and notifies users via WhatsApp.",
        stats: "99.9% Success Rate",
        icon: Zap,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Ship Payment Orchestrators",
        asset: "Join the Sprint"
      }
    },
    saas: {
      label: "SaaS",
      pain: {
        title: "The Churn Waterfall",
        desc: "No visibility into account health for retail users. High churn in the first 90 days due to lack of proactive intervention.",
        icon: Activity,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
      },
      agent: {
        title: "The Churn Terminator",
        desc: "Monitors usage patterns. Triggers automated, personalized engagement sequences when engagement drops below threshold.",
        stats: "15% Churn Reduction",
        icon: Bot,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Build Retention Bots",
        asset: "Join the Sprint"
      }
    },
    marketplaces: {
      label: "Marketplaces",
      pain: {
        title: "The Seller SLA Breach",
        desc: "Poor SLA adherence by sellers serving rural customers. Leads to order cancellations and loss of trust.",
        icon: Clock,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
      },
      agent: {
        title: "The Seller Success Bot",
        desc: "Automated nudges and penalties for sellers at risk of breaching SLAs. Gamified dashboard for performance improvement.",
        stats: "40% Better adherence",
        icon: Trophy,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Automate Marketplace Ops",
        asset: "Join the Sprint"
      }
    },
    logistics: {
      label: "Logistics",
      pain: {
        title: "The Empty Truck Problem",
        desc: "Poor vehicle capacity utilization for HNI deliveries. Trucks run half-empty, burning fuel and eating margins.",
        icon: AlertTriangle,
        color: "text-amber-600",
        bg: "bg-amber-600/10",
        border: "border-amber-600/20"
      },
      agent: {
        title: "The Route Optimizer",
        desc: "AI-driven dynamic routing that batches orders to maximize truck fill rate. Adjusts in real-time based on traffic.",
        stats: "30% Fuel Saved",
        icon: Cpu,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Master Logistics AI",
        asset: "Join the Sprint"
      }
    },
    retail: {
      label: "Retail",
      pain: {
        title: "The Stockout Nightmare",
        desc: "Stockouts on fast-moving SKUs for startup founders. Lost sales and frustrated customers due to slow replenishment.",
        icon: AlertTriangle,
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20"
      },
      agent: {
        title: "The Inventory Prophet",
        desc: "Predicts demand spikes using historical data and trends. Auto-generates purchase orders before stock hits zero.",
        stats: "Zero Revenue Loss",
        icon: TrendingUp,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Build Inventory Agents",
        asset: "Join the Sprint"
      }
    },
    healthcare: {
      label: "Healthcare",
      pain: {
        title: "The Referral Leak",
        desc: "No visibility into patient referral leakage. Revenue lost as patients drop off between general practitioners and specialists.",
        icon: Activity,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
      },
      agent: {
        title: "The Care Connector",
        desc: "Unified patient journey tracker. Auto-schedules follow-ups and reminds patients of appointments via WhatsApp/SMS.",
        stats: "25% More Conversions",
        icon: Bot,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Automate Care Flows",
        asset: "Join the Sprint"
      }
    },
    edtech: {
      label: "EdTech",
      pain: {
        title: "The Progress Blackbox",
        desc: "No standardized view of student progress for field agents. Impossible to provide personalized counseling.",
        icon: GraduationCap,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20"
      },
      agent: {
        title: "The Student Success Bot",
        desc: "Aggregates quiz scores, attendance, and engagement. Generates personalized progress reports for agents and parents.",
        stats: "2x Counselor Productivity",
        icon: Sparkles,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Build Education Agents",
        asset: "Join the Sprint"
      }
    },
    realestate: {
      label: "Real Estate",
      pain: {
        title: "The Paperwork Purgatory",
        desc: "Manual document handling for bookings in Tier-2 towns. Deals stall as agents chase signatures and KYC docs.",
        icon: LinkIcon, // Changed to temporary icon for now, will fix below imports
        color: "text-slate-500",
        bg: "bg-slate-500/10",
        border: "border-slate-500/20"
      },
      agent: {
        title: "The Closer Agent",
        desc: "Digital KYC and document gathering bot. Auto-verifies documents and nudges customers to sign via mobile.",
        stats: "50% Faster Closing",
        icon: Lock,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Automate Property Ops",
        asset: "Join the Sprint"
      }
    },
    manufacturing: {
      label: "Manufacturing",
      pain: {
        title: "The Changeover Delay",
        desc: "Delays in line changeovers for product runs. Massive idle time and efficiency loss for enterprise clients.",
        icon: Clock,
        color: "text-gray-600",
        bg: "bg-gray-600/10",
        border: "border-gray-600/20"
      },
      agent: {
        title: "The Scheduler & Optimizer",
        desc: "AI-driven production scheduling that groups similar runs to minimize changeover time. Alerts maintenance teams in advance.",
        stats: "15% More Uptime",
        icon: Cpu,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Build Factory Agents",
        asset: "Join the Sprint"
      }
    },
    insurance: {
      label: "Insurance",
      pain: {
        title: "The FNOL Drag",
        desc: "Slow First Notice of Loss (FNOL) processes. Claimants wait days for inspection, leading to poor NPS.",
        icon: AlertTriangle,
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20"
      },
      agent: {
        title: "The Instant Claim Bot",
        desc: "Visual AI agent that analyzes accident photos for instant damage assessment and claim estimation.",
        stats: "Claims Settled in Mins",
        icon: Smartphone,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Ship Insurtech Agents",
        asset: "Join the Sprint"
      }
    },
    telecom: {
      label: "Telecom",
      pain: {
        title: "The Network Blindspot",
        desc: "No unified view of network experience per user. Support teams can't diagnose 'slow internet' complaints effectively.",
        icon: Activity,
        color: "text-cyan-600",
        bg: "bg-cyan-600/10",
        border: "border-cyan-600/20"
      },
      agent: {
        title: "The Network Pulse Agent",
        desc: "Real-time probe that correlates tower metrics with user complaints. Auto-diagnoses issues and informs users of outages.",
        stats: "40% Fewer Tickets",
        icon: Zap,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Build Telco AI",
        asset: "Join the Sprint"
      }
    },

    energy: {
      label: "Energy",
      pain: {
        title: "The Grid Blackbox",
        desc: "No real-time view of grid health. Outages are reactive, leading to long downtimes for critical infrastructure.",
        icon: Zap,
        color: "text-yellow-600",
        bg: "bg-yellow-600/10",
        border: "border-yellow-600/20"
      },
      agent: {
        title: "The Grid Guardian",
        desc: "IoT-connected agent that detects voltage fluctuations and reroutes power or dispatches crews instantly.",
        stats: "50% Lower Downtime",
        icon: Cpu,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Build Energy Agents",
        asset: "Join the Sprint"
      }
    },
    hospitality: {
      label: "Hospitality",
      pain: {
        title: "The Preference Miss",
        desc: "Poor visibility into guest preferences. Returning guests get generic treatment, hurting loyalty.",
        icon: Users,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
      },
      agent: {
        title: "The Guest Experience Bot",
        desc: "Unified guest profile agent that prompts staff with personalized preferences (e.g., 'Likes extra pillows') at check-in.",
        stats: "30% Higher LTV",
        icon: Sparkles,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Automate Hospitality",
        asset: "Join the Sprint"
      }
    },
    media: {
      label: "Media",
      pain: {
        title: "The Engagement Drop",
        desc: "Low engagement on new content formats. Creators struggle to adapt to changing algorithms without data.",
        icon: Tv,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20"
      },
      agent: {
        title: "The Viral Insight Agent",
        desc: "Analyzes cross-platform trends and suggests content tweaks. Auto-generates hooks and thumbnails.",
        stats: "2x Reach Growth",
        icon: TrendingUp,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20"
      },
      community: {
        title: "Build Creator AI",
        asset: "Join the Sprint"
      }
    }
  };

  function LinkIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
            <Users size={16} />
            <span className="font-semibold text-sm">Become an AI Master</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
            Insights + <span className="text-primary">Community</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't just read about AI. <span className="text-foreground font-semibold">See exactly how we solve real corporate pain points.</span> <br />
            Then, join the community to build it yourself.
          </p>
        </div>
      </section>

      {/* Industry Spotlight Tabs */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="fintech" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="h-auto p-0 bg-transparent flex flex-wrap justify-center gap-2">
                {Object.entries(industries).map(([key, data]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="rounded-full px-5 py-2.5 text-sm font-medium border border-border/50 bg-muted/30 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary transition-all hover:bg-muted/50"
                  >
                    {data.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(industries).map(([key, data]) => (
              <TabsContent key={key} value={key} className="mt-0 focus-visible:outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Pain vs Glory Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* The Nightmare (Left) */}
                    <Card className={`border-l-4 ${data.pain.border} shadow-lg relative overflow-hidden group h-full`}>
                      <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                        <data.pain.icon size={120} className={data.pain.color} />
                      </div>
                      <CardContent className="p-8 pt-10 flex flex-col h-full">
                        <div className={`w-14 h-14 rounded-full ${data.pain.bg} flex items-center justify-center mb-6`}>
                          <data.pain.icon size={28} className={data.pain.color} />
                        </div>
                        <h3 className={`text-2xl font-bold mb-4 ${data.pain.color}`}>{data.pain.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed flex-grow">
                          {data.pain.desc}
                        </p>
                      </CardContent>
                    </Card>

                    {/* The Fix (Right) */}
                    <Card className={`border-l-4 ${data.agent.border} shadow-lg relative overflow-hidden bg-gradient-to-br from-background to-primary/5 group h-full`}>
                      <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                        <data.agent.icon size={120} className={data.agent.color} />
                      </div>
                      <CardContent className="p-8 pt-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                          <div className={`w-14 h-14 rounded-full ${data.agent.bg} flex items-center justify-center`}>
                            <data.agent.icon size={28} className={data.agent.color} />
                          </div>
                          <Badge variant="secondary" className="text-sm font-bold px-3 py-1 bg-green-500/10 text-green-600 border-green-500/20">
                            {data.agent.stats}
                          </Badge>
                        </div>
                        <h3 className={`text-2xl font-bold mb-4 ${data.agent.color}`}>{data.agent.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed flex-grow">
                          {data.agent.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Community Upsell Bar */}
                  <div className="rounded-2xl border-2 border-dashed border-amber-500/30 bg-amber-500/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30">
                        <Lock className="text-amber-600" size={32} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-1">
                          Learn with community how to solve fast, ship fast.
                        </h4>
                        <p className="text-muted-foreground">
                          Stop reinventing the wheel. Join our next sprint.
                        </p>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 shadow-lg shadow-amber-500/20 min-w-[240px]"
                      onClick={() => openContactForm(`Community - ${data.label}`, "Why do you want to build this?", "I want to solve...")}
                    >
                      <Sparkles size={18} className="mr-2" />
                      {data.community.asset}
                    </Button>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section >

      {/* Student Idea Contest Section */}
      < section className="py-24 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white relative overflow-hidden" >
        {/* Background visual effects */}
        < div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" ></div >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-8 backdrop-blur-sm shadow-xl">
            <GraduationCap size={18} />
            <span className="font-bold tracking-wide">STUDENT CHALLENGE</span>
          </div>

          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-indigo-200">
            Do You Have a Billion Dollar Idea?
          </h2>

          <p className="text-xl md:text-2xl text-purple-100/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Submit a yearly revenue idea. Best submission wins <span className="text-white font-bold border-b-2 border-purple-400">1 Month Free Mentorship</span>. <br />
            Convert it to a full-time role and earn <span className="text-green-400 font-bold">₹1 Lakh/Month</span> building AI Automations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100 font-bold text-lg h-16 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-transform hover:scale-105"
              onClick={() => setIsIdeaFormOpen(true)}
            >
              <Lightbulb size={20} className="mr-2 fill-purple-900" />
              Submit My Idea
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-6 border border-yellow-500/30 group-hover:scale-110 transition-transform">
                <Trophy className="text-yellow-400" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3">Win Mentorship</h3>
              <p className="text-purple-200 leading-relaxed">Get 1:1 guidance from our architects to refine and build your idea into a real product.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                <Bot className="text-cyan-400" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3">Build Agents</h3>
              <p className="text-purple-200 leading-relaxed">Don't just pitch decks. Learn to build AI agents with ethics and security like an AI Master.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/30 group-hover:scale-110 transition-transform">
                <Sparkles className="text-green-400" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3">Earn ₹1 Lakh/Mo</h3>
              <p className="text-purple-200 leading-relaxed">Top performers get offered full-time roles in our 100X Community.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-6 border border-pink-500/30 group-hover:scale-110 transition-transform">
                <Users className="text-pink-400" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3">Onboard Clients</h3>
              <p className="text-purple-200 leading-relaxed mb-4">
                Bring your own clients. Keep 90% of billing, pay only 10% for usage.
                <span className="block mt-2 text-sm text-purple-300">Join 500+ student founders building real businesses.</span>
              </p>
              <Button
                variant="default" // Changed from outline to default or custom style
                className="w-full bg-white text-purple-900 hover:bg-gray-100 font-bold border-none" // High contrast style
                onClick={() => setIsIdeaFormOpen(true)}
              >
                Submit Your Key Idea
              </Button>
            </div>
          </div>
        </div>
      </section >

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject={contactSubject}
        messageLabel={contactLabel}
        messagePlaceholder={contactPlaceholder}
      />

      <IdeaSubmissionForm
        open={isIdeaFormOpen}
        onOpenChange={setIsIdeaFormOpen}
      />

      <Footer />
    </div >
  );
};

export default Insights;
```
