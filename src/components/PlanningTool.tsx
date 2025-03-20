
import React, { useState } from 'react';
import { Calendar, Clock, Users, Filter, Sliders } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SiteData } from './SiteCard';

interface PlanningToolProps {
  sites: SiteData[];
  className?: string;
}

const PlanningTool: React.FC<PlanningToolProps> = ({ sites, className }) => {
  const [activeTab, setActiveTab] = useState<'visitor' | 'authority'>('visitor');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [visitorCount, setVisitorCount] = useState<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Planning visit:', { selectedDate, visitorCount });
    // Implement actual planning functionality
  };
  
  return (
    <div className={cn("border border-border rounded-xl overflow-hidden bg-card", className)}>
      <div className="flex border-b border-border text-sm">
        <button
          className={cn(
            "flex-1 py-3 px-4 font-medium transition-colors",
            activeTab === 'visitor' ? "bg-primary/5 text-primary border-b-2 border-primary" : ""
          )}
          onClick={() => setActiveTab('visitor')}
        >
          Visiteur
        </button>
        <button
          className={cn(
            "flex-1 py-3 px-4 font-medium transition-colors",
            activeTab === 'authority' ? "bg-primary/5 text-primary border-b-2 border-primary" : ""
          )}
          onClick={() => setActiveTab('authority')}
        >
          Gestionnaire
        </button>
      </div>

      <div className="p-5">
        {activeTab === 'visitor' ? (
          <div className="animate-fade-in">
            <h3 className="text-lg font-medium mb-4">Planifiez votre visite</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Trouvez le meilleur moment pour visiter en fonction de l'affluence et de la météo prévue.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date de visite</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Nombre de visiteurs</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                  </div>
                  <input
                    type="number"
                    min="1"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    placeholder="Combien de personnes"
                    value={visitorCount}
                    onChange={(e) => setVisitorCount(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  Obtenir des recommandations
                </button>
              </div>
            </form>
            
            <div className="mt-6 p-4 rounded-lg bg-muted/40 border border-border">
              <h4 className="text-sm font-medium mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Heures idéales de visite
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Affluence minimum</span>
                <span>Affluence maximum</span>
              </div>
              <div className="h-8 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 relative">
                <div className="absolute left-[10%] top-0 h-full w-0.5 bg-black/20 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:mt-1 after:text-xs after:whitespace-nowrap after:content-['09:00']" />
                <div className="absolute left-[70%] top-0 h-full w-0.5 bg-black/20 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:mt-1 after:text-xs after:whitespace-nowrap after:content-['16:00']" />
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <h3 className="text-lg font-medium mb-4">Gestion des sites touristiques</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Outils pour les gestionnaires de sites touristiques pour analyser et optimiser l'affluence.
            </p>
            
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between border border-border rounded-lg p-3 hover:bg-muted/20 transition-all">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                    <Filter className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-medium">Rapport d'affluence</h4>
                    <p className="text-xs text-muted-foreground">Statistiques détaillées par période</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-primary">Consulter</span>
              </button>
              
              <button className="w-full flex items-center justify-between border border-border rounded-lg p-3 hover:bg-muted/20 transition-all">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-medium">Planification d'événements</h4>
                    <p className="text-xs text-muted-foreground">Créer et gérer des événements</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-primary">Consulter</span>
              </button>
              
              <button className="w-full flex items-center justify-between border border-border rounded-lg p-3 hover:bg-muted/20 transition-all">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                    <Sliders className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-medium">Contrôle d'accès</h4>
                    <p className="text-xs text-muted-foreground">Gérer les limites de visiteurs</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-primary">Consulter</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanningTool;
