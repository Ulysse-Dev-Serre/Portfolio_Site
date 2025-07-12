// src/components/Projects.tsx
import React, { useState } from "react";
import { ExternalLink, Github, Cpu, Leaf, Zap } from "lucide-react";
import ProjectModal from "./ProjectModal"; // Importe le nouveau composant de modale

const Projects: React.FC = () => {
  // --- ÉTATS POUR LA MODALE ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null); // Stockera le projet à afficher dans la modale
