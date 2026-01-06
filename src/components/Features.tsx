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
    <section className="py-12 sm:py-16 md:py-24 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Why Choose <span className="text-gradient">zTown</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4a4a4a] dark:text-muted-foreground max-w-2xl mx-auto">
            Experience fashion commerce reimagined for speed and convenience
          </p>
        </div>

        {/* Feature Cards - Mobile-First Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 h-full hover-lift transition-all duration-300 hover:border-primary/30">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-glow-sm transition-all duration-300">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#2d2d2d] dark:text-white">{feature.title}</h3>
                <p className="text-sm sm:text-base text-[#4a4a4a] dark:text-muted-foreground leading-relaxed">
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
