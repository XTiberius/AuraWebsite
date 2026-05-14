import dynamic from 'next/dynamic';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import Footer from '@/components/landing/Footer';

const AboutSection = dynamic(() => import('@/components/landing/AboutSection'), {
  ssr: true,
});

const FocusAreasSection = dynamic(() => import('@/components/landing/FocusAreasSection'), {
  ssr: true,
});

const FoundersSection = dynamic(() => import('@/components/landing/FoundersSection'), {
  ssr: true,
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSection />
      <div className="cv-auto">
        <AboutSection />
        <FocusAreasSection />
        <FoundersSection />
      </div>
      <Footer />
    </div>
  );
}
