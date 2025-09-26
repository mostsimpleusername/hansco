import React from 'react';
import type { Page } from '../App';
import { HeroSection } from './sections/HeroSection';
import { StatsSection } from './sections/StatsSection';
import { ServicesSection } from './sections/ServicesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { CTASection } from './sections/CTASection';

interface HomePageProps {
  onNavigate?: (page: Page) => void;
}

export const HomePage = React.memo<HomePageProps>(({ onNavigate }) => {
  const handlePrimaryCTA = () => {
    onNavigate?.('contact');
  };

  const handleSecondaryCTA = () => {
    onNavigate?.('blog');
  };

  return (
    <div className="space-y-0">
      <HeroSection 
        onPrimaryCTA={handlePrimaryCTA}
        onSecondaryCTA={handleSecondaryCTA}
      />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection 
        onPrimaryCTA={handlePrimaryCTA}
        onSecondaryCTA={handleSecondaryCTA}
      />
    </div>
  );
});

HomePage.displayName = 'HomePage';