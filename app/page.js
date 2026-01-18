import AboutUs from "@/components/About";
import CommunityCTA from "@/components/CommunityCTA";
import EventsGallery from "@/components/EventsGallery";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MentorGrid from "@/components/MentorGrid";
import Navbar from "@/components/Navbar";
import ProblemSolution from "@/components/ProblemSolution";

export default function Home() {
  return (
    <main className="bg-white min-h-screen scroll-smooth">

      {/* 2. Hero Section */}
      <Hero />
      
      {/* 3. About Section (Linked from Navbar) */}
      <section id="about" className="scroll-mt-20">
        <AboutUs />
      </section>
      
      {/* 4. Problem Solution */}
      <ProblemSolution />
      
      {/* 5. Mentorship Section */}
      <section id="mentorship" className="scroll-mt-20">
        <MentorGrid />
      </section>
      
      {/* 6. Events Section */}
      <section id="events" className="scroll-mt-20">
        <EventsGallery />
      </section>
      
      {/* 7. Community Section */}
      <section id="community" className="scroll-mt-20">
        <CommunityCTA />
      </section>

    </main>
  );
}