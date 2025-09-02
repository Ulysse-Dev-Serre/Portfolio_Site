import React from "react";
import { Heart, Code, Sprout } from "lucide-react"; // Importe les icônes nécessaires (Cœur, Code, Germe)

const Footer: React.FC = () => {
  return (
    // Le pied de page de la section 'Hero'.
    // bg-slate-900: Fond très sombre pour le pied de page (restera ainsi).
    // text-white: Texte blanc.
    // py-12 px-4 sm:px-6 lg:px-8: Padding vertical et horizontal adaptatif.
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Conteneur principal pour centrer le contenu */}
      <div className="max-w-7xl mx-auto">
        {/* Grille principale du pied de page (4 colonnes sur les grands écrans) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section Marque/Bio (prend 2 colonnes sur les grands écrans) */}
          <div className="md:col-span-2">
            {/* Logo et Nom */}
            <div className="flex items-center space-x-3 mb-4">
              {/* Carré de logo avec dégradé ajusté au thème bleu/turquoise */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">UB</span>{" "}
                {/* Initiales de Ulysse Borris */}
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Ulysse Borris</h3>{" "}
                {/* Nom */}
                {/* Le slogan utilise une couleur turquoise claire */}
                <p className="text-sm text-teal-400">
                  Quand la Nature Rencontre le Code
                </p>{" "}
                {/* Traduction de "Where Nature Meets Code" */}
              </div>
            </div>
            {/* Description / Philosophie */}
            <p className="text-slate-300 max-w-md mb-6">
              Faire le pont entre l'autonomie alimentaire et les possibilités de
              pointe de la technologie moderne. Créer des solutions qui honorent
              à la fois la nature et l'innovation.
            </p>
            {/* Message de "Construit avec" */}
            <div className="flex items-center space-x-2 text-slate-400">
              <span>Construit avec</span>
              {/* Les icônes sont ajustées pour correspondre au thème général */}
              <Heart className="w-4 h-4 text-rose-400" />{" "}
              {/* Reste une touche de couleur chaude (rose/rouge doux) pour le cœur */}
              <Code className="w-4 h-4 text-blue-400" /> {/* Reste bleu */}
              <span>et</span>
              <Sprout className="w-4 h-4 text-teal-400" />{" "}
              {/* Passe à un turquoise pour le germe */}
            </div>
          </div>

          {/* Section Liens Rapides (Navigation) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                {/* Les liens de navigation s'éclaircissent en turquoise au survol */}
                <a
                  href="#home"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  À Propos
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Section Informations de Contact (Connecter) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connecter</h4>
            <ul className="space-y-2">
              <li>
                {/* Les liens de contact s'éclaircissent en turquoise au survol */}
                <a
                  href="mailto:ulyssebo255@gmail.com"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  ulyssebo255@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ulysse-Dev-Serre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ulysse-borris-052216331/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Section Droit d'auteur et Liens Légaux */}
        {/* La bordure reste foncée pour un contraste subtil */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 Ulysse Borris. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
            {/* Les liens vers les pages légales */}
            <a href="/politique-confidentialite" className="hover:text-teal-400 transition-colors">
              Confidentialité
            </a>
            <a href="/conditions-generales" className="hover:text-teal-400 transition-colors">
              Conditions
            </a>
            <a href="/politique-cookies" className="hover:text-teal-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
