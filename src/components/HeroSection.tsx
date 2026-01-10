import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Package, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/new-hero.png";
import heroMobileImage from "@/assets/hero-for-mobile.png";

const HeroSection = () => {
  const featureItems = [
    { icon: Clock, text: "40-60 Min" },
    { icon: Package, text: "Local Brands" },
    { icon: TrendingUp, text: "Trending" },
    { icon: Zap, text: "Easy Returns" },
    { icon: Package, text: "Verified Stores" },
    { icon: TrendingUp, text: "New Drops" }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f1e8] dark:bg-[#2a2f23]">
      {/* Mobile Layout - OPTIMIZED */}
      <div className="sm:hidden flex flex-col h-screen relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f1e8]/95 via-[#f5f1e8]/85 to-[#f5f1e8]/95 dark:from-[#2a2f23]/95 dark:via-[#2a2f23]/85 dark:to-[#2a2f23]/95 z-10" />
          <img
            src={heroMobileImage}
            alt="Fashion delivery background"
            className="w-full h-full object-cover object-[center_30%] opacity-60 dark:opacity-70"
          />
          
          {/* Animated glow effects */}
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#8b9c6d]/10 dark:bg-[#8b9c6d]/20 rounded-full blur-[80px] animate-pulse z-10" />
          <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-[#8b9c6d]/15 dark:bg-[#8b9c6d]/25 rounded-full blur-[60px] animate-pulse delay-1000 z-10" />
        </div>

        {/* Content Container - Left Aligned */}
        <div className="flex flex-col justify-center items-start h-screen z-20 relative px-5">
          <div className="flex flex-col items-start text-left w-full max-w-md space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-[#8b9c6d]/30 dark:border-white/20 text-[#2d2d2d] dark:text-white text-sm font-medium animate-fade-up shadow-lg">
              <Zap className="w-4 h-4 text-[#8b9c6d] dark:text-[#a8b88d]" />
              <span>Coming soon in Gurugram</span>
              <div className="w-2 h-2 bg-[#8b9c6d] dark:bg-[#a8b88d] rounded-full animate-pulse" />
            </div>

            {/* Main Headline */}
            <h1 className="font-black leading-[1.15] tracking-tight animate-fade-up animation-delay-100">
              <span className="text-[2.75rem] text-[#2d2d2d] dark:text-white">Your Fashion,</span>
              <br />
              <span className="text-[2.75rem] text-[#8b9c6d] dark:text-[#a8b88d]">Your Brands,</span>
              <br />
              <span className="text-[2.2rem] text-[#2d2d2d] dark:text-white">Delivered</span>{" "}
              <span className="text-[2.2rem] text-[#8b9c6d] dark:text-[#a8b88d]">Instantly!</span>
            </h1>

            {/* Subheading */}
            <p className="text-base text-[#4a4a4a] dark:text-gray-300 leading-relaxed animate-fade-up animation-delay-200 max-w-sm">
              India's first <span className="text-[#8b9c6d] dark:text-[#a8b88d] font-semibold">hyperlocal fashion delivery platform</span> bringing your favorite brands to your doorstep in minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 animate-fade-up animation-delay-300 w-full">
              <Button 
                size="lg"
                className="bg-[#8b9c6d] hover:bg-[#7a8b5d] dark:bg-[#a8b88d] dark:hover:bg-[#98a87d] text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-[#8b9c6d]/30 dark:shadow-[#a8b88d]/30 hover:shadow-[#8b9c6d]/40 dark:hover:shadow-[#a8b88d]/40 transition-all duration-300 hover:scale-105 w-full" 
                asChild
              >
                <Link to="/partner">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg"
                className="bg-white/60 dark:bg-white/10 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/20 text-[#2d2d2d] dark:text-white font-semibold text-sm px-8 py-3.5 rounded-full border-2 border-[#8b9c6d]/40 dark:border-white/30 hover:border-[#8b9c6d]/60 dark:hover:border-white/50 transition-all duration-300 hover:scale-105 w-full" 
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>

            {/* Feature Pills - Horizontal Scroll */}
            <div className="w-full animate-fade-up animation-delay-400 mt-4">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                {featureItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-md border border-[#8b9c6d]/30 dark:border-white/20 text-[#2d2d2d] dark:text-white text-xs font-medium shadow-sm"
                  >
                    <item.icon className="w-3.5 h-3.5 text-[#8b9c6d] dark:text-[#a8b88d] flex-shrink-0" />
                    <span className="whitespace-nowrap">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Unchanged */}
      <div className="hidden sm:flex items-center min-h-screen">
        {/* Large Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f1e8]/98 via-[#f5f1e8]/90 to-[#f5f1e8]/70 dark:from-[#2a2f23]/95 dark:via-[#2a2f23]/85 dark:to-[#2a2f23]/65 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5f1e8]/95 dark:to-[#2a2f23]/95 z-10" />
          
          <img
            src={heroImage}
            alt="Fashion delivery background"
            className="w-full h-full object-cover object-center scale-105 opacity-40 dark:opacity-60"
          />
          
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#8b9c6d]/10 dark:bg-[#8b9c6d]/20 rounded-full blur-[120px] animate-pulse z-10" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#8b9c6d]/15 dark:bg-[#8b9c6d]/25 rounded-full blur-[100px] animate-pulse delay-1000 z-10" />
        </div>

        <div className="container relative z-20 mx-auto px-4 sm:px-6 pt-20 sm:pt-32 pb-12 sm:pb-20">
          <div className="max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-[#8b9c6d]/30 dark:border-white/20 text-[#2d2d2d] dark:text-white text-sm sm:text-sm font-medium mb-4 sm:mb-8 animate-fade-up shadow-lg">
              <Zap className="w-4 h-4 sm:w-4 sm:h-4 text-[#8b9c6d] dark:text-[#a8b88d]" />
              <span>Coming soon in Gurugram</span>
              <div className="w-2 h-2 sm:w-2 sm:h-2 bg-[#8b9c6d] dark:bg-[#a8b88d] rounded-full animate-pulse" />
            </div>

            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight mb-4 sm:mb-8 animate-fade-up animation-delay-100">
              <span className="text-[#2d2d2d] dark:text-white">Your Fashion,</span>
              <br />
              <span className="text-[#8b9c6d] dark:text-[#a8b88d]">
                Your Brands,
              </span>
              <br />
              <span className="text-[#2d2d2d] dark:text-white">Delivered</span>{" "}
              <span className="text-[#8b9c6d] dark:text-[#a8b88d]">Instantly!</span>
            </h1>

            <p className="text-lg sm:text-lg md:text-xl text-[#4a4a4a] dark:text-gray-300 max-w-2xl mb-6 sm:mb-10 animate-fade-up animation-delay-200 leading-relaxed">
              India's first <span className="text-[#8b9c6d] dark:text-[#a8b88d] font-semibold">hyperlocal fashion delivery platform</span> bringing your favorite brands to your doorstep in minutes.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-10 animate-fade-up animation-delay-300">
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-[#8b9c6d]/30 dark:border-white/20 text-[#2d2d2d] dark:text-white text-xs sm:text-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#8b9c6d] dark:text-[#a8b88d]" />
                <span>40-60 Min</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-[#8b9c6d]/30 dark:border-white/20 text-[#2d2d2d] dark:text-white text-xs sm:text-sm">
                <Package className="w-3 h-3 sm:w-4 sm:h-4 text-[#8b9c6d] dark:text-[#a8b88d]" />
                <span>Local Brands</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-[#8b9c6d]/30 dark:border-white/20 text-[#2d2d2d] dark:text-white text-xs sm:text-sm">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#8b9c6d] dark:text-[#a8b88d]" />
                <span>Trending</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up animation-delay-400">
              <Button 
                size="lg"
                className="bg-[#8b9c6d] hover:bg-[#7a8b5d] dark:bg-[#a8b88d] dark:hover:bg-[#98a87d] text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-4 rounded-full shadow-lg shadow-[#8b9c6d]/30 dark:shadow-[#a8b88d]/30 hover:shadow-[#8b9c6d]/40 dark:hover:shadow-[#a8b88d]/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto" 
                asChild
              >
                <Link to="/partner">
                  Get Started Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg"
                className="bg-white/60 dark:bg-white/10 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/20 text-[#2d2d2d] dark:text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-4 rounded-full border-2 border-[#8b9c6d]/40 dark:border-white/30 hover:border-[#8b9c6d]/60 dark:hover:border-white/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto" 
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 rounded-full border-2 border-[#8b9c6d]/40 dark:border-white/40 flex justify-center pt-2 backdrop-blur-sm bg-white/30 dark:bg-white/5">
            <div className="w-1.5 h-3 bg-[#8b9c6d] dark:bg-[#a8b88d] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;