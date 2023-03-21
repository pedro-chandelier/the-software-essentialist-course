import { palindrome } from "./index"

describe('palindrome checker', () => {
    describe('palindrome()', () => {
        it("returns false when text is not a string", () => {
            expect(palindrome(1 as any)).toBeFalsy()
        })

        it("returns true for same case text palindromes", () => {
            expect(palindrome("wow")).toBeTruthy()
            expect(palindrome("bill")).toBeFalsy()
        })

        it("returns true for different case text palindromes", () => {
            expect(palindrome("woW")).toBeTruthy()
            expect(palindrome("bilL")).toBeFalsy()
        })

        it("returns true for palindromes at phrase level", () => {
            expect(palindrome("Was It A Rat I Saw")).toBeTruthy()
            expect(palindrome("Never Odd or Even")).toBeTruthy()
            expect(palindrome("thiS is NOT a pHrase PalindromE")).toBeFalsy()
        })
    });
})