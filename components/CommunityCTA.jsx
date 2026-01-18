"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function CommunityCTA() {
  return (
    <section className={`relative w-full py-24 overflow-hidden bg-[#0F0F29] ${poppins.className}`}>
      
      {/* --- Background Effects --- */}
      {/* Large Glow Behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#32317D] rounded-full blur-[120px] opacity-40 pointer-events-none" />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* 1. Social Proof Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0F0F29] bg-gray-300 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Member" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-gray-300 text-xs font-semibold tracking-wide pl-1">
              Join 500+ Founders in Bihar
            </span>
          </motion.div>

          {/* 2. Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          >
            Don't Build in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6e6cdb] to-[#a3a1f7]">Silence.</span> <br />
            Build with a <span className="relative inline-block">
              Community.
              <Sparkles className="absolute -top-6 -right-8 text-yellow-400 w-8 h-8 animate-pulse hidden md:block" />
            </span>
          </motion.h2>

          {/* 3. Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Access exclusive mentorship, find your co-founder, and get the support you need to turn your idea into Bihar's next unicorn.
          </motion.p>

          {/* 4. The Button (CTA) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0F0F29] rounded-full text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              <span>Join Community</span>
              <div className="w-8 h-8 rounded-full bg-[#0F0F29] text-white flex items-center justify-center group-hover:bg-[#32317D] transition-colors">
                <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Border/Separator to blend into Footer */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}