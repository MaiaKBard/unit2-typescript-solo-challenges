import { describe, it, expect } from "vitest";
import { isPrime } from "../../src/part-1";

describe("isPrime", () => {
  it("should return true if prime", () => {
    expect(isPrime(2)).toEqual(true);
    expect(isPrime(491)).toEqual(true);
    expect(isPrime(997)).toEqual(true);
  });

  it("should return false if not prime", () => {
    expect(isPrime(1)).toEqual(false);
    expect(isPrime(123)).toEqual(false);
    expect(isPrime(777)).toEqual(false);
  });

  it("should work for big numbers", () => {
    expect(isPrime(10007)).toEqual(true);
    expect(isPrime(10001)).toEqual(false);
  });
});
