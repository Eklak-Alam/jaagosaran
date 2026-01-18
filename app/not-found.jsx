"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Poppins, Playfair_Display } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], style: ["italic"] });

export default function NotFound() {
  return (
    <main className={`min-h-screen bg-[#F8F9FC] flex items-center justify-center p-4 relative overflow-hidden ${poppins.className}`}>
      
      {/* --- Background Decor --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#32317D]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-3xl w-full text-center relative z-10">
        
        {/* 1. The Big 404 Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative"
        >
          <h1 className="text-[120px] md:text-[200px] font-extrabold text-[#1a1a4b] leading-none tracking-tighter select-none opacity-5">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
             <span className={`text-4xl md:text-6xl text-[#32317D] ${playfair.className}`}>
               Oops!
             </span>
          </div>
        </motion.div>

        {/* 2. Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 md:-mt-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a1a4b] mb-4">
            We can't seem to find that page.
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            The startup you are looking for might have pivoted, moved, or never existed in the first place.
          </p>
        </motion.div>

        {/* 3. Action Buttons */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="/" 
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-[#32317D] text-white rounded-full text-sm font-bold tracking-wide hover:bg-[#252466] transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <Home size={18} />
            Return Home
          </Link>
          
          <Link 
            href="/startups" 
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-bold tracking-wide hover:bg-gray-50 transition-all hover:border-gray-300 w-full sm:w-auto justify-center"
          >
            <Search size={18} />
            Browse Startups
          </Link>
        </motion.div>

      </div>
    </main>
  );
}