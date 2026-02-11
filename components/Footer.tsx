
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 md:py-12 border-t border-gold/10">
      <div className="container mx-auto px-5 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <p className="text-[10px] md:text-xs text-cream-muted tracking-wide text-center md:text-left">
          © {new Date().getFullYear()} Milena Sandoval. Todos los derechos reservados.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-8">
          <a 
            href="https://wa.me/5213331894040" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] md:text-xs text-cream-muted hover:text-gold transition-colors"
          >
            +52 1 33 3189 4040
          </a>
          <span className="text-gold/20 hidden sm:inline">|</span>
          <a 
            href="mailto:milena.sandoval@evolucioneleyendo.com" 
            className="text-[10px] md:text-xs text-cream-muted hover:text-gold transition-colors"
          >
            milena.sandoval@evolucioneleyendo.com
          </a>
          <span className="text-gold/20 hidden sm:inline">|</span>
          <a 
            href="https://www.evolucioneleyendo.mx/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] md:text-xs text-cream-muted hover:text-gold transition-colors"
          >
            evolucioneleyendo.com
          </a>
        </div>
      </div>
    </footer>
  );
};
