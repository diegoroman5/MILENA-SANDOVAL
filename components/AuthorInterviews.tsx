import React from 'react';

// Lista de entrevistas a autores
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

// Componente reutilizable para mostrar una tarjeta de video
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

// Componente principal para seccion de entrevistas a autores
export const AuthorInterviews: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="author-interviews">
      <div className="container mx-auto px-6">
        <div className="space-y-24">
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
