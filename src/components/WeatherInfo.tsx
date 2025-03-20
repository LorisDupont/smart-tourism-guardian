
import React from 'react';
import { Cloud, CloudRain, Sun, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';

type WeatherType = 'sunny' | 'cloudy' | 'rainy' | 'windy';

interface WeatherInfoProps {
  type: WeatherType;
  temperature: number;
  wind?: number;
  precipitation?: number;
  className?: string;
  compact?: boolean;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  type,
  temperature,
  wind = 0,
  precipitation = 0,
  className,
  compact = false
}) => {
  const getWeatherIcon = () => {
    switch (type) {
      case 'sunny':
        return <Sun className={cn("text-yellow-500", compact ? "h-4 w-4" : "h-6 w-6")} />;
      case 'cloudy':
        return <Cloud className={cn("text-gray-400", compact ? "h-4 w-4" : "h-6 w-6")} />;
      case 'rainy':
        return <CloudRain className={cn("text-blue-500", compact ? "h-4 w-4" : "h-6 w-6")} />;
      case 'windy':
        return <Wind className={cn("text-cyan-500", compact ? "h-4 w-4" : "h-6 w-6")} />;
    }
  };

  if (compact) {
    return (
      <div className={cn("flex items-center", className)}>
        {getWeatherIcon()}
        <span className="ml-1 text-sm font-medium">{temperature}°C</span>
      </div>
    );
  }

  return (
    <div className={cn("p-3 rounded-xl glass", className)}>
      <div className="flex items-center">
        {getWeatherIcon()}
        <span className="ml-2 text-lg font-medium">{temperature}°C</span>
      </div>
      
      <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center">
          <Wind className="h-3 w-3 mr-1 text-muted-foreground" />
          <span>{wind} km/h</span>
        </div>
        
        <div className="flex items-center">
          <CloudRain className="h-3 w-3 mr-1 text-muted-foreground" />
          <span>{precipitation}%</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
