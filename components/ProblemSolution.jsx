"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  AlertOctagon, 
  ArrowUpRight, 
  Target, 
  Zap,
  TrendingUp,
  FileText
} from "lucide-react";

// --- DATA ---
const dossier = [
  {
    id: "01",
    tag: "STRATEGY",
    problem: {
      title: "The Guidance Void",
      desc: "Founders have grit but lack the map. 90% fail in the 'Idea Phase' due to missing playbooks.",
      alert: "High Failure Rate"
    },
    solution: {
      title: "Precision Incubation",
      desc: "12-week military-grade accelerator. Weekly KPIs, playbooks, and 1-on-1 coaching to turn chaos into a machine.",
      stat: "12-Week Roadmap",
      icon: <Target size={24} />
    }
  },
  {
    id: "02",
    tag: "CAPITAL",
    problem: {
      title: "The Liquidity Trap",
      desc: "Tier-2 cities are ignored by VCs. Great startups die of starvation before their first cheque.",
      alert: "Zero Seed Capital"
    },
    solution: {
      title: "Direct Injection",
      desc: "We don't just introduce; we invest. Access our Angel Network & micro-VC fund earmarked for Saran.",
      stat: "₹50L - ₹2Cr Fund",
      icon: <TrendingUp size={24} />
    }
  },
  {
    id: "03",
    tag: "NETWORK",
    problem: {
      title: "The Silo Effect",
      desc: "Building in isolation is fatal. Founders lack the network for B2B deals and govt grants.",
      alert: "Network Isolation"
    },
    solution: {
      title: "Inner Circle Access",
      desc: "Instant entry to the 'Jaago Saran' elite. Connect with 50+ Unicorn founders & officials on speed dial.",
      stat: "50+ Mentors",
      icon: <Zap size={24} />
    }
  }
];

// --- CARD COMPONENT ---
function DossierCard({ data, index, range, targetScale }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]); 

  // Dynamic color for the 'Tag' based on index
  const colors = [
    { bg: "bg-[#32317D]", text: "text-[#32317D]" }, // Indigo
    { bg: "bg-[#32317D]", text: "text-[#32317D]" }, // Indigo
    { bg: "bg-[#32317D]", text: "text-[#32317D]" }, // Indigo
  ];
  const theme = colors[index % colors.length];

  return (
    <div 
      ref={container} 
      className="h-[60vh] flex items-start justify-center sticky top-[15vh]"
      // Adjust top offset slightly per card so they peek out
      style={{ top: `calc(10vh + ${index * 25}px)` }} 
    >
      <motion.div
        style={{ scale, opacity }}
        // CHANGED: Fixed height on desktop (450px) to remove blank space. Auto on mobile.
        className="relative flex flex-col md:flex-row w-full max-w-5xl h-auto md:h-[420px] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
      >
        
        {/* --- LEFT: PROBLEM (Compact) --- */}
        <div className="w-full md:w-5/12 bg-slate-50 p-6 md:p-8 flex flex-col relative border-b md:border-b-0 md:border-r border-gray-200 dashed-border-r">
           {/* Header */}
           <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-[10px] font-bold text-gray-400 bg-white border border-gray-200 px-2 py-1 rounded">
                CASE #{data.id}
              </span>
              <div className="flex items-center gap-1.5 text-red-600 bg-red-50 px-2 py-1 rounded-md border border-red-100">
                 <AlertOctagon size={14} />
                 <span className="text-[10px] font-bold uppercase">Critical</span>
              </div>
           </div>

           {/* Content */}
           <div className="flex-grow flex flex-col justify-center">
             <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">
               {data.problem.title}
             </h3>
             <p className="text-sm text-gray-500 leading-relaxed">
               {data.problem.desc}
             </p>
           </div>

           {/* Alert Footer */}
           <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                Risk: <span className="text-red-600">{data.problem.alert}</span>
              </p>
           </div>
        </div>

        {/* --- RIGHT: SOLUTION (Vibrant) --- */}
        <div className={`w-full md:w-7/12 ${theme.bg} p-6 md:p-8 flex flex-col justify-between relative overflow-hidden text-white`}>
           
           {/* Abstract Shapes */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           
           {/* Header */}
           <div className="relative z-10 flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                 {data.solution.icon}
              </div>
              <span className="opacity-60 font-bold text-[10px] tracking-[0.2em] uppercase">
                 {data.tag} PROTOCOL
              </span>
           </div>

           {/* Content */}
           <div className="relative z-10 flex-grow flex flex-col justify-center">
             <h3 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
               {data.solution.title}
             </h3>
             <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm">
               {data.solution.desc}
             </p>
           </div>

           {/* Footer Action */}
           <div className="relative z-10 flex items-center justify-between mt-6 pt-6 border-t border-white/10">
              <div>
                 <span className="block text-[10px] font-bold text-white/40 uppercase mb-0.5">
                   Guaranteed Outcome
                 </span>
                 <span className="text-lg md:text-xl font-bold text-white">
                   {data.solution.stat}
                 </span>
              </div>
              
              <button className="bg-white text-black rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                 <ArrowUpRight size={20} />
              </button>
           </div>

        </div>

      </motion.div>
    </div>
  );
}

// --- MAIN SECTION ---
export default function CompactDossier() {
  const container = useRef(null);
  
  return (
    <section ref={container} className="relative w-full bg-[#FAFAFA] pt-10 lg:pt-20 pb-36 lg:pb-10">
       
       {/* --- CENTERED HEADER (Reduced Spacing) --- */}
       <div className="container mx-auto px-6 mb-12 text-center">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="max-w-4xl mx-auto"
          >
             <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">
                   Why Ideas Fail?
                </span>
             </div>
             
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a1b26] tracking-tight leading-[1.1] mb-4">
                Identifying the <span className="font-serif italic text-green-700">Fracture.</span>
                <br />
                Engineering the <span className="text-[#32317D]">Cure.</span>
             </h2>

             <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                We analyzed the failures of 500+ startups to build a system that removes luck from the equation.
             </p>
          </motion.div>
       </div>

       {/* CARD STACK */}
       <div className="px-4">
         {dossier.map((item, i) => {
           // Smoother scaling logic
           const targetScale = 1 - ((dossier.length - i) * 0.05);
           return (
             <DossierCard 
               key={item.id} 
               data={item} 
               index={i} 
               targetScale={targetScale} 
             />
           );
         })}
       </div>
    </section>
  );
}