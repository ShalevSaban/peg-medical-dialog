import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-medical-bg.jpg";
import pegLogo from "@/assets/peg-medical-logo.png";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Medical Technology Network" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12 pt-8 pb-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6 animate-fade-in">
            <img
              src={pegLogo}
              alt="PEG Medical Logo"
              className="h-40 md:h-52 w-auto"
            />
          </div>
          
          <h1 className="text-white mb-6 animate-fade-in-up">
            Global Medical Device Business Development & Distribution Partnerships
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed animate-fade-in-up delay-100">
            40+ years connecting manufacturers, distributors, and healthcare providers across international markets
          </p>
          <div className="animate-fade-in-up delay-200">
            <Button 
              variant="cta" 
              size="xl" 
              onClick={scrollToContact}
              className="font-semibold"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Diagonal Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
