
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MediaLogos } from './components/MediaLogos';
import { LatestMedia } from './components/LatestMedia';
import { About } from './components/About';
import { Services } from './components/Services';
import { Evolucione } from './components/Evolucione';
import { BrainGymnasticsCourse } from './components/BrainGymnasticsCourse';
import { Testimonials } from './components/Testimonials';
import { ReadingClub } from './components/ReadingClub';
import { SocialSection } from './components/SocialSection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { NeuroAssistant } from './components/NeuroAssistant';

const evolucioneTestimonials = [
  {
    stars: "★ ★ ★ ★ ★",
    quote: "Pasé de leer un libro al año a terminar uno cada dos semanas. La retención es lo que más me sorprendió del método.",
    author: "María Fernanda G.",
    role: "Empresaria, Guadalajara"
  },
  {
    stars: "★ ★ ★ ★ ★",
    quote: "La comprensión es total. Ahora disfruto leer porque realmente conecto con el autor y la información fluye.",
    author: "Jorge Luis P.",
    role: "Abogado Corporativo"
  },
  {
    stars: "★ ★ ★ ★ ★",
    quote: "Mi hijo mejoró sus calificaciones notablemente. Es el programa más completo de metaprendizaje que hemos probado.",
    author: "Carolina T.",
    role: "Padre de Familia, CDMX"
  }
];

const emaTestimonials = [
  {
    stars: "★ ★ ★ ★ ★",
    quote: "Como director, mi enfoque mejoró un 200%. La gimnasia cerebral de Milena es el hack mental que todo ejecutivo necesita.",
    author: "Roberto M.",
    role: "Director de RH, LATAM"
  },
  {
    stars: "★ ★ ★ ★ ★",
    quote: "Siento mi mente más joven y rápida. La agilidad para tomar decisiones bajo presión ha cambiado drásticamente.",
    author: "Lucía R.",
    role: "Consultora Senior"
  },
  {
    stars: "★ ★ ★ ★ ★",
    quote: "Perfecto para la alta gerencia. Te da esa ventaja competitiva y claridad mental que no encuentras en otros cursos.",
    author: "Sergio V.",
    role: "Emprendedor Tech"
  }
];

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
        <Testimonials 
          title="Lo que dicen nuestros graduados" 
          subtitle="Impacto Evolucione" 
          data={evolucioneTestimonials} 
          lightBackground={true}
        />
        <BrainGymnasticsCourse />
        <Testimonials 
          title="Transformando mentes ágiles" 
          subtitle="Impacto EMA" 
          data={emaTestimonials}
        />
        <LatestMedia />
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
