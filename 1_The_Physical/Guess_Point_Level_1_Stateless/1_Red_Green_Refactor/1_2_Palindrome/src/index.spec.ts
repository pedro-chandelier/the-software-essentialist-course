import { palindrome } from "./index"

describe('palindrome checker', () => {
    describe('palindrome()', () => {
        it("returns false when text is not a string", () => {
            expect(palindrome(1 as any)).toBeFalsy()
        })

        it("returns true for same case text palindromes", () => {
            expect(palindrome("wow")).toBeTruthy()
        })
    });
})