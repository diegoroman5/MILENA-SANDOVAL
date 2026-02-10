
import React from 'react';

const features = [
  { icon: "🧠", title: "Hábitos / Cerebro", desc: "Reprograma tus hábitos con neurociencia aplicada." },
  { icon: "📖", title: "Procesamiento de la lectura", desc: "Técnicas para leer más rápido con mayor comprensión." },
  { icon: "📚", title: "Estrategias de estudio", desc: "Métodos probados para retener y aplicar lo aprendido." },
  { icon: "⏳", title: "+10 años", desc: "Más de una década transformando la forma de aprender." }
];

export const Evolucione: React.FC = () => {
  return (
    <section id="evolucione" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 text-gold font-bold tracking-[0.2em] text-[10px] uppercase py-2 px-6 rounded-full">
              ⚡ Programa principal
            </div>

            <h2 className="font-serif text-5xl md:text-6xl font-semibold leading-tight">
              Evolucione
            </h2>

            <p className="text-lg text-cream-muted leading-relaxed max-w-xl">
              El curso de metaaprendizaje más completo de Latinoamérica. Con más de 15,000 graduados, Evolucione transforma tu forma de leer, comprender y memorizar información.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, idx) => (
                <div key={idx} className="bg-dark-card/50 backdrop-blur-sm p-5 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all group">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform inline-block">{f.icon}</div>
                  <h4 className="text-xs font-bold text-cream mb-1 tracking-wide uppercase">{f.title}</h4>
                  <p className="text-[11px] text-cream-muted leading-tight">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="https://www.evolucioneleyendo.mx/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gradient-to-br from-gold to-gold-dark text-dark font-bold text-sm tracking-widest uppercase py-5 px-10 rounded-full hover:scale-105 transition-all shadow-[0_20px_40px_-15px_rgba(200,160,74,0.4)]"
              >
                Conoce el programa completo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Video Embed */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 blur-2xl rounded-[40px] opacity-50" />
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-gold/30 shadow-2xl group bg-dark-card">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/QD-TFQkrulk" 
                title="Evolucione - Presentación"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-2 border-gold/0 group-hover:border-gold/20 transition-all rounded-3xl" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-gold/20 rounded-br-3xl pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-gold/20 rounded-tl-3xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
