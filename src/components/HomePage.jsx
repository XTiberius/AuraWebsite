import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import FocusAreasSection from '@/components/landing/FocusAreasSection';
import FoundersSection from '@/components/landing/FoundersSection';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FocusAreasSection />
      <FoundersSection />
      <Footer />
    </div>
  );
}
