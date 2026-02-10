
import React from 'react';

const timeline = [
  {
    tag: "Trayectoria",
    title: "25 años de Experiencia",
    desc: "Liderando programas de transformación cognitiva en Colombia, Brasil y México."
  },
  {
    tag: "Liderazgo",
    title: "CEO de Evolucione",
    desc: "Impulsando el metaprendizaje y la lectura rápida en toda Latinoamérica."
  },
  {
    tag: "Impacto",
    title: "Voz en Medios",
    desc: "Referente en neuro-performance para Telemundo Internacional y Penguin Random House."
  }
];

export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 bg-dark-card/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,160,74,0.05),transparent_70%)]" />
            
            <div className="relative z-10 max-w-[500px]">
              {/* Imagen 3: Milena Reflexiva */}
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/milena-reflexiva.png" 
                alt="Milena Sandoval Pensamiento" 
                className="w-full h-auto drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/5 blur-3xl rounded-full" />
            </div>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-gold font-bold tracking-[0.2em] text-[10px] uppercase">
                <span className="w-8 h-px bg-gold" />
                La Mente detrás de Evolucione
              </div>
              
              <h2 className="font-serif text-5xl md:text-6xl font-semibold leading-tight">
                Una misión, <br />
                <span className="text-gold italic font-medium">mil millones</span> de mentes
              </h2>
              
              <p className="text-cream-muted text-xl leading-relaxed font-light">
                Milena Sandoval ha dedicado más de dos décadas a descifrar cómo aprendemos. Su enfoque combina la neurociencia aplicada con la alta performance ejecutiva.
              </p>
            </div>

            <div className="grid gap-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="group p-6 rounded-3xl border border-gold/5 bg-dark hover:border-gold/20 transition-all">
                  <div className="text-[10px] font-bold text-gold tracking-widest uppercase mb-2">{item.tag}</div>
                  <h4 className="text-cream font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-cream-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <blockquote className="pt-8 border-t border-gold/10">
              <p className="font-serif text-2xl italic text-gold mb-4">
                "Tu cerebro es el único activo que puede crecer infinitamente si sabes cómo entrenarlo."
              </p>
              <cite className="text-xs font-bold uppercase tracking-widest text-cream">— Milena Sandoval</cite>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
};
