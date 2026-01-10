"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Poppins } from "next/font/google";

// --- FONTS (Single Font Only) ---
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

// --- DATA ---
const events = [
  { id: 1, title: "Startup Mahakumbh", subtitle: "Innovating Bihar", location: "Patna", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop" },
  { id: 2, title: "Founder's Retreat", subtitle: "Network & Chill", location: "Rajgir", src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2670&auto=format&fit=crop" },
  { id: 3, title: "Investor Meet", subtitle: "Closing Deals", location: "Jaago HQ", src: "https://images.unsplash.com/photo-1559136555-930b720e852b?q=80&w=2670&auto=format&fit=crop" },
  { id: 4, title: "Tech Hackathon", subtitle: "Building Tomorrow", location: "NIT Patna", src: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2662&auto=format&fit=crop" },
  { id: 5, title: "Women In Tech", subtitle: "Empowering Voices", location: "Chhapra", src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop" },
  { id: 6, title: "AI Summit", subtitle: "Future Intelligence", location: "Gaya", src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop" },
];

export default function FeaturedGallery() {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  // --- GSAP ANIMATION ---
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".header-element", { 
      y: 30, 
      opacity: 0, 
      duration: 0.8, 
      stagger: 0.2 
    })
    .from(".swiper-wrapper-box", { 
      y: 40, 
      opacity: 0, 
      duration: 1 
    }, "-=0.4");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={`relative min-h-screen bg-[#FAFAFA] flex flex-col justify-center py-20 overflow-hidden ${poppins.className}`}>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#32317D]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* --- CENTERED HEADER SECTION --- */}
      <div className="container mx-auto px-6 mb-16 relative z-10 flex flex-col items-center text-center">
        
        {/* 1. Badge */}
        <div className="header-element inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white border border-[#32317D]/10 shadow-sm text-[#32317D] text-xs font-bold uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Gallery & Highlights</span>
        </div>
        
        {/* 2. Main Title */}
        <h2 className="header-element text-5xl md:text-7xl font-extrabold text-[#1a1b26] leading-[1.1] tracking-tight mb-6">
          Moments of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32317D] to-[#4c4ab5]">
            Impact & Glory.
          </span>
        </h2>

        {/* 3. Subtitle */}
        <p className="header-element text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
          Explore the journey of our community through these captured memories. 
          Real people, real stories, real growth.
        </p>

      </div>

      {/* --- SWIPER SECTION --- */}
      <div className="swiper-wrapper-box w-full relative z-10 pl-4 md:pl-0">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          speed={800}
          spaceBetween={24}
          slidesPerView={'auto'}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, Navigation]}
          className="w-full !overflow-visible"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id} className="!w-[280px] md:!w-[420px] group">
              <div className="relative h-[400px] md:h-[550px] rounded-[32px] overflow-hidden border border-[#32317D]/10 bg-white shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(50,49,125,0.25)] hover:border-[#619173]/50 hover:-translate-y-2">
                
                {/* Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={event.src}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a4b]/90 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-flex items-center gap-2 text-[#619173] text-xs font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/90 p-1 rounded-full"><MapPin size={12} /></div> {event.location}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1 leading-none drop-shadow-md">
                    {event.title}
                  </h3>
                  <p className="text-gray-200 text-sm transform opacity-80 group-hover:text-white transition-colors duration-300">
                    {event.subtitle}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}