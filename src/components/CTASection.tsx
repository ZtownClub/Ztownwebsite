import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container relative mx-auto px-4 sm:px-6 z-50">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-16 text-center gradient-border relative z-50">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Ready to Transform Your{" "}
            <span className="text-gradient">Fashion Business?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4a4a4a] dark:text-muted-foreground max-w-2xl mx-auto mb-5 sm:mb-6 md:mb-8">
            Partner with zTown and reach thousands of customers in your neighborhood.
          </p>
          <Link to="/partner" className="inline-block relative z-50">
            <Button variant="hero" size="xl" className="relative z-50 pointer-events-auto w-full sm:w-auto">
              Become a Partner
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
