import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container relative mx-auto px-6 z-50">
        <div className="glass-card rounded-3xl p-12 md:p-16 text-center gradient-border relative z-50">
          <h2 className="section-heading mb-4">
            Ready to Transform Your{" "}
            <span className="text-gradient">Fashion Business?</span>
          </h2>
          <p className="section-subheading mx-auto mb-8">
            Partner with zTown and reach thousands of customers in your neighborhood.
          </p>
          <Link to="/partner" className="inline-block relative z-50">
            <Button variant="hero" size="xl" className="relative z-50 pointer-events-auto">
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
