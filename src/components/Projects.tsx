// src/components/Projects.tsx
import React, { useState } from "react";
import { ExternalLink, Github, Cpu, Leaf, Zap } from "lucide-react";
import ProjectModal from "./ProjectModal"; // Importe le nouveau composant de modale

const Projects: React.FC = () => {
  // --- ÉTATS POUR LA MODALE ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null); // Stockera le projet à afficher dans la modale

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null); // Réinitialise le projet sélectionné
  };
  // --- FIN DES ÉTATS DE LA MODALE ---

  const projects = [
    {
      title: "Le Murmure du Fungus",
      subtitle: "Kits de Culture de Champignons Artisanaux",
      description:
        "Production de kits de culture de champignons haut de gamme, gourmands/médicinaux combinant des méthodes de culture traditionnelles avec une technologie de surveillance moderne.",
      technologies: [
        "Mycologie",
        "React/Next.js",
        "E‑commerce",
        "Marketing Digital",
        "Intégration IoT (python, FLask, postgress)",
      ],
      icon: <Leaf className="w-8 h-8" />,
      color: "from-teal-500 to-teal-700",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      status: "En Production",

      // ——— CONTENU DÉTAILLÉ POUR LA MODALE ———
      fullDescription: [
         
        "Le Murmure du Fungus est né en 2024, dans les deux mètres carrés d’un garde‑robe d’étudiant. C’est là que, parallèlement à mon AEC en développement de systèmes, j’ai installé ma première mini‑serre à champignons comestibles.",
        "Ce projet est le fruit d’une passion pour deux forces complémentaires : l’autosuffisance alimentaire et l’innovation technologique.",
        "J’y développe:",
        "• Un site web en React, avec un backend Flask et une base de données PostgreSQL, pour la vitrine et la vente de kits de culture de champignons.",
        "• Et un système IoT piloté par Raspberry Pi, connecté à des capteurs environnementaux et des contrôleurs qui régulent humidité, température et CO₂.",
        "En parallèle, je collecte les données de culture pour entraîner un modèle d’intelligence artificielle sur mesure, capable d’optimiser les cycles de production — mieux produire, avec moins.",
        "Le Murmure du Fungus poursuit une double mission :",
        "1. Offrir des champignons ultra‑frais, cultivés localement, de manière responsable et artisanale.",
        "2. Explorer les frontières de l’agritech.",
        
      ],

      images: [
        "/images/mini-serre-fungus.jpg",

      ],
      features: [
        "Kits de culture pré‑ensemencés",
        "Variétés rares et populaires (Lion’s Mane , Pleurote, Enoki, Cordyceps )",
        "Guide de culture pas‑à‑pas inclus",
        "Option de capteurs IoT pour suivi en temps réel",
        "Contrôle climatique piloté par IA",
        "API ouverte et documentation open source"
        
      ],
      websiteLink: "https://murmure-du-fungus.com",
      githubLink: "",
    },

    
    {
      title: "OvoOx",
      subtitle: "Mini‑Serres & Solutions AgriTech IoT",
      description:
        "Gamme de produit agritech connectées, imprimés en 3D localement — l’artisanat High tech au service de l’agriculture urbaine.",
      technologies: [
        "Raspberry Pi",
        "Python",
        "React/Next.js",
        "Flask",
        "Capteurs IoT",
        "Impression 3D",
        "Vision par ordinateur",
        "Modèles IA",
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      status: "En Développement Actif",

      // ——— CONTENU DÉTAILLÉ POUR LA MODALE ———
      fullDescription: [
        "🚀 OvoOx : l’artisanat high‑tech du futur",
        "OvoOx est mon projet phare à long terme : une entreprise dédiée à la démocratisation de la culture de champignons et de l’agriculture urbaine grâce à des mini‑serres intelligentes, modulaires et abordables.",
        "Conçu et fabriqué localement, pièce par pièce, grâce à l’impression 3D —",
        "La plateforme OvoOx comprend :",
        "• Des mini‑serres IoT pour champignons (contrôle intelligent de l’humidité, de la température et du CO₂).",
        "• Des plateaux de culture hydroponique plug‑and‑play pour herbes fraîches et micro‑pousses.",
        "• Des modules d’optimisation de semis équipés de LED spectrales et d’IA pour accélérer la germination.",
        "Je programme moi‑même les micro‑contrôleurs, les algorithmes de régulation climatique et l’application mobile (en cours) qui unifiera le tout.",
        ,
        "Mon ambition est de faire d’OvoOx une référence de l’agritech, où chaque serre, chaque plateau et chaque ligne de code restent accessibles, réparables et évolutifs."
      ],

      images: [
        "/images/ovoox-mini-serre.png",
      ],

      features: [
        "Mini‑serres modulaires imprimées en 3D",
        "Plateaux hydroponiques intelligents",
        
        "App mobile (iOS/Android) en développement",
        
      ],

      
      websiteLink: "www.OvoOx.com", 
    },


{
  title: "Suite IoT AgriTech",
  subtitle: "Systèmes Embarqués pour l'Agriculture",
  description:
    "Collection de projets IoT basés sur Raspberry Pi et microcontrôleurs pour la gestion et l'automatisation agricole.",
  technologies: [
    "Raspberry Pi",
    "Arduino",
    "Capteurs",
    "Automatisation",
    "Python",
  ],
  icon: <Zap className="w-8 h-8" />,
  color: "from-cyan-500 to-cyan-700",
  bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
  status: "Phase de Recherche",

  // ——— CONTENU DÉTAILLÉ POUR LA MODALE ———
  // Les titres sont dans des <h3> et les liens dans des <a href...>
  fullDescription: [ "Lien github vers tous mes projets IoT publiques :",
    
  ],
  images: [],
  features: [],
  githubLink: "https://github.com/Ulysse-Dev-Serre",
  websiteLink: "",
},

    
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8
                 bg-gradient-to-br from-blue-950 to-cyan-950
                 dark:from-black dark:to-gray-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white dark:text-white mb-4">
            Projets en Vedette
          </h2>
          <p className="text-xl text-blue-100 dark:text-cyan-200 max-w-3xl mx-auto">
            Là où la sagesse ancestrale rencontre la technologie de pointe —
            explorant l'intersection de la nature, du code et de l'innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-slate-800 dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-white/10 dark:bg-white/5 text-xs font-medium text-gray-800 dark:text-white/80 rounded-full backdrop-blur-sm">
                  {project.status}
                </span>
              </div>

              <div className={`${project.bgColor} p-8 relative`}>
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white mb-4 shadow-lg`}
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

              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p
                  className={`text-${
                    project.color.split(" ")[0].split("-")[1]
                  }-400 font-medium mb-4`}
                >
                  {project.subtitle}
                </p>
                <p className="text-blue-100 dark:text-cyan-200 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 dark:bg-white/5 text-white/80 rounded-full text-sm"
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
                      className="flex items-center space-x-2 px-4 py-2 bg-white/10 dark:bg-white/5 text-white/80 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {/* Bouton "En savoir plus" - Ouvre la modale */}
                  <button
                    onClick={() => openModal(project)}
                    className={`flex items-center space-x-2 px-4 py-2 bg-${
                      project.color.split(" ")[0].split("-")[1]
                    }-600 hover:bg-${
                      project.color.split(" ")[0].split("-")[1]
                    }-700 text-white rounded-lg transition-colors`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>En Savoir Plus</span>
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
