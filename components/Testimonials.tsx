
import React from 'react';

interface Testimonial {
  stars: string;
  quote: string;
  author: string;
  role: string;
}

interface TestimonialsProps {
  id?: string;
  title: string;
  subtitle: string;
  data: Testimonial[];
  lightBackground?: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ id, title, subtitle, data, lightBackground }) => {
  return (
    <section id={id} className={`py-20 md:py-24 ${lightBackground ? 'bg-dark-card/20' : 'bg-dark'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center items-center gap-3 text-gold font-bold tracking-[0.2em] text-[9px] uppercase">
            <span className="w-8 h-px bg-gold" />
            {subtitle}
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold">
            {title.split(' ').map((word, i) => 
              word.toLowerCase() === 'graduados' || word.toLowerCase() === 'mentes' ? 
              <em key={i} className="text-gold italic not-italic"> {word}</em> : ` ${word}`
            )}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.map((t, idx) => (
            <div key={idx} className="bg-dark-card p-10 rounded-[32px] border border-gold/10 hover:border-gold/30 transition-all duration-500 group flex flex-col justify-between">
              <div>
                <div className="text-gold text-[10px] tracking-widest mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{t.stars}</div>
                <blockquote className="text-cream-muted italic leading-relaxed mb-8 text-sm md:text-base">
                  "{t.quote}"
                </blockquote>
              </div>
              <div className="pt-6 border-t border-gold/5">
                <div className="text-cream font-bold text-sm tracking-wide">{t.author}</div>
                <div className="text-[10px] text-gold font-medium tracking-widest mt-1 uppercase opacity-60 group-hover:opacity-80 transition-opacity">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
