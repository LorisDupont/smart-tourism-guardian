
import React from 'react';
import Header from '@/components/Header';
import SiteMap from '@/components/SiteMap';
import SiteCard from '@/components/SiteCard';
import PlanningTool from '@/components/PlanningTool';
import Footer from '@/components/Footer';
import { ChevronDown } from 'lucide-react';
import type { SiteData } from '@/components/SiteCard';

// Mock data for demonstration
const mockSites: SiteData[] = [
  {
    id: '1',
    name: 'Parc naturel des Hautes Fagnes',
    type: 'natural',
    image: 'https://images.unsplash.com/photo-1565664512889-48c9351dfdf7?q=80&w=1000&auto=format&fit=crop',
    description: 'Réserve naturelle de tourbières et de forêts, offrant des sentiers de randonnée à travers des paysages uniques.',
    location: 'Province de Liège',
    density: 'medium',
    weather: {
      type: 'sunny',
      temperature: 16,
      wind: 10,
      precipitation: 5
    },
    recommendations: [
      'Préférez une visite en semaine pour éviter la foule',
      'Portez des chaussures de randonnée imperméables',
      'Respectez les sentiers balisés pour préserver l\'écosystème'
    ]
  },
  {
    id: '2',
    name: 'Citadelle de Namur',
    type: 'monument',
    image: 'https://images.unsplash.com/photo-1610809027249-86c649feacd5?q=80&w=1000&auto=format&fit=crop',
    description: 'Fortification historique surplombant la ville de Namur et le confluent de la Sambre et de la Meuse.',
    location: 'Namur',
    density: 'high',
    weather: {
      type: 'cloudy',
      temperature: 14,
      wind: 15,
      precipitation: 20
    },
    recommendations: [
      'Visitez tôt le matin pour éviter l\'affluence',
      'Le tour en train touristique est populaire, réservez à l\'avance',
      'Profitez de la vue panoramique depuis le sommet'
    ]
  },
  {
    id: '3',
    name: 'Grottes de Han',
    type: 'natural',
    image: 'https://images.unsplash.com/photo-1564324738459-35d91a46aef7?q=80&w=1000&auto=format&fit=crop',
    description: 'Un complexe de grottes calcaires parmi les plus importants d\'Europe, avec un parc animalier.',
    location: 'Province de Namur',
    density: 'crowded',
    weather: {
      type: 'rainy',
      temperature: 12,
      wind: 5,
      precipitation: 60
    },
    recommendations: [
      'Réservez votre visite guidée à l\'avance en période estivale',
      'Température constante de 13°C dans les grottes, prévoyez un vêtement chaud',
      'Combinaison avec la visite du parc animalier recommandée'
    ]
  },
  {
    id: '4',
    name: 'Château de Bouillon',
    type: 'monument',
    image: 'https://images.unsplash.com/photo-1574236170878-f66e35f83207?q=80&w=1000&auto=format&fit=crop',
    description: 'Forteresse médiévale perchée sur un éperon rocheux, offrant une vue imprenable sur la ville et la vallée.',
    location: 'Province de Luxembourg',
    density: 'low',
    weather: {
      type: 'windy',
      temperature: 13,
      wind: 25,
      precipitation: 10
    },
    recommendations: [
      'Excellent pour une visite en dehors des périodes de vacances scolaires',
      'Le spectacle de fauconnerie est très apprécié',
      'Prévoyez 2-3 heures pour explorer l\'ensemble du château'
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop')",
            filter: "brightness(0.6)"
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        
        <div className="container px-4 mx-auto relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium mb-5 animate-fade-down">
              Hackathon Citizens of Wallonia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-fade-up">
              Tourisme Intelligent et Durable
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-up delay-100">
              Optimisez l'expérience des visiteurs tout en préservant les sites naturels et culturels de Wallonie
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up delay-200">
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Explorer les sites
              </button>
              <button className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 font-medium hover:bg-white/20 transition-colors">
                Comment ça marche
              </button>
            </div>
          </div>
        </div>
        
        <a 
          href="#explore" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hover:text-primary transition-colors"
          aria-label="Défiler vers le bas"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </section>
      
      {/* Explore Section */}
      <section id="explore" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Découvrez les Sites Touristiques</h2>
            <p className="text-muted-foreground">
              Explorez les sites touristiques de Wallonie et obtenez des informations en temps réel sur l'affluence et les conditions.
            </p>
          </div>
          
          <div id="map" className="mb-16 animate-fade-up">
            <SiteMap sites={mockSites} />
          </div>
          
          <h3 className="text-xl font-medium mb-6">Sites populaires</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockSites.map((site, index) => (
              <SiteCard 
                key={site.id} 
                site={site} 
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Planning Section */}
      <section id="planning" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                Planification intelligente
              </span>
              <h2 className="text-3xl font-display font-bold mb-4">Optimisez votre Expérience Touristique</h2>
              <p className="text-muted-foreground mb-6">
                Notre outil de planification avancé utilise des données en temps réel et des prévisions pour vous recommander les meilleurs moments pour visiter les sites touristiques.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Évitez les foules et optimisez votre expérience",
                  "Recommandations basées sur la météo et les conditions",
                  "Outils spécifiques pour les gestionnaires de sites",
                  "Contribuez à la préservation des sites naturels"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0 mt-0.5 mr-3">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="animate-fade-up">
              <PlanningTool sites={mockSites} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Caractéristiques Principales</h2>
            <p className="text-muted-foreground">
              Découvrez comment notre application aide à améliorer l'expérience touristique tout en préservant les sites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Prévision d'affluence",
                description: "Algorithmes avancés pour prédire et gérer l'affluence sur les sites touristiques.",
                delay: 0
              },
              {
                title: "Gestion de la mobilité",
                description: "Solutions pour optimiser les déplacements et réduire l'impact environnemental.",
                delay: 100
              },
              {
                title: "Protection des sites",
                description: "Recommandations pour préserver l'intégrité des sites naturels et culturels.",
                delay: 200
              },
              {
                title: "Planification des nettoyages",
                description: "Outils pour organiser efficacement les opérations de maintenance et nettoyage.",
                delay: 300
              },
              {
                title: "Planification des visites",
                description: "Interface intuitive pour les visiteurs désirant planifier leurs excursions.",
                delay: 400
              },
              {
                title: "Données en temps réel",
                description: "Intégration de multiples sources de données pour une information à jour.",
                delay: 500
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all animate-fade-up"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              À propos du projet
            </span>
            <h2 className="text-3xl font-display font-bold mb-6">Hackathon Citizens of Wallonia</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ce projet a été développé dans le cadre du Hackathon Citizens of Wallonia, visant à résoudre les défis de gestion des sites touristiques, chemins de randonnées et réserves naturelles en Wallonie.
            </p>
            <p className="text-muted-foreground mb-8">
              En utilisant les technologies de l'information et l'analyse de données, nous proposons une solution pour améliorer l'expérience des visiteurs tout en préservant l'intégrité et la durabilité des sites naturels et culturels.
            </p>
            <div className="flex justify-center">
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
