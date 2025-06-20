import React from 'react';
import { GraduationCap, MapPin, Sprout, Bug } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Agriculteur Biologique",
      period: "2017–2019",
      description:
        "Lancement d'une entreprise maraîchère spécialisée en agriculture biologique intensive, inspirée des méthodes de Jean-Martin Fortier.",
    },
    {
      icon: <Sprout className="w-5 h-5" />, 
      title: "Projets d’Autosuffisance Alimentaire",
      period: "2019–2023",
      description:
        "Participation au développement de projets communautaires d'autosuffisance alimentaire au sein de milieux alternatifs low-thech au Québec.",
    },
    {
      icon: <Bug className="w-5 h-5" />, 
      title: "Initiation à l’Apiculture",
      period: "2021–2023",
      description:
        "Formation en apiculture écologique alternative, avec entretien et développement de différents modèles de ruches",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Études en Développement Logiciel",
      period: "2024–2026",
      description:
        "Poursuite d'un AEC en Développement Logiciel, axée sur l’apprentissage global de la programmation : du web au logiciel, en passant par les bases de données, la cybersécurité et les systèmes.",
    },

  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8
                   bg-gradient-to-br from-blue-950 to-cyan-950
                   dark:from-black dark:to-gray-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Là où la Terre Rencontre{' '}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                l'Algorithme
              </span>
            </h2>

            {/* --- CODE POUR L'IMAGE DE PROFIL --- */}
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-6 mx-auto lg:mx-0">
              <img
                src="/images/your-profile-image.jpg" 
                alt="Votre photo de profil"
                className="object-cover w-full h-full"
              />
            </div>
  

            <div className="space-y-6 text-lg text-blue-100 dark:text-cyan-200 leading-relaxed">
              <p>
                Mon parcours a débuté les mains dans la terre, dans une quête minimaliste d’autosuffisance alimentaire.
                J’ai exploré la production de légumes et de fruits frais, de miel et de cire, de plantes médicinales,
                ainsi que la cueillette sauvage — à la fois pour mes besoins personnels que pour contribuer concrètement à l’approvisionnement local.
                .
              </p>

                <p>
                    Cette immersion dans le vivant m’a amené à réfléchir aux liens entre autonomie alimentaire et technologies contemporaines. 
                    Peu à peu, j’ai entrevu le potentiel d’outils simples et connectés pour accompagner, sans dénaturer, les pratiques de jardinage 
                    et de culture à petite échelle, en milieu urbain comme rural.
               </p>
              <p>
                  Actuellement en AEC en Développement Logiciel (2024–2026), j’y découvre les fondements du développement logiciel, notamment le front-end avec React et Flutter, 
                  afin de donner vie à mes projets, concevoir mes vitrines web et explorer le développement mobile. En parallèle, je me concentre sur les domaines qui 
                  me passionnent : Python, les APIs Flask, l’électronique embarquée (Raspberry Pi), la gestion de données et le machine learning.
              </p>
            </div>


          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white">
                    {milestone.icon}
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {milestone.title}
                      </h3>
                      <span className="px-2 py-1 bg-white/10 dark:bg-white/5 text-white/80 text-sm rounded-full">
                        {milestone.period}
                      </span>
                    </div>
                    <p className="text-blue-100 dark:text-cyan-200">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;