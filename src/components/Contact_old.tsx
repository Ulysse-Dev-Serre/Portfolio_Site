import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  // État local pour gérer les données du formulaire
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

  // Fonction pour gérer la soumission du formulaire
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

 
  const serviceID = 'service_bildbbx';
  const templateID = 'template_wkqiakd';
  const userID = import.meta.env.VITE_EMAILJS_USERID; // API key publique (user ID)

  // Préparer les variables à envoyer (les champs doivent correspondre au template EmailJS)
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
      // Réinitialiser le formulaire
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (err) => {
      console.error('Erreur lors de l’envoi:', err);
      alert('Oups, une erreur est survenue. Veuillez réessayer plus tard.');
    });
};

  // Fonction pour mettre à jour l'état lors de la saisie dans les champs du formulaire
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
                 bg-gradient-to-br from-blue-950 via-purple-950 to-cyan-950 
                 dark:from-black dark:via-purple-950 dark:to-gray-950 text-white"
    >
      {/* Particules dorées pour la communication */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-br from-amber-400 to-orange-500 rounded-full animate-pulse"
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
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-amber-500/25 rounded-full 
                        blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full 
                        blur-3xl animate-pulse-slow delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500/15 rounded-full 
                        blur-3xl animate-pulse-slow delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6
                         drop-shadow-[0_8px_32px_rgba(251,191,36,0.3)] hover:drop-shadow-[0_12px_48px_rgba(251,191,36,0.5)]
                         transition-all duration-500">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent 
                           animate-gradient-x bg-300%">
              Cultivons Quelque Chose
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent 
                           animate-gradient-x bg-300%">
              d'Étonnant
            </span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light">
            Que vous recherchiez du <span className="text-amber-400 font-medium">développement freelance</span>, des conseils en <span className="text-orange-400 font-medium">technologie agricole</span>,
            ou une <span className="text-yellow-400 font-medium">collaboration de recherche</span> — j'aimerais avoir de vos nouvelles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className={`lg:col-span-1 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="backdrop-blur-md bg-gradient-to-br from-slate-800/80 via-slate-900/70 to-slate-800/80 
                           rounded-2xl p-8 shadow-2xl border border-white/10 hover:border-white/20
                           hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-all duration-500
                           hover:bg-gradient-to-br hover:from-slate-800/90 hover:via-slate-900/80 hover:to-slate-800/90">
              {/* Titre de cette boîte */}
              <h3 className="text-2xl font-serif font-bold text-white mb-8 
                           drop-shadow-lg hover:text-amber-300 transition-colors duration-300">
                Prenez Contact
              </h3>

              {/* Liste des informations de contact (Email, Téléphone, Localisation) */}
              <div className="space-y-6">
                {/* Élément de contact: Email */}
                <div className="flex items-center space-x-4">
                  {/* Cercle d'icône avec fond coloré ajusté au thème (teal) */}
                  <div className="w-12 h-12 bg-teal-800/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-teal-400" /> {/* Icône Courriel */}
                  </div>
                  <div>
                    <p className="text-sm text-blue-100 dark:text-cyan-200">Courriel</p>
                    <a
                      href="mailto:ulyssebo255@gmail.com"
                      className="text-white font-medium hover:text-teal-300 transition-colors" // Ajoute une classe pour le survol
                    >
                      ulyssebo255@gmail.com
                    </a>
                  </div>
                </div>

                {/* Élément de contact: Téléphone */}
                <div className="flex items-center space-x-4">
                  {/* Cercle d'icône avec fond coloré ajusté au thème (blue) */}
                  <div className="w-12 h-12 bg-blue-800/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" /> {/* Icône Téléphone */}
                  </div>
                  <div>
                    <p className="text-sm text-blue-100 dark:text-cyan-200">Téléphone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                {/* Élément de contact: Localisation */}
                <div className="flex items-center space-x-4">
                  {/* Cercle d'icône avec fond coloré ajusté au thème (cyan) */}
                  <div className="w-12 h-12 bg-cyan-800/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyan-400" /> {/* Icône Épingle de carte */}
                  </div>
                  <div>
                    <p className="text-sm text-blue-100 dark:text-cyan-200">Localisation</p>
                    <p className="text-white font-medium">Repentigny, Québec, Canada</p>
                  </div>
                </div>
              </div>

              {/* Liens vers les réseaux sociaux et CV */}
              <div className="mt-8 pt-8 border-t border-slate-700 dark:border-slate-800">
                <div className="flex space-x-4">
                  {/* Lien GitHub */}
                  <a
                    href="https://github.com/Ulysse-Dev-Serre"
                    target="_blank"
                    rel="noopener noreferrer"
                    // Les boutons de réseaux sociaux sont adaptés au thème sombre.
                    className="w-10 h-10 bg-white/10 dark:bg-white/5 rounded-full flex items-center justify-center text-white/80 hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
                    aria-label="Profil GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {/* Lien LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/ulysse-borris-052216331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    // Les boutons de réseaux sociaux sont adaptés au thème sombre.
                    className="w-10 h-10 bg-white/10 dark:bg-white/5 rounded-full flex items-center justify-center text-white/80 hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
                    aria-label="Profil LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>


              </div>
            </div>
          </div>

          {/* --- Colonne du Formulaire de Contact --- */}
          <div className="lg:col-span-2">
            {/* Boîte du formulaire de contact */}
            {/* Le fond du formulaire est sombre, avec une bordure subtile. */}
            <div className="bg-slate-800 dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700 dark:border-slate-800">
              {/* Titre du formulaire */}
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Envoyer un Message
              </h3>

              {/* Formulaire */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Champs Nom et Email (grille à 2 colonnes) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-100 dark:text-cyan-200 mb-2">
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      // Les champs de formulaire sont sombres avec un focus bleu/turquoise.
                      className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-800 border border-slate-600 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-colors placeholder-slate-400"
                       
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-100 dark:text-cyan-200 mb-2">
                      Adresse e-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      // Les champs de formulaire sont sombres avec un focus bleu/turquoise.
                      className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-800 border border-slate-600 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-colors placeholder-slate-400"
                      
                      required
                    />
                  </div>
                </div>

                {/* Champ Sujet (menu déroulant) */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-100 dark:text-cyan-200 mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    // Les champs de formulaire sont sombres avec un focus bleu/turquoise.
                    className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-800 border border-slate-600 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-colors appearance-none" // appearance-none pour un style personnalisé
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

                {/* Champ Message (zone de texte) */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-100 dark:text-cyan-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    // Les champs de formulaire sont sombres avec un focus bleu/turquoise.
                    className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-800 border border-slate-600 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-colors resize-none placeholder-slate-400"
                    placeholder="Parlez-moi de votre projet ou de votre idée..." 
                    required
                  />
                </div>

                {/* Boutons Soumettre et Message direct */}
                <div className="flex space-x-4">
                  {/* Bouton "Envoyer le message" avec dégradé bleu/turquoise */}
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white rounded-lg font-medium transition-colors transform hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    <span>Envoyer le Message</span> 
                  </button>
                  {/* Bouton "Message direct" adapté au thème sombre. */}

                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;