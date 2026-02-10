
import React from 'react';

export const LatestMedia: React.FC = () => {
  return (
    <section className="py-24 bg-dark-card/30 relative overflow-hidden border-b border-gold/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 text-gold font-bold tracking-[0.2em] text-[10px] uppercase">
              <span className="w-8 h-px bg-gold hidden lg:block" />
              Actualidad
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight">
              Última participación en <em className="text-gold italic not-italic">Hoy Día</em>
            </h2>
            <p className="text-cream-muted leading-relaxed">
              Sigue los ejercicios de gimnasia cerebral de Milena en Telemundo. Aprende cómo activar tu mente en vivo con la comunidad más grande de habla hispana.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gold uppercase tracking-widest">Telemundo</div>
                  <div className="text-xs text-cream-muted font-medium">Colaboración Especial</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 w-full">
            <div className="relative aspect-video rounded-[32px] overflow-hidden border border-gold/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-dark group">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/7h4shX3rw8g" 
                title="Hoy Día - Milena Sandoval"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-4 border-gold/5 group-hover:border-gold/10 transition-all rounded-[32px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
