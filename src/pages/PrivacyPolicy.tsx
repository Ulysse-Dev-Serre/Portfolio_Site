import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Eye, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number, opacity: number}>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Particules de confidentialité (bleues et vertes)
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
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
      
      {/* Particules de confidentialité */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 3}px rgba(59, 130, 246, 0.4)`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Effets lumineux d'arrière-plan */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow delay-4000"></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header avec bouton retour */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Link 
              to="/" 
              className="group inline-flex items-center space-x-2 mb-8 text-slate-300 hover:text-blue-400 
                       transition-all duration-300 hover:translate-x-2"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>

            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-2xl border border-blue-400/30 
                               shadow-lg backdrop-blur-md">
                  <Shield className="w-12 h-12 text-blue-400" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6
                           drop-shadow-[0_8px_32px_rgba(59,130,246,0.3)]">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent 
                               animate-gradient-x bg-300%">
                  Politique de Confidentialité
                </span>
              </h1>
              <p className="text-xl text-slate-200 font-light">
                Protection et respect de vos <span className="text-blue-400 font-medium">données personnelles</span>
              </p>
            </div>
          </div>

          {/* Contenu principal */}
          <div className={`backdrop-blur-md bg-gradient-to-br from-slate-800/80 via-slate-900/70 to-slate-800/80 
                         rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10 
                         transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            <div className="flex items-center space-x-3 mb-8 p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
              <Eye className="w-6 h-6 text-blue-400" />
              <p className="text-slate-200 font-medium">
                Dernière mise à jour : <span className="text-blue-400">20 juin 2025</span>
              </p>
            </div>

            <div className="space-y-10 text-slate-200">
              
              {/* Section 1 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center space-x-3">
                  <Lock className="w-6 h-6 text-blue-400" />
                  <span>1. Introduction</span>
                </h2>
                <div className="space-y-4 pl-9">
                  <p className="leading-relaxed">
                    Bienvenue sur le site d'<span className="text-blue-400 font-medium">Ulysse Borris</span>. Je m'engage à protéger votre vie privée. 
                    Cette politique de confidentialité explique comment je collecte, utilise, divulgue et protège vos informations personnelles 
                    lorsque vous utilisez mon site web.
                  </p>
                  <p className="leading-relaxed">
                    Je respecte les lois applicables en matière de protection des renseignements personnels au Québec et au Canada, 
                    notamment la <span className="text-cyan-400 font-medium">Loi sur la protection des renseignements personnels dans le secteur privé (Loi 25)</span> au Québec, 
                    et la <span className="text-teal-400 font-medium">Loi sur la protection des renseignements personnels et les documents électroniques (PIPEDA)</span> au niveau fédéral.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-4">2. Informations que je collecte</h2>
                
                <div className="pl-4 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">2.1. Informations fournies par vous</h3>
                    <p className="mb-4 leading-relaxed">
                      Lorsque vous utilisez mon formulaire de contact, je collecte les informations suivantes :
                    </p>
                    <ul className="space-y-2 ml-4">
                      {['Nom', 'Adresse e-mail', 'Sujet du message', 'Contenu de votre message'].map((item, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 leading-relaxed">
                      Ces informations sont utilisées <span className="text-blue-400 font-medium">uniquement</span> pour répondre à vos demandes et communiquer avec vous.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3">2.2. Informations collectées automatiquement (Cookies)</h3>
                    <div className="space-y-4">
                      <p className="leading-relaxed">
                        J'utilise des cookies et des technologies similaires pour assurer le bon fonctionnement de mon site web. 
                        Actuellement, mon site utilise principalement des <span className="text-emerald-400 font-medium">cookies essentiels (techniques)</span> nécessaires à sa navigation. 
                        Je n'utilise pas de cookies de suivi ou d'analyse pour le moment.
                      </p>
                      <p className="leading-relaxed">
                        Si je devais en ajouter à l'avenir, je mettrais à jour cette politique et mettrais en place un mécanisme de consentement.
                        Vous pouvez généralement gérer les préférences de cookies via les paramètres de votre navigateur.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-4">3. Comment j'utilise vos informations</h2>
                <div className="pl-4">
                  <p className="mb-4 leading-relaxed">J'utilise les informations que je collecte aux fins suivantes :</p>
                  <ul className="space-y-3 ml-4">
                    {[
                      'Pour répondre à vos demandes et messages envoyés via le formulaire de contact.',
                      'Pour assurer le fonctionnement et la sécurité de mon site web.',
                      'Pour améliorer l\'expérience utilisateur (dans le cas de futures analyses anonymisées, si implémentées avec votre consentement).'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-4">4. Partage de vos informations</h2>
                <div className="pl-4 p-6 bg-amber-500/10 rounded-xl border border-amber-400/20">
                  <p className="leading-relaxed">
                    Je <span className="text-amber-400 font-medium">ne vends, n'échange ni ne loue</span> vos informations personnelles à des tiers. 
                    Vos informations ne sont partagées qu'avec des tiers nécessaires au fonctionnement de mon site ou de mes services 
                    (par exemple, <span className="text-blue-400 font-medium">EmailJS</span> pour l'envoi de messages de contact), 
                    et uniquement dans la mesure nécessaire. Ces tiers sont également tenus de protéger vos données.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-4">5. Sécurité des données</h2>
                <div className="pl-4 p-6 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                  <p className="leading-relaxed">
                    Je mets en œuvre des <span className="text-emerald-400 font-medium">mesures de sécurité raisonnables</span> pour protéger vos informations personnelles 
                    contre l'accès, l'utilisation ou la divulgation non autorisés. Cependant, aucune méthode de transmission sur Internet 
                    ou de stockage électronique n'est totalement sécurisée.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-4">6. Vos droits (Loi 25)</h2>
                <div className="pl-4">
                  <p className="mb-6 leading-relaxed">
                    Conformément à la <span className="text-blue-400 font-medium">Loi 25 du Québec</span>, vous avez les droits suivants concernant vos renseignements personnels :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'Droit d\'accès', desc: 'Demander l\'accès aux renseignements que je détiens à votre sujet.' },
                      { title: 'Droit de rectification', desc: 'Demander la correction de renseignements incomplets ou inexacts.' },
                      { title: 'Droit à la désindexation', desc: 'Demander la cessation de la diffusion de vos renseignements.' },
                      { title: 'Droit à la portabilité', desc: 'Recevoir vos renseignements dans un format structuré.' },
                      { title: 'Droit de retirer le consentement', desc: 'Retirer votre consentement à la collecte de vos renseignements.' }
                    ].map((right, index) => (
                      <div key={index} className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                        <h4 className="font-semibold text-blue-300 mb-2">{right.title}</h4>
                        <p className="text-sm leading-relaxed">{right.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-teal-500/10 rounded-xl border border-teal-400/20">
                    <p className="leading-relaxed">
                      Pour exercer ces droits, veuillez me contacter à : 
                      <a href="mailto:ulyssebo255@gmail.com" className="text-teal-400 hover:text-teal-300 font-medium ml-2 hover:underline">
                        ulyssebo255@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Sections finales */}
              {[
                {
                  title: '7. Modifications de cette politique',
                  content: 'Je peux mettre à jour ma politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page avec la date de "dernière mise à jour".'
                },
                {
                  title: '8. Contactez-moi',
                  content: 'Si vous avez des questions concernant cette politique de confidentialité, vous pouvez me contacter à : ulyssebo255@gmail.com'
                }
              ].map((section, index) => (
                <section key={index} className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
                  <div className="pl-4">
                    <p className="leading-relaxed">{section.content}</p>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
