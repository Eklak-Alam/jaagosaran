import { startups } from "@/data/StartupData";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Globe, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  CheckCircle2,
  Share2,
  Linkedin,
  Twitter
} from "lucide-react";
import Link from "next/link";
import { Poppins, Playfair_Display } from "next/font/google";

// Font Configuration
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"] 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["600", "700"], 
  style: ["italic", "normal"] 
});

// Helper to fetch data
async function getStartup(slug) {
  return startups.find((s) => s.slug === slug) || null;
}

export default async function StartupDetail({ params }) {
  const { slug } = await params;
  const startup = await getStartup(slug);

  if (!startup) return notFound();

  return (
    // Added overflow-x-hidden to preventing horizontal scrolling on mobile
    <main className={`bg-[#FAFAFA] min-h-screen w-full overflow-x-hidden ${poppins.className} text-[#1a1a4b]`}>
      
      {/* --- HERO SECTION --- */}
      {/* Mobile: min-h-[60vh] to be shorter. Desktop: h-[75vh] */}
      <div className="relative min-h-[60vh] md:h-[75vh] w-full flex items-end overflow-hidden group">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
              src={startup.images[0]} 
              alt={startup.name} 
              className="w-full h-full object-cover transition-transform duration-[3s] ease-in-out group-hover:scale-105" 
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F29] via-[#0F0F29]/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full pb-12 md:pb-24">
            <div className="mb-6 md:mb-8">
              <Link 
                href="/startups" 
                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-semibold hover:bg-white hover:text-[#1a1a4b] transition-all"
              >
                <ArrowLeft size={14} /> Back to Portfolio
              </Link>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10">
                <div className="max-w-4xl space-y-3 md:space-y-4">
                    <span className="inline-block px-3 py-1 rounded-md bg-[#32317D] text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2">
                      {startup.sector}
                    </span>
                    {/* Mobile: text-4xl (prevent cutoff). Desktop: text-8xl */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] break-words">
                        {startup.name}
                    </h1>
                    <p className={`text-xl md:text-3xl text-gray-200 font-medium ${playfair.className} italic opacity-90 leading-tight`}>
                        {startup.tagline}
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* --- CONTENT WRAPPER --- */}
      {/* Mobile: -mt-10 (less overlap). Desktop: -mt-20 */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 md:-mt-20 relative z-20 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
        
          {/* --- LEFT COLUMN (Main Content) --- */}
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            
            {/* 1. About Card */}
            {/* Mobile: p-6. Desktop: p-10 */}
            <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
               <h2 className="text-xl md:text-2xl font-bold text-[#1a1a4b] mb-4 md:mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#32317D] rounded-full"></span>
                  The Mission
               </h2>
               <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {startup.description}
               </p>
            </div>

            {/* 2. Features Grid */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#1a1a4b] mb-4 md:mb-6 px-1 md:px-2">Key Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                  {startup.features.map((feat, i) => (
                    <div key={i} className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F0F2FF] rounded-lg md:rounded-xl flex items-center justify-center text-[#32317D] mb-3 md:mb-4">
                            {feat.icon}
                        </div>
                        <h4 className="font-bold text-[#1a1a4b] mb-1 md:mb-2 text-sm md:text-base">{feat.title}</h4>
                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* 3. Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 h-auto md:h-96">
                {startup.images[1] && (
                  <div className="relative h-64 md:h-full rounded-2xl md:rounded-3xl overflow-hidden group shadow-md">
                    <img 
                      src={startup.images[1]} 
                      alt="Gallery 1" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                )}
                {startup.images[2] && (
                  <div className="relative h-64 md:h-full rounded-2xl md:rounded-3xl overflow-hidden group shadow-md hidden sm:block">
                    <img 
                      src={startup.images[2]} 
                      alt="Gallery 2" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                )}
            </div>
          </div>

          {/* --- RIGHT COLUMN (Sidebar) --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className="lg:sticky lg:top-8 space-y-6">
              
              {/* Founder Profile */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-1 shadow-lg shadow-gray-200/50 border border-gray-100">
                <div className="bg-[#32317D] rounded-[16px] md:rounded-[20px] p-5 md:p-6 text-white relative overflow-hidden">
                    {/* Decorative pattern */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-5 md:mb-6">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-[#32317D] flex items-center justify-center font-bold text-lg md:text-xl border-2 border-white/30 shrink-0">
                              {startup.founder.name[0]}
                          </div>
                          <div>
                              <p className="text-[10px] md:text-xs uppercase tracking-wider text-white/60 font-semibold">Visionary</p>
                              <h3 className="text-base md:text-lg font-bold">{startup.founder.name}</h3>
                              <p className="text-xs md:text-sm text-white/80">{startup.founder.role}</p>
                          </div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 mb-4">
                        <p className="text-xs md:text-sm leading-relaxed text-gray-100 italic opacity-90">
                           "{startup.founder.bio}"
                        </p>
                      </div>

                      <div className="flex gap-2 justify-end">
                         <button className="p-2 bg-white/20 hover:bg-white hover:text-[#32317D] rounded-full transition-colors">
                           <Linkedin size={16} />
                         </button>
                         <button className="p-2 bg-white/20 hover:bg-white hover:text-[#32317D] rounded-full transition-colors">
                           <Twitter size={16} />
                         </button>
                      </div>
                    </div>
                </div>
              </div>

              {/* Startup Details Card */}
              <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200 shadow-sm">
                 <h4 className="font-bold text-gray-900 mb-5 md:mb-6 flex items-center gap-2 text-sm md:text-base">
                    <CheckCircle2 size={18} className="text-[#32317D]" /> 
                    Venture Details
                 </h4>
                 
                 <div className="space-y-4 md:space-y-5">
                    <div className="flex items-start justify-between group">
                       <div className="flex items-center gap-3 text-gray-500 text-xs md:text-sm font-medium">
                          <div className="p-1.5 md:p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                            <Globe size={14} className="text-gray-400 group-hover:text-blue-600"/>
                          </div>
                          Website
                       </div>
                       <a href={startup.website} target="_blank" className="text-[#32317D] font-semibold text-xs md:text-sm hover:underline flex items-center gap-1">
                          Visit Site <ExternalLink size={12}/>
                       </a>
                    </div>

                    <div className="w-full h-[1px] bg-gray-100" />

                    <div className="flex items-start justify-between group">
                       <div className="flex items-center gap-3 text-gray-500 text-xs md:text-sm font-medium">
                          <div className="p-1.5 md:p-2 bg-gray-50 rounded-lg group-hover:bg-green-50 transition-colors">
                            <Calendar size={14} className="text-gray-400 group-hover:text-green-600"/>
                          </div>
                          Founded
                       </div>
                       <span className="text-gray-900 font-semibold text-xs md:text-sm">{startup.founded}</span>
                    </div>

                    <div className="w-full h-[1px] bg-gray-100" />

                    <div className="flex items-start justify-between group">
                       <div className="flex items-center gap-3 text-gray-500 text-xs md:text-sm font-medium">
                          <div className="p-1.5 md:p-2 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors">
                            <MapPin size={14} className="text-gray-400 group-hover:text-red-600"/>
                          </div>
                          HQ
                       </div>
                       <span className="text-gray-900 font-semibold text-xs md:text-sm text-right">{startup.location}</span>
                    </div>
                 </div>

                 <button className="w-full mt-6 md:mt-8 py-2.5 md:py-3 rounded-xl bg-[#1a1a4b] text-white font-semibold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-[#32317D] transition-colors shadow-lg shadow-[#32317D]/20">
                    <Share2 size={16} /> Share Profile
                 </button>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}