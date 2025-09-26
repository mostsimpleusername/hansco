import React from 'react';
import { Button } from '../ui/button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
  backgroundColor?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Transform Your Business?",
  subtitle = "Let's discuss how we can help you achieve your marketing goals and drive sustainable growth.",
  primaryCTA = "Schedule a Consultation",
  secondaryCTA = "View Case Studies",
  onPrimaryCTA,
  onSecondaryCTA,
  backgroundColor = "bg-blue-600"
}) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={onPrimaryCTA}
          >
            {primaryCTA}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-600"
            onClick={onSecondaryCTA}
          >
            {secondaryCTA}
          </Button>
        </div>
      </div>
    </section>
  );
};