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

  it("returns Fizz for multiples of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
    expect(fizzBuzz(2)).toBe("2");
  });

  it("returns Buzz for multiples of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
    expect(fizzBuzz(2)).toBe("2");
  });

  it("returns FizzBuzz for multiples of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(45)).toBe("FizzBuzz");
    expect(fizzBuzz(2)).toBe("2");
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(5)).toBe("Buzz");
  });
});
