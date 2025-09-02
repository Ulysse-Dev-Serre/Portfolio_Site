import React from 'react';
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
// IMPORTE Link et useNavigate
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate(); // Hook pour naviguer programmatiquement

  const handleNavLinkClick = (sectionId: string) => {
    // Si nous ne sommes pas sur la page d'accueil, navigue d'abord vers l'accueil
    if (window.location.pathname !== '/') {
      navigate('/'); // Redirige vers la page d'accueil
      // Utilise un petit délai pour que la navigation se fasse avant le scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Délai en ms, peut être ajusté
    } else {
      // Si nous sommes déjà sur la page d'accueil, défile simplement
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-blue-200/50 dark:border-cyan-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Section Logo et Nom (Peut aussi rediriger vers l'accueil) */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">UB</span> 
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-slate-800 dark:text-white">
                Ulysse Borris
              </h1>
              <p className="text-xs text-blue-600 dark:text-teal-400">
                Code • Nature • Innovation
              </p>
            </div>
          </Link>

          {/* Navigation principale */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavLinkClick('home')}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => handleNavLinkClick('projects')}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors font-medium"
            >
              Projets
            </button>
            <button
              onClick={() => handleNavLinkClick('about')}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors font-medium"
            >
              À Propos
            </button>
            <button
              onClick={() => handleNavLinkClick('contact')}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Boutons d'actions (réseaux sociaux, mode jour/nuit) */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="https://github.com/Ulysse-Dev-Serre" // Utilise ton vrai lien GitHub
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ulysse-borris-052216331/" // Utilise ton vrai lien LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ulyssebo255@gmail.com" 
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-blue-100 dark:bg-cyan-800 text-blue-700 dark:text-cyan-300 hover:bg-blue-200 dark:hover:bg-cyan-700 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;