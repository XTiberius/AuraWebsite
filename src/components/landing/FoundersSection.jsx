'use client';

import React from 'react';
import { motion } from 'framer-motion';

const founders = [
  {
    name: 'David Monroe Rashid',
    role: 'General Partner',
    initials: 'DMR',
  },
  {
    name: 'Mustafa Amer Samhoun',
    role: 'General Partner',
    initials: 'MAS',
  },
];

export default function FoundersSection() {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-border/60 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary/70 mb-6">
            Leadership
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            Founded by conviction.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:max-w-2xl md:mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mx-auto w-28 h-28 mb-6">
                {/* Metallic ring */}
                <div className="absolute inset-0 rounded-full border border-border/40 group-hover:border-primary/40 transition-colors duration-500" />
                <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                  <span className="font-heading text-lg font-bold text-muted-foreground/70 tracking-wider group-hover:text-primary/80 transition-colors duration-500">
                    {founder.initials}
                  </span>
                </div>
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl bg-primary/10" />
              </div>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-1 tracking-tight">
                {founder.name}
              </h3>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {founder.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}