import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Package, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/new-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f5f1e8] dark:bg-[#2a2f23]">
      {/* Large Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f1e8]/98 via-[#f5f1e8]/90 to-[#f5f1e8]/70 dark:from-[#2a2f23]/95 dark:via-[#2a2f23]/85 dark:to-[#2a2f23]/65 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5f1e8]/95 dark:to-[#2a2f23]/95 z-10" />
        <img
          src={heroImage}
          alt="Fashion delivery background"
          className="w-full h-full object-cover object-center scale-105 opacity-40 dark:opacity-60"
        />
        {/* Animated glow effects */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#8b9c6d]/10 dark:bg-[#8b9c6d]/20 rounded-full blur-[120px] animate-pulse z-10" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#8b9c6d]/15 dark:bg-[#8b9c6d]/25 rounded-full blur-[100px] animate-pulse delay-1000 z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge with glassmorphism */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-[#8b9c6d]/30 dark:border-white/20 text-[#4a5a3a] dark:text-white text-sm font-medium mb-8 animate-fade-up shadow-lg">
            <Zap className="w-4 h-4 text-[#8b9c6d] dark:text-[#a8b88d]" />
            <span>Coming soon in Gurugram</span>
            <div className="w-2 h-2 bg-[#8b9c6d] dark:bg-[#a8b88d] rounded-full animate-pulse" />
          </div>

          {/* Main Headline - Large and Bold */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight mb-8 animate-fade-up animation-delay-100">
            <span className="text-[#3d3d3d] dark:text-white">Your Fashion,</span>
            <br />
            <span className="text-[#8b9c6d] dark:text-[#a8b88d]">
              Your Brands,
            </span>
            <br />
            <span className="text-[#3d3d3d] dark:text-white">Delivered</span>{" "}
            <span className="text-[#8b9c6d] dark:text-[#a8b88d]">Instantly!</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#6b6b6b] dark:text-gray-300 max-w-2xl mb-10 animate-fade-up animation-delay-200 leading-relaxed">
            India's first <span className="text-[#8b9c6d] dark:text-[#a8b88d] font-semibold">hyperlocal fashion delivery platform</span> bringing your favorite brands to your doorstep in minutes.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mb-10 animate-fade-up animation-delay-300">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-[#8b9c6d]/30 dark:border-white/20 text-[#4a5a3a] dark:text-white text-sm">
              <Clock className="w-4 h-4 text-[#8b9c6d] dark:text-[#a8b88d]" />
              <span>40-60 Min Delivery</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-[#8b9c6d]/30 dark:border-white/20 text-[#4a5a3a] dark:text-white text-sm">
              <Package className="w-4 h-4 text-[#8b9c6d] dark:text-[#a8b88d]" />
              <span>Local Brands</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-[#8b9c6d]/30 dark:border-white/20 text-[#4a5a3a] dark:text-white text-sm">
              <TrendingUp className="w-4 h-4 text-[#8b9c6d] dark:text-[#a8b88d]" />
              <span>Trending Fashion</span>
            </div>
          </div>

          {/* CTA Buttons - Larger and More Prominent */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-400">
            <Button 
              size="xl"
              className="bg-[#8b9c6d] hover:bg-[#7a8b5d] dark:bg-[#a8b88d] dark:hover:bg-[#98a87d] text-white font-bold text-lg px-8 py-7 rounded-full shadow-xl shadow-[#8b9c6d]/30 dark:shadow-[#a8b88d]/30 hover:shadow-[#8b9c6d]/50 dark:hover:shadow-[#a8b88d]/50 transition-all duration-300 hover:scale-105" 
              asChild
            >
              <Link to="/partner">
                Get Started Now
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
            </Button>
            <Button 
              size="xl"
              className="bg-white/60 dark:bg-white/10 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/20 text-[#4a5a3a] dark:text-white font-bold text-lg px-8 py-7 rounded-full border-2 border-[#8b9c6d]/40 dark:border-white/30 hover:border-[#8b9c6d]/60 dark:hover:border-white/50 transition-all duration-300 hover:scale-105" 
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 rounded-full border-2 border-[#8b9c6d]/40 dark:border-white/40 flex justify-center pt-2 backdrop-blur-sm bg-white/30 dark:bg-white/5">
          <div className="w-1.5 h-3 bg-[#8b9c6d] dark:bg-[#a8b88d] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;