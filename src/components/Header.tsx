import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavLinkClick = (sectionId: string) => {
    const scrollToSection = () => {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    };

    // En HashRouter, l'accueil est '#/'.
    if (location.hash !== '#/') {
      navigate('/');                 // va à '#/'
      setTimeout(scrollToSection, 100); // laisse le temps au DOM d’être prêt
    } else {
      scrollToSection();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md 
                     bg-gradient-to-r from-neutral-900/90 via-neutral-800/85 to-neutral-900/90 
                     border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo → retourne toujours à l’accueil '#/' */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-600 via-accent-600 to-primary-600 rounded-xl 
                             flex items-center justify-center shadow-lg transition-all duration-300 
                             group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)] group-hover:scale-110
                             border border-white/20 backdrop-blur-sm">
                <span className="text-white font-bold text-lg drop-shadow-lg">UB</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-400/20 to-primary-400/20 rounded-xl 
                             blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-white drop-shadow-lg 
                           group-hover:text-secondary-300 transition-colors duration-300">
                Ulysse Borris
              </h1>
              <p className="text-xs bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent font-medium">
                Code • Nature • Innovation
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {/* Accueil → utiliser Link to="/" (important en HashRouter) */}
            <Link
              to="/"
              className="group relative px-4 py-2 text-neutral-200 font-medium transition-all duration-300
                         hover:text-white hover:scale-105"
            >
              <span className="relative z-10">Accueil</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600/0 via-accent-600/0 to-primary-600/0 
                               rounded-lg opacity-0 group-hover:opacity-100 group-hover:from-secondary-600/20 
                               group-hover:via-accent-600/20 group-hover:to-primary-600/20 transition-all duration-300
                               backdrop-blur-sm border border-white/0 group-hover:border-white/10"></div>
            </Link>

            {/* Sections de la page d’accueil → boutons qui scrollent */}
            {[
              { id: 'projects', label: 'Projets' },
              { id: 'about', label: 'À Propos' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavLinkClick(id)}
                className="group relative px-4 py-2 text-neutral-200 font-medium transition-all duration-300
                         hover:text-white hover:scale-105"
              >
                <span className="relative z-10">{label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-600/0 via-accent-600/0 to-primary-600/0 
                               rounded-lg opacity-0 group-hover:opacity-100 group-hover:from-secondary-600/20 
                               group-hover:via-accent-600/20 group-hover:to-primary-600/20 transition-all duration-300
                               backdrop-blur-sm border border-white/0 group-hover:border-white/10"></div>
              </button>
            ))}
          </nav>

          {/* Actions (inchangé) */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2">
              {[
                { href: 'https://github.com/Ulysse-Dev-Serre', icon: Github, color: 'hover:text-warm-400' },
                { href: 'https://www.linkedin.com/in/ulysse-borris-052216331/', icon: Linkedin, color: 'hover:text-secondary-400' },
                { href: 'mailto:ulyssebo255@gmail.com', icon: Mail, color: 'hover:text-primary-400' }
              ].map(({ href, icon: Icon, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={`group p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-300 
                             ${color} transition-all duration-300 hover:scale-110 
                             hover:shadow-lg backdrop-blur-sm relative overflow-hidden`}
                >
                  <Icon className="w-5 h-5 group-hover:animate-pulse transition-all z-10 relative" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

