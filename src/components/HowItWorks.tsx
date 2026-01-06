import { ShoppingBag, CreditCard, Package } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    title: "Add to Cart",
    description: "Browse your favorite local fashion brands and add items to cart",
  },
  {
    icon: CreditCard,
    title: "Place Order",
    description: "Quick checkout with secure payments and real-time tracking",
  },
  {
    icon: Package,
    title: "At Your Doorstep",
    description: "Receive your fashion items in minutes, not days",
  },
];

const HowItWorks = () => {
  return (
    <section className="hidden sm:block py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to fashion at your doorstep
          </p>
        </div>

        {/* Steps - Mobile-First Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector Line - Hidden on Mobile */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="glass-card rounded-2xl p-6 sm:p-8 text-center hover-lift gradient-border">
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs sm:text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
