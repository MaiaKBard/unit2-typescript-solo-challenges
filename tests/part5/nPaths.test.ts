import { describe, it, expect } from "vitest";
import { nPaths } from "../../src/part-5";

describe("nPaths", () => {
  it("should calculate paths for small board", () => {
    expect(nPaths(1)).toEqual(1);
    expect(nPaths(2)).toEqual(2);
    expect(nPaths(3)).toEqual(12);
  });

  it("should calculate paths for large board", () => {
    expect(nPaths(4)).toEqual(184);
    expect(nPaths(5)).toEqual(8512);
    expect(nPaths(6)).toEqual(1262816);
  });
});
