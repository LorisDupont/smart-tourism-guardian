
import React, { useState } from 'react';
import { Search, ListFilter, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SiteData } from './SiteCard';
import DensityIndicator from './DensityIndicator';

interface SiteMapProps {
  sites: SiteData[];
  className?: string;
}

const MOCK_MAP_URL = "https://geoportail.wallonie.be/files/images/news/basemap_wmts.jpg";

const SiteMap: React.FC<SiteMapProps> = ({ sites, className }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  
  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'low', label: 'Peu fréquenté' },
    { id: 'high', label: 'Forte affluence' },
  ];

  return (
    <div className={cn("rounded-2xl border border-border overflow-hidden bg-card", className)}>
      <div className="p-4 border-b border-border">
        <div className="flex items-center bg-muted/50 rounded-lg px-3 py-2 mb-3">
          <Search className="h-4 w-4 text-muted-foreground mr-2" />
          <input
            type="text"
            placeholder="Rechercher un site..."
            className="bg-transparent border-none w-full text-sm focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all",
                selectedFilter === filter.id 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              )}
              onClick={() => setSelectedFilter(filter.id === selectedFilter ? null : filter.id)}
            >
              {filter.label}
            </button>
          ))}
          
          <button className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all bg-secondary hover:bg-secondary/80 text-secondary-foreground flex items-center">
            <ListFilter className="h-3 w-3 mr-1" />
            Filtres
          </button>
        </div>
      </div>
      
      <div className="relative h-[500px] bg-muted/20">
        <img 
          src={MOCK_MAP_URL} 
          alt="Carte de Wallonie" 
          className="w-full h-full object-cover"
        />
        
        {/* Map pins */}
        {sites.map((site) => (
          <div 
            key={site.id}
            className="absolute group"
            style={{ 
              // Random positions for demonstration
              top: `${Math.floor(Math.random() * 70) + 10}%`, 
              left: `${Math.floor(Math.random() * 70) + 10}%` 
            }}
          >
            <div className="relative">
              <div className={cn(
                "w-4 h-4 rounded-full border-2 border-white flex items-center justify-center",
                site.density === 'low' ? "bg-green-500" :
                site.density === 'medium' ? "bg-yellow-500" :
                site.density === 'high' ? "bg-orange-500" : "bg-red-500"
              )}>
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-10">
                <div className="bg-white rounded-lg shadow-lg p-2 text-xs">
                  <div className="font-medium mb-1">{site.name}</div>
                  <div className="flex items-center justify-between">
                    <DensityIndicator density={site.density} size="sm" />
                    <span className="text-muted-foreground text-[10px]">{site.type}</span>
                  </div>
                </div>
                {/* Arrow */}
                <div className="w-2 h-2 bg-white rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
              </div>
            </div>
          </div>
        ))}

        {/* Layer control */}
        <div className="absolute top-4 right-4 glass rounded-lg p-2 flex flex-col space-y-1 text-xs">
          <button className="hover:bg-muted/30 px-2 py-1 rounded">Satellite</button>
          <button className="bg-muted/30 px-2 py-1 rounded font-medium">Standard</button>
          <button className="hover:bg-muted/30 px-2 py-1 rounded">Terrain</button>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;
