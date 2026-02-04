import { describe, it, expect } from "vitest";
import { pluck } from "../../src/part-4";

describe("pluck", () => {
  describe("should return all values for the specified key", () => {
    it("first property", () => {
      const twoStooges = [
        { name: "Moe", age: 40 },
        { name: "Curly", age: 28 },
      ];
      expect(pluck(twoStooges, "name")).toEqual(["Moe", "Curly"]);
    });
    it("second property", () => {
      const twoStooges = [
        { name: "Moe", age: 40 },
        { name: "Curly", age: 28 },
      ];
      expect(pluck(twoStooges, "age")).toEqual([40, 28]);
    });
    it("missing property", () => {
      const twoStooges = [
        { name: "Moe", age: 40 },
        { name: "Curly", age: 28 },
      ];
      expect(pluck(twoStooges, "height")).toEqual([]);
    });
    it("inconsistent property", () => {
      const threeStooges = [
        { name: "Moe", lastName: "Horwitz", age: 40 },
        { name: "Larry", age: 35 },
        { name: "Curly", lastName: "Wardell", age: 28 },
      ];
      expect(pluck(threeStooges, "lastName")).toEqual(["Horwitz", "Wardell"]);
    });
  });
});
