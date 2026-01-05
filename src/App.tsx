import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import Solutions from "./pages/Solutions";
import Community from "./pages/Community";
import DigitalAuthority from "./pages/DigitalAuthority";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Security from "./pages/Security";
import Infinity from "./pages/Infinity";
import NotFound from "./pages/NotFound";
import OvertradeOP from "./pages/OvertradeOP";
import InhouseSLM from "./pages/InhouseSLM";
import AiWorkshop from "./pages/AiWorkshop";
import HeatExchanger from "./pages/HeatExchanger";
import PersonalAiAgent from "./pages/PersonalAiAgent";
import Resources from "./pages/Resources";
import LMTDCalculator from "./pages/tools/LMTDCalculator";
import BaffleCutArticle from "./pages/blog/BaffleCutArticle";
import AnalyticsTracker from "./components/AnalyticsTracker";
import { initGA } from "./lib/analytics";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AnalyticsTracker />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/community" element={<Community />} />
              <Route path="/digital-authority" element={<DigitalAuthority />} />
              <Route path="/infinity-crm" element={<Infinity />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/security" element={<Security />} />
              <Route path="/overtrade-op" element={<OvertradeOP />} />
              <Route path="/inhouse-slm" element={<InhouseSLM />} />
              <Route path="/ai-workshop" element={<AiWorkshop />} />
              <Route path="/he-design" element={<HeatExchanger />} />
              <Route path="/personal-ai-agent" element={<PersonalAiAgent />} />

              {/* Resources & Tools */}
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/lmtd-calculator" element={<LMTDCalculator />} />
              <Route path="/resources/baffle-cut-optimization" element={<BaffleCutArticle />} />

              {/* Legacy route redirects */}
              <Route path="/approach" element={<Pricing />} />
              <Route path="/services" element={<Solutions />} />
              <Route path="/work" element={<Community />} />
              {/* Placeholder routes - to be implemented */}
              <Route path="/contact" element={<Index />} />
              <Route path="/privacy" element={<Index />} />
              <Route path="/terms" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes >
          </BrowserRouter >
        </TooltipProvider >
      </QueryClientProvider >
    </HelmetProvider >
  );
};

export default App;
