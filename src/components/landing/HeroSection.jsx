'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TOPO_URL = '/assets/topo.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep space background layers */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Topo texture — faint overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] bg-cover bg-center mix-blend-lighten"
        style={{ backgroundImage: `url(${TOPO_URL})` }} />
      

      {/* Purple radial glow — lighter blur on small screens */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,900px)] md:w-[900px] h-[min(100vw,900px)] md:h-[900px] rounded-full bg-primary/8 blur-[72px] md:blur-[120px] lg:blur-[150px]" />
      
      {/* Red accent glow */}
      <div className="absolute top-1/4 right-1/4 w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full bg-red-600/5 blur-[64px] md:blur-[100px]" />
      
      {/* Blue accent glow */}
      <div className="absolute bottom-1/3 left-1/4 w-[240px] md:w-[400px] h-[240px] md:h-[400px] rounded-full bg-blue-600/5 blur-[72px] md:blur-[120px]" />

      {/* Metallic grain overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: '128px 128px'
      }} />

      {/* Horizontal chrome line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-8">Est. 2026

          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-8">
          
          <span className="shimmer-text">AURA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed mb-12">
          
          Own the Layer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 text-xs tracking-[0.25em] uppercase text-muted-foreground/60 font-body">
          
          {['Abu Dhabi', 'Dubai', 'New York', 'San Francisco'].map((city, i) =>
          <span key={city} className="flex items-center gap-6">
              {city}
              {i < 3 && <span className="text-primary/30">·</span>}
            </span>
          )}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        
        <div className="w-px h-12 bg-gradient-to-b from-primary/40 to-transparent" />
      </motion.div>
    </section>);

}