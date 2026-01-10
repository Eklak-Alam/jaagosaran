import EventsGallery from "@/components/EventsGallery";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MentorGrid from "@/components/MentorGrid";
import Navbar from "@/components/Navbar";
import ProblemSolution from "@/components/ProblemSolution";


export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <MentorGrid />
      <EventsGallery />
      <Footer />
    </main>
  );
}