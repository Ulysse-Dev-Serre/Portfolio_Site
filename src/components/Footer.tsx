import React from "react";
import { Heart, Code, Sprout, Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Effets lumineux d'arrière-plan */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Section Marque/Bio Premium */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 rounded-xl 
                               flex items-center justify-center shadow-xl transition-all duration-300 
                               group-hover:shadow-[0_15px_35px_rgba(59,130,246,0.4)] group-hover:scale-110
                               border-2 border-white/20 backdrop-blur-sm">
                  <span className="text-white font-bold text-xl drop-shadow-lg">UB</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-xl 
                               blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold group-hover:text-blue-300 transition-colors duration-300">
                  Ulysse Borris
                </h3>
                <p className="text-base bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent font-medium">
                  Quand la Nature Rencontre le Code
                </p>
              </div>
            </div>
            
            <p className="text-slate-300 max-w-lg mb-8 text-lg leading-relaxed font-light">
              Faire le pont entre <span className="text-teal-400 font-medium">l'autonomie alimentaire</span> et les possibilités de
              pointe de la <span className="text-blue-400 font-medium">technologie moderne</span>. Créer des solutions qui honorent
              à la fois la <span className="text-emerald-400 font-medium">nature</span> et l'<span className="text-purple-400 font-medium">innovation</span>.
            </p>
            
            <div className="flex items-center space-x-3 text-slate-300">
              <span className="text-lg">Construit avec</span>
              <Heart className="w-5 h-5 text-rose-400 animate-pulse" />
              <Code className="w-5 h-5 text-blue-400 hover:animate-spin transition-all" />
              <span>et</span>
              <Sprout className="w-5 h-5 text-emerald-400 hover:animate-bounce transition-all" />
            </div>
          </div>

          {/* Navigation Premium */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white drop-shadow-lg">Navigation</h4>
            <ul className="space-y-4">
              {[
                { href: '#home', label: 'Accueil' },
                { href: '#projects', label: 'Projets' },
                { href: '#about', label: 'À Propos' },
                { href: '#contact', label: 'Contact' }
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-center space-x-2 text-slate-300 hover:text-teal-400 
                             transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 
                                   transition-opacity duration-300"></div>
                    <span className="font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Premium */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white drop-shadow-lg">Connecter</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:ulyssebo255@gmail.com"
                  className="group flex items-center space-x-3 text-slate-300 hover:text-teal-400 
                           transition-all duration-300 hover:translate-x-2"
                >
                  <Mail className="w-4 h-4 group-hover:animate-pulse" />
                  <span className="font-medium">ulyssebo255@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="group flex items-center space-x-3 text-slate-300 hover:text-blue-400 
                           transition-all duration-300 hover:translate-x-2"
                >
                  <Phone className="w-4 h-4 group-hover:animate-pulse" />
                  <span className="font-medium">+1 (555) 123-4567</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ulysse-Dev-Serre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 text-slate-300 hover:text-amber-400 
                           transition-all duration-300 hover:translate-x-2"
                >
                  <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ulysse-borris-052216331/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 text-slate-300 hover:text-blue-400 
                           transition-all duration-300 hover:translate-x-2"
                >
                  <Linkedin className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Section Droit d'auteur Premium */}
        <div className="border-t border-gradient-to-r from-transparent via-white/20 to-transparent mt-16 pt-8">
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-300 text-base font-light">
                © 2024 <span className="font-medium text-white">Ulysse Borris</span>. Tous droits réservés.
              </p>
              <div className="flex space-x-8 text-sm">
                {[
                  { href: '/politique-confidentialite', label: 'Confidentialité' },
                  { href: '/conditions-generales', label: 'Conditions' },
                  { href: '/politique-cookies', label: 'Cookies' }
                ].map(({ href, label }) => (
                  <a 
                    key={href}
                    href={href} 
                    className="group text-slate-400 hover:text-teal-400 transition-all duration-300 
                             hover:scale-105 font-medium relative"
                  >
                    {label}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 
                                   group-hover:w-full"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
