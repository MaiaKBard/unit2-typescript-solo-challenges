import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { indexOf } from "../../src/part-4";

describe("indexOf", () => {
  describe("should return the first index or -1", () => {
    it("single occurrence", () => {
      expect(indexOf([10, 20, 30], 30)).toEqual(2);
    });
    it("multiple occurrences", () => {
      expect(indexOf([10, 20, 20, 30, 20, 20], 20)).toEqual(1);
    });
    it("no occurrences", () => {
      expect(indexOf([10, 20, 20, 30, 20, 20], 5)).toEqual(-1);
    });
  });
});
