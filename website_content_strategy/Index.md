# Page: Index (Home)
**Route**: `/`

## Content Strategy
This page is the "Strategic Outcome" landing page. It focuses on solving "boring but expensive" problems and creating trust through a "Wedge Offer" (Audit).

### Hero Section
- **Headline**: We help D2C/B2B brands recover 12% in lost margins through AI-Driven Analytics.
- **Subheadline**: Stop flying blind. See where you are losing money, shipping slowly, or churning clients. We build custom Self-Analytics Tools that fix expensive problems.
- **CTA**: "Get Your Data Hygiene & Growth Audit" (Wedge Offer).

### Process Blueprint (Approach)
1. **The Wedge (Audit)**: Low risk, high value blueprint.
2. **The Build**: Custom tools, no-billing until outcome.
3. **The Scale**: Margin protection and revenue recovery.

### Trust Architecture (Case Studies)
This section features "Permissionless Portfolio" cards.

#### Card 1: ⚖️ Personal Injury Law (Legal Tech)
- **Problem**: "Silent" Revenue Leakage. Million-dollar cases lost to missed calls; associates wasting 40% time on manual review.
- **Solution**: 24/7 AI Voice Intake & Discovery Engine. Voice-to-Data analytics.
- **Outcome**: 5x ROI. 35% conversion lift. Strategic shift to proactive revenue capture.

#### Card 2: 🚛 3PL Logistics & Supply Chain
- **Problem**: Margin Erosion. Invoice discrepancies and "Where is my truck?" calls.
- **Solution**: OCR Invoice Matcher + Predictive ETA Agent.
- **Outcome**: 70% cost reduction. 50% faster invoicing. Strategic shift to cash flow acceleration.

#### Card 3: 🛒 D2C E-Commerce
- **Problem**: P&L Destruction via RTO & Ad Fatigue. 15% margin loss.
- **Solution**: Predictive RTO Guard & Creative Velocity Agent.
- **Outcome**: 15% Margin Recovery. 20% ROAS increase. Strategic shift to active margin protection.

### Moat
- **Differentiation**: Outcome-based billing, No-SQL/Voice-to-Data interface, secured dashboards.

## Component Source (`src/pages/Index.tsx`)
```tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import MoatSection from "@/components/home/MoatSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import FoundersReviewSection from "@/components/home/FoundersReviewSection";
import ApproachSection from "@/components/home/ApproachSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <main>
        <HeroSection />
        <MoatSection />
        <IntegrationsSection />
        <SocialProofSection />
        <FoundersReviewSection />
        <ApproachSection />
        <CaseStudiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
```
