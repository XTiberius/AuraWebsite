'use client';

import React, { useState, useEffect } from 'react';

const LOGO_URL = '/assets/logo.png';
const TOPO_URL = '/assets/topo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3' : 'py-5'
    }`}>
      {/* Topo texture overlay in navbar */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.09] bg-cover bg-center"
          style={{ backgroundImage: `url(${TOPO_URL})` }}
        />
        <div className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/30'
            : 'bg-transparent'
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
          <img src={LOGO_URL} alt="AURA" className="h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
          <span className="font-heading text-xl font-bold tracking-[0.2em] text-foreground">
            AURA
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'About', id: 'about' },
            { label: 'Focus', id: 'focus' },
            { label: 'Team', id: 'team' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-body text-sm text-muted-foreground hover:text-foreground tracking-wider uppercase transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:block font-body text-xs tracking-wider uppercase px-5 py-2.5 rounded-full border border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}