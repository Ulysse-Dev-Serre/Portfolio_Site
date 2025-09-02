import React, { useState, useEffect } from 'react';
import { ArrowLeft, Cookie, Settings, Shield, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number, opacity: number}>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Particules cookies (oranges et dorées)
    const newParticles = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.6 + 0.2,
      opacity: Math.random() * 0.4 + 0.3
    }));
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newY = particle.y - particle.speed;
        if (newY < -10) newY = window.innerHeight + 10;
        
        return {
          ...particle,
          y: newY,
          opacity: Math.sin(Date.now() * 0.001 + particle.id) * 0.3 + 0.5
        };
      }));
    };

    const particleInterval = setInterval(animateParticles, 60);
    return () => clearInterval(particleInterval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-purple-950 to-cyan-950 
                    dark:from-black dark:via-purple-950 dark:to-gray-950 text-white">
      
      {/* Particules cookies */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-br from-orange-400 to-amber-500 rounded-full animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 3}px rgba(251, 146, 60, 0.4)`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Effets lumineux d'arrière-plan */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/25 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-500/15 rounded-full blur-3xl animate-pulse-slow delay-4000"></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header avec bouton retour */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Link 
              to="/" 
              className="group inline-flex items-center space-x-2 mb-8 text-slate-300 hover:text-orange-400 
                       transition-all duration-300 hover:translate-x-2"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>

            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-2xl border border-orange-400/30 
                               shadow-lg backdrop-blur-md">
                  <Cookie className="w-12 h-12 text-orange-400" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6
                           drop-shadow-[0_8px_32px_rgba(251,146,60,0.3)]">
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent 
                               animate-gradient-x bg-300%">
                  Politique de Cookies
                </span>
              </h1>
              <p className="text-xl text-slate-200 font-light">
                Comment ce site utilise les <span className="text-orange-400 font-medium">cookies</span> et technologies similaires
              </p>
            </div>
          </div>

          {/* Contenu principal */}
          <div className={`backdrop-blur-md bg-gradient-to-br from-slate-800/80 via-slate-900/70 to-slate-800/80 
                         rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10 
                         transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            <div className="flex items-center space-x-3 mb-8 p-4 bg-orange-500/10 rounded-xl border border-orange-400/20">
              <Info className="w-6 h-6 text-orange-400" />
              <p className="text-slate-200 font-medium">
                Dernière mise à jour : <span className="text-orange-400">20 juin 2025</span>
              </p>
            </div>

            <div className="space-y-10 text-slate-200">
              
              {/* Section 1 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-3">
                  <Cookie className="w-6 h-6 text-orange-400" />
                  <span>1. Qu'est-ce qu'un cookie ?</span>
                </h2>
                <div className="pl-9">
                  <div className="p-6 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-400/20">
                    <p className="leading-relaxed text-lg">
                      Un <span className="text-orange-400 font-medium">cookie</span> est un petit fichier texte stocké sur votre appareil 
                      (ordinateur, tablette, téléphone) lorsque vous visitez un site web. Il aide le site à se souvenir de vos préférences 
                      ou à assurer son bon fonctionnement.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {[
                      {
                        title: 'Stockage Local',
                        desc: 'Fichiers temporaires sur votre appareil',
                        icon: '💾',
                        color: 'bg-blue-500/10 border-blue-400/20'
                      },
                      {
                        title: 'Fonctionnalité',
                        desc: 'Améliore votre expérience de navigation',
                        icon: '⚙️',
                        color: 'bg-green-500/10 border-green-400/20'
                      },
                      {
                        title: 'Préférences',
                        desc: 'Se souvient de vos choix et paramètres',
                        icon: '🎯',
                        color: 'bg-purple-500/10 border-purple-400/20'
                      }
                    ].map((feature, index) => (
                      <div key={index} className={`p-4 rounded-xl border ${feature.color}`}>
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-6">2. Les cookies que j'utilise</h2>
                <div className="pl-4 space-y-6">
                  
                  {/* Cookies Essentiels */}
                  <div className="p-6 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-6 h-6 text-emerald-400" />
                      <h3 className="text-xl font-semibold text-emerald-300">Cookies Essentiels (Techniques)</h3>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-400/30">
                        ACTIFS
                      </span>
                    </div>
                    <p className="leading-relaxed mb-4">
                      Ce site web utilise <span className="text-emerald-400 font-medium">uniquement des cookies essentiels</span>. 
                      Ces cookies sont strictement nécessaires au fonctionnement de base du site.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { purpose: 'Navigation', desc: 'Maintenir votre session de navigation' },
                        { purpose: 'Affichage', desc: 'Permettre au site de s\'afficher correctement' },
                        { purpose: 'Sécurité', desc: 'Protéger contre les attaques malveillantes' },
                        { purpose: 'Préférences', desc: 'Mémoriser vos choix de thème (sombre/clair)' }
                      ].map((cookie, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-emerald-500/5 rounded-lg">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium text-emerald-300">{cookie.purpose}</p>
                            <p className="text-sm text-slate-300">{cookie.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cookies NON utilisés */}
                  <div className="p-6 bg-red-500/10 rounded-xl border border-red-400/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-6 h-6 text-red-400" />
                      <h3 className="text-xl font-semibold text-red-300">Cookies NON Utilisés</h3>
                      <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full border border-red-400/30">
                        DÉSACTIVÉS
                      </span>
                    </div>
                    <p className="leading-relaxed mb-4">
                      Je <span className="text-red-400 font-medium">n'utilise pas</span> les types de cookies suivants :
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { type: 'Suivi', icon: '🔍', desc: 'Cookies de tracking comportemental' },
                        { type: 'Analyse', icon: '📊', desc: 'Statistiques détaillées de navigation' },
                        { type: 'Publicité', icon: '📢', desc: 'Cookies publicitaires ou marketing' }
                      ].map((cookieType, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-red-500/5 rounded-lg">
                          <span className="text-xl opacity-50">{cookieType.icon}</span>
                          <div>
                            <p className="font-medium text-red-300 line-through">{cookieType.type}</p>
                            <p className="text-xs text-slate-400">{cookieType.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-3">
                  <Settings className="w-6 h-6 text-amber-400" />
                  <span>3. Gestion des cookies</span>
                </h2>
                <div className="pl-9 space-y-6">
                  
                  <div className="p-6 bg-amber-500/10 rounded-xl border border-amber-400/20">
                    <h3 className="text-xl font-semibold text-amber-300 mb-4">Configuration de votre navigateur</h3>
                    <p className="leading-relaxed mb-4">
                      Puisque ce site n'utilise que des <span className="text-amber-400 font-medium">cookies essentiels</span>, 
                      il n'y a pas d'option spécifique sur le site pour les désactiver sans affecter son fonctionnement.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          browser: 'Chrome / Edge',
                          steps: ['Paramètres → Confidentialité et sécurité', 'Cookies et autres données de sites', 'Gérer les cookies']
                        },
                        {
                          browser: 'Firefox',
                          steps: ['Paramètres → Vie privée et sécurité', 'Cookies et données de sites', 'Gérer les données']
                        },
                        {
                          browser: 'Safari',
                          steps: ['Préférences → Confidentialité', 'Gérer les données de sites web', 'Cookies et stockage']
                        },
                        {
                          browser: 'Opera',
                          steps: ['Paramètres → Avancé → Confidentialité', 'Paramètres de contenu', 'Cookies']
                        }
                      ].map((guide, index) => (
                        <div key={index} className="p-4 bg-amber-500/5 rounded-lg">
                          <h4 className="font-semibold text-amber-300 mb-2">{guide.browser}</h4>
                          <ul className="space-y-1">
                            {guide.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="text-sm text-slate-300 flex items-center space-x-2">
                                <span className="text-amber-400">→</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-blue-500/10 rounded-xl border border-blue-400/20">
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">Impact de la désactivation</h3>
                    <p className="leading-relaxed">
                      ⚠️ <span className="text-blue-400 font-medium">Important :</span> 
                      Certaines fonctionnalités du site pourraient ne pas fonctionner correctement si les cookies essentiels sont désactivés, 
                      notamment le thème sombre/clair et la navigation fluide.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-6">4. Évolutions futures</h2>
                <div className="pl-4">
                  <div className="p-6 bg-purple-500/10 rounded-xl border border-purple-400/20">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4">Transparence et consentement</h3>
                    <div className="space-y-4">
                      <p className="leading-relaxed">
                        Si je devais ajouter des cookies d'analyse ou de fonctionnalités avancées à l'avenir :
                      </p>
                      <ul className="space-y-3 ml-4">
                        {[
                          'Je mettrais à jour cette politique avec les détails complets',
                          'Un banner de consentement serait ajouté au site',
                          'Vous auriez le contrôle complet sur vos préférences',
                          'Les cookies non-essentiels nécessiteraient votre accord explicite'
                        ].map((commitment, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                            <span className="leading-relaxed">{commitment}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section Contact */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-6">5. Contact</h2>
                <div className="pl-4">
                  <div className="p-6 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-xl border border-teal-400/20">
                    <p className="leading-relaxed mb-4">
                      Pour toute question concernant cette politique de cookies ou l'utilisation des cookies sur ce site :
                    </p>
                    <a 
                      href="mailto:ulyssebo255@gmail.com"
                      className="group flex items-center space-x-3 text-teal-400 hover:text-teal-300 
                               transition-colors font-medium text-lg"
                    >
                      <Cookie className="w-5 h-5 group-hover:animate-spin" />
                      <span>ulyssebo255@gmail.com</span>
                    </a>
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

export default CookiePolicy;
