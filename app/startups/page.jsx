"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, User } from "lucide-react";
import { startups } from "@/data/StartupData"; 
import { Poppins, Playfair_Display } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], style: ["italic"] });

// Animation Variants for smooth entry
const containerVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVar = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 60, damping: 20 } 
  }
};

export default function StartupListing() {
  return (
    <div className={`min-h-screen bg-slate-50 pt-16 relative overflow-hidden ${poppins.className}`}>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#E6E8F5] to-transparent -z-10" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#32317D]/5 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto pt-24 pb-20 px-6 md:px-8">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-[#1a1a4b] mb-6 leading-tight"
          >
            Empowering the <br className="hidden md:block"/>
            <span className={`text-[#32317D] relative ${playfair.className} px-2`}>
              Grassroots
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#32317D]/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
            of Bihar
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            Explore the ventures transforming industries from agriculture to edtech.
          </motion.p>
        </div>

        {/* --- GRID SECTION --- */}
        <motion.div 
          variants={containerVar}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {startups.map((startup) => (
            <motion.div
              key={startup.id}
              variants={cardVar}
              className="group relative flex flex-col h-full"
            >
              <Link href={`/startups/${startup.slug}`} className="flex flex-col h-full">
                <div className="relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 h-full flex flex-col">
                  
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={startup.images[0]} 
                      alt={startup.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#1a1a4b]/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-[#1a1a4b] shadow-sm">
                      {startup.sector}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    
                    {/* Title & Arrow */}
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-[#1a1a4b] group-hover:text-[#32317D] transition-colors">
                          {startup.name}
                        </h3>
                        <p className={`text-sm text-[#32317D] font-medium mt-1 ${playfair.className}`}>
                          {startup.tagline}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#32317D] group-hover:text-white transition-all duration-300 transform group-hover:-rotate-45">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {startup.description}
                    </p>

                    {/* Divider */}
                    <div className="mt-auto pt-6 border-t border-slate-100">
                      <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                        
                        {/* Founder Info */}
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-full bg-slate-100 text-slate-600">
                            <User size={14} />
                          </div>
                          <span>{startup.founder.name}</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{startup.location}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-20 text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 text-[#32317D] font-semibold hover:text-[#1a1a4b] transition-colors border-b border-[#32317D]/30 pb-0.5 hover:border-[#32317D]"
          >
            Want to list your startup? Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}