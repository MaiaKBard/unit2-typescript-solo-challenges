import { describe, it, expect } from "vitest";
import { nthFibonacci } from "../../src/part-1";

describe("nthFibonacci", () => {
  it("should return nth fibonacci number", () => {
    expect(nthFibonacci(0)).toEqual(0);
    expect(nthFibonacci(1)).toEqual(1);
    expect(nthFibonacci(2)).toEqual(1);
    expect(nthFibonacci(3)).toEqual(2);
    expect(nthFibonacci(4)).toEqual(3);
    expect(nthFibonacci(5)).toEqual(5);
    expect(nthFibonacci(6)).toEqual(8);
    expect(nthFibonacci(7)).toEqual(13);
  });

  it("should work for big numbers", () => {
    expect(nthFibonacci(10)).toEqual(55);
    expect(nthFibonacci(13)).toEqual(233);
    expect(nthFibonacci(20)).toEqual(6765);
  });

  it.skip("should use memoization to handle large numbers efficiently", () => {
    expect(nthFibonacci(40)).toEqual(102334155);
    expect(nthFibonacci(45)).toEqual(1134903170);
  }, 1000); // 1 second timeout - the naive approach would take minutes, while a memoized strategy should complete in milliseconds
});
