import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-950 to-cyan-950 dark:from-black dark:to-gray-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 text-center">
          Politique de Cookies
        </h1>
        <div className="bg-slate-800 dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700 dark:border-slate-800 text-slate-300">
          <p className="mb-4">
            Dernière mise à jour : 20 juin 2025
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">1. Qu'est-ce qu'un cookie ?</h2>
          <p className="mb-4">
            Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, téléphone) lorsque vous visitez un site web. Il aide le site à se souvenir de vos préférences ou à assurer son bon fonctionnement.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">2. Les cookies que j'utilise</h2>
          <p className="mb-4">
            Ce site web utilise uniquement des cookies essentiels (techniques). Ces cookies sont strictement nécessaires au fonctionnement de base du site, par exemple pour maintenir votre session de navigation ou pour permettre au site de s'afficher correctement.
          </p>
          <p className="mb-4">
            Je n'utilise pas de cookies de suivi, d'analyse ou de publicité qui collecteraient des informations sur votre comportement de navigation à des fins marketing ou de statistiques détaillées.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">3. Gestion des cookies</h2>
          <p className="mb-4">
            Puisque ce site n'utilise que des cookies essentiels, il n'y a pas d'option spécifique sur le site pour les désactiver sans affecter son fonctionnement. Cependant, vous pouvez généralement configurer votre navigateur web pour refuser tous les cookies ou pour vous alerter lorsqu'un cookie est envoyé. Veuillez noter que certaines fonctionnalités du site pourraient ne pas fonctionner correctement si les cookies sont désactivés.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">4. Contact</h2>
          <p>
            Pour toute question concernant cette politique de cookies, vous pouvez me contacter à : ulyssebo255@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;