import React from 'react';
import { X, Github, CheckCircle, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    color?: string;
    fullDescription?: string[];
    images?: string[];
    features?: string[];
    githubLink?: string;
    websiteLink?: string; // Nouvelle propriété pour le lien du site web
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  const mainColor = project.color ? project.color.split(" ")[0].split("-")[1] : 'gray';

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center z-50 py-8 px-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 dark:bg-slate-800 rounded-lg shadow-xl max-w-3xl w-full mx-auto p-6 relative
                   transform transition-all duration-300 ease-out h-fit"
        style={isOpen ? { transform: 'scale(1)', opacity: '1' } : {}}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* En-tête de la modale */}
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className={`text-${mainColor}-400 font-medium text-lg mb-4`}>
          {project.subtitle}
        </p>

        <hr className="border-gray-700 my-6" />

        {/* Section Description Complète */}
        {project.fullDescription && (
  <div className="mb-6">
    <h4 className="text-xl font-semibold text-white mb-3">Aperçu du projet :</h4>
    {project.fullDescription.map((paragraph, index) => (
      <p key={index} className="text-blue-100 dark:text-cyan-200 mb-4 leading-relaxed">
        {paragraph} {/* <--- C'est ICI qu'il faut changer ! */}
      </p>
    ))}
  </div>
        )}

        {/* --- NOUVEL EMPLACEMENT DU LIEN DU SITE WEB --- */}
        {project.websiteLink && (
          <div className="mb-6"> {/* Ajout d'une div pour le padding du bas (mb-6) */}
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              // J'ai remis ici les classes pour un simple lien texte souligné, comme discuté précédemment.
              // Si vous préférez le style bouton, reprenez les classes du bouton précédent.
              className={`inline-flex items-center space-x-2 text-${mainColor}-400 hover:text-${mainColor}-300 hover:underline transition-colors text-lg font-medium`}
            >
              <ExternalLink className="w-5 h-5" /> {/* Icône un peu plus grande pour le lien texte */}
              <span>Visiter le site web de {project.title}</span>
            </a>
          </div>
        )}
        {/* --- FIN DU NOUVEL EMPLACEMENT DU LIEN DU SITE WEB --- */}


        {/* Section Images (galerie simple) */}
        {project.images && project.images.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-3">Galerie :</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${project.title} - image ${index + 1}`}
                  className="rounded-lg object-cover w-full h-48 sm:h-64 shadow-md"
                />
              ))}
            </div>
          </div>
        )}

        {/* Section Fonctionnalités clés */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-3">Offre :</h4>
            <ul className="list-none space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-blue-100 dark:text-cyan-200">
                  <CheckCircle className={`w-5 h-5 mr-2 mt-1 text-${mainColor}-400 flex-shrink-0`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}


                {/* Liens additionnels (maintenant seulement GitHub ici) */}
        <div className="flex flex-wrap gap-4 mt-6 items-center">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Github</span>
            </a>
          )}
        </div>

        <br></br>

        {/* Section Technologies utilisées */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-white mb-3">Savoir faire :</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-white/10 dark:bg-white/5 text-white/80 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default ProjectModal;