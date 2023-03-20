import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("returns a string", () => {
    expect(typeof fizzBuzz(5)).toBe("string");
    expect(fizzBuzz(1)).toBe("1");
  });

  it("accepts only 1 to 100", () => {
    expect(() => fizzBuzz(0)).toThrow();
    expect(() => fizzBuzz(101)).toThrow();
    expect(() => fizzBuzz(10)).not.toThrow();
  });
});
