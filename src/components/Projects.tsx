// src/components/Projects.tsx
import React, { useState, useEffect } from "react";
import { ExternalLink, Cpu, Leaf, Zap, BookOpen } from "lucide-react";
import ProjectModal from "./ProjectModal"; // Importe le nouveau composant de modale

const Projects: React.FC = () => {
  // --- ÉTATS POUR LA MODALE ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null); // Stockera le projet à afficher dans la modale
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
    }>
  >([]);

  useEffect(() => {
    setIsVisible(true);

    // Génération de particules moins nombreuses et plus subtiles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 1 + 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newY = particle.y - particle.speed;
          if (newY < -10) newY = window.innerHeight + 10;

          return {
            ...particle,
            y: newY,
            opacity: Math.sin(Date.now() * 0.001 + particle.id) * 0.3 + 0.4,
          };
        })
      );
    };

    const particleInterval = setInterval(animateParticles, 50);
    return () => clearInterval(particleInterval);
  }, []);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null); // Réinitialise le projet sélectionné
  };
  // --- FIN DES ÉTATS DE LA MODALE ---

  // Remplace uniquement le contenu de `projects` ci-dessous. Aucune modification visuelle ou structurelle.

  const projects = [
    {
      title: "Mini-serre IoT d’intérieur",
      subtitle: "Premier projet IoT complet",
      description:
        "Système de surveillance et de contrôle climatique pour la culture de champignons gastronomiques et médicinaux.",
      technologies: [
        "IoT",
        "Raspberry Pi",
        "Relais",
        "Capteur SCD30",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Electron",
      ],
      icon: <Leaf className="w-8 h-8" />,
      color: "from-primary-500 to-primary-700",
      bgColor: "bg-primary-50 dark:bg-primary-900/20",
      status: "En production",
      headerImage: "/images/mini-serre-fungus.jpg",

      // ——— CONTENU DÉTAILLÉ POUR LA MODALE ———
      fullDescription: [
        "La mini-serre IoT d'intérieur est née en 2024, dans deux mètres carrés d'un placard d'étudiant. Parallèlement à mon AEC en développement de systèmes, j'y ai installé ma première serre à champignons comestibles.",
        "Le projet combine autosuffisance alimentaire et innovation technique, avec deux composantes principales : un backend IoT pour le contrôle automatisé, et une interface desktop pour le monitoring et la gestion.",
      ],

      sections: [
        {
          title: "🍄 Backend IoT - Contrôle Automatisé (Raspberry Pi)",
          description: [
            "Système de contrôle automatisé pour serre à champignons, propulsé par Raspberry Pi et FastAPI.",
            "Ce backend explore l'Internet des Objets (IoT) appliqué à l'agriculture, en combinant autosuffisance alimentaire et innovation technologique. Il offre un contrôle intelligent de l'environnement via capteurs et actionneurs connectés.",
          ],
          image: "/images/mini-serre-fungus.jpg",
          features: [
            " Monitoring en temps réel : Température, humidité, CO₂ (capteur SCD30)",
            " Éclairage intelligent : LEDs programmables par plage horaire",
            " Gestion de l'humidité : Humidificateur à seuils configurables",
            " Ventilation adaptative : Extraction automatique selon niveau CO₂",
            " Modes automatique et manuel avec API REST complète",
            " API sécurisée par token avec documentation Swagger",
            " Persistance des données dans SQLite pour analyse",
          ],
        },
        {
          title: "🖥️ Interface Desktop Electron - Monitoring & Contrôle",
          description: [
            "Application desktop multiplateforme permettant de contrôler et surveiller la serre en temps réel.",
            "Interface moderne avec design dark mode (style high-tech/cyberpunk) offrant une expérience utilisateur fluide et intuitive.",
          ],
          image: "/images/Electron_app1.png",
          features: [
            " Dashboard temps réel avec graphiques interactifs (Chart.js)",
            " Contrôle manuel des actionneurs (LEDs, humidificateur, ventilation)",
            " Configuration des seuils et horaires directement depuis l'interface",
            " Historique graphique des données sur 24h, 48h ou 7 jours",
            " Statistiques détaillées (min/max/moyenne)",
            " Fonction d'arrêt d'urgence pour intervention rapide",
            " Communication REST avec le Raspberry Pi",
          ],
        },
      ],
      websiteLink: "https://github.com/Ulysse-Dev-Serre/Projet_IoT_RaspberryPi",
      githubLinks: [
        {
          title: "Backend Logic (FastAPI)",
          url: "https://github.com/Ulysse-Dev-Serre/Projet_IoT_RaspberryPi",
        },
        {
          title: "App Desktop (Electron)",
          url: "https://github.com/Ulysse-Dev-Serre/Projet_iot_Electron_UI.git",
        },
      ],
    },

    {
      title: "ManorLeaf",
      subtitle:
        "Applications mobiles et dispositifs IoT pour plantes et jardin",
      description:
        "Gamme agritech connectée, fabriquée localement via impression 3D. Domotique du vivant, simple et durable.",
      technologies: [
        "Flutter",
        "Raspberry Pi",
        "Microcontrôleurs",
        "Capteurs IoT",
        "React / Next.js",
        "Python",
        "Impression 3D",
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: "from-secondary-500 to-secondary-700",
      bgColor: "bg-secondary-50 dark:bg-secondary-900/20",
      status: "En développement actif",
      headerImage: "/images/Product1.png",

      // ——— CONTENU DÉTAILLÉ POUR LA MODALE ———
      fullDescription: [
        "ManorLeaf vise à démocratiser l’aide technologique pour le soin des plantes d’intérieur et les potagers urbains.",
        "La plateforme comprend une application mobile (noyau logiciel), des capteurs d’humidité et de température, et des modules évolutifs (ex. hydroponie plug-and-play, LED spectrales, assistance IA).",
        "Conception locale : pièces imprimées en 3D, assemblage maîtrisé ; composants électroniques standards pour réduire les coûts et faciliter la réparation.",
        "Ambition : rendre l’agritech et la domotique du vivant accessibles, réparables et évolutives.",
      ],

      images: ["/images/Product1.png", "/images/Product2.png"],

      features: [
        "system hydroponique",
        "Application mobile (iOS/Android) en cours",
        "Alertes d’arrosage et de soins",
      ],

      websiteLink: "En développement",
    },

    {
      title: "E-commerce Starter",
      subtitle:
        "Base réutilisable pour lancer rapidement de nouvelles boutiques",
      description:
        "Starter Next.js prêt à personnaliser : front-end modulable, back-end complet, multi-langues, multi-devises, authentification et paiements sécurisés.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Prisma ORM",
        "PostgreSQL",
        "Clerk",
        "Stripe",
        "next-intl",
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "from-secondary-500 to-secondary-700",
      bgColor: "bg-secondary-50 dark:bg-secondary-900/20",
      status: "En production",
      headerImage: "/images/ecommerce-header.jpg",

      // ——— CONTENU DÉTAILLÉ POUR LA MODALE ———
      fullDescription: [
        "Starter e-commerce universel, flexible et prêt à l'emploi pour lancer rapidement des boutiques en ligne dans n'importe quelle niche et pays.",
        "Une base technique solide et modulaire, pas une boutique figée : conçue pour s'adapter à tout type de commerce (animaux, plantes, jouets, vêtements, électronique...) et être opérationnelle en quelques jours.",
      ],

      features: [
        " E-commerce complet : Catalogue avec variantes, panier intelligent, checkout Stripe, emails automatiques",
        " Multi-pays : Canada/USA/France avec taxes locales, devises et zones d'expédition configurables",
        " Multi-langues : URLs bilingues (/fr/, /en/) avec SEO optimisé via next-intl",
        " Production-ready : Auth Clerk, sécurité avancée (rate limiting, CSRF, XSS), monitoring et logs",
        " Personnalisation rapide : Système de thèmes CSS modulables, configuration par variables d'environnement",
        " Déploiement ultra-rapide : De l'idée à la boutique en ligne en 5 minutes avec Vercel/Railway",
        " Qualité du code : TypeScript strict, tests automatisés, documentation complète",
        " Architecture modulaire : Prisma ORM, Next.js 15 API Routes, extensible facilement",
      ],
      githubLink: "https://github.com/Ulysse-Dev-Serre/ecommerce-starter-v2",
      websiteLink: "",
    },

    {
      title: "Crop & Garden",
      subtitle: "Blog AgTech optimisé SEO et LLMs",
      description:
        "Plateforme de contenu technique sur l'agriculture connectée, le DIY et l'IoT appliqué au jardinage. Optimisé pour être référencé par Google et tous les LLMs.",
      technologies: [
        "Astro",
        "JavaScript",
        "TypeScript",
        "NEON PostgreSQL",
        "Resend API",
        "Schema.org",
        "SEO Advanced",
        "Newsletter System"
      ],
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-nature-500 to-nature-700",
      bgColor: "bg-nature-50 dark:bg-nature-900/20",
      status: "En production",
      headerImage: "/images/blog-header.jpg",

      // ——— CONTENU DÉTAILLÉ POUR LA MODALE ———
      fullDescription: [
        "Crop & Garden est un blog technique dédié à l'AgTech, l'IoT agricole et le DIY pour jardiniers connectés.",
        "Conçu avec une architecture SEO ultra-optimisée pour être référencé par Google (Featured Snippets) et tous les LLMs du marché (ChatGPT, Claude, Perplexity, Gemini). Chaque article utilise Schema.org pour maximiser la visibilité et l'autorité thématique."
      ],

      features: [
        " Contenu technique approfondi : Tutoriels IoT, Raspberry Pi, automatisation agricole",
        " SEO & LLM-optimized : Schema.org, données structurées, E-E-A-T",
        " Framework Astro : Performance optimale, génération statique",
        " Newsletter automatisée : API custom avec NEON PostgreSQL + Resend",
        " Interface admin : Gestion des abonnés et automatisation des envois",
        " Autorité thématique : Backlinks, citations, positionnement #1 sur niches spécialisées",
        " Architecture multilingue : Support FR/EN avec hreflang",
        " Analytics avancées : Suivi SEO, sources de trafic, engagement"
      ],

      websiteLink: "https://cropandgarden.com/",
      githubLink: ""
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden
                 bg-gradient-to-br from-secondary-950 via-accent-950 to-secondary-950
                 dark:from-black dark:via-accent-950 dark:to-neutral-950 text-white"
    >
      {/* Particules flottantes subtiles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 3}px rgba(45, 212, 191, 0.3)`,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      {/* Effets de lueur d'arrière-plan */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full 
                        blur-3xl animate-pulse-slow"
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/20 rounded-full 
                        blur-3xl animate-pulse-slow delay-2000"
        ></div>
        <div
          className="absolute top-1/2 right-1/2 w-64 h-64 bg-accent-500/15 rounded-full 
                        blur-3xl animate-pulse-slow delay-4000"
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6
                         drop-shadow-[0_8px_32px_rgba(45,212,191,0.3)] hover:drop-shadow-[0_12px_48px_rgba(45,212,191,0.5)]
                         transition-all duration-500"
          >
            <span
              className="bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent 
                           animate-gradient-x bg-300%"
            >
              Projets en Vedette
            </span>
          </h2>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed font-light">
            Là où la{" "}
            <span className="text-primary-400 font-medium">
              sagesse ancestrale
            </span>{" "}
            rencontre la{" "}
            <span className="text-secondary-400 font-medium">
              technologie de pointe
            </span>{" "}
            — explorant l'intersection de la{" "}
            <span className="text-accent-400 font-medium">
              nature, du code et de l'innovation
            </span>
            .
          </p>
        </div>

        {/* Grille Simple et Équilibrée - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl 
                         bg-gradient-to-br from-neutral-800/80 via-neutral-900/70 to-neutral-800/80 
                         border border-white/10 hover:border-white/20
                         shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)]
                         transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.01]
                         hover:shadow-primary-500/10
                         ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              {/* HEAD - Image de fond avec icône et badge */}
              <div className="relative h-48 overflow-hidden">
                {/* Image de fond */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${project.headerImage || '/images/ovoox-mini-serre.png'})`,
                  }}
                />
                
                {/* Overlay gradient pour lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                
                {/* Badge de statut */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md text-xs font-medium text-white rounded-full border border-white/30 shadow-lg">
                    {project.status}
                  </span>
                </div>

                {/* Icône du projet */}
                <div className="absolute bottom-4 left-4 z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-2xl border-2 border-white/30 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    {project.icon}
                  </div>
                </div>

                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              {/* BODY - Contenu textuel */}
              <div className="relative p-6 flex flex-col">
                <h3
                  className="text-2xl font-serif font-bold text-white mb-3 
                               group-hover:text-primary-300 transition-colors duration-300
                               drop-shadow-lg"
                >
                  {project.title}
                </h3>
                <p
                  className={`text-${
                    project.color.split(" ")[0].split("-")[1]
                  }-400 font-medium mb-4 text-lg`}
                >
                  {project.subtitle}
                </p>
                <p className="text-neutral-200 mb-6 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-br from-white/15 to-white/5 text-white rounded-full text-sm
                               border border-white/20 backdrop-blur-md hover:bg-white/20 
                               hover:border-white/30 transition-all duration-300 hover:scale-105
                               shadow-lg hover:shadow-primary-500/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  {/* Bouton "En savoir plus" - Ouvre la modale */}
                  <button
                    onClick={() => openModal(project)}
                    className={`w-full group flex items-center justify-center space-x-2 px-6 py-3 
                              bg-gradient-to-br from-${
                                project.color.split(" ")[0].split("-")[1]
                              }-600 to-${
                                project.color.split(" ")[0].split("-")[1]
                              }-700
                              hover:from-${
                                project.color.split(" ")[0].split("-")[1]
                              }-500 hover:to-${
                      project.color.split(" ")[0].split("-")[1]
                    }-600
                              text-white text-sm rounded-xl transition-all duration-300 
                              shadow-lg hover:shadow-2xl hover:scale-105
                              border border-white/20 hover:border-white/30 relative overflow-hidden`}
                  >
                    <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-medium">En Savoir Plus</span>
                    {/* Effet de lueur au hover */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                    ></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- INCLUSION DE LA MODALE ICI --- */}
      {selectedProject && ( // Rendre la modale seulement si un projet est sélectionné
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
      {/* --- FIN DE L'INCLUSION DE LA MODALE --- */}
    </section>
  );
};

export default Projects;
