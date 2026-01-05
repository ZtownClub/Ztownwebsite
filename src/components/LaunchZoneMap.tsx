import { MapPin, Zap, TrendingUp } from "lucide-react";

const launchAreas = [
  "Sector 29",
  "Iffco Chowk", 
  "Sector 18",
  "Sector 28",
  "Sector 14",
  "Sector 44",
  "DLF Phase 1, 2, 3",
  "MG Road",
  "Sector 15",
  "Udyog Vihar",
  "Sikanderpur",
  "Sarhol",
  
];

const LaunchZoneMap = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-[#f5f1e8]/30 dark:via-card/20 to-background">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#8b9c6d]/10 dark:bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b9c6d]/10 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b9c6d]/10 dark:bg-primary/10 border border-[#8b9c6d]/20 dark:border-primary/20 text-[#8b9c6d] dark:text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Hyperlocal Delivery</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-[#3d3d3d] dark:text-white">Will Soon be Live in </span>
            <span className="text-[#8b9c6d] dark:text-[#a8b88d]">Gurugram</span>
          </h2>
          <p className="text-xl text-[#6b6b6b] dark:text-muted-foreground max-w-2xl mx-auto">
            Lightning-fast fashion delivery within <span className="text-[#8b9c6d] dark:text-[#a8b88d] font-semibold">4.5 km radius</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Enhanced Map Visual */}
          <div className="flex-1 relative animate-fade-up animation-delay-200">
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              {/* Glow Effect Behind Map */}
              <div className="absolute inset-0 bg-[#8b9c6d]/20 dark:bg-primary/20 rounded-3xl blur-3xl scale-95" />
              
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full drop-shadow-2xl relative z-10"
              >
                {/* Base Map Background with Gradient */}
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" className="[stop-color:#f5f1e8] dark:[stop-color:#1a1f16]" />
                    <stop offset="100%" className="[stop-color:#e8dfc8] dark:[stop-color:#252a20]" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                <rect x="0" y="0" width="400" height="400" rx="24" fill="url(#mapGradient)" />
                
                {/* Decorative Map Pattern - Straight Professional Grid */}
                <g stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.12">
                  {/* Horizontal roads */}
                  <line x1="20" y1="80" x2="380" y2="80" />
                  <line x1="20" y1="120" x2="380" y2="120" strokeDasharray="4,2" />
                  <line x1="20" y1="160" x2="380" y2="160" />
                  <line x1="20" y1="200" x2="380" y2="200" strokeWidth="1.5" />
                  <line x1="20" y1="240" x2="380" y2="240" />
                  <line x1="20" y1="280" x2="380" y2="280" strokeDasharray="4,2" />
                  <line x1="20" y1="320" x2="380" y2="320" />
                  
                  {/* Vertical roads */}
                  <line x1="80" y1="20" x2="80" y2="380" />
                  <line x1="120" y1="20" x2="120" y2="380" strokeDasharray="4,2" />
                  <line x1="160" y1="20" x2="160" y2="380" />
                  <line x1="200" y1="20" x2="200" y2="380" strokeWidth="1.5" />
                  <line x1="240" y1="20" x2="240" y2="380" />
                  <line x1="280" y1="20" x2="280" y2="380" strokeDasharray="4,2" />
                  <line x1="320" y1="20" x2="320" y2="380" />
                </g>

                {/* Main Highways - Straight Professional */}
                <g stroke="hsl(var(--primary))" strokeWidth="2.5" opacity="0.2" strokeLinecap="round">
                  <line x1="50" y1="200" x2="350" y2="200" />
                  <line x1="200" y1="50" x2="200" y2="350" />
                  <line x1="100" y1="100" x2="300" y2="300" strokeDasharray="6,3" />
                </g>

                {/* Launch Circle - Animated Rings */}
                <g className="animate-pulse">
                  <circle 
                    cx="200" 
                    cy="200" 
                    r="150" 
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2" 
                    opacity="0.15"
                    strokeDasharray="8,8"
                  />
                  <circle 
                    cx="200" 
                    cy="200" 
                    r="145" 
                    fill="none" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="10" 
                    opacity="0.1"
                  />
                </g>
                
                {/* Launch Circle - Main Coverage Area */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="140" 
                  fill="hsl(var(--primary))" 
                  fillOpacity="0.12"
                  stroke="hsl(var(--primary))" 
                  strokeWidth="3"
                  filter="url(#glow)"
                />

                {/* Center Hub - Enhanced */}
                <g filter="url(#glow)">
                  <circle cx="200" cy="200" r="12" fill="hsl(var(--primary))" opacity="0.3" />
                  <circle cx="200" cy="200" r="8" fill="hsl(var(--primary))" />
                  <circle cx="200" cy="200" r="4" fill="hsl(var(--background))" />
                </g>

                {/* Location Dots with Pulse Effect */}
                <g fill="hsl(var(--primary))">
                  {[
                    [160, 120], [260, 110], [280, 140], [290, 170], [300, 210],
                    [220, 160], [260, 190], [240, 230], [180, 250], [140, 220],
                    [130, 260], [200, 300]
                  ].map(([x, y], i) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r="6" opacity="0.2" className="animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                      <circle cx={x} cy={y} r="4" />
                    </g>
                  ))}
                </g>

                {/* Sector Labels - Enhanced Typography */}
                <g style={{ fontSize: '10px', fontWeight: 600 }} className="fill-[#4a5a3a] dark:fill-white">
                  <text x="160" y="130" textAnchor="middle">Udyog Vihar</text>
                  <text x="260" y="120" textAnchor="middle">Sector 18</text>
                  <text x="280" y="150" textAnchor="middle">DLF Ph 3</text>
                  <text x="290" y="180" textAnchor="middle">DLF Ph 2</text>
                  <text x="300" y="220" textAnchor="middle">DLF Ph 1</text>
                  <text x="220" y="170" textAnchor="middle">Sarhol</text>
                  <text x="260" y="200" textAnchor="middle">Sikanderpur</text>
                  <text x="240" y="240" textAnchor="middle">Sector 28</text>
                  <text x="180" y="260" textAnchor="middle">Sector 29</text>
                  <text x="140" y="230" textAnchor="middle">Sector 14</text>
                  <text x="130" y="270" textAnchor="middle">Sector 15</text>
                  <text x="200" y="310" textAnchor="middle">Sector 44</text>
                </g>

                {/* Radius Badge - Enhanced */}
                <g>
                  <rect x="160" y="342" width="80" height="28" rx="14" fill="hsl(var(--primary))" filter="url(#glow)" />
                  <text x="200" y="361" textAnchor="middle" fill="hsl(var(--primary-foreground))" style={{ fontSize: '12px', fontWeight: 700 }}>
                    4.5 KM
                  </text>
                </g>

                {/* City Label */}
                <text x="200" y="388" textAnchor="middle" className="fill-[#3d3d3d] dark:fill-white" style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '0.1em' }}>
                  GURUGRAM
                </text>
              </svg>
            </div>
          </div>

          {/* Enhanced Info Card */}
          <div className="lg:w-96 w-full animate-fade-up animation-delay-400">
            <div className="rounded-3xl p-8 bg-[#f5f1e8]/80 dark:bg-[#2a2f23]/80 backdrop-blur-xl border-2 border-[#8b9c6d]/20 dark:border-white/10 shadow-2xl hover:shadow-[#8b9c6d]/20 dark:hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#8b9c6d] dark:bg-primary shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3d3d3d] dark:text-white">
                    Coverage Areas
                  </h3>
                  <p className="text-sm text-[#6b6b6b] dark:text-muted-foreground">12 Active Zones</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {launchAreas.map((area, index) => (
                  <span
                    key={area}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-[#8b9c6d]/15 dark:bg-primary/15 text-[#4a5a3a] dark:text-primary border border-[#8b9c6d]/30 dark:border-primary/30 transition-all duration-300 hover:bg-[#8b9c6d]/25 dark:hover:bg-primary/25 hover:scale-105 hover:shadow-md cursor-default animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#8b9c6d]/10 dark:bg-primary/10 border border-[#8b9c6d]/20 dark:border-primary/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#8b9c6d] dark:bg-primary flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3d3d3d] dark:text-white mb-1">
                      Expansion Coming Soon
                    </p>
                    <p className="text-xs text-[#6b6b6b] dark:text-muted-foreground leading-relaxed">
                      We're rapidly expanding to more sectors across NCR. Stay tuned for updates!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchZoneMap;