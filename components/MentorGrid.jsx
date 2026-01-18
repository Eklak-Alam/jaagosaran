"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Poppins, Playfair_Display } from "next/font/google";

// --- SWIPER IMPORTS ---
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// --- FONTS ---
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "800"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"], style: ["italic", "normal"] });

// --- DATA ---
const mentors = [
  {
    name: "Amit Kumar",
    role: "Founder",
    company: "UnicornCo",
    ex: "Ex-Google",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop",
  },
  {
    name: "Sneha Roy",
    role: "Partner",
    company: "BiharFund",
    ex: "IIM Ahmedabad",
    image: "https://images.unsplash.com/photo-1573496359-136d9420f9d1?w=600&h=800&fit=crop",
  },
  {
    name: "Rahul Singh",
    role: "CTO",
    company: "TechGiant",
    ex: "IIT Patna",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop",
  },
  {
    name: "Priya Das",
    role: "VP Product",
    company: "Amazon",
    ex: "Ex-Flipkart",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop",
  },
  {
    name: "Vikram Malhotra",
    role: "Angel Investor",
    company: "EarlyStage",
    ex: "Serial Entrepreneur",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop",
  },
  {
    name: "Anjali Verma",
    role: "Head of AI",
    company: "DataCorp",
    ex: "Ex-Microsoft",
    image: "https://images.unsplash.com/photo-1598550832205-d5b5fe415702?w=600&h=800&fit=crop",
  },
];

// --- CARD COMPONENT ---
function MentorCard({ data }) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] bg-gray-100 select-none">
      <img 
        src={data.image} 
        alt={data.name} 
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] grayscale-0 brightness-100 scale-100 md:grayscale md:brightness-[0.85] md:group-hover:grayscale-0 md:group-hover:brightness-100 md:group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1014] via-transparent to-transparent opacity-40 md:opacity-80 md:group-hover:opacity-40 transition-opacity duration-500" />
      <div className="absolute top-5 left-5 z-20">
        <span className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-wider uppercase shadow-lg">
          {data.ex}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 transition-transform duration-500 ease-out translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl overflow-hidden relative shadow-2xl ring-1 ring-white/10">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#32317D] to-[#619173]" />
          <h3 className="text-white font-bold text-2xl md:text-3xl mb-1 drop-shadow-sm tracking-tight">{data.name}</h3>
          <div className="flex flex-col items-start gap-1 mb-4">
            <span className="text-[#619173] font-bold text-xs uppercase tracking-widest">{data.role}</span>
            <span className="text-white/70 text-sm font-medium">@ {data.company}</span>
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-[#32317D] hover:bg-white hover:text-[#32317D] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0">
              Connect Now <Linkedin size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// --- MAIN SECTION ---
export default function InfiniteMentors() {
  return (
    <section className={`bg-[#FAFAFA] py-20 md:pt-28 md:pb-10 relative overflow-hidden ${poppins.className}`}>
      
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#32317D]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* --- HEADER --- */}
      <div className="container mx-auto px-4 mb-16 md:mb-20 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#32317D]/5 border border-[#32317D]/10 text-[#32317D] text-xs font-bold uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>We Connect you with giants</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-[#1a1b26] tracking-tighter mb-8 leading-[1]"
          >
            Access the <br className="lg:hidden sm:block"/>
            <span className="text-transparent ml-4 bg-clip-text bg-gradient-to-r from-[#32317D] to-[#4c4ab5]">
              Unaccessible.
            </span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
             <p className={`text-xl md:text-2xl text-gray-500 leading-relaxed ${playfair.className} italic`}>
               "To go fast, go alone. To go far, go together. <br className="hidden md:block" />
               <span className="text-[#32317D]/80">We connect you with giants.</span>"
             </p>
          </motion.div>

        </div>
      </div>

      {/* --- DRAGGABLE INFINITE SLIDER --- */}
      <div className="w-full relative pl-4 md:pl-0">
        <Swiper
          spaceBetween={24}
          slidesPerView={'auto'} // Allows slides to be their natural width
          loop={true} // Infinite loop
          speed={3000} // Speed of the auto-scroll
          freeMode={true} // Allows smooth dragging
          autoplay={{
            delay: 0, // Continuous scrolling
            disableOnInteraction: false, // Continues scrolling after you drag
            pauseOnMouseEnter: true // Pauses when you hover (optional, good for UX)
          }}
          modules={[Autoplay, FreeMode]}
          className="mentor-swiper !overflow-visible"
        >
          {mentors.map((mentor, i) => (
            <SwiperSlide key={i} className="!w-[280px] md:!w-[340px] pt-4 pb-12 px-2">
               <MentorCard data={mentor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* CSS Override for continuous linear scrolling */}
      <style jsx global>{`
        .mentor-swiper .swiper-wrapper {
          transition-timing-function: linear;
        }
      `}</style>

    </section>
  );
}