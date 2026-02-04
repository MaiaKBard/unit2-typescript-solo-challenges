import { describe, it, expect } from "vitest";
import { palindrome } from "../../src/part-1";

describe("palindrome", () => {
  it("should return true if palindrome", () => {
    expect(palindrome("eye")).toEqual(true);
    expect(palindrome("level")).toEqual(true);
    expect(palindrome("noon")).toEqual(true);
    expect(palindrome("kayak")).toEqual(true);
  });

  it("should return false if not palindrome", () => {
    expect(palindrome("jmoney")).toEqual(false);
    expect(palindrome("was")).toEqual(false);
    expect(palindrome("here")).toEqual(false);
  });

  it("should work if separated with spaces", () => {
    expect(palindrome("do not bob to nod")).toEqual(true);
    expect(palindrome("llama mall")).toEqual(true);
    expect(palindrome("loops at a spool")).toEqual(true);
  });

  it("should be case-insensitive", () => {
    expect(palindrome("Lisa Bonet ate no basil")).toEqual(true);
    expect(palindrome("Mr Owl ate my metal worm")).toEqual(true);
    expect(palindrome("UFO tofu")).toEqual(true);
  });

  it("should ignore punctuation", () => {
    expect(palindrome("A Toyota! Race fast, safe car! A Toyota!")).toEqual(
      true,
    );
    expect(palindrome("flee to me, remote elf")).toEqual(true);
  });
});
