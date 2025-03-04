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

