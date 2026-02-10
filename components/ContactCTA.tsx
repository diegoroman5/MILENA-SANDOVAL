
import React from 'react';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contacto" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-card to-gold/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <div className="flex justify-center items-center gap-3 text-gold font-bold tracking-[0.2em] text-[10px] uppercase mb-10">
          <span className="w-8 h-px bg-gold" />
          Trabajemos juntos
          <span className="w-8 h-px bg-gold" />
        </div>

        <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight mb-8">
          ¿Listo para <em className="text-gold italic not-italic">evolucionar</em><br />tu mente?
        </h2>

        <p className="text-lg text-cream-muted leading-relaxed mb-12">
          Ya sea que busques transformar tu lectura, llevar gimnasia cerebral a tu empresa o escuela, o simplemente comenzar a entrenar tu cerebro — estoy aquí para ayudarte.
        </p>

        {/* Contact buttons */}
        <div className="flex flex-wrap justify-center gap-5 mb-12">
          <a 
            href="https://wa.me/5213331894040?text=Hola%20Milena%2C%20me%20interesa%20saber%20más%20sobre%20tus%20programas" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-br from-green-600 to-green-700 text-white font-bold text-sm tracking-widest uppercase py-5 px-10 rounded-full hover:scale-105 transition-all shadow-[0_20px_40px_-15px_rgba(34,197,94,0.3)]"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a 
            href="mailto:milenasandoval@gmail.com" 
            className="inline-flex items-center gap-3 bg-gradient-to-br from-gold to-gold-dark text-dark font-bold text-sm tracking-widest uppercase py-5 px-10 rounded-full hover:scale-105 transition-all shadow-[0_20px_40px_-15px_rgba(200,160,74,0.4)]"
          >
            <Mail className="w-5 h-5" />
            Correo
          </a>
          <a 
            href="https://www.evolucioneleyendo.mx/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-transparent border border-gold/40 text-gold font-bold text-sm tracking-widest uppercase py-5 px-10 rounded-full hover:bg-gold/5 hover:border-gold transition-all"
          >
            <ExternalLink className="w-5 h-5" />
            Evolucione
          </a>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-cream-muted">
          <a href="https://wa.me/5213331894040" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
            +52 1 33 3189 4040
          </a>
          <span className="text-gold/30">|</span>
          <a href="mailto:milenasandoval@gmail.com" className="hover:text-gold transition-colors">
            milenasandoval@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
