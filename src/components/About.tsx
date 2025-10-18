import React, { useState, useEffect } from 'react';
import { GraduationCap, MapPin, Sprout, Bug } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number, opacity: number, direction: number}>>([]);
  const [visibleMilestones, setVisibleMilestones] = useState<boolean[]>([]);

  const milestones = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Agriculteur Biologique",
      period: "2017–2019",
      description:
        "Lancement d'une entreprise maraîchère spécialisée en agriculture biologique intensive, inspirée des méthodes de Jean-Martin Fortier.",
    },
    {
      icon: <Sprout className="w-5 h-5" />, 
      title: "Projets d'Autosuffisance Alimentaire",
      period: "2019–2023",
      description:
        "Participation au développement de projets communautaires d'autosuffisance alimentaire au sein de milieux alternatifs low-thech au Québec.",
    },
    {
      icon: <Bug className="w-5 h-5" />, 
      title: "Initiation à l'Apiculture",
      period: "2021–2023",
      description:
        "Formation en apiculture écologique alternative, avec entretien et développement de différents modèles de ruches",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Études en Développement Logiciel",
      period: "2024–2026",
      description:
        "Poursuite d'un AEC en Développement Logiciel, axée sur l'apprentissage global de la programmation : du web au logiciel, en passant par les bases de données, au service web et au front end.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Génération de particules organiques
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.8 + 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      direction: Math.random() * Math.PI * 2
    }));
    setParticles(newParticles);

    // Animation des milestones avec délai
    const milestoneTimers = milestones.map((_, index) => 
      setTimeout(() => {
        setVisibleMilestones(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, 500 + index * 300)
    );

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + Math.cos(particle.direction) * particle.speed;
        let newY = particle.y + Math.sin(particle.direction) * particle.speed;
        
        // Boundaries avec rebond doux
        if (newX <= 0 || newX >= window.innerWidth) {
          particle.direction = Math.PI - particle.direction;
          newX = Math.max(0, Math.min(window.innerWidth, newX));
        }
        if (newY <= 0 || newY >= window.innerHeight) {
          particle.direction = -particle.direction;
          newY = Math.max(0, Math.min(window.innerHeight, newY));
        }
        
        return {
          ...particle,
          x: newX,
          y: newY,
          opacity: Math.sin(Date.now() * 0.001 + particle.id) * 0.4 + 0.6
        };
      }));
    };

    const particleInterval = setInterval(animateParticles, 60);
    
    return () => {
      clearInterval(particleInterval);
      milestoneTimers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden
                   bg-gradient-to-br from-secondary-950 via-accent-950 to-cyan-950
                   dark:from-black dark:via-accent-950 dark:to-gray-950 text-white"
    >
      {/* Particules organiques flottantes */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-br from-nature-400 to-primary-500 rounded-full animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 4}px rgba(16, 185, 129, 0.4)`,
              filter: 'blur(0.8px)'
            }}
          />
        ))}
      </div>

      {/* Effets lumineux d'arrière-plan organiques */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/6 left-1/6 w-80 h-80 bg-nature-500/20 rounded-full 
                        blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/6 right-1/6 w-96 h-96 bg-primary-500/15 rounded-full 
                        blur-3xl animate-pulse-slow delay-3000"></div>
        <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-secondary-500/20 rounded-full 
                        blur-3xl animate-pulse-slow delay-1500"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent-500/10 rounded-full 
                        blur-3xl animate-pulse-slow delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8
                           drop-shadow-[0_8px_32px_rgba(16,185,129,0.3)] hover:drop-shadow-[0_12px_48px_rgba(16,185,129,0.5)]
                           transition-all duration-500">
              Là où la{' '}
              <span className="bg-gradient-to-r from-nature-400 via-primary-400 to-secondary-400 bg-clip-text text-transparent 
                             animate-gradient-x bg-300%">
                Terre
              </span>{' '}
              Rencontre{' '}
              <span className="bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent 
                             animate-gradient-x bg-300%">
                l'Algorithme
              </span>
            </h2>

            {/* Image de profil avec effets premium */}
            <div className="relative w-40 h-40 mb-8 mx-auto lg:mx-0 group">
              <div className="absolute inset-0 bg-gradient-to-br from-nature-400 via-primary-400 to-secondary-500 
                             rounded-full animate-spin-slow opacity-75 blur-sm"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-nature-500 to-primary-600 
                             rounded-full opacity-50 animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden 
                             shadow-2xl group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)]
                             border-4 border-white/20 group-hover:border-white/40 
                             transition-all duration-500 transform group-hover:scale-110">
                <img
                  src="/images/your-profile-image.jpg" 
                  alt="Votre photo de profil"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Halo lumineux */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-nature-400/20 to-primary-400/20 
                             blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>

            <div className="space-y-8 text-lg text-slate-200 leading-relaxed font-light">
              <div className="transform transition-all duration-700 delay-300 opacity-0 translate-y-4
                            animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]">
                <p className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10
                             hover:bg-white/10 hover:border-white/20 transition-all duration-300
                             shadow-lg hover:shadow-nature-500/10">
                  Mon parcours a débuté <span className="text-nature-400 font-medium">les mains dans la terre</span>, dans une quête minimaliste d'autosuffisance alimentaire.
                  J'ai exploré la production de légumes et de fruits frais, de miel et de cire, de plantes médicinales,
                  ainsi que la cueillette sauvage — à la fois pour mes besoins personnels que pour contribuer concrètement à <span className="text-primary-400 font-medium">l'approvisionnement local</span>.
                </p>
              </div>

              <div className="transform transition-all duration-700 delay-500 opacity-0 translate-y-4
                            animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
                <p className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10
                             hover:bg-white/10 hover:border-white/20 transition-all duration-300
                             shadow-lg hover:shadow-primary-500/10">
                  Cette immersion dans le vivant m'a amené à réfléchir aux liens entre <span className="text-secondary-400 font-medium">autonomie alimentaire et technologies contemporaines</span>. 
                  Peu à peu, j'ai entrevu le potentiel d'outils simples et connectés pour accompagner, sans dénaturer, les pratiques de jardinage 
                  et de culture à petite échelle, en milieu urbain comme rural.
                </p>
              </div>

              <div className="transform transition-all duration-700 delay-700 opacity-0 translate-y-4
                            animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
                <p className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10
                             hover:bg-white/10 hover:border-white/20 transition-all duration-300
                             shadow-lg hover:shadow-accent-500/10">
                  Actuellement en <span className="text-accent-400 font-medium">AEC en Développement Logiciel</span> (2024–2026), j'y découvre les fondements du développement logiciel, notamment le front-end avec React et Flutter, 
                  afin de donner vie à mes projets, concevoir mes vitrines web et explorer le développement mobile. En parallèle, je me concentre sur les domaines qui 
                  me passionnent : <span className="text-cyan-400 font-medium"> Python, Service web, l'électronique embarquée (Raspberry Pi), la gestion de données et l'IA</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-nature-500 via-primary-500 to-secondary-500 rounded-full opacity-60"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-start space-x-6 transform transition-all duration-700 delay-[${1000 + index * 200}ms]
                             ${visibleMilestones[index] ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-nature-500 to-primary-600 rounded-2xl flex items-center justify-center text-white
                                   shadow-2xl hover:shadow-nature-500/40 transition-all duration-300 hover:scale-110 hover:rotate-12
                                   border-2 border-white/20 backdrop-blur-sm group">
                      <div className="group-hover:animate-pulse">
                        {milestone.icon}
                      </div>
                    </div>
                    {/* Effet de lueur */}
                    <div className="absolute inset-0 bg-gradient-to-br from-nature-400 to-primary-500 rounded-2xl blur-md opacity-30 -z-10"></div>
                  </div>

                  <div className="flex-grow backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10
                                 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg
                                 hover:shadow-nature-500/10 hover:translate-x-2">
                    <div className="flex items-center space-x-4 mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-nature-300 transition-colors">
                        {milestone.title}
                      </h3>
                      <span className="px-3 py-1 bg-gradient-to-br from-nature-500/20 to-primary-500/10 text-nature-300 text-sm rounded-full
                                     border border-nature-400/30 backdrop-blur-md shadow-lg">
                        {milestone.period}
                      </span>
                    </div>
                    <p className="text-neutral-200 leading-relaxed font-light">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
