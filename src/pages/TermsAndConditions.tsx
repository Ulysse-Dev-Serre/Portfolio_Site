import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileText, Scale, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number, opacity: number}>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Particules légales (violettes et dorées)
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2.5 + 1,
      speed: Math.random() * 0.4 + 0.2,
      opacity: Math.random() * 0.3 + 0.2
    }));
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newY = particle.y - particle.speed;
        if (newY < -10) newY = window.innerHeight + 10;
        
        return {
          ...particle,
          y: newY,
          opacity: Math.sin(Date.now() * 0.001 + particle.id) * 0.2 + 0.4
        };
      }));
    };

    const particleInterval = setInterval(animateParticles, 60);
    return () => clearInterval(particleInterval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-purple-950 to-cyan-950 
                    dark:from-black dark:via-purple-950 dark:to-gray-950 text-white">
      
      {/* Particules légales */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-br from-purple-400 to-amber-500 rounded-full animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 3}px rgba(168, 85, 247, 0.4)`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Effets lumineux d'arrière-plan */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-pulse-slow delay-4000"></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header avec bouton retour */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Link 
              to="/" 
              className="group inline-flex items-center space-x-2 mb-8 text-slate-300 hover:text-purple-400 
                       transition-all duration-300 hover:translate-x-2"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>

            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-purple-500/20 to-amber-500/10 rounded-2xl border border-purple-400/30 
                               shadow-lg backdrop-blur-md">
                  <Scale className="w-12 h-12 text-purple-400" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6
                           drop-shadow-[0_8px_32px_rgba(168,85,247,0.3)]">
                <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-indigo-400 bg-clip-text text-transparent 
                               animate-gradient-x bg-300%">
                  Conditions d'Utilisation
                </span>
              </h1>
              <p className="text-xl text-slate-200 font-light">
                Règles et conditions d'utilisation de ce <span className="text-purple-400 font-medium">portfolio</span>
              </p>
            </div>
          </div>

          {/* Contenu principal */}
          <div className={`backdrop-blur-md bg-gradient-to-br from-slate-800/80 via-slate-900/70 to-slate-800/80 
                         rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10 
                         transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            <div className="flex items-center space-x-3 mb-8 p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
              <FileText className="w-6 h-6 text-purple-400" />
              <p className="text-slate-200 font-medium">
                Dernière mise à jour : <span className="text-purple-400">20 juin 2025</span>
              </p>
            </div>

            <div className="space-y-10 text-slate-200">
              
              {/* Section 1 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center space-x-3">
                  <User className="w-6 h-6 text-purple-400" />
                  <span>1. Introduction</span>
                </h2>
                <div className="pl-9 p-6 bg-purple-500/10 rounded-xl border border-purple-400/20">
                  <p className="leading-relaxed">
                    Bienvenue sur mon <span className="text-purple-400 font-medium">portfolio personnel</span>. 
                    Ces conditions définissent les règles d'utilisation de ce site web (le "Site"). 
                    En l'utilisant, vous acceptez ces conditions dans leur intégralité.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-6">2. Propriété Intellectuelle</h2>
                <div className="pl-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: 'Contenu Original',
                        items: ['Textes et descriptions', 'Images et captures d\'écran', 'Projets présentés', 'Design et interface'],
                        color: 'text-amber-400 border-amber-400/20 bg-amber-500/10'
                      },
                      {
                        title: 'Code et Développement',
                        items: ['Code source des projets', 'Algorithmes développés', 'Solutions techniques', 'Architectures logicielles'],
                        color: 'text-purple-400 border-purple-400/20 bg-purple-500/10'
                      }
                    ].map((category, index) => (
                      <div key={index} className={`p-6 rounded-xl border ${category.color}`}>
                        <h3 className="font-semibold mb-4">{category.title}</h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-current rounded-full"></div>
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-6 bg-red-500/10 rounded-xl border border-red-400/20">
                    <p className="leading-relaxed">
                      <span className="text-red-400 font-semibold">Important :</span> 
                      Tout le contenu présenté sur ce Site est ma propriété intellectuelle. 
                      Il est destiné à des fins de <span className="text-amber-400 font-medium">consultation personnelle</span>. 
                      Toute reproduction, distribution ou utilisation commerciale sans mon autorisation écrite explicite est strictement interdite.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-6">3. Utilisation du Site</h2>
                <div className="pl-4 space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: 'Utilisation Autorisée',
                        desc: 'Consultation personnelle, découverte de mes projets, prise de contact professionnel',
                        icon: '✅',
                        color: 'bg-emerald-500/10 border-emerald-400/20'
                      },
                      {
                        title: 'Utilisation Interdite',
                        desc: 'Copie du contenu, utilisation commerciale, reverse engineering du code',
                        icon: '❌',
                        color: 'bg-red-500/10 border-red-400/20'
                      },
                      {
                        title: 'Responsabilité',
                        desc: 'Le site est fourni "tel quel". Je ne garantis pas une disponibilité continue',
                        icon: '⚠️',
                        color: 'bg-amber-500/10 border-amber-400/20'
                      }
                    ].map((rule, index) => (
                      <div key={index} className={`p-4 rounded-xl border ${rule.color}`}>
                        <div className="text-2xl mb-2">{rule.icon}</div>
                        <h3 className="font-semibold text-white mb-2">{rule.title}</h3>
                        <p className="text-sm leading-relaxed">{rule.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-blue-500/10 rounded-xl border border-blue-400/20">
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">Disponibilité du Service</h3>
                    <p className="leading-relaxed">
                      Ce Site est un <span className="text-blue-400 font-medium">portfolio personnel</span> hébergé à des fins de démonstration. 
                      Je m'efforce de maintenir sa disponibilité, mais ne peux garantir un service ininterrompu. 
                      Des maintenances ou des interruptions temporaires peuvent survenir.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-6">4. Projets et Collaborations</h2>
                <div className="pl-4 space-y-4">
                  <div className="p-6 bg-teal-500/10 rounded-xl border border-teal-400/20">
                    <h3 className="text-xl font-semibold text-teal-300 mb-3">Projets Open Source</h3>
                    <p className="leading-relaxed mb-4">
                      Certains de mes projets peuvent être disponibles sous licence open source sur GitHub. 
                      Dans ce cas, les conditions spécifiques de chaque licence s'appliquent.
                    </p>
                    <p className="text-sm text-teal-200 italic">
                      Consultez les repositories GitHub individuels pour connaître les licences applicables.
                    </p>
                  </div>

                  <div className="p-6 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">Collaborations Professionnelles</h3>
                    <p className="leading-relaxed">
                      Pour toute collaboration, utilisation commerciale ou licencing de mes projets, 
                      veuillez me contacter directement. Nous pourrons discuter des termes appropriés selon vos besoins.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-6">5. Modifications</h2>
                <div className="pl-4 p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                  <p className="leading-relaxed">
                    Je me réserve le droit de modifier ces conditions d'utilisation à tout moment. 
                    Les modifications entrent en vigueur dès leur publication sur cette page. 
                    Il est de votre responsabilité de consulter régulièrement ces conditions.
                  </p>
                </div>
              </section>

              {/* Section Contact */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-6">6. Contact</h2>
                <div className="pl-4">
                  <div className="p-6 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-xl border border-blue-400/20">
                    <p className="leading-relaxed mb-4">
                      Si vous avez des questions concernant ces conditions d'utilisation, 
                      vous pouvez me contacter de plusieurs façons :
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="mailto:ulyssebo255@gmail.com"
                        className="group flex items-center space-x-2 text-blue-400 hover:text-blue-300 
                                 transition-colors font-medium"
                      >
                        <span>📧</span>
                        <span>ulyssebo255@gmail.com</span>
                      </a>
                      <Link 
                        to="/#contact"
                        className="group flex items-center space-x-2 text-teal-400 hover:text-teal-300 
                                 transition-colors font-medium"
                      >
                        <span>💬</span>
                        <span>Formulaire de contact</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
