
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Users, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import DensityIndicator from './DensityIndicator';
import WeatherInfo from './WeatherInfo';

export interface SiteData {
  id: string;
  name: string;
  type: 'hiking' | 'museum' | 'natural' | 'monument';
  image: string;
  description: string;
  location: string;
  density: 'low' | 'medium' | 'high' | 'crowded';
  weather: {
    type: 'sunny' | 'cloudy' | 'rainy' | 'windy';
    temperature: number;
    wind: number;
    precipitation: number;
  };
  recommendations: string[];
}

interface SiteCardProps {
  site: SiteData;
  className?: string;
}

const SiteCard: React.FC<SiteCardProps> = ({ site, className }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div 
      className={cn(
        "overflow-hidden rounded-xl border border-border transition-all duration-300 ease-in-out animate-fade-up bg-background",
        expanded ? "shadow-md" : "shadow-sm hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={site.image} 
          alt={site.name}
          className="object-cover w-full h-full transition-all duration-700 ease-out hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-start justify-between">
            <h3 className="text-white font-medium text-lg">{site.name}</h3>
            <div className="flex space-x-2">
              <DensityIndicator density={site.density} showLabel={false} />
              <WeatherInfo 
                type={site.weather.type} 
                temperature={site.weather.temperature} 
                compact 
                className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-1"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          <span>{site.location}</span>
        </div>
        
        <p className="text-sm line-clamp-2 mb-3">{site.description}</p>
        
        {expanded && (
          <div className="mt-4 space-y-4 animate-fade-in">
            <div className="bg-muted/50 rounded-lg p-3">
              <h4 className="font-medium text-sm mb-2 flex items-center">
                <Info className="h-3.5 w-3.5 mr-1.5" />
                Recommandations
              </h4>
              <ul className="text-sm space-y-1.5">
                {site.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <WeatherInfo 
              type={site.weather.type}
              temperature={site.weather.temperature}
              wind={site.weather.wind}
              precipitation={site.weather.precipitation}
              className="w-full"
            />
          </div>
        )}
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 w-full flex items-center justify-center text-xs font-medium text-muted-foreground hover:text-foreground transition-colors py-1.5 border-t border-border"
        >
          {expanded ? (
            <>
              <span>Voir moins</span>
              <ChevronUp className="h-3.5 w-3.5 ml-1" />
            </>
          ) : (
            <>
              <span>Voir plus</span>
              <ChevronDown className="h-3.5 w-3.5 ml-1" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SiteCard;
