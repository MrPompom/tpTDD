import { evaluerMain } from "../src/poker";

describe("Évaluation des mains de poker", () => {
  it("reconnaît une carte haute", () => {
    const main = ["2C", "5K", "9T", "JP", "KC"];
    expect(evaluerMain(main)).toBe("Carte Haute");
  });
});

it("reconnaît une paire", () => {
  const main = ["2C", "2K", "9T", "JP", "KC"];
  expect(evaluerMain(main)).toBe("Paire");
});

it("reconnaît une double paire", () => {
  const main = ["2C", "2K", "9T", "9P", "KC"];
  expect(evaluerMain(main)).toBe("Double Paire");
});
it("reconnaît un brelan", () => {
  const main = ["2C", "2K", "2T", "9P", "KC"];
  expect(evaluerMain(main)).toBe("Brelan");
});

it("reconnaît une suite", () => {
  const main = ["5C", "6K", "7T", "8P", "9C"];
  expect(evaluerMain(main)).toBe("Suite");
});

it("reconnaît une couleur", () => {
  const main = ["2C", "5C", "9C", "JC", "KC"];
  expect(evaluerMain(main)).toBe("Couleur");
});

it("reconnaît un full", () => {
  const main = ["3C", "3K", "3T", "9P", "9C"];
  expect(evaluerMain(main)).toBe("Full");
});

it("reconnaît un carré", () => {
  const main = ["4C", "4K", "4T", "4P", "9C"];
  expect(evaluerMain(main)).toBe("Carré");
});

it("reconnaît une quinte flush", () => {
  const main = ["5C", "6C", "7C", "8C", "9C"];
  expect(evaluerMain(main)).toBe("Quinte Flush");
});

it("reconnaît une quinte flush royale", () => {
  const main = ["10C", "JC", "QC", "KC", "AC"];
  expect(evaluerMain(main)).toBe("Quinte Flush Royale");
});
