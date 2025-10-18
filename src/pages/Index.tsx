import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HorizontalGallerySection } from "@/components/HorizontalGallerySection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <HorizontalGallerySection />
      <ExpertiseSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
