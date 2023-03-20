export function fizzBuzz(n: number): string {
  if (n < 1 || n > 100) {
    throw new Error("Only 1 to 100 is allowed")
  }

  return `${n}`;
}
