import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number, opacity: number, angle: number}>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Particules dorées pour représenter la communication
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2.5 + 1,
      speed: Math.random() * 0.6 + 0.3,
      opacity: Math.random() * 0.4 + 0.3,
      angle: Math.random() * Math.PI * 2
    }));
    setParticles(newParticles);

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
          angle: particle.angle + 0.005,
          opacity: Math.sin(Date.now() * 0.001 + particle.id) * 0.3 + 0.5
        };
      }));
    };

    const particleInterval = setInterval(animateParticles, 60);
    return () => clearInterval(particleInterval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = 'service_bildbbx';
    const templateID = 'template_wkqiakd';
    const userID = import.meta.env.VITE_EMAILJS_USERID;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email envoyé avec succès!', response.status, response.text);
        alert('Merci, votre message a bien été envoyé !');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (err) => {
        console.error('Erreur lors de l envoi:', err);
        alert('Oups, une erreur est survenue. Veuillez réessayer plus tard.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden
                 bg-gradient-to-br from-secondary-950 via-accent-950 to-primary-950 
                 dark:from-black dark:via-accent-950 dark:to-neutral-950 text-white"
    >
      {/* Particules dorées pour la communication */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-br from-warm-400 to-warm-500 rounded-full animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 3}px rgba(251, 191, 36, 0.4)`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Effets lumineux d'arrière-plan */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-warm-500/25 rounded-full 
                        blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-warm-500/20 rounded-full 
                        blur-3xl animate-pulse-slow delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-warm-500/15 rounded-full 
                        blur-3xl animate-pulse-slow delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6
                         drop-shadow-[0_8px_32px_rgba(251,191,36,0.3)] hover:drop-shadow-[0_12px_48px_rgba(251,191,36,0.5)]
                         transition-all duration-500">
            <span className="bg-gradient-to-r from-warm-400 via-warm-400 to-warm-400 bg-clip-text text-transparent 
                           animate-gradient-x bg-300%">
              Cultivons Quelque Chose
            </span>{' '}
            <span className="bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent 
                           animate-gradient-x bg-300%">
              d'Étonnant
            </span>
          </h2>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed font-light">
            Que vous recherchiez du <span className="text-warm-400 font-medium">développement freelance</span>, des conseils en <span className="text-warm-400 font-medium">technologie agricole</span>,
            ou une <span className="text-warm-400 font-medium">collaboration de recherche</span> — j'aimerais avoir de vos nouvelles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Informations de Contact */}
          <div className={`lg:col-span-1 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="backdrop-blur-md bg-gradient-to-br from-neutral-800/80 via-neutral-900/70 to-neutral-800/80 
                           rounded-2xl p-8 shadow-2xl border border-white/10 hover:border-white/20
                           hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-all duration-500
                           hover:bg-gradient-to-br hover:from-neutral-800/90 hover:via-neutral-900/80 hover:to-neutral-800/90">
              
              <h3 className="text-2xl font-serif font-bold text-white mb-8 
                           drop-shadow-lg hover:text-warm-300 transition-colors duration-300">
                Prenez Contact
              </h3>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-warm-500/20 to-warm-500/10 rounded-2xl flex items-center justify-center
                                 border border-warm-400/30 shadow-lg group-hover:shadow-warm-500/25 
                                 transition-all duration-300 group-hover:scale-110 backdrop-blur-md">
                    <Mail className="w-6 h-6 text-warm-400 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-300 font-light">Courriel</p>
                    <a
                      href="mailto:ulyssebo255@gmail.com"
                      className="text-white font-medium hover:text-warm-300 transition-colors duration-300"
                    >
                      ulyssebo255@gmail.com
                    </a>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary-500/20 to-secondary-600/10 rounded-2xl flex items-center justify-center
                                 border border-secondary-400/30 shadow-lg group-hover:shadow-secondary-500/25 
                                 transition-all duration-300 group-hover:scale-110 backdrop-blur-md">
                    <Phone className="w-6 h-6 text-secondary-400 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-300 font-light">Téléphone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                {/* Localisation */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-2xl flex items-center justify-center
                                 border border-primary-400/30 shadow-lg group-hover:shadow-primary-500/25 
                                 transition-all duration-300 group-hover:scale-110 backdrop-blur-md">
                    <MapPin className="w-6 h-6 text-primary-400 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-300 font-light">Localisation</p>
                    <p className="text-white font-medium">Repentigny, Québec, Canada</p>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Ulysse-Dev-Serre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gradient-to-br from-neutral-700/80 to-neutral-800/60 rounded-xl flex items-center justify-center
                             border border-white/20 hover:border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 
                             hover:scale-110 backdrop-blur-md relative overflow-hidden"
                    aria-label="Profil GitHub"
                  >
                    <Github className="w-6 h-6 text-white group-hover:text-warm-300 transition-colors z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ulysse-borris-052216331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gradient-to-br from-neutral-700/80 to-neutral-800/60 rounded-xl flex items-center justify-center
                             border border-white/20 hover:border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 
                             hover:scale-110 backdrop-blur-md relative overflow-hidden"
                    aria-label="Profil LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white group-hover:text-secondary-400 transition-colors z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de Contact */}
          <div className={`lg:col-span-2 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="backdrop-blur-md bg-gradient-to-br from-neutral-800/80 via-neutral-900/70 to-neutral-800/80 
                           rounded-2xl p-8 shadow-2xl border border-white/10 hover:border-white/20
                           hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-all duration-500
                           hover:bg-gradient-to-br hover:from-neutral-800/90 hover:via-neutral-900/80 hover:to-neutral-800/90">
              
              <h3 className="text-2xl font-serif font-bold text-white mb-8 
                           drop-shadow-lg hover:text-warm-300 transition-colors duration-300">
                Envoyer un Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Nom et Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-200 mb-3 group-focus-within:text-warm-400 transition-colors">
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-neutral-700/50 border border-white/20 rounded-xl 
                               focus:ring-2 focus:ring-warm-400/50 focus:border-warm-400 text-white 
                               transition-all duration-300 placeholder-neutral-400 backdrop-blur-md
                               hover:border-white/30 hover:bg-neutral-700/70"
                      required
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-200 mb-3 group-focus-within:text-warm-400 transition-colors">
                      Adresse E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-neutral-700/50 border border-white/20 rounded-xl 
                               focus:ring-2 focus:ring-warm-400/50 focus:border-warm-400 text-white 
                               transition-all duration-300 placeholder-neutral-400 backdrop-blur-md
                               hover:border-white/30 hover:bg-neutral-700/70"
                      required
                    />
                  </div>
                </div>

                {/* Sujet */}
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-200 mb-3 group-focus-within:text-warm-400 transition-colors">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-neutral-700/50 border border-white/20 rounded-xl 
                             focus:ring-2 focus:ring-warm-400/50 focus:border-warm-400 text-white 
                             transition-all duration-300 backdrop-blur-md appearance-none
                             hover:border-white/30 hover:bg-neutral-700/70"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="freelance">Projet Freelance</option>
                    <option value="collaboration">Collaboration de Recherche</option>
                    <option value="consulting">Consultation AgriTech</option>
                    <option value="partnership">Partenariat Commercial</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-200 mb-3 group-focus-within:text-warm-400 transition-colors">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-neutral-700/50 border border-white/20 rounded-xl 
                             focus:ring-2 focus:ring-warm-400/50 focus:border-warm-400 text-white 
                             transition-all duration-300 resize-none placeholder-neutral-400 backdrop-blur-md
                             hover:border-white/30 hover:bg-neutral-700/70"
                    placeholder="Parlez-moi de votre projet ou de votre idée..." 
                    required
                  />
                </div>

                {/* Bouton Envoyer */}
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center space-x-3 px-8 py-4 
                           bg-gradient-to-r from-warm-500 via-warm-500 to-warm-600 
                           hover:from-warm-400 hover:via-warm-400 hover:to-warm-500 
                           text-white rounded-xl font-semibold transition-all duration-500 
                           transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_40px_rgba(251,191,36,0.4)]
                           border border-white/20 backdrop-blur-sm relative overflow-hidden"
                >
                  <Send className="w-6 h-6 group-hover:rotate-12 group-hover:translate-x-1 transition-all duration-300" />
                  <span className="text-lg font-semibold tracking-wide">Envoyer le Message</span>
                  
                  {/* Effet de lueur interne */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
