import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Rocket, Target, Heart, Zap, Users, TrendingUp, Award, Clock, Store } from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Speed First",
    description: "We believe fashion shouldn't wait. Every minute counts in delivering the perfect outfit.",
    color: "text-[#8b9c6d] dark:text-[#a8b88d]",
    bgColor: "bg-[#8b9c6d]/10 dark:bg-[#a8b88d]/10"
  },
  {
    icon: Target,
    title: "Hyperlocal Focus",
    description: "Supporting local fashion stores and bringing neighborhood commerce into the digital age.",
    color: "text-[#8b9c6d] dark:text-[#a8b88d]",
    bgColor: "bg-[#8b9c6d]/10 dark:bg-[#a8b88d]/10"
  },
  {
    icon: Heart,
    title: "Customer Love",
    description: "Every interaction is an opportunity to delight our customers and exceed expectations.",
    color: "text-[#8b9c6d] dark:text-[#a8b88d]",
    bgColor: "bg-[#8b9c6d]/10 dark:bg-[#a8b88d]/10"
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Hero Section - Enhanced */}
        <section className="relative overflow-hidden pb-20">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8b9c6d]/10 dark:bg-primary/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#8b9c6d]/5 dark:bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute top-40 right-1/4 w-64 h-64 bg-[#8b9c6d]/5 dark:bg-primary/5 rounded-full blur-[100px]" />
          
          <div className="container relative mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b9c6d]/10 dark:bg-primary/10 border border-[#8b9c6d]/20 dark:border-primary/20 text-[#8b9c6d] dark:text-primary text-sm font-medium mb-8 animate-fade-up">
                <Zap className="w-4 h-4" />
                <span>About zTown</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-8 animate-fade-up animation-delay-100">
                <span className="text-[#3d3d3d] dark:text-white">Redefining Local </span>
                <span className="text-[#8b9c6d] dark:text-[#a8b88d]">Fashion Commerce</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#6b6b6b] dark:text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up animation-delay-200">
                zTown is on a mission to bridge the gap between local fashion stores and style-conscious customers who want <span className="text-[#8b9c6d] dark:text-[#a8b88d] font-semibold">instant gratification</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section - Enhanced */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-3xl p-10 md:p-16 bg-[#f5f1e8]/80 dark:bg-[#2a2f23]/80 backdrop-blur-xl border-2 border-[#8b9c6d]/20 dark:border-white/10 shadow-2xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b9c6d]/5 dark:bg-[#a8b88d]/5 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8b9c6d]/5 dark:bg-[#a8b88d]/5 rounded-full blur-[80px]" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#8b9c6d] dark:bg-[#a8b88d] flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-[#3d3d3d] dark:text-white">
                      Our Story
                    </h2>
                  </div>
                  
                  <div className="space-y-6 text-[#6b6b6b] dark:text-muted-foreground text-base leading-relaxed">
                    <p className="animate-fade-up">
                      Born in the heart of <span className="text-[#8b9c6d] dark:text-[#a8b88d] font-semibold">Gurugram</span>, zTown started with a simple but powerful insight: while food reaches our doorsteps in minutes, fashion still takes days. In a world built around speed and convenience, we believed fashion deserved the same immediacy.
                    </p>
                    <p className="animate-fade-up animation-delay-100">
                      Across local neighborhoods, fashion stores carry incredible collections and unique styles, yet many lack the digital reach to connect with nearby customers. At the same time, customers want access to trendy outfits right now, not after a long wait. zTown bridges this gap by enabling <span className="text-[#8b9c6d] dark:text-[#a8b88d] font-semibold">hyperlocal fashion delivery</span> — bringing clothing from trusted nearby stores straight to your doorstep within minutes.
                    </p>
                    <p className="animate-fade-up animation-delay-200">
                      But zTown is more than just delivery. We are building a platform that empowers local fashion businesses, strengthens neighborhood commerce, and redefines how people discover and shop fashion. By combining technology, logistics, and locality, we're shaping the <span className="text-[#8b9c6d] dark:text-[#a8b88d] font-semibold">future of instant fashion commerce</span>, one neighborhood at a time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Enhanced */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f5f1e8]/30 dark:via-card/20 to-transparent" />
          
          <div className="container relative mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b9c6d]/10 dark:bg-primary/10 border border-[#8b9c6d]/20 dark:border-primary/20 text-[#8b9c6d] dark:text-primary text-sm font-medium mb-6 animate-fade-up">
                <TrendingUp className="w-4 h-4" />
                <span>Our Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 animate-fade-up animation-delay-100">
                <span className="text-[#3d3d3d] dark:text-white">What Drives </span>
                <span className="text-[#8b9c6d] dark:text-[#a8b88d]">Us</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={value.title} 
                  className="group relative p-8 rounded-3xl bg-[#f5f1e8]/60 dark:bg-[#2a2f23]/60 backdrop-blur-md border-2 border-[#8b9c6d]/20 dark:border-white/10 hover:border-[#8b9c6d]/40 dark:hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${value.bgColor} ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#3d3d3d] dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-[#6b6b6b] dark:text-muted-foreground leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section - Enhanced */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#8b9c6d]/5 dark:from-primary/5 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#8b9c6d]/10 dark:bg-primary/10 rounded-full blur-[150px]" />
          
          <div className="container relative mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b9c6d]/10 dark:bg-primary/10 border border-[#8b9c6d]/20 dark:border-primary/20 text-[#8b9c6d] dark:text-primary text-sm font-medium mb-8 animate-fade-up">
                <Award className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 animate-fade-up animation-delay-100">
                <span className="text-[#3d3d3d] dark:text-white">The Future of </span>
                <span className="text-[#8b9c6d] dark:text-[#a8b88d]">Fashion Commerce</span>
              </h2>
              
              <div className="p-10 md:p-12 rounded-3xl bg-[#f5f1e8]/80 dark:bg-[#2a2f23]/80 backdrop-blur-xl border-2 border-[#8b9c6d]/20 dark:border-white/10 shadow-2xl animate-fade-up animation-delay-200">
                <p className="text-lg md:text-xl text-[#6b6b6b] dark:text-muted-foreground leading-relaxed">
                  To become India's leading <span className="text-[#8b9c6d] dark:text-[#a8b88d] font-bold">hyperlocal fashion platform</span> making instant fashion delivery the new normal while empowering thousands of local stores to thrive in the digital economy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;