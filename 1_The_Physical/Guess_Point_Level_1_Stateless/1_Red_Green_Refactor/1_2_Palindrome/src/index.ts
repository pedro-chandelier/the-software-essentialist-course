export function palindrome(text: string): boolean {
    if (typeof text !== "string") return false

    const textArray = text.split("")
    const textArrayReverse = text.split("").reverse()

    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] !== textArrayReverse[i]) {
            return false
        }
    }

    return true
}