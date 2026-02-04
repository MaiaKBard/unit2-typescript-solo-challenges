import { describe, it, expect } from "vitest";
import { uniq } from "../../src/part-4";

describe("uniq", () => {
  describe("should return unique values from an array", () => {
    it("all of array", () => {
      expect(uniq([5, 1])).toEqual([5, 1]);
    });
    it("some of array", () => {
      expect(uniq([1, 2, 1, 3, 1, 4])).toEqual([1, 2, 3, 4]);
    });
    it("empty array", () => {
      expect(uniq([])).toEqual([]);
    });
    it("should not mutate input array", () => {
      const numbers = [1, 2, 1, 3, 1, 4];
      uniq(numbers);
      expect(numbers).toEqual([1, 2, 1, 3, 1, 4]);
    });
  });
});
