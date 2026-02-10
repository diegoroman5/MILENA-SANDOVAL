
import React from 'react';

const socials = [
  { 
    name: "TikTok", 
    handle: "@milenasandovall", 
    count: "1.9M", 
    label: "Followers",
    icon: "🎵",
    gridClass: "md:col-span-2 md:row-span-2",
    theme: "from-white/5 to-transparent",
    link: "https://www.tiktok.com/@milenasandovall" 
  },
  { 
    name: "Instagram", 
    handle: "@milena2.sandovall", 
    count: "245K", 
    label: "Community",
    icon: "📸",
    gridClass: "md:col-span-1",
    theme: "from-gold/10 to-transparent",
    link: "https://www.instagram.com/milena2.sandovall" 
  },
  { 
    name: "YouTube", 
    handle: "Neuro-Tips", 
    count: "500+", 
    label: "Videos",
    icon: "📺",
    gridClass: "md:col-span-1",
    theme: "from-red-500/5 to-transparent",
    link: "https://www.youtube.com/@MilecturaSandovall" 
  },
  { 
    name: "LinkedIn", 
    handle: "Professional", 
    count: "Expert", 
    label: "Credential",
    icon: "💼",
    gridClass: "md:col-span-1",
    theme: "from-blue-500/5 to-transparent",
    link: "https://www.linkedin.com/in/milena-sandoval-arias-41b0161b3/" 
  },
  { 
    name: "Facebook", 
    handle: "Comunidad", 
    count: "+100K", 
    label: "Fans",
    icon: "👥",
    gridClass: "md:col-span-1",
    theme: "from-indigo-500/5 to-transparent",
    link: "https://www.facebook.com/Milena2.Sandovall" 
  }
];

export const SocialSection: React.FC = () => {
  return (
    <section id="redes" className="py-32 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-bold tracking-[0.4em] text-[10px] uppercase">Ecosistema Digital</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-semibold leading-tight mb-8">
            Impacto que <em className="text-gold italic not-italic">trasciende</em> pantallas
          </h2>
          <p className="text-cream-muted text-xl font-light max-w-2xl">
            Únete a la comunidad de neuro-entrenamiento más influyente de Latinoamérica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socials.map((s, idx) => (
            <a 
              key={idx} 
              href={s.link} 
              target="_blank"
              className={`group relative overflow-hidden rounded-[40px] border border-gold/10 bg-dark-card p-10 transition-all duration-700 hover:border-gold/40 hover:-translate-y-2 ${s.gridClass}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{s.icon}</span>
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-gold tracking-widest uppercase mb-1">{s.name}</div>
                    <div className="text-[9px] text-cream-muted uppercase tracking-tighter">{s.handle}</div>
                  </div>
                </div>

                <div className="mt-12">
                  <div className="font-serif text-6xl md:text-7xl font-bold text-cream group-hover:text-gold transition-colors duration-500 mb-2">
                    {s.count}
                  </div>
                  <div className="text-[10px] font-bold text-cream-muted uppercase tracking-[0.3em] opacity-40">
                    {s.label}
                  </div>
                </div>

                <div className="absolute top-10 right-10 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
