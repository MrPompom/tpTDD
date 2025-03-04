export function evaluerMain(main: string[]): string {

    const value = main.map(carte => carte.slice(0, -1));
    const colors = main.map(carte => carte.slice(-1));

    const valeursTrier = value
    .map(val => convertValue(val))
    .sort((a, b) => a - b);
  
    const occurrences = valeursTrier.reduce((acc, valeur) => {
    acc[valeur] = (acc[valeur] || 0) + 1;
    return acc;
    }, {} as Record<number, number>);


    const nombres = Object.values(occurrences);
    const isSuite = valeursTrier.every((v, i, arr) => i === 0 || v === arr[i - 1] + 1);
    const isColor = colors.every(c => c === colors[0]);

    if (isSuite && isColor && valeursTrier[0] === 10) return "Quinte Flush Royale";
    if (isSuite && isColor) return "Quinte Flush";
    if (nombres.includes(4)) return "Carré";
    if (nombres.includes(3) && nombres.includes(2)) return "Full";
    if (isColor) return "Couleur";
    if (isSuite) return "Suite";
    if (nombres.includes(3)) return "Brelan";
    if (nombres.filter(n => n === 2).length === 2) return "Double Paire";
    if (nombres.includes(2)) return "Paire";

    return "Carte Haute";
  }

  function convertValue(value: string): number {
    if (value === "A") return 14;
    if (value === "K") return 13;
    if (value === "Q") return 12;
    if (value === "J") return 11;
    return parseInt(value);
  }
  

  export function comparerMains(main1: string[], main2: string[]): string {
    return "";
  }