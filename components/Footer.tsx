
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gold/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-xs text-cream-muted tracking-wide">
          © {new Date().getFullYear()} Milena Sandoval. Todos los derechos reservados.
        </p>
        <div className="flex gap-8">
          <a 
            href="mailto:milena.sandoval@evolucioneleyendo.com" 
            className="text-xs text-cream-muted hover:text-gold transition-colors"
          >
            milena.sandoval@evolucioneleyendo.com
          </a>
          <a 
            href="https://www.evolucioneleyendo.mx/" 
            target="_blank"
            className="text-xs text-cream-muted hover:text-gold transition-colors"
          >
            evolucioneleyendo.mx
          </a>
        </div>
      </div>
    </footer>
  );
};
