# 🎨 Options de Mise en Page des Projets

Ce document explique comment basculer entre les 3 mises en page disponibles pour vos cartes de projets.

## 📐 Options Disponibles

### ✅ **OPTION 3 : Bento Box (ACTIF)** - Layout Moderne Type Dashboard
```
┌─────────────┬─────┐
│             │     │
│   Card 1    │  C  │
│   (2x2)     │  a  │
│             │  r  │
├─────────────┤  d  │
│   Card 2    │     │
│   (2x1)     │  3  │
├──────┬──────┴─────┤
│ Card │  Card 4    │
│  ... │   (1x1)    │
└──────┴────────────┘
```
**Disposition :**
- Card 1 : Grande (2 colonnes × 2 lignes)
- Card 2 : Large horizontale (2 colonnes × 1 ligne)
- Card 3 : Haute verticale (1 colonne × 2 lignes)
- Card 4 : Petite (1 colonne × 1 ligne)

**Parfait pour :** Design moderne, style "dashboard", mettre en avant le premier projet

---

### OPTION 1 : Grille Masonique
```
┌──────────┬──────────┐
│  Card 1  │  Card 2  │
│  (2 col) │  (2 col) │
├──────┬───┴───┬──────┤
│ C3   │  C4   │  ... │
│(1col)│ (1col)│      │
└──────┴───────┴──────┘
```
**Disposition :**
- 2 premières cartes : Larges (2 colonnes chacune)
- 2 dernières cartes : Normales (1 colonne chacune)

**Parfait pour :** Mettre en avant 2 projets principaux

---

### OPTION 2 : Layout Asymétrique
```
┌──────────┬──────┐
│          │ C2   │
│  Card 1  ├──────┤
│  (2x2)   │ C3   │
│ Featured ├──────┤
│          │ C4   │
└──────────┴──────┘
```
**Disposition :**
- Card 1 : Featured (2 colonnes × 2 lignes)
- Autres : Normales (1 colonne × 1 ligne)

**Parfait pour :** Mettre en avant UN projet principal

---

## 🔧 Comment Changer de Layout ?

### Ouvrez le fichier :
`src/components/Projects.tsx`

### Trouvez la ligne ~343 avec les 3 options

### Pour activer l'OPTION 1 (Masonique) :
```tsx
// COMMENTEZ l'Option 3 actuelle (lignes ~369-391)
// Décommentez l'Option 1 (lignes ~343-354)

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className={`group relative overflow-hidden rounded-2xl ...
                 ${index === 0 || index === 1 ? 'md:col-span-2 md:row-span-1' : 'md:col-span-1'}
                 ...`}>
```

### Pour activer l'OPTION 2 (Asymétrique) :
```tsx
// COMMENTEZ l'Option 3 actuelle
// Décommentez l'Option 2 (lignes ~356-367)

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className={`group relative overflow-hidden rounded-2xl ...
                 ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
                 ...`}>
```

### Pour revenir à l'OPTION 3 (Bento Box - actif) :
```tsx
// C'est déjà actif ! Lignes ~369-391
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-6">
  {projects.map((project, index) => {
    const layouts = [
      'lg:col-span-2 lg:row-span-2', // Card 1: Grande
      'lg:col-span-2 lg:row-span-1', // Card 2: Horizontale
      'lg:col-span-1 lg:row-span-2', // Card 3: Verticale
      'lg:col-span-1 lg:row-span-1', // Card 4: Petite
    ];
```

---

## 🎯 Conseils

- **Option 3 (Bento)** est la plus moderne et visuellement intéressante
- **Option 1 (Masonique)** est équilibrée et met en avant 2 projets
- **Option 2 (Asymétrique)** est idéale si vous avez UN projet phare à mettre en avant

**Testez chaque option avec :**
```bash
npm run dev
```

Puis rechargez votre navigateur pour voir le changement !

---

## ⚠️ Important

**N'oubliez pas de :**
1. Commenter l'option actuellement active
2. Décommenter l'option que vous voulez activer
3. Vérifier qu'une seule option est active à la fois
4. Rebuild si nécessaire : `npm run build`
