// src/App.tsx
import React, { useState, useEffect } from "react";
// AJOUTE CETTE LIGNE
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    // ENVELOPPE TOUT ICI AVEC <Router>
    <Router>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode
            ? "dark bg-slate-900"
            : "bg-gradient-to-br from-slate-50 to-emerald-50"
        }`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

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
