
import React from 'react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contacto" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-card to-gold/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <div className="flex justify-center items-center gap-3 text-gold font-bold tracking-[0.2em] text-[10px] uppercase mb-10">
          <span className="w-8 h-px bg-gold" />
          Trabajemos juntos
          <span className="w-8 h-px bg-gold" />
        </div>

        <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight mb-8">
          ¿Listo para <em className="text-gold italic not-italic">evolucionar</em><br />tu mente?
        </h2>

        <p className="text-lg text-cream-muted leading-relaxed mb-12">
          Ya sea que busques transformar tu lectura, llevar gimnasia cerebral a tu empresa o escuela, o simplemente comenzar a entrenar tu cerebro — estoy aquí para ayudarte.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="mailto:milena@evolucioneleyendo.mx" 
            className="inline-flex items-center gap-4 bg-gradient-to-br from-gold to-gold-dark text-dark font-bold text-sm tracking-widest uppercase py-5 px-12 rounded-full hover:scale-105 transition-all shadow-[0_20px_40px_-15px_rgba(200,160,74,0.4)]"
          >
            Escríbeme
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a 
            href="https://www.evolucioneleyendo.mx/" 
            target="_blank"
            className="inline-flex items-center gap-4 bg-transparent border border-gold/40 text-gold font-bold text-sm tracking-widest uppercase py-5 px-12 rounded-full hover:bg-gold/5 hover:border-gold transition-all"
          >
            Visitar Evolucione
          </a>
        </div>
      </div>
    </section>
  );
};
