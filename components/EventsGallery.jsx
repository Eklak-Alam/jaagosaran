"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MapPin, ArrowDown, ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const events = [
  { id: 1, title: "Startup Mahakumbh", subtitle: "Innovating Bihar", location: "Patna", src: "/eventimage/image1.jpg" },
  { id: 2, title: "Founder's Retreat", subtitle: "Network & Chill", location: "Rajgir", src: "/eventimage/image2.jpg" },
  { id: 3, title: "Investor Meet", subtitle: "Closing Deals", location: "Jaago HQ", src: "/eventimage/image3.jpg" },
  { id: 4, title: "Tech Hackathon", subtitle: "Building Tomorrow", location: "NIT Patna", src: "/eventimage/image4.jpg" },
];

export default function FeaturedGallery() {
  const containerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(4);
  
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".header-element", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2 })
      .from(".gallery-container", { y: 40, opacity: 0, duration: 1 }, "-=0.4");
  }, { scope: containerRef });

  return (
    // ADDED overflow-hidden HERE to stop x-axis scroll
    <section ref={containerRef} className={`relative w-full overflow-hidden bg-[#FAFAFA] py-16 md:py-24 ${poppins.className}`}>
      
      {/* Background Decor - Now properly clipped */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#32317D]/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      {/* --- HEADER --- */}
      <div className="container mx-auto px-4 md:px-6 mb-12 flex flex-col items-center text-center relative z-10 max-w-full">
        <div className="header-element inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white border border-[#32317D]/10 shadow-sm text-[#32317D] text-[10px] md:text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Gallery & Highlights</span>
        </div>
        <h2 className="header-element text-3xl md:text-6xl font-extrabold text-[#1a1b26] leading-tight mb-4 break-words max-w-full">
          Moments of <span className="text-[#32317D]">Impact.</span>
        </h2>
        <p className="header-element text-sm md:text-base text-gray-500 max-w-xl mx-auto px-2">
           A visual journey through our community events, workshops, and gatherings across the state.
        </p>
      </div>

      {/* --- DESKTOP: HORIZONTAL SLIDER --- */}
      <div className="gallery-container hidden md:block w-full relative z-10">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          spaceBetween={32}
          speed={800}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
          className="w-full !overflow-visible py-10"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id} className="!w-[600px] lg:!w-[800px] group">
              <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 transition-all duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(50,49,125,0.3)] group-hover:-translate-y-2 border border-white">
                <img src={event.src} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f2a] via-[#0f0f2a]/40 to-transparent opacity-80" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <div className="flex items-center justify-between mb-2">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                           <MapPin size={12} /> {event.location}
                        </div>
                     </div>
                     <h3 className="text-4xl font-bold text-white mb-2">{event.title}</h3>
                     <p className="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{event.subtitle}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- MOBILE: VERTICAL GRID --- */}
      <div className="gallery-container md:hidden px-4 relative z-10 w-full max-w-full">
        <div className="grid grid-cols-1 gap-5 w-full">
          {events.slice(0, visibleCount).map((event) => (
            <div key={event.id} className="group relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100">
               <img src={event.src} alt={event.title} className="w-full h-full object-cover"/>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
               <div className="absolute bottom-0 left-0 w-full p-5">
                  <div className="flex items-center gap-2 text-white/80 text-[10px] font-bold uppercase tracking-wider mb-2">
                     <MapPin size={10} /> {event.location}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-none mb-1">{event.title}</h3>
                  <p className="text-gray-300 text-xs font-medium">{event.subtitle}</p>
               </div>
            </div>
          ))}
        </div>

        {visibleCount < events.length && (
           <div className="mt-8 flex justify-center">
             <button 
               onClick={handleLoadMore}
               className="group inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 shadow-xl rounded-full text-[#32317D] text-xs font-bold tracking-wide hover:bg-[#32317D] hover:text-white transition-all duration-300 active:scale-95"
             >
                Load More
                <ArrowDown size={14} className="group-hover:animate-bounce" />
             </button>
           </div>
        )}
      </div>
    </section>
  );
}