import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Store,
  TrendingUp,
  Truck,
  HeadphonesIcon,
  ShoppingBag,
  Building2,
  Mail,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitPartnerForm } from "@/services/api";

const benefits = [
  {
    icon: TrendingUp,
    title: "Expand Reach",
    description:
      "Tap into a large base of fashion-forward shoppers quickly and effortlessly.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Enjoy reliable, speedy delivery handled by our expert logistics team.",
  },
  {
    icon: HeadphonesIcon,
    title: "Partner Support",
    description:
      "Receive ongoing support and insights to maximize your presence and sales, with minimal commision rates",
  },
];

const partnerTypes = [
  {
    icon: ShoppingBag,
    title: "D2C & E-commerce Brands",
    subtitle: "Expand Your Reach with zTown!",
    description:
      "Connect your online brand with local customers who want instant delivery.",
  },
  {
    icon: Building2,
    title: "Retail Stores",
    subtitle: "Turn Your Inventory into Instant Sales!",
    description:
      "Transform your physical store into a hyperlocal delivery powerhouse.",
  },
];

const faqs = [
  {
    question: "How is zTown different from Myntra or Flipkart?",
    answer:
      "Unlike Myntra or Flipkart, zTown focuses on hyperlocal quick commerce. We help local stores sell online and deliver fashion products within minutes, increasing sales and reducing abandoned carts.",
  },
  {
    question: "Who can sell on zTown?",
    answer:
      "Any fashion retailer, boutique, D2C brand, or e-commerce brand looking to expand their reach through hyperlocal delivery can partner with zTown. We welcome stores of all sizes.",
  },
  {
    question: "What are the benefits of selling on zTown?",
    answer:
      "Partners enjoy increased visibility, access to local customers, hassle-free logistics, dedicated support, real-time analytics, and no upfront costs to get started.",
  },
  {
    question: "What product categories can I sell?",
    answer:
"We support a focused range of ready-to-wear fashion categories to ensure fast deliveries and smooth operations. Our primary emphasis is on men’s fashion (around 70%), including T-shirts, casual and party shirts, joggers and track pants, hoodies, and light jackets. We also curate select women’s fashion (around 30%), such as tops, short kurtis and tunics, co-ord sets with elastic fits, party tops or dresses, and athleisure wear. Our platform is designed for customers aged 18–35 years, with a strong focus on trend-driven, instantly available styles. To maintain quality and operational efficiency, we currently support ready-to-wear products only, with standard sizes from S to XXL. Custom-fit or made-to-order items are not supported. All listings must include real product photos, and each store can list a maximum of 50–60 SKUs. If it’s fast-moving, wearable fashion — zTown delivers it."  },
  {
    question: "Do I need to arrange delivery myself?",
    answer:
      "No! zTown handles all logistics and delivery. Our porter delivery partners pick up orders from your store and deliver them to customers within minutes.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Payments are processed securely through our platform. You receive consolidated payments directly to your bank account on a regular settlement cycle.",
  },
  {
    question: "When do I receive my payments?",
    answer:
      "Payments will be settled on daily basis, within 4-5 hours after delivery money will be credited to your account. You can track all your earnings and pending settlements through your partner dashboard.",
  },
  {
    question: "How can I boost my store's visibility?",
    answer:
      "zTown will offer ,featured listings, and marketing support to help boost your store's visibility. Our team provides insights and recommendations to maximize your sales.",
  },
];

