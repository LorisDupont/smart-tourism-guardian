
import React from 'react';
import { Heart, GitPullRequest, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-muted/30 py-12 border-t border-border", className)}>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Smart Tourism Guardian</h3>
            <p className="text-sm text-muted-foreground">
              Une solution pour améliorer l'expérience touristique en Wallonie tout en préservant les sites naturels et culturels.
            </p>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Heart className="h-4 w-4 mr-2 text-accent" />
              <span>Créé avec passion pour les Citoyens de Wallonie</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  À propos du projet
                </a>
              </li>
              <li>
                <a href="https://geoportail.wallonie.be/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Géoportail de Wallonie
                </a>
              </li>
              <li>
                <a href="https://www.odwb.be/pages/home/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Open Data Wallonie
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                <a href="mailto:contact@tourismeguardian.be" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  contact@tourismeguardian.be
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Namur, Wallonie, Belgique
                </span>
              </li>
              <li className="flex items-start">
                <GitPullRequest className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contribuer au projet
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Smart Tourism Guardian. Hackathon Citizens of Wallonia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
