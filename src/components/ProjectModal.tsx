import React, { useState } from 'react';
import { X, Github, CheckCircle, ExternalLink } from 'lucide-react';

interface ProjectSection {
  title: string;
  description: string[];
  image?: string;
  features?: string[];
}

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
    sections?: ProjectSection[];
    features?: string[];
    githubLink?: string;
    githubLinks?: Array<{ title: string; url: string }>;
    websiteLink?: string;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  
  if (!isOpen) return null;

  const mainColor = project.color ? project.color.split(" ")[0].split("-")[1] : 'gray';

  return (
    <>
      {/* Image Lightbox */}
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60] p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            onClick={() => setEnlargedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Fermer l'image"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={enlargedImage}
            alt="Image agrandie"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Modal principale */}
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


        {/* Sections du projet (si définies) */}
        {project.sections && project.sections.length > 0 && (
          <div className="mb-6 space-y-8">
            {project.sections.map((section, index) => (
              <div key={index} className="border-t border-gray-700 pt-6 first:border-t-0 first:pt-0">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className={`w-2 h-8 bg-gradient-to-b ${project.color || 'from-blue-500 to-blue-700'} rounded mr-3`}></span>
                  {section.title}
                </h4>
                
                {section.description.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-blue-100 dark:text-cyan-200 mb-3 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.image && (
                  <div className="my-4">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="rounded-lg object-cover w-full max-h-96 shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setEnlargedImage(section.image!)}
                    />
                    <p className="text-sm text-gray-400 mt-2 text-center italic">Cliquez pour agrandir</p>
                  </div>
                )}

                {section.features && section.features.length > 0 && (
                  <ul className="list-none space-y-2 mt-4">
                    {section.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-blue-100 dark:text-cyan-200">
                        <CheckCircle className={`w-5 h-5 mr-2 mt-1 text-${mainColor}-400 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Section Images (galerie simple - pour les projets sans sections) */}
        {!project.sections && project.images && project.images.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-3">Galerie :</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${project.title} - image ${index + 1}`}
                  className="rounded-lg object-cover w-full h-48 sm:h-64 shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setEnlargedImage(src)}
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


                {/* Liens additionnels GitHub */}
        <div className="flex flex-wrap gap-4 mt-6 items-center">
          {project.githubLinks && project.githubLinks.length > 0 ? (
            project.githubLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{link.title}</span>
              </a>
            ))
          ) : project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Github</span>
            </a>
          ) : null}
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
    </>
  );
};

export default ProjectModal;