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
    <section className="py-8 sm:py-12 md:py-16 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Why Choose <span className="text-gradient">zTown</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4a4a4a] dark:text-muted-foreground max-w-2xl mx-auto">
            Experience fashion commerce reimagined for speed and convenience
          </p>
        </div>

        {/* Feature Cards - Mobile: Horizontal, Desktop: Vertical */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover-lift transition-all duration-300 hover:border-primary/30">
                {/* Mobile: Horizontal Layout, Desktop: Vertical Layout */}
                <div className="flex items-start gap-3 sm:block sm:text-center">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 sm:inline-flex sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center sm:mb-4 md:mb-6 group-hover:shadow-glow-sm transition-all duration-300">
                    <feature.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 sm:flex-none">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-[#2d2d2d] dark:text-white">{feature.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#4a4a4a] dark:text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
