"use client";

import { useState, useEffect } from "react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useMotionValueEvent 
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ArrowRight, ChevronRight, Zap, MenuIcon } from "lucide-react";

// --- UPDATED LINKS STRUCTURE ---
// Note: We use "/#id" to ensure it works even if clicked from the /startups page
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Startups", href: "/startups" },
  { name: "Mentorship", href: "/#mentorship" },
  { name: "Community", href: "/#community" },
  { name: "Events", href: "/#events" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const pathname = usePathname();

  // 1. Scroll Logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 50;
    if (scrolled !== isScrolled) setScrolled(isScrolled);
  });

  // 2. Lock Body Scroll on Mobile
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-[100] flex justify-center pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full h-full pointer-events-auto pt-4 md:pt-6 px-4">
          <motion.nav
            layout
            // --- UPDATED BACKGROUND STYLING ---
            // Even when NOT scrolled, it has bg-white/60 (Glass effect), so it's readable.
            className={`
              mx-auto flex items-center justify-between
              transition-all duration-500 ease-in-out
              ${scrolled 
                ? "w-full max-w-5xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-sm rounded-full py-3 px-5 md:px-6" 
                : "w-full max-w-7xl bg-white/60 backdrop-blur-md border border-white/20 rounded-full py-3 px-5 md:px-6"
              }
            `}
          >
            {/* --- 1. LOGO --- */}
            <Link href="/" className="relative z-50 flex-shrink-0 block">
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="relative w-10 h-8 md:w-14 md:h-12"
               >
                 <Image
                   src="/logo.png" 
                   alt="Jaago Saran"
                   fill
                   className="object-contain"
                   priority
                   sizes="(max-width: 768px) 40px, 56px"
                 />
               </motion.div>
            </Link>

            {/* --- 2. DESKTOP LINKS --- */}
            <div 
              className="hidden md:flex items-center gap-8"
              onMouseLeave={() => setHoveredPath(null)}
            >
              {navLinks.map((item) => {
                // Active state logic handles both Paths and Hash links
                const isActive = pathname === item.href || (pathname === "/" && item.href.startsWith("/#"));
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseOver={() => setHoveredPath(item.href)}
                    className={`relative text-sm font-medium transition-colors duration-300
                      ${isActive ? "text-[#32317D] font-semibold" : "text-gray-600 hover:text-[#32317D]"}
                    `}
                  >
                    <span>{item.name}</span>
                    {item.href === hoveredPath && (
                      <motion.div
                        layoutId="underline"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#32317D]"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* --- 3. RIGHT ACTIONS --- */}
            <div className="flex items-center gap-3 z-50">
              <Link
                href="/join"
                className={`
                  hidden md:flex group items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all 
                  bg-[#32317D] text-white hover:bg-[#282768] shadow-lg shadow-indigo-500/20
                  hover:-translate-y-0.5 active:translate-y-0
                `}
              >
                Join Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Mobile Trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2.5 rounded-full bg-white/80 backdrop-blur-md text-[#32317D] shadow-sm border border-gray-100 active:scale-90 transition-all"
              >
                <MenuIcon size={24} />
              </button>
            </div>
          </motion.nav>
        </div>
      </motion.header>

      {/* --- 4. MOBILE DRAWER --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-[6px] z-[140]"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-2 right-2 bottom-2 w-[85%] max-w-[320px] bg-white rounded-2xl z-[150] shadow-2xl overflow-hidden flex flex-col border border-white/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50/50">
                 <div className="relative w-24 h-8">
                   <Image src="/logo2.png" alt="Logo" fill className="object-contain object-left" />
                 </div>
                 <button 
                   onClick={() => setMobileMenuOpen(false)} 
                   className="p-2 bg-white border border-gray-200 rounded-full text-gray-500 hover:text-red-500 hover:border-red-200 transition-colors"
                 >
                   <X size={20} />
                 </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {navLinks.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between p-3.5 rounded-xl transition-all border border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-100"
                      >
                        <span className="font-semibold text-sm">{item.name}</span>
                        <ChevronRight size={16} className="opacity-40" />
                      </Link>
                    </motion.div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <Link 
                  href="/join" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center justify-center w-full py-3.5 bg-[#32317D] text-white rounded-xl font-bold shadow-lg shadow-indigo-900/20 active:scale-95 transition-transform"
                >
                  Join Community
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}