"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook,
  Check
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// --- FLOATING LABEL COMPONENT (UNCHANGED BUT STYLED BETTER) ---
const FloatingInput = ({ label, type = "text", id, textarea = false }) => {
  return (
    <div className="relative w-full group">
      {textarea ? (
        <textarea
          id={id}
          rows="5"
          className="peer block w-full rounded-xl border-2 border-gray-100 bg-gray-50/30 px-4 py-4 text-sm text-[#1a1a4b] font-medium focus:border-[#32317D] focus:bg-white focus:outline-none focus:ring-0 appearance-none transition-all resize-none placeholder-transparent"
          placeholder=" "
        />
      ) : (
        <input
          type={type}
          id={id}
          className="peer block w-full rounded-xl border-2 border-gray-100 bg-gray-50/30 px-4 py-4 text-sm text-[#1a1a4b] font-medium focus:border-[#32317D] focus:bg-white focus:outline-none focus:ring-0 appearance-none transition-all placeholder-transparent"
          placeholder=" "
        />
      )}
      
      <label
        htmlFor={id}
        className={`
          absolute left-4 top-4 z-10 origin-[0] -translate-y-7 scale-75 transform bg-white px-2 text-xs font-semibold text-gray-400 duration-300 
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal
          peer-focus:left-4 peer-focus:-translate-y-7 peer-focus:scale-85 peer-focus:bg-white peer-focus:text-[#32317D] peer-focus:font-bold
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default function Contact() {
  return (
    <section className={`min-h-screen bg-[#F8F9FC] pt-32 md:pb-24 pb-10 px-4 md:px-8 ${poppins.className}`}>
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <motion.span 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="inline-block py-1.5 px-4 rounded-full bg-[#32317D]/5 border border-[#32317D]/10 text-[#32317D] text-xs font-bold tracking-widest uppercase mb-4"
        >
          Contact Us
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-[#1a1a4b] tracking-tight"
        >
          Have an Idea? <br className="hidden md:block"/>
          Let's <span className="text-[#32317D] relative inline-block">
            Collaborate.
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#32317D]/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/60 border border-white">
          
          {/* --- LEFT COLUMN: Contact Info (Stretches to match height) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-2/5 bg-[#32317D] p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden min-h-[600px]"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full -ml-10 -mb-10 blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-white/80 mb-12 text-lg leading-relaxed font-light">
                Whether you're a founder seeking funding, a student looking for mentorship, or a partner wanting to join the ecosystem — we're here to listen.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-[#32317D] transition-colors duration-300 border border-white/10">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-white/50 tracking-wider mb-1 font-bold">Call Us</p>
                    <p className="font-semibold text-lg">+91 98765 43210</p>
                    <p className="text-sm text-white/60">Mon-Fri, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-[#32317D] transition-colors duration-300 border border-white/10">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-white/50 tracking-wider mb-1 font-bold">Email Us</p>
                    <p className="font-semibold text-lg">hello@jaagosaran.com</p>
                    <p className="text-sm text-white/60">Online Support 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-[#32317D] transition-colors duration-300 border border-white/10">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-white/50 tracking-wider mb-1 font-bold">Visit HQ</p>
                    <p className="font-semibold text-lg leading-snug">Innovation Tower, 4th Floor,<br/>Patna, Bihar 800001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons Footer */}
            <div className="mt-16 relative z-10">
              <p className="text-sm font-semibold mb-5 text-white/80">Connect on Socials</p>
              <div className="flex gap-4">
                {[<Linkedin key="l"/>, <Twitter key="t"/>, <Instagram key="i"/>, <Facebook key="f"/>].map((icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#32317D] flex items-center justify-center transition-all duration-300 border border-white/10 hover:-translate-y-1"
                  >
                    {React.cloneElement(icon, { size: 18 })}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: The Form (Stretches to match height) --- */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="lg:w-3/5 p-8 md:p-14 bg-white"
          >
            <form className="h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#1a1a4b] mb-8">Send us a Message</h3>
              
              <div className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput id="firstname" label="First Name" />
                  <FloatingInput id="lastname" label="Last Name" />
                </div>
                
                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput id="email" label="Email Address" type="email" />
                  <FloatingInput id="phone" label="Phone Number" type="tel" />
                </div>

                {/* Row 3 - Added for Height Balance */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput id="company" label="Company / Startup Name" />
                  <FloatingInput id="role" label="Your Role / Designation" />
                </div>

                {/* Subject */}
                <FloatingInput id="subject" label="Subject" />

                {/* Message */}
                <FloatingInput id="message" label="How can we help you?" textarea={true} />
              </div>

              {/* Radio Interest */}
              <div className="mt-8 mb-8">
                <span className="block text-sm font-bold text-gray-700 mb-4">I am interested in:</span>
                <div className="flex flex-wrap gap-3">
                  {["Mentorship", "Funding", "Events", "Partnership", "General Inquiry"].map((tag) => (
                    <label key={tag} className="cursor-pointer group">
                      <input type="radio" name="interest" className="peer sr-only" />
                      <span className="px-5 py-2.5 rounded-full border-2 border-gray-100 text-sm font-medium text-gray-500 peer-checked:bg-[#32317D] peer-checked:text-white peer-checked:border-[#32317D] transition-all hover:border-[#32317D]/30 block select-none">
                        {tag}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Privacy Checkbox & Button */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-auto">
                 <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-[#32317D] peer-checked:border-[#32317D] transition-colors"></div>
                      <Check size={12} className="text-white absolute top-1 left-1 opacity-0 peer-checked:opacity-100 pointer-events-none" />
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-[#32317D] transition-colors">
                      I agree to the Privacy Policy.
                    </span>
                 </label>

                <button 
                  type="button" 
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#32317D] text-white rounded-xl font-bold tracking-wide hover:bg-[#252466] transition-all duration-300 shadow-xl shadow-indigo-900/10 hover:shadow-2xl hover:-translate-y-1 w-full md:w-auto"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}