export function palindrome(text: string): boolean {
  if (typeof text !== "string") return false;

  const textArray = text.split("").map((l) => l.toLowerCase());
  const textArrayReverse = text
    .split("")
    .map((l) => l.toLowerCase())
    .reverse();

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] !== textArrayReverse[i]) {
      return false;
    }
  }

  return true;
}
