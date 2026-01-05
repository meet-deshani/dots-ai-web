import { Button } from "@/components/ui/button";

const FoundersReviewSection = () => (
  <section className="py-16 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
    <div className="container mx-auto px-4 mb-8 space-y-3">
      <h2 className="text-3xl font-bold gradient-text text-center">What Founders Say</h2>
      <p className="text-lg text-center text-foreground">
        We’re still early. The real reviews are being written as we build.
      </p>
      <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
        We’re building DOTS.ai with a small circle of founders who care about data, operations, and long-term compounding. We don’t want to paste random quotes here. As they start sharing their experience, we’ll publish those stories where they already live – on LinkedIn. {/* Keep this line until we add public reviews elsewhere */}
      </p>
    </div>

    <div className="text-center mt-10 space-y-2">
      <Button
        size="lg"
        className="gradient-primary text-white px-8 py-3 shadow-lg shadow-primary/40"
        asChild
      >
        <a
          href="https://www.linkedin.com/in/zeroone-dots-ai-consulting-697357392/"
          target="_blank"
          rel="noreferrer"
        >
          See us on LinkedIn
        </a>
      </Button>
      <p className="text-xs text-muted-foreground">
        All future reviews and shout-outs will be posted here first.
      </p>
    </div>
  </section>
);

export default FoundersReviewSection;
