import { describe, it, expect } from "vitest";
import { reduce } from "../../src/part-4";

describe("reduce", () => {
  it("should sum up the elements of an array when an initialValue is not provided", () => {
    const total: number = reduce(
      [1, 2, 3],
      (acc: number, curr: number) => acc + curr,
    );
    expect(total).toEqual(6);
  });

  it("should find the difference between the elements of an array when an initialValue is not provided", () => {
    const total: number = reduce(
      [1, 2, 3],
      (acc: number, curr: number) => acc - curr,
    );
    expect(total).toEqual(-4);
  });

  it("should sum up the elements of an array when an initialValue is provided", () => {
    const total: number = reduce(
      [1, 2, 3],
      (acc: number, curr: number) => acc + curr,
      2,
    );
    expect(total).toEqual(8);
  });

  it("should find the difference between the elements of an array when an initialValue is provided", () => {
    const total: number = reduce(
      [1, 2, 3],
      (acc: number, curr: number) => acc - curr,
      -1,
    );
    expect(total).toEqual(-7);
  });

  it("should not mutate the input array", () => {
    const numbers = [1, 2, 3];
    reduce(numbers, (acc: number, curr: number) => acc + curr);
    expect(numbers).toEqual([1, 2, 3]);
  });
});
