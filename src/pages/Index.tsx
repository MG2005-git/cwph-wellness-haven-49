
import { HeroSection } from "../components/home/HeroSection";
import { AboutSection } from "../components/home/AboutSection";
import { ProgramsSection } from "../components/home/ProgramsSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { EventsSection } from "../components/home/EventsSection";
import { ContactSection } from "../components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <EventsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
