import { describe, it, expect } from "vitest";
import { insertionSort } from "../../src/part-3";
import { makeList, inc } from "../utils/sort_helpers";

describe("insertionSort", () => {
  it("should sort numbers", () => {
    for (let i = 0; i < 10; i++) {
      const smallArray = makeList(100);
      const clone = smallArray.slice();
      expect(insertionSort(clone)).toEqual(smallArray.sort(inc));
    }
  });

  it("should sort very large arrays", () => {
    const largeArray = makeList(10000);
    const clone = largeArray.slice();
    expect(insertionSort(clone)).toEqual(largeArray.sort(inc));
  });
});
