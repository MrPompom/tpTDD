export function evaluerMain(main: string[]): string {
    
    const valeurs = main.map(carte => carte.slice(0, -1));

    const occurrences = valeurs.reduce((acc, valeur) => {
      acc[valeur] = (acc[valeur] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const paires = Object.values(occurrences).filter(count => count === 2);
    if (paires.length === 1) {
      return "Paire";
    }
  
    return "Carte Haute";
  }
  