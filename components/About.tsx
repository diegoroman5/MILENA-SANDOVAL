
import React from 'react';

const timeline = [
  {
    tag: "Colombia — 8 años",
    title: "Formación en medios y ventas",
    desc: "Experiencia en radio, televisión, ventas y capacitación de personal en su país natal."
  },
  {
    tag: "Brasil — 9 años",
    title: "Coach de ventas y formación",
    desc: "Trabajando en São Paulo, Curitiba, Londrina, Porto Alegre y Maringá como coach de ventas y formación de directores."
  },
  {
    tag: "México — 8+ años",
    title: "CEO de Evolucione Leyendo",
    desc: "Radicada en Guadalajara con un único propósito: hacer de México un país más lector."
  },
  {
    tag: "Internacional",
    title: "Experta en Telemundo",
    desc: "Colaboradora del programa Hoy Día, llevando la gimnasia cerebral a millones de hogares."
  }
];

export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-16 md:py-32 bg-dark-card/30">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Text */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-3 text-gold font-bold tracking-[0.2em] text-[10px] uppercase">
              <span className="w-8 h-px bg-gold" />
              Sobre Milena
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Una vida dedicada a <em className="text-gold italic not-italic">transformar</em> la forma en que aprendemos
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-cream-muted text-sm md:text-lg leading-relaxed font-light">
              <p>
                Milena Sandoval es colombiana de nacimiento, ciudadana del mundo por convicción. Con más de 25 años de experiencia internacional, ha dedicado su vida a una misión clara: hacer que las personas lean más, aprendan mejor y desbloqueen el verdadero potencial de su cerebro.
              </p>
              <p>
                Es Neuro-Experta en Alta Performance, creadora de contenido con casi 2 millones de seguidores en TikTok, y colaboradora habitual del programa Hoy Día de Telemundo, donde comparte ejercicios de gimnasia cerebral que transforman la agilidad mental de millones de espectadores.
              </p>
            </div>

            <blockquote className="pt-2 md:pt-4">
              <p className="font-serif text-lg md:text-xl italic text-gold">
                "Trabaja más en ti que en tu proyecto y verás tus resultados."
              </p>
            </blockquote>
          </div>

          {/* Right Column: Timeline */}
          <div className="space-y-4 md:space-y-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="group flex gap-4 md:gap-6 items-start">
                <div className="flex flex-col items-center mt-1.5 md:mt-2 flex-shrink-0">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gold/60 group-hover:bg-gold transition-colors border-2 border-dark" />
                  {idx < timeline.length - 1 && <div className="w-px h-full bg-gold/10 min-h-[50px] md:min-h-[60px]" />}
                </div>
                <div className="pb-4 md:pb-8">
                  <div className="text-[9px] md:text-[10px] font-bold text-gold tracking-widest uppercase mb-1.5 md:mb-2">{item.tag}</div>
                  <h4 className="text-cream font-bold text-base md:text-lg mb-1 md:mb-2">{item.title}</h4>
                  <p className="text-xs md:text-sm text-cream-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
