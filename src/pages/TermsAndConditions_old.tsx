// src/pages/TermsAndConditions.tsx
import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-950 to-cyan-950 dark:from-black dark:to-gray-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 text-center">
          Conditions d'Utilisation
        </h1>
        <div className="bg-slate-800 dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700 dark:border-slate-800 text-slate-300">
          <p className="mb-4">
            Dernière mise à jour : 20 juin 2025
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">1. Introduction</h2>
          <p className="mb-4">
            Bienvenue sur mon portfolio personnel. Ces conditions définissent les règles d'utilisation de ce site web (le "Site"). En l'utilisant, vous acceptez ces conditions.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">2. Propriété Intellectuelle</h2>
          <p className="mb-4">
            Tout le contenu présenté sur ce Site, incluant les textes, les images, les projets et le code, est ma propriété intellectuelle. Il est destiné à des fins de consultation personnelle. Toute reproduction, distribution ou utilisation commerciale sans mon autorisation est interdite.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">3. Utilisation du Site</h2>
          <p className="mb-4">
            Ce Site est fourni "tel quel" pour la consultation de mon travail. Je ne peux garantir que le Site sera toujours disponible ou exempt d'erreurs.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">4. Contact</h2>
          <p>
            Si vous avez des questions, vous pouvez me contacter via le formulaire de contact sur la page d'accueil ou à ulyssebo255@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;