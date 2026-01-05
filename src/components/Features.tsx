import { Zap, Smartphone, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fastest Delivery",
    description: "Get your fashion items delivered in minutes with our hyperlocal network of delivery partners.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Experience",
    description: "Seamless shopping experience with our intuitive mobile app — coming soon to iOS and Android.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you with orders, deliveries, returns, and any queries.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">
            Why Choose <span className="text-gradient">zTown</span>
          </h2>
          <p className="section-subheading mx-auto">
            Experience fashion commerce reimagined for speed and convenience
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="glass-card rounded-2xl p-8 h-full hover-lift transition-all duration-300 hover:border-primary/30">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:shadow-glow-sm transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
