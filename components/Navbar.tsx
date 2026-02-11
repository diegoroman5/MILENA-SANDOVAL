import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = [
    { name: 'Inicio', href: '#' },
    { name: 'Programas', href: '#evolucione' },
    { name: 'EMA', href: '#gimnasia-ema' },
    { name: 'Comunidad', href: '#club' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      {/* Top bar */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-full max-w-7xl px-4 sm:px-6 ${
        isScrolled ? 'top-4 sm:top-6' : 'top-0'
      }`}>
        <div className={`flex justify-between items-center transition-all duration-500 px-5 sm:px-8 ${
          isScrolled 
            ? 'bg-dark-surface/80 backdrop-blur-2xl border border-gold/20 rounded-full py-2.5 sm:py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent py-6 sm:py-8 border-b border-transparent'
        }`}>
          <a href="#" className="font-serif text-xl sm:text-2xl font-bold text-gold tracking-tighter group relative z-[70]">
            MS<span className="opacity-0 group-hover:opacity-100 transition-opacity text-cream">.</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 lg:gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-[10px] font-bold tracking-[0.2em] uppercase text-cream-muted hover:text-gold transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-gold rounded-full transition-all duration-300 group-hover:w-full group-hover:opacity-100 opacity-0" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#contacto" className={`hidden lg:block text-[9px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full border border-gold/30 hover:bg-gold hover:text-dark transition-all ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              Agendar Sesión
            </a>
            
            {/* Hamburger - always on top */}
            <button 
              className="md:hidden relative z-[70] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <span className={`block w-5 h-0.5 bg-gold transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gold transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block h-0.5 bg-gold transition-all duration-300 origin-center ${isOpen ? 'w-5 -rotate-45 -translate-y-[4px]' : 'w-3 self-end'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full screen overlay, separate from nav */}
      <div 
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-dark/95 backdrop-blur-xl transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu content */}
        <div className={`relative z-10 flex flex-col items-center justify-center h-full transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          {/* Decorative gold line */}
          <div className="w-12 h-px bg-gold/30 mb-10" />
          
          {links.map((link, idx) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-2xl font-serif text-cream hover:text-gold transition-colors duration-300"
              style={{ transitionDelay: isOpen ? `${idx * 80}ms` : '0ms' }}
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-12 h-px bg-gold/30 my-8" />
          
          {/* WhatsApp CTA */}
          <a 
            href="https://wa.me/5213331894040"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dark bg-gold px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
            </svg>
            WhatsApp
          </a>

          {/* Social links */}
          <div className="flex gap-6 mt-8">
            <a href="https://www.tiktok.com/@milenasandovall" target="_blank" rel="noopener noreferrer" className="text-cream/30 hover:text-gold transition-colors text-[10px] font-bold tracking-widest uppercase">TikTok</a>
            <a href="https://www.instagram.com/milena2.sandovall" target="_blank" rel="noopener noreferrer" className="text-cream/30 hover:text-gold transition-colors text-[10px] font-bold tracking-widest uppercase">Instagram</a>
            <a href="https://www.youtube.com/@MilecturaSandovall" target="_blank" rel="noopener noreferrer" className="text-cream/30 hover:text-gold transition-colors text-[10px] font-bold tracking-widest uppercase">YouTube</a>
          </div>
        </div>
      </div>
    </>
  );
};