const Partner = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      brandName: formData.get('brandName') as string,
      contactNumber: formData.get('contactNumber') as string,
      website: formData.get('website') as string,
      storeAddress: formData.get('storeAddress') as string,
    };

    try {
      const response = await submitPartnerForm(data);
      
      toast({
        title: "Application Submitted!",
        description: response.message || "Our team will contact you within 24 hours.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />

          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-up">
                <span>Home</span>
                <span>/</span>
                <span className="text-primary">Partner With Us</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up animation-delay-100">
                Why Should You Partner{" "}
                <span className="text-gradient">With zTown?</span>
              </h1>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-16 sm:mb-20 md:mb-24">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover-lift animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  {/* Mobile: Horizontal Layout, Desktop: Vertical Layout */}
                  <div className="flex items-start gap-3 sm:gap-4 md:block md:text-center">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:inline-flex md:w-16 md:h-16 rounded-lg md:rounded-2xl bg-primary/10 text-primary flex items-center justify-center md:mb-6">
                      <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 md:flex-none">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 md:mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm md:text-base">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
              {partnerTypes.map((type, index) => (
                <div
                  key={type.title}
                  className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 gradient-border hover-lift"
                >
                  {/* Mobile: Horizontal Layout, Desktop: Vertical Layout */}
                  <div className="flex items-start gap-3 sm:gap-4 md:block md:text-center">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:inline-flex md:w-20 md:h-20 rounded-lg md:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary flex items-center justify-center md:mb-6">
                      <type.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 md:flex-none">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2">{type.title}</h3>
                      <p className="text-primary font-medium mb-2 md:mb-3 text-sm md:text-base">{type.subtitle}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm md:text-base">{type.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Form Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

          <div className="container relative mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
              {/* Form */}
              <div className="glass-card rounded-3xl p-8 md:p-10 gradient-border order-2 lg:order-1 relative z-20">
                <div className="flex items-center gap-2 mb-8">
                  <Store className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Join zTown</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-30">
                  <div className="space-y-2 relative z-30">
                    <label className="text-sm font-medium">
                      Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      name="name"
                      placeholder="Please enter your full name"
                      required
                      maxLength={100}
                      className="bg-secondary/50 border-border/50 focus:border-primary relative z-30"
                      autoComplete="name"
                    />
                  </div>

                  <div className="space-y-2 relative z-30">
                    <label className="text-sm font-medium">
                      Email ID <span className="text-primary">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your email will be used for communication"
                      required
                      maxLength={255}
                      className="bg-secondary/50 border-border/50 focus:border-primary relative z-30"
                      autoComplete="email"
                    />
                  </div>

                  <div className="space-y-2 relative z-30">
                    <label className="text-sm font-medium">
                      Brand Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      name="brandName"
                      placeholder="Enter the name of your brand"
                      required
                      maxLength={100}
                      className="bg-secondary/50 border-border/50 focus:border-primary relative z-30"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="space-y-2 relative z-30">
                    <label className="text-sm font-medium">
                      Contact Number <span className="text-primary">*</span>
                    </label>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-2 px-4 bg-secondary/50 border border-border/50 rounded-lg text-sm text-muted-foreground">
                        <span>🇮🇳</span>
                        <span>+91</span>
                      </div>
                      <Input
                        name="contactNumber"
                        type="tel"
                        placeholder="Please provide a valid contact number"
                        required
                        maxLength={10}
                        pattern="[0-9]{10}"
                        className="flex-1 bg-secondary/50 border-border/50 focus:border-primary relative z-30"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 relative z-30">
                    <label className="text-sm font-medium">
                      Your Website URL{" "}
                      <span className="text-muted-foreground">(Optional)</span>
                    </label>
                    <Input
                      name="website"
                      type="url"
                      placeholder="https://yourbrand.com"
                      maxLength={500}
                      className="bg-secondary/50 border-border/50 focus:border-primary relative z-30"
                      autoComplete="url"
                    />
                  </div>

                  <div className="space-y-2 relative z-30">
                    <label className="text-sm font-medium">
                      Store Address / Pick-up Address{" "}
                      <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      name="storeAddress"
                      placeholder="Enter your store or warehouse address"
                      required
                      maxLength={500}
                      rows={3}
                      className="bg-secondary/50 border-border/50 focus:border-primary resize-none relative z-30"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Join Us
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Info Section */}
              <div className="space-y-8 order-1 lg:order-2 lg:pt-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Partner With zTown And{" "}
                    <span className="text-gradient">Boost Your Sales</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Join zTown to grow your fashion brand locally with instant, hyperlocal deliveries at no upfront cost.

Submit the Partner With Us form and we’ll contact you by Febuary - March, 26 for early onboarding.
Our platform launches soon, and early store partners get priority visibility and first access to customers.
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-semibold mb-2 text-primary">Need help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get Started Now
Ready to become an early partner on zTown?
Fill out the form and our team will contact you to walk you through the early onboarding process ahead of launch.
                  </p>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <a
                      href="mailto:partners@ztown.in"
                      className="text-primary hover:underline font-medium"
                    >
                      connectztown@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-heading mb-4">
                  Frequently Asked{" "}
                  <span className="text-gradient">Questions</span>
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="glass-card rounded-xl px-6 border-none data-[state=open]:ring-1 data-[state=open]:ring-primary/30"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partner;
