
import React from 'react';

export const BrainGymnasticsCourse: React.FC = () => {
  return (
    <section id="gimnasia-ema" className="py-24 md:py-32 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1 relative group">
            {/* Video que estaba (Telemundo / Hoy Día) */}
            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-gold/20 shadow-2xl bg-dark-surface z-10">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/7h4shX3rw8g" 
                title="EMA - Gimnasia Cerebral en Telemundo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            {/* Imagen 2 de Milena (Top Rojo) como detalle de autoridad */}
            <div className="absolute -bottom-10 -right-10 w-48 md:w-64 z-20 pointer-events-none">
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/milena-rojo.png" 
                alt="Milena Sandoval EMA Expert" 
                className="w-full h-auto drop-shadow-2xl filter brightness-110"
              />
            </div>
            
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 blur-[80px] rounded-full" />
          </div>

          <div className="space-y-10 order-1 lg:order-2">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-bold tracking-[0.4em] text-[10px] uppercase">Programa Élite EMA</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-7xl font-semibold leading-tight">
              Exponencialmente <br />
              <em className="text-gold italic not-italic">Ágil</em>
            </h2>
            
            <p className="text-xl text-cream-muted leading-relaxed font-light">
              Entrena tu cerebro como un músculo. EMA es el método de gimnasia cerebral que Milena ha llevado a las pantallas internacionales para maximizar el enfoque.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 border-l border-gold/20 pl-4">
                <h4 className="text-gold font-bold text-xs tracking-widest uppercase">Activación</h4>
                <p className="text-sm text-cream-muted">Ejercicios de coordinación que despiertan ambos hemisferios.</p>
              </div>
              <div className="space-y-2 border-l border-gold/20 pl-4">
                <h4 className="text-gold font-bold text-xs tracking-widest uppercase">Enfoque</h4>
                <p className="text-sm text-cream-muted">Técnicas para eliminar la distracción en entornos de alta presión.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              <a 
                href="https://hotmart.com/es/marketplace/productos/exponencialmente-agil-gimnasia-cerebral/C103235667V" 
                target="_blank"
                className="bg-gold text-dark font-bold text-[10px] tracking-[0.2em] uppercase px-10 py-5 rounded-full hover:scale-105 transition-all shadow-lg"
              >
                Inscribirme al Curso
              </a>
              <div className="flex items-center gap-3 text-[10px] font-bold text-cream/50 uppercase tracking-widest">
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
