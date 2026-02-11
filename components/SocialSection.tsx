
import React from 'react';
import { Instagram, Youtube, Linkedin, Music2, Facebook, ExternalLink } from 'lucide-react';

const socials = [
  { 
    name: "TikTok", 
    handle: "@milenasandovall", 
    count: "1.9M", 
    label: "seguidores",
    Icon: Music2,
    color: "group-hover:text-white",
    bgHover: "group-hover:bg-gradient-to-br group-hover:from-pink-500/20 group-hover:to-purple-500/20",
    link: "https://www.tiktok.com/@milenasandovall" 
  },
  { 
    name: "Instagram", 
    handle: "@milena2.sandovall", 
    count: "245K", 
    label: "comunidad",
    Icon: Instagram,
    color: "group-hover:text-pink-400",
    bgHover: "group-hover:bg-gradient-to-br group-hover:from-pink-500/10 group-hover:to-orange-500/10",
    link: "https://www.instagram.com/milena2.sandovall" 
  },
  { 
    name: "Facebook", 
    handle: "Milena Sandoval", 
    count: "+45K", 
    label: "fans",
    Icon: Facebook,
    color: "group-hover:text-blue-500",
    bgHover: "group-hover:bg-gradient-to-br group-hover:from-blue-600/10 group-hover:to-indigo-500/10",
    link: "https://www.facebook.com/Milena2.Sandovall" 
  },
  { 
    name: "YouTube", 
    handle: "@MilecturaSandovall", 
    count: "+2.6K", 
    label: "suscriptores",
    Icon: Youtube,
    color: "group-hover:text-red-500",
    bgHover: "group-hover:bg-gradient-to-br group-hover:from-red-500/10 group-hover:to-red-900/10",
    link: "https://www.youtube.com/@MilecturaSandovall" 
  },
  { 
    name: "LinkedIn", 
    handle: "Milena Sandoval", 
    count: "Pro",
    label: "networking",
    Icon: Linkedin,
    color: "group-hover:text-blue-400",
    bgHover: "group-hover:bg-gradient-to-br group-hover:from-blue-500/10 group-hover:to-blue-900/10",
    link: "https://www.linkedin.com/in/milena-sandoval-arias-41b0161b3/" 
  }
];

export const SocialSection: React.FC = () => {
  return (
    <section id="redes" className="py-16 md:py-28 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex justify-center items-center gap-3 text-gold font-bold tracking-[0.2em] text-[10px] uppercase mb-4 md:mb-6">
            <span className="w-6 md:w-8 h-px bg-gold" />
            Ecosistema Digital
            <span className="w-6 md:w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight mb-3 md:mb-4">
            Conecta con <em className="text-gold italic not-italic">Milena</em>
          </h2>
          <p className="text-cream-muted text-sm md:text-lg font-light max-w-xl mx-auto">
            Únete a la comunidad de neuro-entrenamiento más influyente de Latinoamérica
          </p>
        </div>

        {/* Social Grid - 2 cols mobile / 3+2 centered on mobile / 5 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
          {socials.map((s, idx) => (
            <a 
              key={idx} 
              href={s.link} 
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl md:rounded-3xl border border-gold/10 bg-dark-card/80 p-4 md:p-6 transition-all duration-500 hover:border-gold/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/5 ${s.bgHover} ${idx >= 4 ? 'col-span-1' : ''}`}
            >
              <div className="flex flex-col items-center text-center gap-2 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-dark-surface border border-gold/10 flex items-center justify-center transition-all duration-500 group-hover:border-gold/30 group-hover:scale-110">
                  <s.Icon className={`w-4 h-4 md:w-5 md:h-5 text-cream/50 transition-colors duration-500 ${s.color}`} />
                </div>
                
                <div className="font-serif text-2xl md:text-3xl font-bold text-cream group-hover:text-gold transition-colors duration-500">
                  {s.count}
                </div>
                
                <div>
                  <div className="text-[10px] md:text-xs font-bold text-cream mb-0.5">{s.name}</div>
                  <div className="text-[9px] md:text-[10px] text-cream-muted truncate max-w-[100px] md:max-w-none">{s.handle}</div>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                  <ExternalLink className="w-3.5 h-3.5 text-gold" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
