import { comparerMains } from "./src/poker";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function demanderMain(joueur: string): Promise<string[]> {
  return new Promise((resolve) => {
    rl.question(`Entrez la main du ${joueur} (ex: "2C 5K 9T JP KC") : `, (reponse) => {
      const main = reponse.toUpperCase().split(" ");
      resolve(main);
    });
  });
}
async function main() {
  console.log("\n=== Comparateur de Mains de Poker ===\n");

  const mainJoueur1 = await demanderMain("Joueur 1");
  const mainJoueur2 = await demanderMain("Joueur 2");

  console.log("\nRésultat :", comparerMains(mainJoueur1, mainJoueur2));

  rl.close();
}

main();
