
import React from 'react';

const guests = [
  { id: "0mCnn2mSdlg", title: "Invitado Especial 1" },
  { id: "lZJBTgwziLY", title: "Invitado Especial 2" },
  { id: "cd_XTwdyfq8", title: "Invitado Especial 3" },
  { id: "lptCl31mRWc", title: "Invitado Especial 4" },
  { id: "Fqp1Uzv38Ec", title: "Invitado Especial 5" }
];

const authors = [
  { id: "DWnBbw_7jRg", title: "Entrevista Autor 1" },
  { id: "7bAJf6YYoVY", title: "Entrevista Autor 2" },
  { id: "TVaTPqyI1SE", title: "Entrevista Autor 3" },
  { id: "pJUmLyZTHHU", title: "Entrevista Autor 4" },
  { id: "LlI8feMpARQ", title: "Entrevista Autor 5" },
  { id: "RNrH_OnJHlc", title: "Entrevista Autor 6" },
  { id: "1hm-vn0np8s", title: "Entrevista Autor 7" },
  { id: "OmwaISJscQU", title: "Entrevista Autor 8" },
  { id: "ZDmcndQGG_k", title: "Entrevista Autor 9" }
];

// Added React.FC type to handle the 'key' prop correctly in TypeScript and resolve property assignment errors
const VideoCard: React.FC<{ id: string; title: string }> = ({ id, title }) => (
  <a 
    href={`https://www.youtube.com/watch?v=${id}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-shrink-0 w-64 md:w-80 group"
  >
    <div className="relative aspect-video rounded-2xl overflow-hidden border border-gold/10 mb-4 shadow-lg group-hover:border-gold/40 transition-all">
      <img 
        src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-12 h-12 bg-gold/90 rounded-full flex items-center justify-center text-dark transform scale-75 group-hover:scale-100 transition-transform">
          <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </div>
      </div>
    </div>
    <h4 className="text-[10px] font-bold text-gold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">{title}</h4>
  </a>
);

export const ReadingClub: React.FC = () => {
  return (
    <section id="club" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          
          <div className="relative order-2 lg:order-1">
            <div className="bg-dark-card p-12 md:p-16 rounded-[40px] border border-gold/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-gold/10 font-serif text-8xl pointer-events-none">"</div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10">
                <div className="w-32 h-48 bg-gradient-to-br from-gold/20 to-dark-surface rounded-lg shadow-2xl border border-gold/30 flex-shrink-0 transform -rotate-6 hover:rotate-0 transition-transform duration-500 overflow-hidden flex items-center justify-center text-center p-4">
                  <div className="text-[10px] font-bold text-gold uppercase tracking-tighter">Lectura del Mes</div>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-serif text-2xl text-cream mb-2 italic">Desbloquea tu potencial</h4>
                  <p className="text-xs text-gold font-bold tracking-widest uppercase mb-4">Recomendación Actual</p>
                  <p className="text-cream-muted text-sm leading-relaxed">
                    "La lectura es para la mente lo que el ejercicio es para el cuerpo." En nuestro club, convertimos cada página en un entrenamiento de alto rendimiento.
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent w-full mb-8" />
              
              <p className="font-serif text-xl italic text-cream leading-relaxed text-center">
                "Somos el resultado de las personas con las que hablamos y convivimos a diario"
              </p>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="flex items-center gap-3 text-gold font-bold tracking-[0.2em] text-[10px] uppercase">
              <span className="w-8 h-px bg-gold" />
              Mentalidad Colectiva
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">
              Club de <em className="text-gold italic not-italic">Lectura</em>
            </h2>
            
            <p className="text-cream-muted text-lg leading-relaxed">
              No es solo leer más rápido, es leer con propósito. Únete a una comunidad de líderes que buscan transformar su conocimiento en sabiduría aplicada.
            </p>

            <button className="w-full md:w-auto inline-flex items-center justify-center gap-4 bg-gradient-to-br from-gold to-gold-dark text-dark font-bold text-sm tracking-widest uppercase py-5 px-12 rounded-full hover:scale-105 transition-all shadow-xl">
              Unirme a la Comunidad
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Video Sections */}
        <div className="space-y-24">
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-3xl font-semibold">Invitados <em className="text-gold italic not-italic">Especiales</em></h3>
              <div className="h-px flex-1 mx-8 bg-gold/10 hidden md:block" />
            </div>
            <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar scroll-smooth">
              {guests.map((v, i) => (
                <VideoCard key={v.id} id={v.id} title={`Invitado en el Club ${i + 1}`} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-3xl font-semibold">Entrevistas a <em className="text-gold italic not-italic">Autores</em></h3>
              <div className="h-px flex-1 mx-8 bg-gold/10 hidden md:block" />
            </div>
            <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar scroll-smooth">
              {authors.map((v, i) => (
                <VideoCard key={v.id} id={v.id} title={`Entrevista con Autor ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
