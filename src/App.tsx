// src/App.tsx
import { useEffect } from "react";
// AJOUTE CETTE LIGNE
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Importe les pages légales que tu devras créer
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions"; // À créer
import CookiePolicy from "./pages/CookiePolicy"; // À créer

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    // ENVELOPPE TOUT ICI AVEC <Router>
    <Router>
      <div className="min-h-screen transition-colors duration-300 dark bg-slate-900">
        <Header />

        <main>
          {/* UTILISE <Routes> ET <Route> POUR LA NAVIGATION */}
          <Routes>
            {/* Cette route affiche ta page d'accueil avec toutes les sections */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Projects />
                  <About />
                  <Contact />
                </>
              }
            />

            {/* Ces routes affichent les pages légales de manière isolée */}
            <Route
              path="/politique-confidentialite"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/conditions-generales"
              element={<TermsAndConditions />}
            />
            <Route path="/politique-cookies" element={<CookiePolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
