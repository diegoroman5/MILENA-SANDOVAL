
import React, { useState } from 'react';

const eventPhotos = [
  { id: "fil", label: "FIL Guadalajara", src: "/images/evento-fil.jpeg" },
  { id: "empresas", label: "Visitas a Empresas", src: "/images/evento-empresas.jpeg" },
  { id: "colegios", label: "Talleres en Colegios", src: "/images/evento-colegios.jpeg" },
  { id: "conferencias", label: "Conferencias", src: "/images/evento-conferencias.jpeg" },
  { id: "club", label: "Club de Lectura", src: "/images/evento-club.jpeg" },
];

const AccordionItem: React.FC<{
  item: typeof eventPhotos[0];
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}> = ({ item, isActive, onMouseEnter, onClick }) => {
  return (
    <div
      className={`
        relative h-[320px] md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border border-gold/10 hover:border-gold/30
        ${isActive ? 'flex-[4]' : 'flex-[0.6]'}
      `}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      <img
        src={item.src}
        alt={item.label}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

      {/* Label - horizontal when active, vertical when collapsed */}
      <span
        className={`
          absolute text-cream font-bold whitespace-nowrap
          transition-all duration-500 ease-in-out
          ${isActive
            ? 'bottom-6 left-6 text-lg md:text-xl rotate-0 opacity-100'
            : 'bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-xs md:text-sm tracking-widest uppercase -rotate-90 origin-center opacity-80'
          }
        `}
      >
        {item.label}
      </span>
    </div>
  );
};

export const EventsSection: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Text */}
          <div className="space-y-5 md:space-y-8">
            <div className="flex items-center gap-3 text-gold font-bold tracking-[0.2em] text-[10px] uppercase">
              <span className="w-8 h-px bg-gold" />
              Eventos Especiales
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
              Participación en <em className="text-gold italic not-italic">Eventos</em>
            </h2>
            
            <p className="text-cream-muted text-sm md:text-lg leading-relaxed max-w-lg">
              Milena participa en eventos especiales como la FIL (Feria Internacional del Libro de Guadalajara), visitas a empresas para talleres corporativos, colegios con programas educativos, conferencias magistrales y el Club de Lectura con formato interactivo.
            </p>

            <a 
              href="#contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-br from-gold to-gold-dark text-dark font-bold text-xs md:text-sm tracking-widest uppercase py-4 px-8 md:py-5 md:px-10 rounded-full hover:scale-105 transition-all shadow-xl"
            >
              Agendar Evento
            </a>
          </div>

          {/* Right: Accordion */}
          {/* Desktop: hover accordion */}
          <div className="hidden md:flex gap-2 h-[420px] lg:h-[480px]">
            {eventPhotos.map((ev, idx) => (
              <AccordionItem
                key={ev.id}
                item={ev}
                isActive={idx === active}
                onMouseEnter={() => setActive(idx)}
                onClick={() => setActive(idx)}
              />
            ))}
          </div>

          {/* Mobile: horizontal scroll cards */}
          <div className="flex md:hidden overflow-x-auto gap-3 pb-4 no-scrollbar scroll-smooth -mx-5 px-5">
            {eventPhotos.map((ev) => (
              <div key={ev.id} className="flex-shrink-0 w-56 sm:w-64 relative rounded-xl overflow-hidden border border-gold/10">
                <div className="aspect-[4/3]">
                  <img src={ev.src} alt={ev.label} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <h4 className="text-cream font-bold text-sm">{ev.label}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
