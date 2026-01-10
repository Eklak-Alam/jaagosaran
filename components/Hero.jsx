"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Cloud, Globe, Building2, Zap, Trees, Box, TrendingUp, Cpu } from "lucide-react";
import { Poppins, Playfair_Display } from "next/font/google";

// --- FONTS ---
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], style: ["italic"] });

// --- DATA ---
const partners = [
  { name: "Startup Bihar", icon: <Building2 size={24} /> },
  { name: "Digital India", icon: <Globe size={24} /> },
  { name: "AWS Startups", icon: <Cloud size={24} /> },
  { name: "Google Cloud", icon: <Cpu size={24} /> },
  { name: "Sequoia", icon: <Trees size={24} /> },
  { name: "Y Combinator", icon: <Box size={24} /> },
  { name: "Inc42", icon: <Zap size={24} /> },
  { name: "YourStory", icon: <TrendingUp size={24} /> }
];

export default function Hero() {
  return (
    // Changed h-screen to min-h-[100dvh] for better mobile browser support (fixes address bar issues)
    <section className={`relative w-full min-h-[100dvh] pt-20 flex flex-col justify-between bg-[#FAFAFA] overflow-hidden ${poppins.className}`}>
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-[#32317D]/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      {/* --- HERO CONTENT (Centered Vertically) --- */}
      {/* Removed explicit pt-10 to allow true centering via Flexbox */}
      <div className="flex-grow flex items-center justify-center relative z-10 px-4">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center w-full">

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            // Adjusted text sizes: text-3xl for mobile, 5xl for tablet, 8xl for desktop
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#1a1a4b] leading-[1.15] mb-6"
          >
            Building the Next <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#32317D] to-[#4c4ab5] bg-clip-text text-transparent">
              Unicorns
            </span>{" "}
            of{" "}
            <span className={`relative inline-block ${playfair.className} text-[#32317D] px-2`}>
              Bihar
              <motion.svg
                viewBox="0 0 200 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-[#619173]"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <path d="M2 7C2 7 101 -0.5 198 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-gray-500 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed mb-8 px-2"
          >
            Jaago Saran creates the infrastructure for <span className="text-[#32317D] font-semibold">hyper-growth</span>. 
            We connect ambitious founders with global capital.
          </motion.p>

          {/* --- BUTTONS (Mobile: Vertical Stack | Desktop: Row) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            // Changed: flex-col for mobile (stacked), flex-row for sm (side-by-side)
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            {/* Primary Button */}
            <Link href="/join" className="group relative w-full sm:w-auto px-6 py-3.5 md:px-8 bg-[#32317D] rounded-full text-white font-bold overflow-hidden shadow-lg shadow-[#32317D]/20 active:scale-95 transition-transform flex justify-center items-center">
              <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                Start Journey <ArrowRight className="w-4 h-4" />
              </span>
              <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-[shimmer_3s_infinite]" />
            </Link>

            {/* Secondary Button */}
            <button className="flex justify-center items-center gap-2 w-full sm:w-auto px-6 py-3.5 md:px-8 rounded-full bg-white text-[#32317D] font-bold border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all text-sm md:text-base shadow-sm">
              <Play fill="currentColor" className="opacity-80 w-3 h-3 md:w-4 md:h-4" />
              <span>Watch Video</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* --- ENDLESS SCROLL MARQUEE --- */}
      <div className="w-full bg-white/60 backdrop-blur-sm border-t border-[#32317D]/10 py-3 md:py-6 relative z-20">
        <div className="relative flex w-full overflow-hidden mask-gradient-sides">
          
          {/* Marquee Track */}
          <div className="flex gap-8 md:gap-16 px-4 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3 select-none opacity-80 hover:opacity-100 transition-opacity">
                {/* Icon */}
                <div className="text-[#32317D] scale-75 md:scale-100">
                  {partner.icon}
                </div>
                {/* Name */}
                <span className="text-sm md:text-xl font-bold text-[#32317D] whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          {/* Fade Edges */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* --- ANIMATION STYLES --- */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}