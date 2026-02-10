
import React from 'react';

const services = [
  {
    icon: "🧠",
    title: "Gimnasia Cerebral",
    desc: "Ejercicios especializados que activan el lóbulo frontal, mejoran la toma de decisiones, la memoria y la agilidad mental.",
    tag: "Curso estrella"
  },
  {
    icon: "🏢",
    title: "Talleres Empresariales",
    desc: "Conferencias y talleres diseñados para empresas que buscan mejorar el rendimiento de sus colaboradores.",
    tag: "Empresas"
  },
  {
    icon: "🎓",
    title: "Programas Escolares",
    desc: "Ejercicios de gimnasia cerebral para alumnos y maestros que mejoran la concentración y el rendimiento académico.",
    tag: "Escuelas"
  },
  {
    icon: "🎤",
    title: "Conferencias",
    desc: "Presentaciones de alto impacto compartiendo las claves del metaprendizaje y cómo desbloquear el cerebro.",
    tag: "Eventos"
  },
  {
    icon: "📚",
    title: "Club de Lectura",
    desc: "Una comunidad activa de lectores que comparten, discuten y crecen juntos a través de libros seleccionados.",
    tag: "Comunidad"
  },
  {
    icon: "📺",
    title: "Contenido Digital",
    desc: "Creadora de contenido sobre gimnasia cerebral y neurociencia aplicada en medios internacionales.",
    tag: "Medios"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-dark-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
          <div className="flex justify-center items-center gap-3 text-gold font-bold tracking-[0.2em] text-[10px] uppercase">
            <span className="w-8 h-px bg-gold" />
            Servicios
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">
            Soluciones para <em className="text-gold italic not-italic">potenciar</em> el rendimiento
          </h2>
          <p className="text-cream-muted">
            Programas diseñados para empresas, escuelas e individuos que buscan llevar su capacidad cognitiva al siguiente nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-dark p-8 rounded-3xl border border-gold/5 hover:border-gold/20 transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-cream group-hover:text-gold transition-colors">{s.title}</h3>
              <p className="text-sm text-cream-muted leading-relaxed mb-6">{s.desc}</p>
              <span className="inline-block text-[10px] font-bold text-gold tracking-widest uppercase py-1.5 px-4 rounded-full border border-gold/20">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
