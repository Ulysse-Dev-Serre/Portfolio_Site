import React, { useState } from 'react';
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
    // Section 'Contact' de la page
    <section 
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8 
                 bg-gradient-to-br from-blue-950 to-cyan-950 
                 dark:from-black dark:to-gray-950 text-white" // Fond sombre et texte clair par défaut
    >
      {/* Conteneur principal pour centrer le contenu */}
      <div className="max-w-7xl mx-auto">
        {/* En-tête de la section Contact */}
        <div className="text-center mb-16">
          {/* Titre principal de la section */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Cultivons Quelque Chose{' '}
            {/* Le dégradé du titre a été ajusté aux couleurs bleu/turquoise. */}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              d'Étonnant
            </span>
          </h2>
          {/* Slogan ou description de la section */}
          <p className="text-xl text-blue-100 dark:text-cyan-200 max-w-3xl mx-auto">
            Que vous recherchiez du développement freelance, des conseils en technologie agricole,
            ou une collaboration de recherche — j'aimerais avoir de vos nouvelles.
          </p>
        </div>

        {/* Grille principale: informations de contact à gauche, formulaire à droite. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* --- Colonne des Informations de Contact --- */}
          <div className="lg:col-span-1">
            {/* Boîte des informations de contact */}
            {/* Le fond de la boîte est sombre, avec une bordure subtile. */}
            <div className="bg-slate-800 dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700 dark:border-slate-800">
              {/* Titre de cette boîte */}
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
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