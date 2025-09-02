import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Cpu, Sprout } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number, angle: number}>>([]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Génération des particules
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
      angle: Math.random() * Math.PI * 2
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + Math.cos(particle.angle) * particle.speed;
        let newY = particle.y + Math.sin(particle.angle) * particle.speed;
        
        if (newX > window.innerWidth + 10) newX = -10;
        if (newX < -10) newX = window.innerWidth + 10;
        if (newY > window.innerHeight + 10) newY = -10;
        if (newY < -10) newY = window.innerHeight + 10;
        
        return {
          ...particle,
          x: newX,
          y: newY,
          angle: particle.angle + 0.01
        };
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    const particleInterval = setInterval(animateParticles, 50);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(particleInterval);
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
                 bg-gradient-to-br from-blue-950 via-purple-950 to-cyan-950 
                 dark:from-black dark:via-purple-950 dark:to-gray-950"
    >
      {/* Particules flottantes dynamiques */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(45, 212, 191, 0.8)`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Éléments géométriques animés avec effet 3D */}
      <div className="absolute inset-0 opacity-30 perspective-1000"> 
        {/* Cercle turquoise avec effet glass */}
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-teal-400 rounded-full 
                        animate-pulse-slow backdrop-blur-sm bg-gradient-to-br from-teal-500/10 to-transparent
                        shadow-[0_0_80px_rgba(45,212,191,0.3)] transform-gpu transition-transform duration-1000 hover:scale-110"></div>
        {/* Cercle bleu avec rotation 3D */}
        <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-blue-400 rounded-full 
                        animate-spin-slow backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-transparent
                        shadow-[0_0_60px_rgba(59,130,246,0.4)] transform-gpu transition-transform duration-1000 hover:scale-110"></div>
        {/* Carré cyan avec effet holographique */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-cyan-400 rotate-45 
                        animate-ping-slow backdrop-blur-sm bg-gradient-to-br from-cyan-500/10 to-transparent
                        shadow-[0_0_40px_rgba(34,211,238,0.4)] transform-gpu transition-all duration-1000 hover:rotate-90 hover:scale-125"></div>
        
        {/* Nouveaux éléments géométriques */}
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-purple-400 
                        animate-bounce backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-transparent
                        shadow-[0_0_30px_rgba(168,85,247,0.3)] transform-gpu"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-64 border border-emerald-400 rotate-12 
                        animate-pulse backdrop-blur-sm bg-gradient-to-br from-emerald-500/10 to-transparent
                        shadow-[0_0_25px_rgba(16,185,129,0.3)] transform-gpu"></div>
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




      {/* Halo lumineux multicouche suivant le curseur */}
      <div
        className="absolute inset-0 transition-all duration-500 ease-out"
        style={{
          background: `
            radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.3), transparent 30%),
            radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), transparent 50%),
            radial-gradient(1200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.1), transparent 70%)
          `
        }}
      ></div>

      {/* Effet de lueur d'arrière-plan pulsant */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-teal-500/20 rounded-full 
                        blur-3xl animate-pulse-slow transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-1/2 w-80 h-80 bg-blue-500/20 rounded-full 
                        blur-3xl animate-pulse-slow delay-1000 transform translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/15 rounded-full 
                        blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Contenu principal de la section Hero  */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icônes au-dessus du titre avec animations élégantes */}
        <div className={`mb-8 flex justify-center items-center space-x-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="p-4 bg-gradient-to-br from-teal-100 to-teal-50 dark:from-teal-900 dark:to-teal-800 rounded-full 
                         shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 
                         border border-teal-200 dark:border-teal-700 hover:rotate-12 group"> 
            <Sprout className="w-8 h-8 text-teal-600 dark:text-teal-400 group-hover:animate-pulse" /> 
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 rounded-full
                         shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 
                         border border-blue-200 dark:border-blue-700 hover:-rotate-12 group">
            <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:animate-spin" />
          </div>
        </div>

        {/* Titre principal avec animation de typing et effet 3D */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-100 dark:text-white mb-6 
                         drop-shadow-[0_8px_32px_rgba(45,212,191,0.3)] hover:drop-shadow-[0_12px_48px_rgba(45,212,191,0.5)]
                         transition-all duration-500 cursor-default select-none">
            <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-105">
              Ulysse
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent 
                           animate-gradient-x bg-300% inline-block hover:animate-bounce transition-transform duration-300 hover:scale-110
                           drop-shadow-[0_0_20px_rgba(45,212,191,0.8)]">
              Borris
            </span>
          </h1>
        </div>

 

        {/* Titres de poste et compétences clés avec animations staggered */}
        <div className={`mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-lg text-slate-300 mb-6 animate-fade-in-up font-light tracking-wide">
            <span className="text-teal-400">Développeur</span> • 
            <span className="text-blue-400 mx-2">Agriculteur Biologique</span> • 
            <span className="text-purple-400">Innovateur IoT</span>
          </p>
          {/* Tags de compétences avec effet glass morphism et animations */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-gradient-to-br from-teal-500/20 to-teal-600/10 text-teal-300 rounded-full 
                           border border-teal-400/30 backdrop-blur-md shadow-lg hover:shadow-teal-500/25 
                           transition-all duration-300 hover:scale-105 hover:bg-teal-500/30 hover:border-teal-400/50
                           animate-fade-in-up delay-[800ms]">
              Python & Flask
            </span>
            <span className="px-4 py-2 bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-300 rounded-full 
                           border border-blue-400/30 backdrop-blur-md shadow-lg hover:shadow-blue-500/25 
                           transition-all duration-300 hover:scale-105 hover:bg-blue-500/30 hover:border-blue-400/50
                           animate-fade-in-up delay-[900ms]">
              React & TypeScript
            </span>
            <span className="px-4 py-2 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 text-cyan-300 rounded-full 
                           border border-cyan-400/30 backdrop-blur-md shadow-lg hover:shadow-cyan-500/25 
                           transition-all duration-300 hover:scale-105 hover:bg-cyan-500/30 hover:border-cyan-400/50
                           animate-fade-in-up delay-[1000ms]">
              Raspberry Pi & IoT
            </span>
            <span className="px-4 py-2 bg-gradient-to-br from-purple-500/20 to-purple-600/10 text-purple-300 rounded-full 
                           border border-purple-400/30 backdrop-blur-md shadow-lg hover:shadow-purple-500/25 
                           transition-all duration-300 hover:scale-105 hover:bg-purple-500/30 hover:border-purple-400/50
                           animate-fade-in-up delay-[1100ms]">
              Technologie Agricole
            </span>
          </div>
        </div>

        {/* Bouton "Explore My Work" avec effet holographique */}
        <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <button
            onClick={scrollToProjects}
            className="group relative inline-flex items-center space-x-3 px-10 py-5 
                       bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 
                       hover:from-blue-500 hover:via-purple-500 hover:to-teal-500 
                       text-white rounded-full font-medium transition-all duration-500 
                       transform hover:scale-110 shadow-2xl hover:shadow-[0_20px_40px_rgba(45,212,191,0.4)]
                       border border-white/20 backdrop-blur-sm
                       before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent 
                       before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                       overflow-hidden"
          >
            <span className="relative z-10 text-lg font-semibold tracking-wide">Explorer mes Travaux</span>
            <ChevronDown className="w-6 h-6 group-hover:translate-y-2 group-hover:animate-bounce transition-all duration-300 relative z-10" />
            
            {/* Effet de lueur interne */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                           translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
        </div>
      </div>

      {/* Indicateur de défilement animé avec effet néon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
           onClick={scrollToProjects}>
        <div className="w-8 h-12 border-2 border-teal-400 dark:border-teal-300 rounded-full flex justify-center 
                       shadow-[0_0_20px_rgba(45,212,191,0.5)] group-hover:shadow-[0_0_30px_rgba(45,212,191,0.8)] 
                       transition-all duration-300 backdrop-blur-sm bg-gradient-to-b from-teal-500/10 to-transparent
                       group-hover:scale-110">
          <div className="w-2 h-4 bg-gradient-to-b from-teal-400 to-teal-300 rounded-full mt-2 
                         animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.8)] group-hover:animate-bounce"></div>
        </div>
        <p className="text-xs text-teal-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Découvrir
        </p>
      </div>
    </section>
  );
};

export default Hero;