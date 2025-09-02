// src/components/Projects.tsx
import React, { useState, useEffect } from "react";
import { ExternalLink, Github, Cpu, Leaf, Zap } from "lucide-react";
import ProjectModal from "./ProjectModal"; // Importe le nouveau composant de modale

const Projects: React.FC = () => {
  // --- ÉTATS POUR LA MODALE ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null); // Stockera le projet à afficher dans la modale
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number, opacity: number}>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Génération de particules moins nombreuses et plus subtiles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 1 + 0.3,
      opacity: Math.random() * 0.5 + 0.1
    }));
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newY = particle.y - particle.speed;
        if (newY < -10) newY = window.innerHeight + 10;
        
        return {
          ...particle,
          y: newY,
          opacity: Math.sin(Date.now() * 0.001 + particle.id) * 0.3 + 0.4
        };
      }));
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
        "Capteurs CO₂ / Température / Humidité",
        "Python",
        "Flask",
        "PostgreSQL",
        "Électronique",
        "Relais",
        "Ventilation",
        "LED",
        "Humidificateur"
      ],
      icon: <Leaf className="w-8 h-8" />,
      color: "from-teal-500 to-teal-700",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      status: "En production",

      // ——— CONTENU DÉTAILLÉ POUR LA MODALE ———
      fullDescription: [
        "La mini-serre IoT d’intérieur est née en 2024, dans deux mètres carrés d’un placard d’étudiant. Parallèlement à mon AEC en développement de systèmes, j’y ai installé ma première serre à champignons comestibles.",
        "Le projet combine autosuffisance alimentaire et innovation technique.",
        "J’y développe :",
        "• Un système IoT piloté par Raspberry Pi, connecté à des capteurs environnementaux et à des actionneurs régulant humidité, température et CO₂.",
        "• Une collecte de données de culture pour entraîner un modèle d’IA visant à optimiser les cycles de production.",
        "Objectifs :",
        "1. Explorer des pistes d’autosuffisance alimentaire urbaine.",
        "2. Repousser les frontières de l’agritech accessible et réparable."
      ],

      images: ["/images/mini-serre-fungus.jpg"],

      features: [
        "Capteurs IoT avec suivi temps réel",
        "Contrôle climatique assisté par IA",
        "API ouverte et documentation",
        "Code open-source sur GitHub"
      ],
      websiteLink: "https://github.com/Ulysse-Dev-Serre/Projet_IoT_RaspberryPi",
      githubLink: "https://github.com/Ulysse-Dev-Serre/Projet_IoT_RaspberryPi"
    },

    {
      title: "ManorLeaf",
      subtitle: "Applications mobiles et dispositifs IoT pour plantes et jardin",
      description:
        "Gamme agritech connectée, fabriquée localement via impression 3D. Domotique du vivant, simple et durable.",
      technologies: [
        "Flutter",
        "Raspberry Pi",
        "Microcontrôleurs",
        "Capteurs IoT",
        "React / Next.js",
        "Python",
        "Impression 3D"
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      status: "En développement actif",

      // ——— CONTENU DÉTAILLÉ POUR LA MODALE ———
      fullDescription: [
        "ManorLeaf vise à démocratiser l’aide technologique pour le soin des plantes d’intérieur et les potagers urbains.",
        "La plateforme comprend une application mobile (noyau logiciel), des capteurs d’humidité et de température, et des modules évolutifs (ex. hydroponie plug-and-play, LED spectrales, assistance IA).",
        "Conception locale : pièces imprimées en 3D, assemblage maîtrisé ; composants électroniques standards pour réduire les coûts et faciliter la réparation.",
        "Ambition : rendre l’agritech et la domotique du vivant accessibles, réparables et évolutives."
      ],

      images: ["/images/Product1.png","/images/Product2.png" ],
      

      features: [
        "system hydroponique",
        "Application mobile (iOS/Android) en cours",
        "Alertes d’arrosage et de soins"
      ],

      websiteLink: "En développement"
    },

    {
      title: "E-commerce Starter",
      subtitle:
        "Base réutilisable pour lancer rapidement de nouvelles boutiques",
      description:
        "Starter Next.js prêt à personnaliser : front-end modulable, back-end complet, multi-langues, multi-devises, authentification et paiements sécurisés.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "JWT", "Stripe"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-cyan-500 to-cyan-700",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      status: "En production",

      // ——— CONTENU DÉTAILLÉ POUR LA MODALE ———
      fullDescription: [
        "Objectif : disposer d’une base stable et rapide à adapter pour déployer de nouvelles boutiques.",
        "Fonctionnalités clés : authentification, gestion des produits et du panier, intégration Stripe, internationalisation et configuration thématique facilitée."
      ],
      images: [],
      features: [],
      githubLink: "https://github.com/Ulysse-Dev-Serre/ecomerce-starter",
      websiteLink: ""
    }
  ];


    
 

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden
                 bg-gradient-to-br from-blue-950 via-purple-950 to-cyan-950
                 dark:from-black dark:via-purple-950 dark:to-gray-950 text-white"
    >
      {/* Particules flottantes subtiles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-br from-teal-400 to-blue-500 rounded-full animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 3}px rgba(45, 212, 191, 0.3)`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Effets de lueur d'arrière-plan */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full 
                        blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full 
                        blur-3xl animate-pulse-slow delay-2000"></div>
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-purple-500/15 rounded-full 
                        blur-3xl animate-pulse-slow delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6
                         drop-shadow-[0_8px_32px_rgba(45,212,191,0.3)] hover:drop-shadow-[0_12px_48px_rgba(45,212,191,0.5)]
                         transition-all duration-500">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent 
                           animate-gradient-x bg-300%">
              Projets en Vedette
            </span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light">
            Là où la <span className="text-teal-400 font-medium">sagesse ancestrale</span> rencontre la <span className="text-blue-400 font-medium">technologie de pointe</span> —
            explorant l'intersection de la <span className="text-purple-400 font-medium">nature, du code et de l'innovation</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-md
                         bg-gradient-to-br from-slate-800/80 via-slate-900/70 to-slate-800/80 
                         border border-white/10 hover:border-white/20
                         shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)]
                         transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02]
                         hover:shadow-teal-500/10 hover:bg-gradient-to-br hover:from-slate-800/90 hover:via-slate-900/80 hover:to-slate-800/90
                         transform transition-all duration-700 delay-${index * 200}
                         ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="px-4 py-2 bg-gradient-to-br from-white/20 to-white/10 text-xs font-medium 
                               text-white rounded-full backdrop-blur-md border border-white/20 
                               shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300">
                  {project.status}
                </span>
              </div>

              {/* Effet de brillance qui passe sur la carte au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                             translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-20"></div>

              <div className={`${project.bgColor} p-8 relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-transparent`}>
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white mb-6 
                             shadow-2xl group-hover:shadow-[0_15px_35px_rgba(45,212,191,0.4)] 
                             transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                             border border-white/20`}
                >
                  {project.icon}
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <svg
                    viewBox="0 0 100 100"
                    className={`w-full h-full text-${
                      project.color.split(" ")[0].split("-")[1]
                    }-400`}
                  >
                    <defs>
                      <pattern
                        id={`pattern-${index}`}
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="10" cy="10" r="1" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect
                      width="100"
                      height="100"
                      fill={`url(#pattern-${index})`}
                    />
                  </svg>
                </div>
              </div>

              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-serif font-bold text-white mb-3 
                               group-hover:text-teal-300 transition-colors duration-300
                               drop-shadow-lg">
                  {project.title}
                </h3>
                <p
                  className={`text-${
                    project.color.split(" ")[0].split("-")[1]
                  }-400 font-medium mb-4 text-lg`}
                >
                  {project.subtitle}
                </p>
                <p className="text-slate-200 mb-6 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-br from-white/15 to-white/5 text-white rounded-full text-sm
                               border border-white/20 backdrop-blur-md hover:bg-white/20 
                               hover:border-white/30 transition-all duration-300 hover:scale-105
                               shadow-lg hover:shadow-teal-500/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {/* Bouton "Code" (vers GitHub) - conditionnel si githubLink existe */}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-br from-slate-700 to-slate-800 
                               text-white rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all duration-300 
                               border border-white/20 hover:border-white/30 shadow-lg hover:shadow-2xl hover:scale-105
                               backdrop-blur-sm relative overflow-hidden"
                    >
                      <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="font-medium">Code</span>
                      {/* Effet de lueur au hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                     translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </a>
                  )}
                  {/* Bouton "En savoir plus" - Ouvre la modale */}
                  <button
                    onClick={() => openModal(project)}
                    className={`group flex items-center space-x-2 px-6 py-3 
                              bg-gradient-to-br from-${project.color.split(" ")[0].split("-")[1]}-600 to-${project.color.split(" ")[0].split("-")[1]}-700
                              hover:from-${project.color.split(" ")[0].split("-")[1]}-500 hover:to-${project.color.split(" ")[0].split("-")[1]}-600
                              text-white rounded-xl transition-all duration-300 
                              shadow-lg hover:shadow-2xl hover:scale-105
                              border border-white/20 hover:border-white/30 relative overflow-hidden`}
                  >
                    <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-medium">En Savoir Plus</span>
                    {/* Effet de lueur au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
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
