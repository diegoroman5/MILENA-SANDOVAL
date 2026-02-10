
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  tagline?: string;
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="text-[10px] font-bold tracking-[0.2em] text-cream/40 transition-colors hover:text-gold uppercase"
  >
    {children}
  </a>
);

const SocialIcon: React.FC<{ href: string; icon: LucideIcon }> = ({ href, icon: Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-cream/40 transition-colors hover:text-gold">
    <Icon className="h-5 w-5" />
  </a>
);

export const MinimalistHero = ({
  logoText,
  navLinks,
  tagline,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(200,160,74,0.08),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-serif font-bold tracking-tighter text-gold"
        >
          {logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-gold"></span>
          <span className="block h-0.5 w-6 bg-gold"></span>
          <span className="block h-0.5 w-4 bg-gold"></span>
        </motion.button>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3 gap-8 py-12">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          {tagline && (
            <div className="mb-4 inline-flex items-center gap-3">
               <span className="w-8 h-px bg-gold/50" />
               <span className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase">{tagline}</span>
            </div>
          )}
          <p className="mx-auto max-w-xs text-lg leading-relaxed text-cream/70 md:mx-0 font-light">{mainText}</p>
          <a href={readMoreLink} className="mt-8 inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-gold hover:text-cream transition-colors border-b border-gold/30 pb-1">
            Mi Historia
          </a>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full min-h-[400px]">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute z-0 h-[320px] w-[320px] rounded-full bg-gradient-to-br from-gold/30 via-gold/10 to-transparent blur-2xl md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px]"
            ></motion.div>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute z-0 h-[280px] w-[280px] rounded-full border border-gold/10 md:h-[400px] md:w-[400px]"
            />
            <motion.img
                src={imageSrc}
                alt={imageAlt}
                className="relative z-10 h-auto w-64 object-contain md:w-80 lg:w-96 drop-shadow-[0_0_50px_rgba(200,160,74,0.2)]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://placehold.co/600x800/0a0a0a/C8A04A?text=Milena+Sandoval`;
                }}
            />
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="z-20 order-3 flex flex-col items-center justify-center text-center md:items-start md:text-left"
        >
          <h1 className="font-serif text-7xl font-bold leading-[0.85] text-cream md:text-8xl lg:text-[120px] tracking-tighter">
            {overlayText.part1}
            <br />
            <span className="text-gold italic font-medium ml-4 md:ml-12">{overlayText.part2}</span>
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center space-x-6"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-[10px] font-bold tracking-[0.3em] text-cream/40 uppercase"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
