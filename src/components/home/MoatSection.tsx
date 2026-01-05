import { Target, DollarSign, Shield } from "lucide-react";

const MoatSection = () => {
  const moats = [
    {
      icon: Target,
      title: "Problem Solving First",
      description: "Start from the KPI, not the org chart.",
      gradient: "from-primary to-primary-light",
    },
    {
      icon: DollarSign,
      title: "Outcome First — Zero Billing",
      description: "₹0 until success criteria are met.",
      gradient: "from-primary-light to-secondary",
    },
    {
      icon: Shield,
      title: "Data Safeguard First",
      description: "We use No-SQL, Voice-to-Data, and Secured Dashboards to give you vision.",
      gradient: "from-secondary to-primary",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our <span className="gradient-text">Moat</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three principles that differentiate how we work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
            {moats.map((moat, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-8 hover-lift text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${moat.gradient} flex items-center justify-center mx-auto mb-6 shadow-glow`}>
                  <moat.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {moat.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {moat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoatSection;
