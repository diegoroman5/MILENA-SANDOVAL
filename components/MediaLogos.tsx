
import React from 'react';

const logos = [
  "Telemundo", "Hoy Día", "Planeta Libros", "Penguin Random House", "Radio Nacional", 
  "Telemundo", "Hoy Día", "Planeta Libros", "Penguin Random House", "Radio Nacional"
];

export const MediaLogos: React.FC = () => {
  return (
    <section className="py-16 bg-dark overflow-hidden border-y border-gold/5 relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />
      
      <div className="container mx-auto px-6 mb-8">
        <h3 className="text-[10px] font-bold tracking-[0.4em] text-gold/50 uppercase text-center">
          PRESENCIA GLOBAL EN MEDIOS Y EDITORIALES
        </h3>
      </div>

      <div className="flex gap-20 animate-marquee whitespace-nowrap">
        {logos.map((logo, idx) => (
          <div 
            key={idx} 
            className="font-serif text-3xl md:text-4xl font-bold text-cream/20 hover:text-gold transition-all duration-700 cursor-default px-4"
          >
            {logo}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
