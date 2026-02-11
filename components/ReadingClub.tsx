
import React from 'react';

const clubVideos = [
  { id: "0mCnn2mSdlg", title: "Club de Lectura con Mónica Gudiño" },
  { id: "lZJBTgwziLY", title: "Club de Lectura con Maite Doria" },
  { id: "cd_XTwdyfq8", title: "Club de Lectura con Memo Serrano" },
  { id: "lptCl31mRWc", title: "Club de Lectura con César Suárez Uribe" },
  { id: "Fqp1Uzv38Ec", title: "Club de Lectura con Rocío Rodríguez" }
];

const authors = [
  { id: "DWnBbw_7jRg", title: "Entrevista con Gaby Pérez Islas" },
  { id: "7bAJf6YYoVY", title: "Entrevista con Alex Toledo" },
  { id: "TVaTPqyI1SE", title: "Entrevista con María Dueñas" },
  { id: "pJUmLyZTHHU", title: "Entrevista con César Suárez" },
  { id: "LlI8feMpARQ", title: "Entrevista con Enrique Rojas" },
  { id: "RNrH_OnJHlc", title: "Entrevista con Carlos Jaramillo" },
  { id: "1hm-vn0np8s", title: "Entrevista con Vilma Núñez" },
  { id: "OmwaISJscQU", title: "Entrevista con Ismael Cala" },
  { id: "ZDmcndQGG_k", title: "Entrevista con Dr. Mario Alonso Puig" }
];

const VideoCard: React.FC<{ id: string; title: string }> = ({ id, title }) => (
  <a 
    href={`https://www.youtube.com/watch?v=${id}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-shrink-0 w-52 sm:w-60 md:w-72 lg:w-80 group"
  >
    <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-gold/10 mb-3 md:mb-4 shadow-lg group-hover:border-gold/40 transition-all">
      <img 
        src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/90 rounded-full flex items-center justify-center text-dark transform scale-75 group-hover:scale-100 transition-transform">
          <svg className="w-5 h-5 md:w-6 md:h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </div>
      </div>
    </div>
    <h4 className="text-[9px] md:text-[10px] font-bold text-gold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">{title}</h4>
  </a>
);

export const ReadingClub: React.FC = () => {
  return (
    <section id="club" className="py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">
        
        {/* Club de Lectura intro */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-14 md:mb-24">
          <div className="relative order-2 lg:order-1">
            <div className="bg-dark-card p-6 sm:p-8 md:p-16 rounded-2xl md:rounded-[40px] border border-gold/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 md:p-8 text-gold/10 font-serif text-5xl md:text-8xl pointer-events-none">"</div>
              
              <div className="flex flex-row gap-4 md:gap-8 items-start mb-6 md:mb-10">
                <div className="w-20 h-28 sm:w-24 sm:h-36 md:w-32 md:h-48 rounded-lg shadow-2xl border border-gold/30 flex-shrink-0 transform -rotate-3 md:-rotate-6 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                  <img src="/images/libro-del-mes.png" alt="Lectura del Mes - Realidad 0.0" className="w-full h-full object-cover" />
                </div>
                <div className="pt-1">
                  <h4 className="font-serif text-lg md:text-2xl text-cream mb-1 md:mb-2 italic">Realidad 0.0</h4>
                  <p className="text-[10px] md:text-xs text-gold font-bold tracking-widest uppercase mb-2 md:mb-4">Recomendación Actual</p>
                  <p className="text-cream-muted text-xs md:text-sm leading-relaxed hidden sm:block">
                    "La lectura es para la mente lo que el ejercicio es para el cuerpo." En nuestro club, convertimos cada página en un entrenamiento de alto rendimiento.
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent w-full mb-4 md:mb-8" />
              
              <p className="font-serif text-base md:text-xl italic text-cream leading-relaxed text-center">
                "Somos el resultado de las personas con las que hablamos y convivimos a diario"
              </p>
            </div>
          </div>

          <div className="space-y-5 md:space-y-8 order-1 lg:order-2">
            <div className="flex items-center gap-3 text-gold font-bold tracking-[0.2em] text-[10px] uppercase">
              <span className="w-8 h-px bg-gold" />
              Mentalidad Colectiva
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Club de <em className="text-gold italic not-italic">Lectura</em>
            </h2>
            
            <p className="text-cream-muted text-sm md:text-lg leading-relaxed">
              No es solo leer más rápido, es leer con propósito. Únete a una comunidad de líderes que buscan transformar su conocimiento en sabiduría aplicada.
            </p>

            <a 
              href="https://whatsapp.com/channel/0029VadYSoJ30LKGw5aeky3J"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-br from-gold to-gold-dark text-dark font-bold text-xs md:text-sm tracking-widest uppercase py-4 px-8 md:py-5 md:px-12 rounded-full hover:scale-105 transition-all shadow-xl"
            >
              Unirme a la Comunidad
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Video sections */}
        <div className="space-y-12 md:space-y-24">
          {/* Club de Lectura Mensual */}
          <div>
            <div className="flex items-center justify-between mb-5 md:mb-8">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold">Club de Lectura <em className="text-gold italic not-italic">Mensual</em></h3>
              <div className="h-px flex-1 mx-4 md:mx-8 bg-gold/10 hidden sm:block" />
            </div>
            <div className="flex overflow-x-auto gap-3 md:gap-6 pb-4 md:pb-8 no-scrollbar scroll-smooth -mx-5 px-5 sm:mx-0 sm:px-0">
              {clubVideos.map((v) => (
                <VideoCard key={v.id} id={v.id} title={v.title} />
              ))}
            </div>
          </div>

          {/* Entrevistas a Autores */}
          <div>
            <div className="flex items-center justify-between mb-5 md:mb-8">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold">Entrevistas a <em className="text-gold italic not-italic">Autores</em></h3>
              <div className="h-px flex-1 mx-4 md:mx-8 bg-gold/10 hidden sm:block" />
            </div>
            <div className="flex overflow-x-auto gap-3 md:gap-6 pb-4 md:pb-8 no-scrollbar scroll-smooth -mx-5 px-5 sm:mx-0 sm:px-0">
              {authors.map((v) => (
                <VideoCard key={v.id} id={v.id} title={v.title} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
