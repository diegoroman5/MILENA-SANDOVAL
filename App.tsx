import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MediaLogos } from './components/MediaLogos';
import { LatestMedia } from './components/LatestMedia';
import { About } from './components/About';
import { Services } from './components/Services';
import { Evolucione } from './components/Evolucione';
import { BrainGymnasticsCourse } from './components/BrainGymnasticsCourse';
import { ReadingClub } from './components/ReadingClub';
import { SocialSection } from './components/SocialSection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { NeuroAssistant } from './components/NeuroAssistant';
import { EventosEspeciales } from './components/ui/interactive-image-accordion';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-dark">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <MediaLogos />
        <About />
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent w-full" />
        <Services />
        <Evolucione />
        <BrainGymnasticsCourse />
        <LatestMedia />
        <EventosEspeciales />
        <ReadingClub />
        <SocialSection />
        <ContactCTA />
      </main>

      <Footer />
      
      <NeuroAssistant />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gold/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-teal/5 blur-[100px] animate-pulse-glow delay-1000" />
      </div>
    </div>
  );
};

export default App;
