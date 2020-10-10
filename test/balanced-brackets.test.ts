import {balancedBrackets} from "../src/balanced-brackets";

test('empty brackets', () => {
    expect(balancedBrackets('')).toBe('')
})

test('pair of open/closed bracket', () => {
    expect(balancedBrackets('[]')).toBe('OK')
})