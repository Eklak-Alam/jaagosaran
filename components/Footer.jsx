"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Heart, 
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Components ---

const SocialLink = ({ icon: Icon, href }) => (
  <a 
    href={href}
    className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all duration-300 hover:border-emerald-500 hover:shadow-emerald-100"
  >
    <div className="absolute inset-0 translate-y-full bg-emerald-500 transition-transform duration-300 ease-out group-hover:translate-y-0" />
    <Icon 
      size={18} 
      className="relative z-10 transition-colors duration-300 group-hover:text-white" 
    />
  </a>
);

const FooterLink = ({ href, children }) => (
  <Link href={href} className="group flex items-center gap-2 text-[15px] font-medium text-zinc-500 transition-colors hover:text-emerald-600">
    <span className="relative flex h-1.5 w-1.5 items-center justify-center overflow-hidden rounded-full bg-zinc-300 transition-all duration-300 group-hover:w-4 group-hover:bg-transparent">
       <ArrowRight size={12} className="absolute -translate-x-full text-emerald-600 transition-transform duration-300 group-hover:translate-x-0" />
    </span>
    <span>{children}</span>
  </Link>
);

// --- Main Footer ---

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Grid Items Stagger
      gsap.from(".footer-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });

      // 2. Bottom Bar Reveal
      gsap.from(".footer-bottom", {
        opacity: 0,
        y: 10,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "bottom 95%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Increased padding-bottom (pb-10) to ensure content isn't cut off on mobile
    <footer ref={footerRef} className="relative overflow-hidden bg-white pt-20 border-t border-zinc-100">
      
      {/* Background Decor (Blurry blob only, no Green Line) */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-emerald-50/80 blur-[120px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 lg:gap-12 mb-20">
          
          {/* 1. BRAND SECTION */}
          <div className="footer-item col-span-2 lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="relative h-10 w-32 mb-6 block">
              <Image 
                src="/logo.png" 
                alt="Jaago Saran" 
                fill 
                className="object-contain object-left" 
              />
            </Link>
            <p className="text-zinc-500 leading-relaxed text-[15px] mb-8 max-w-sm">
              We are building the digital backbone of Saran. Join us in creating a sustainable ecosystem for future generations.
            </p>
            
            <div className="flex items-center gap-3">
              <SocialLink icon={Linkedin} href="#" />
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Instagram} href="#" />
              <SocialLink icon={Mail} href="mailto:hello@example.com" />
            </div>
          </div>

          {/* 2. LINKS: COMPANY */}
          <div className="footer-item col-span-1 lg:col-span-2 lg:col-start-6">
            <h3 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-wider">Company</h3>
            <div className="flex flex-col space-y-4">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
              <FooterLink href="#">Newsroom</FooterLink>
            </div>
          </div>

          {/* 3. LINKS: RESOURCES */}
          <div className="footer-item col-span-1 lg:col-span-2">
            <h3 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-wider">Resources</h3>
            <div className="flex flex-col space-y-4">
              <FooterLink href="#">Community</FooterLink>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Status</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
            </div>
          </div>

          {/* 4. CONTACT */}
          <div className="footer-item col-span-2 lg:col-span-3 lg:col-start-10">
            <h3 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-wider">Get in Touch</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 text-sm">Headquarters</h4>
                  <p className="text-sm text-zinc-500 mt-1 leading-relaxed">
                    Innovation Tower, 4th Floor,<br/> Saran, Bihar 841301
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 text-sm">Phone</h4>
                  <p className="text-sm text-zinc-500 mt-1 hover:text-emerald-600 transition-colors cursor-pointer">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}