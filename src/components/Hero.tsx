import React, { useEffect, useState } from 'react';
import { ChevronDown, Cpu, Sprout } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Section principale 'Hero' de la page d'accueil.
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
                 bg-gradient-to-br from-blue-950 to-cyan-950 
                 dark:from-black dark:to-gray-950" // Couleurs de fond principales plus sombres et froides
    >
      {/* Éléments de fond décoratifs (cercles et carré) */}
      <div className="absolute inset-0 opacity-20"> 
        {/* Cercle turquoise */}
        <div className="absolute top-20 left-10 w-64 h-64 border border-teal-500 rounded-full animate-pulse-slow"></div> {/* Nouvelle couleur et animation lente */}
        {/* Cercle bleu vif */}
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-blue-500 rounded-full animate-spin-slow"></div> {/* Nouvelle couleur et animation de rotation lente */}
        {/* Carré cyan */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-cyan-500 rotate-45 animate-ping-slow"></div> {/* Nouvelle couleur et animation pulsante lente */}
      </div>

      {/* Fond avec motif de circuit (SVG) */}
<div className="absolute inset-0 opacity-20 pointer-events-none z-0">
  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        @keyframes movePattern {
          0% { transform: translate(0, 0); }
          100% { transform: translate(120px, 120px); }
        }

        .animated-pattern {
          animation: movePattern 20s linear infinite;
        }
      `}
    </style>

    <defs>
      {/* Dégradé doré */}
      <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="50%" stopColor="#FFA500" />
        <stop offset="100%" stopColor="#FFD700" />
      </linearGradient>

      {/* Motif simplifié de circuit */}
      <pattern id="gold-circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        <rect width="120" height="120" fill="transparent" />
        <path d="M10 10 h40 v40 h20 v-30 h30" stroke="url(#goldGradient)" strokeWidth="1" fill="none"/>
        <path d="M10 60 h80 v20 h20" stroke="url(#goldGradient)" strokeWidth="1" fill="none"/>
        <circle cx="10" cy="10" r="2" fill="url(#goldGradient)" />
        <circle cx="90" cy="60" r="2" fill="url(#goldGradient)" />
        <circle cx="50" cy="90" r="2" fill="url(#goldGradient)" />
      </pattern>
    </defs>

    {/* Animation du fond avec déplacement du motif */}
    <g className="animated-pattern">
      <rect width="100%" height="100%" fill="url(#gold-circuit)" />
    </g>
  </svg>
</div>




      {/* Halo lumineux suivant le curseur */}
      <div
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.2), transparent 40%)` // rgba(teal-400, 0.2)
        }}
      ></div>

      {/* Contenu principal de la section Hero  */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icônes au-dessus du titre */}
        <div className="mb-8 flex justify-center items-center space-x-4">
          <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full"> 
            <Sprout className="w-8 h-8 text-teal-600 dark:text-teal-400" /> 
          </div>
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
            <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-100 dark:text-white mb-6">
          Ulysse{' '}
          <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent"> {/* Couleurs du dégradé du nom modifiées */}
            Borris
          </span>
        </h1>

 

        {/* Titres de poste et compétences clés */}
        <div className="mb-12">
          <p className="text-lg text-slate-400 mb-4">
            Développeur •  Agriculteur Biologique • Innovateur IoT
          </p>
          {/* Tags de compétences */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full"> {/* Couleurs du tag Python/Flask modifiées */}
              Python & Flask
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"> {/* Couleurs du tag React/TS inchangées (déjà bleues) */}
              React & TypeScript
            </span>
            <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full"> {/* Couleurs du tag RPi/IoT modifiées */}
              Raspberry Pi & IoT
            </span>
            <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full"> {/* Nouvelle couleur pour l'AgriTech */}
              Technologie Agricole
            </span>
          </div>
        </div>

        {/* Bouton "Explore My Work" */}
        <button
          onClick={scrollToProjects}
          className="group inline-flex items-center space-x-2 px-8 py-4 
                     bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 
                     text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        > {/* Couleurs du bouton modifiées */}
          <span>Explorer mes Travaux</span>
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Indicateur de défilement animé */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-300 dark:bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;