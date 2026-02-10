import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', href: '#' },
    { name: 'Programas', href: '#evolucione' },
    { name: 'EMA', href: '#gimnasia-ema' },
    { name: 'Comunidad', href: '#club' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-full max-w-7xl px-6 top-6">
      <div className="flex justify-between items-center transition-all duration-500 px-8 bg-dark-surface/80 backdrop-blur-2xl border border-gold/20 rounded-full py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <a href="#" className="font-serif text-2xl font-bold text-gold tracking-tighter group">
          MS<span className="opacity-0 group-hover:opacity-100 transition-opacity text-cream">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10">
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

        <div className="flex items-center gap-4">
          <a href="#contacto" className="hidden lg:block text-[9px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full border border-gold/30 hover:bg-gold hover:text-dark transition-all">
            Agendar Sesión
          </a>
          
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-5 h-0.5 bg-gold transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-gold transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-3 h-0.5 bg-gold self-end transition-all ${isOpen ? '-rotate-45 -translate-y-2 !w-5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-dark/98 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-700 md:hidden ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        {links.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-serif text-cream hover:text-gold transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
