'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary/70 mb-6">
            The Firm
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-10 leading-tight">
            Capitalizing the edge of
            <br />
            <span className="text-primary">what comes next.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-6"
        >
          <p className="font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed text-center">
            AURA was founded in 2026 with a mission to back both proven and frontier
            technologies ahead of mass adoption. Operating from Abu Dhabi, Dubai,
            New York, and San Francisco, we deploy capital across critical verticals
            where technology and conviction converge.
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed text-center">
            Our thesis is rooted in the belief that the next wave of transformative
            infrastructure will emerge from cryptography, defense technology, and
            artificial intelligence — sectors where asymmetric returns meet
            civilizational impact.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-3 gap-4"
        >
          {[
            { label: '01', value: 'Finance' },
            { label: '02', value: 'Force' },
            { label: '03', value: 'Intelligence' },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-6 rounded-xl border border-border/30 glass-card">
              <p className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}