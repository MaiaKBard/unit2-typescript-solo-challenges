import { describe, it, expect } from "vitest";
import { rockPaperScissors } from "../../src/part-4";

describe("rockPaperScissors", () => {
  it("should return all combinations of results for 0 games", () => {
    expect(rockPaperScissors(0)).toEqual([]);
  });

  it("should return all combinations of results for 1 game", () => {
    const actual = rockPaperScissors(1);
    const expected = [["rock"], ["paper"], ["scissors"]];
    expect(actual).toHaveLength(expected.length);

    actual.sort();
    expected.sort();
    expect(actual).toEqual(expected);
  });

  it("should return all combinations of results for 2 games", () => {
    const actual = rockPaperScissors(2);
    const expected = [
      ["rock", "rock"],
      ["rock", "paper"],
      ["rock", "scissors"],
      ["paper", "rock"],
      ["paper", "paper"],
      ["paper", "scissors"],
      ["scissors", "rock"],
      ["scissors", "paper"],
      ["scissors", "scissors"],
    ];
    expect(actual).toHaveLength(expected.length);

    actual.sort();
    expected.sort();
    expect(actual).toEqual(expected);
  });
});
