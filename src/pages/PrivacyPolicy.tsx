// src/pages/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-950 to-cyan-950 dark:from-black dark:to-gray-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 text-center">
          Politique de Confidentialité
        </h1>

        <div className="bg-slate-800 dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700 dark:border-slate-800 text-slate-300">
          <p className="mb-4">
            Dernière mise à jour : 20 juin 2025
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">1. Introduction</h2>
          <p className="mb-4">
            Bienvenue sur le site d'Ulysse Borris. Je m'engage à protéger votre vie privée. Cette politique de confidentialité explique comment je collecte, utilise, divulgue et protège vos informations personnelles lorsque vous utilisez mon site web.
          </p>
          <p className="mb-4">
            Je respecte les lois applicables en matière de protection des renseignements personnels au Québec et au Canada, notamment la Loi sur la protection des renseignements personnels dans le secteur privé (LPRPDE, aussi connue sous le nom de Loi 25) au Québec, et la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE / PIPEDA) au niveau fédéral.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">2. Informations que je collecte</h2>
          <h3 className="text-xl font-semibold text-white mb-2 mt-4">2.1. Informations fournies par vous</h3>
          <p className="mb-2"> {/* Modifié: mb-2 pour un espacement plus serré avant la liste */}
            Lorsque vous utilisez mon formulaire de contact, je collecte les informations suivantes :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4"> {/* Sorti du <p> et ajouté mb-4 */}
            <li>Nom</li>
            <li>Adresse e-mail</li>
            <li>Sujet du message</li>
            <li>Contenu de votre message</li>
          </ul>
          <p className="mb-4"> {/* Nouveau paragraphe pour la suite du texte */}
            Ces informations sont utilisées uniquement pour répondre à vos demandes et communiquer avec vous.
          </p>

          <h3 className="text-xl font-semibold text-white mb-2 mt-4">2.2. Informations collectées automatiquement (Cookies)</h3>
          <p className="mb-4">
            J'utilise des cookies et des technologies similaires pour assurer le bon fonctionnement de mon site web. Actuellement, mon site utilise principalement des cookies essentiels (techniques) nécessaires à sa navigation. Je n'utilise pas de cookies de suivi ou d'analyse pour le moment. Si je devais en ajouter à l'avenir, je mettrais à jour cette politique et mettrais en place un mécanisme de consentement.
          </p>
          <p className="mb-4">
            Vous pouvez généralement gérer les préférences de cookies via les paramètres de votre navigateur.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">3. Comment j'utilise vos informations</h2>
          <p className="mb-2"> {/* Modifié: mb-2 */}
            J'utilise les informations que je collecte aux fins suivantes :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4"> {/* Sorti du <p> et ajouté mb-4 */}
            <li>Pour répondre à vos demandes et messages envoyés via le formulaire de contact.</li>
            <li>Pour assurer le fonctionnement et la sécurité de mon site web.</li>
            <li>Pour améliorer l'expérience utilisateur (dans le cas de futures analyses anonymisées, si implémentées avec votre consentement).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">4. Partage de vos informations</h2>
          <p className="mb-4">
            Je ne vends, n'échange ni ne loue vos informations personnelles à des tiers. Vos informations ne sont partagées qu'avec des tiers nécessaires au fonctionnement de mon site ou de mes services (par exemple, EmailJS pour l'envoi de messages de contact), et uniquement dans la mesure nécessaire. Ces tiers sont également tenus de protéger vos données.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">5. Sécurité des données</h2>
          <p className="mb-4">
            Je mets en œuvre des mesures de sécurité raisonnables pour protéger vos informations personnelles contre l'accès, l'utilisation ou la divulgation non autorisés. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">6. Vos droits (Loi 25)</h2>
          <p className="mb-2"> {/* Modifié: mb-2 */}
            Conformément à la Loi 25 du Québec, vous avez les droits suivants concernant vos renseignements personnels :
          </p>
          <ul className="list-disc list-inside ml-4 mb-4"> {/* Sorti du <p> et ajouté mb-4 */}
            <li>Droit d'accès : Demander l'accès aux renseignements que je détiens à votre sujet.</li>
            <li>Droit de rectification : Demander la correction de renseignements incomplets ou inexacts.</li>
            <li>Droit à la désindexation (droit à l'oubli) : Demander la cessation de la diffusion de vos renseignements ou la désindexation d'un hyperlien.</li>
            <li>Droit à la portabilité : Recevoir vos renseignements dans un format structuré et couramment utilisé.</li>
            <li>Droit de retirer votre consentement : Retirer votre consentement à la collecte, l'utilisation ou la divulgation de vos renseignements.</li>
          </ul>
          <p className="mb-4"> {/* Nouveau paragraphe pour la suite du texte */}
            Pour exercer ces droits, veuillez me contacter à ulyssebo255@gmail.com.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">7. Modifications de cette politique</h2>
          <p className="mb-4">
            Je peux mettre à jour ma politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page avec la date de "dernière mise à jour".
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4 mt-6">8. Contactez-moi</h2>
          <p>
            Si vous avez des questions concernant cette politique de confidentialité, vous pouvez me contacter à : ulyssebo255@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;