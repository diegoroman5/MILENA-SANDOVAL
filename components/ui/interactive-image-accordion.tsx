import React, { useState } from 'react';

// Data para el acordeón de eventos especiales de Milena
const accordionItems = [
  {
    id: 1,
    title: 'FIL Guadalajara',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2028&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Visitas a Empresas',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Talleres en Colegios',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Conferencias',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Club de Lectura',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop',
  },
];

// Componente de Item del Acordeón
const AccordionItem = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Imagen de fondo */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x450/C8A04A/ffffff?text=Imagen'; }}
      />
      {/* Overlay oscuro para mejor legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Texto del título */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// Componente Principal
export function EventosEspeciales() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleItemHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-24 md:py-32 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Lado izquierdo: Contenido de texto */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center gap-3 text-gold font-bold tracking-[0.2em] text-[10px] uppercase mb-6">
              <span className="w-8 h-px bg-gold" />
              Eventos Especiales
              <span className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight mb-6 text-cream">
              Participación en <em className="text-gold italic not-italic">Eventos</em>
            </h2>
            <p className="text-lg text-cream-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Milena participa en eventos especiales como la FIL (Feria Internacional del Libro de Guadalajara), 
              visitas a empresas para talleres corporativos, colegios con programas educativos, 
              conferencias magistrales y el Club de Lectura con formato interactivo.
            </p>
            <div className="mt-8">
              <a
                href="#contacto"
                className="inline-block bg-gradient-to-br from-gold to-gold-dark text-dark font-bold text-sm tracking-widest uppercase py-5 px-10 rounded-full hover:scale-105 transition-all shadow-[0_20px_40px_-15px_rgba(200,160,74,0.4)]"
              >
                Agendar Evento
              </a>
            </div>
          </div>

          {/* Lado derecho: Acordeón de imágenes */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
