import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import CountdownTimer from '../components/CountdownTimer';
import AboutSection from '../components/AboutSection';
import TracksSection from '../components/TracksSection';
import SponsorsSection from '../components/SponsorsSection';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-0">
      <Hero />
      <CountdownTimer />
      <AboutSection />
      <TracksSection />
      <SponsorsSection />
    </div>
  );
}
