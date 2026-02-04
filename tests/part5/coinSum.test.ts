import { describe, it, expect } from "vitest";
import { coinSum } from "../../src/part-5";

describe("coinSum", () => {
  it("should calculate coin sum for small amounts", () => {
    expect(coinSum(1)).toEqual(1);
    expect(coinSum(2)).toEqual(2);
    expect(coinSum(3)).toEqual(2);
    expect(coinSum(4)).toEqual(3);
    expect(coinSum(5)).toEqual(4);
    expect(coinSum(6)).toEqual(5);
    expect(coinSum(7)).toEqual(6);
    expect(coinSum(8)).toEqual(7);
  });

  it("should calculate coin sum for moderate amounts", () => {
    expect(coinSum(9)).toEqual(8);
    expect(coinSum(10)).toEqual(11);
    expect(coinSum(11)).toEqual(12);
    expect(coinSum(12)).toEqual(15);
    expect(coinSum(13)).toEqual(16);
    expect(coinSum(14)).toEqual(19);
    expect(coinSum(15)).toEqual(22);
    expect(coinSum(16)).toEqual(25);
    expect(coinSum(17)).toEqual(28);
  });

  it.skip("should calculate coin sum for large amounts", () => {
    expect(coinSum(100)).toEqual(4563);
    expect(coinSum(1000)).toEqual(321335886);
    expect(coinSum(10000)).toEqual(1133873304647601);
  });
});
