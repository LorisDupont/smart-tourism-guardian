
import React from 'react';
import { cn } from '@/lib/utils';

interface DensityIndicatorProps {
  density: 'low' | 'medium' | 'high' | 'crowded';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const DensityIndicator: React.FC<DensityIndicatorProps> = ({ 
  density, 
  className,
  size = 'md',
  showLabel = true
}) => {
  const colors = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-orange-500',
    crowded: 'bg-red-500'
  };

  const labels = {
    low: 'Peu fréquenté',
    medium: 'Affluence moyenne',
    high: 'Forte affluence',
    crowded: 'Très fréquenté'
  };

  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  return (
    <div className={cn("flex items-center", className)}>
      <span 
        className={cn(
          "rounded-full animate-pulse-subtle",
          colors[density],
          sizes[size]
        )}
      />
      {showLabel && (
        <span className="ml-2 text-xs font-medium text-muted-foreground">
          {labels[density]}
        </span>
      )}
    </div>
  );
};

export default DensityIndicator;
