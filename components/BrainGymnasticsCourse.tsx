
import React from 'react';

export const BrainGymnasticsCourse: React.FC = () => {
  return (
    <section id="gimnasia-ema" className="py-16 md:py-32 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1 relative group">
            <div className="relative aspect-video rounded-2xl md:rounded-[40px] overflow-hidden border border-gold/20 shadow-2xl bg-dark-surface z-10">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/0edke-GiNw8" 
                title="EMA - Exponencialmente Ágil"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            {/* Milena image - hidden on small mobile to avoid overflow */}
            <div className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-10 w-32 md:w-64 z-20 pointer-events-none hidden sm:block">
              <img 
                src="/images/milena-cerebro.png" 
                alt="Milena Sandoval EMA Expert" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            
            <div className="absolute -top-8 -left-8 md:-top-10 md:-left-10 w-32 h-32 md:w-40 md:h-40 bg-gold/10 blur-[80px] rounded-full" />
          </div>

          <div className="space-y-6 md:space-y-10 order-1 lg:order-2">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="h-px w-6 md:w-8 bg-gold" />
              <span className="text-gold font-bold tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] uppercase">Programa Élite EMA</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-7xl font-semibold leading-tight">
              Exponencialmente <br />
              <em className="text-gold italic not-italic">Ágil</em>
            </h2>
            
            <p className="text-sm md:text-xl text-cream-muted leading-relaxed font-light">
              Entrena tu cerebro como un músculo. EMA es el método de gimnasia cerebral que Milena ha llevado a las pantallas internacionales para maximizar el enfoque.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1.5 md:space-y-2 border-l border-gold/20 pl-3 md:pl-4">
                <h4 className="text-gold font-bold text-[10px] md:text-xs tracking-widest uppercase">Activación</h4>
                <p className="text-xs md:text-sm text-cream-muted">Ejercicios de coordinación que despiertan ambos hemisferios.</p>
              </div>
              <div className="space-y-1.5 md:space-y-2 border-l border-gold/20 pl-3 md:pl-4">
                <h4 className="text-gold font-bold text-[10px] md:text-xs tracking-widest uppercase">Enfoque</h4>
                <p className="text-xs md:text-sm text-cream-muted">Técnicas para eliminar la distracción en entornos de alta presión.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 pt-2 md:pt-6">
              <a 
                href="https://hotmart.com/es/marketplace/productos/exponencialmente-agil-gimnasia-cerebral/C103235667V" 
                target="_blank"
                className="w-full sm:w-auto text-center bg-gold text-dark font-bold text-[10px] tracking-[0.2em] uppercase px-8 py-4 md:px-10 md:py-5 rounded-full hover:scale-105 transition-all shadow-lg"
              >
                Inscribirme al Curso
              </a>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-[10px] font-bold text-cream/50 uppercase tracking-widest">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Acceso Inmediato
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
