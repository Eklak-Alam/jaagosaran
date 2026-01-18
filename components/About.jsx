"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Globe, Award, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Poppins, Playfair_Display } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], style: ["italic"] });

const stats = [
  { label: "Lives Impacted", value: "10k+", icon: <Users size={20} /> },
  { label: "Ventures Backed", value: "50+", icon: <Target size={20} /> },
  { label: "Global Mentors", value: "100+", icon: <Globe size={20} /> },
  { label: "Official NGO", value: "Govt. Reg.", icon: <Award size={20} /> },
];

export default function AboutUs() {
  return (
    <section className={`relative bg-white py-16 md:py-24 overflow-hidden ${poppins.className}`}>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#32317D]/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* --- LEFT SIDE: Visualization (Optimized for Mobile) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            // Mobile: h-[400px], Desktop: h-[600px]
            className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] flex items-center justify-center"
          >
            {/* 1. Main Container (The Phone/Card Shape) */}
            {/* Mobile: w-[90%] to prevent edge touching */}
            <div className="relative w-[90%] md:w-full max-w-md h-full bg-[#1a1a4b] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-[#32317D]/40 border-[6px] md:border-8 border-white ring-1 ring-gray-100">
                
                {/* Background Grid/Map Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]"></div>
                <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-[#32317D] rounded-full blur-[60px] opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-40 md:w-64 h-40 md:h-64 bg-purple-900 rounded-full blur-[60px] opacity-60"></div>

                {/* 2. Floating Content Inside */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 md:p-8">
                    
                    {/* LOGO: White Background Container */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl md:rounded-3xl shadow-xl flex items-center justify-center mb-6 md:mb-8 relative z-20"
                    >
                        <div className="relative w-12 h-12 md:w-16 md:h-16">
                            {/* Replace with your logo */}
                            <Image src="/logo.png" alt="Jaago Saran" fill className="object-contain" />
                        </div>
                        {/* Pulse Effect behind logo */}
                        <div className="absolute inset-0 bg-white rounded-2xl md:rounded-3xl -z-10 animate-ping opacity-20"></div>
                    </motion.div>

                    {/* Central Text */}
                    <div className="text-center mb-8 md:mb-12">
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-1 md:mb-2">Jaago Saran</h3>
                        <p className="text-white/60 text-[10px] md:text-sm tracking-wider uppercase font-medium">The Growth Engine</p>
                    </div>

                    {/* Orbiting Cards Animation - Scaled down for mobile */}
                    <div className="relative w-full h-32 md:h-48 scale-90 md:scale-100">
                        {/* Center Point */}
                        <div className="absolute top-1/2 left-1/2 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_white]"></div>
                        
                        {/* Orbit Ring 1 */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 border border-white/10 rounded-full"></div>
                        
                        {/* Orbit Ring 2 */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 border border-white/5 rounded-full"></div>

                        {/* Floating Card 1: Mentorship */}
                        <motion.div 
                           animate={{ y: [0, -10, 0] }}
                           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                           className="absolute top-[-10px] md:top-0 left-[-10px] md:left-0 bg-white/10 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded-xl flex items-center gap-2 md:gap-3 w-max"
                        >
                            <div className="p-1.5 md:p-2 bg-[#4c4ab5] rounded-lg text-white"><ShieldCheck size={14} className="md:w-4 md:h-4"/></div>
                            <div>
                                <p className="text-white text-[10px] md:text-xs font-bold">Mentorship</p>
                                <p className="text-white/50 text-[8px] md:text-[10px] hidden md:block">World-class guidance</p>
                            </div>
                        </motion.div>

                        {/* Floating Card 2: Funding */}
                        <motion.div 
                           animate={{ y: [0, 10, 0] }}
                           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                           className="absolute bottom-[-10px] md:bottom-4 right-[-10px] md:right-0 bg-white/10 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded-xl flex items-center gap-2 md:gap-3 w-max"
                        >
                            <div className="p-1.5 md:p-2 bg-[#619173] rounded-lg text-white"><TrendingUp size={14} className="md:w-4 md:h-4"/></div>
                            <div>
                                <p className="text-white text-[10px] md:text-xs font-bold">Funding</p>
                                <p className="text-white/50 text-[8px] md:text-[10px] hidden md:block">Pre-seed & Angel</p>
                            </div>
                        </motion.div>

                        {/* Floating Card 3: Innovation */}
                         <motion.div 
                           animate={{ x: [0, 5, 0] }}
                           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                           className="absolute bottom-0 left-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg flex items-center gap-2"
                        >
                            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                            <span className="text-white text-[10px] font-bold tracking-wide">INNOVATION HUB</span>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Abstract Blur */}
            <div className="absolute -z-10 w-[120%] h-[80%] bg-[#32317D]/10 rounded-[100%] blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>

          {/* --- RIGHT SIDE: The Narrative --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#32317D]/5 text-[#32317D] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
              Who We Are
            </span>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1b26] mb-6 leading-[1.1]">
              Rewriting the <br/>
              <span className={`text-[#32317D] ${playfair.className} relative`}>
                Narrative of Bihar.
              </span>
            </h2>

            <div className="space-y-4 md:space-y-6 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="text-[#32317D]">Jaago Saran</strong> is a registered NGO and a grassroots movement born from the soil of Bihar. We recognized a critical gap: talent was abundant, but the infrastructure for opportunity was missing.
              </p>
              <p>
                Our mission is to decentralize innovation. We are building the entrepreneurial backbone of Saran, ensuring the next big idea doesn't have to migrate to a metro city to survive.
              </p>
            </div>

            {/* Impact Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-5 mt-8 md:mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-5 rounded-2xl bg-gray-50 border border-transparent hover:border-[#32317D]/10 hover:bg-white hover:shadow-lg transition-all group cursor-default">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white text-[#32317D] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#32317D] group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(stat.icon, { size: 18 })}
                  </div>
                  <div>
                    <h4 className="text-lg md:text-2xl font-bold text-[#1a1b26] leading-none mb-1">{stat.value}</h4>
                    <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide font-bold group-hover:text-[#32317D] transition-colors">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 pt-6 border-t border-gray-100 flex items-center gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Founder" className="w-full h-full object-cover"/>
                    </div>
                  ))}
               </div>
               <p className="text-xs md:text-sm font-semibold text-gray-500">Joined by <span className="text-[#32317D] font-bold">500+</span> Changemakers</p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}