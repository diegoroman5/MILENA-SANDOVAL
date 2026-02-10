
import React from 'react';
import { Instagram, Youtube, Linkedin, Music2 } from 'lucide-react';
import { MinimalistHero } from './ui/minimalist-hero';

export const Hero: React.FC = () => {
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PROGRAMAS', href: '#evolucione' },
    { label: 'GIMNASIA EMA', href: '#gimnasia-ema' },
    { label: 'COMUNIDAD', href: '#club' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/milena2.sandovall' },
    { icon: Music2, href: 'https://www.tiktok.com/@milenasandovall' },
    { icon: Youtube, href: 'https://www.youtube.com/@MilecturaSandovall' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/milena-sandoval-arias-41b0161b3/' },
  ];

  return (
    <section id="hero-section">
      <MinimalistHero
        logoText="MS."
        navLinks={navLinks}
        tagline="Neuro-Experta en Alta Performance"
        mainText="CEO de Evolucione, experta en gimnasia cerebral y metaaprendizaje. Transformando la forma en que el mundo lee, aprende y piensa — una mente a la vez."
        readMoreLink="#sobre-mi"
        imageSrc="/images/milena-hero.png"
        imageAlt="Milena Sandoval Neuro-Performance Expert"
        overlayText={{
          part1: 'Milena',
          part2: 'Sandoval',
        }}
        socialLinks={socialLinks}
        locationText="Guadalajara, México — Internacional"
      />
    </section>
  );
};
