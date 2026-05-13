'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, Brain } from 'lucide-react';

const TOPO_URL = '/assets/topo.png';

const areas = [
  {
    icon: Lock,
    title: 'Cryptography',
    items: ['Blockchain', 'Encryption', 'Cryptocurrency'],
    gradient: 'from-purple-500/20 to-violet-600/5',
    glowColor: 'hsl(263 70% 42% / 0.15)',
  },
  {
    icon: Shield,
    title: 'Industrial & Defense',
    items: ['Autonomous Technology', 'Critical Hardware', 'Drones & Robotics'],
    gradient: 'from-red-500/15 to-rose-600/5',
    glowColor: 'hsl(0 70% 50% / 0.1)',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    items: ['AI Infrastructure', 'Foundational Models', 'AI Supply Chain'],
    gradient: 'from-blue-500/15 to-indigo-600/5',
    glowColor: 'hsl(220 70% 50% / 0.1)',
  },
];

export default function FocusAreasSection() {
  return (
    <section id="focus" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary/70 mb-6">
            Investment Focus
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            Three pillars of conviction.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
            >
              <div className="group relative h-full rounded-2xl border border-border/30 glass-card overflow-hidden transition-all duration-500 hover:border-primary/30">
                {/* Topo texture reveal on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-700 bg-cover bg-center"
                  style={{ backgroundImage: `url(${TOPO_URL})` }}
                />

                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Corner glow */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: area.glowColor }}
                />

                <div className="relative p-8 md:p-10">
                  <div className="mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-500">
                      <area.icon className="w-5 h-5 text-primary/80 group-hover:text-primary transition-colors duration-500" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-5 tracking-tight">
                    {area.title}
                  </h3>

                  <ul className="space-y-3">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-primary/50" />
                        <span className="font-body text-sm text-muted-foreground font-light">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}