import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Icon } from '../ui/icon';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { templateConfig } from '../../template-config';

interface HeroSectionProps {
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onPrimaryCTA,
  onSecondaryCTA
}) => {
  const { hero, stats, company } = templateConfig;

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                {hero.badge}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {hero.title}{' '}
                <span className="text-blue-600">{hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {hero.subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={onPrimaryCTA}>
                {hero.primaryCTA}
                <Icon name="arrow-right" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={onSecondaryCTA}>
                {hero.secondaryCTA}
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">{stats[0].number}</span> {hero.statsText}
              </div>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhZ2VuY3klMjB0ZWFtJTIwbW9kZXJuJTIwb2ZmaWNlfGVufDF8fHx8MTc1ODg4MTA5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Marketing team collaboration"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="chart-line" className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{stats[2].number} ROI</p>
                  <p className="text-sm text-gray-600">Average increase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};