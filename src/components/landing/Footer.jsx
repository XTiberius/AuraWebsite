import React from 'react';
import Image from 'next/image';

const LOGO_URL = '/assets/logo.png';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-20 border-t border-border/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src={LOGO_URL}
              alt="AURA"
              width={120}
              height={36}
              className="h-6 w-auto opacity-60"
              sizes="120px"
            />
            <span className="font-heading text-sm font-semibold tracking-[0.2em] text-muted-foreground">
              AURA
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs tracking-[0.15em] uppercase text-muted-foreground/50 font-body">
            {['Abu Dhabi', 'Dubai', 'New York', 'San Francisco'].map((city) => (
              <span key={city}>{city}</span>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/10 text-center">
          <p className="font-body text-xs text-muted-foreground/40 tracking-wider">
            © {new Date().getFullYear()} AURA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}