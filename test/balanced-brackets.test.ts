import {balancedBrackets} from "../src/balanced-brackets";

test('empty brackets', () => {
    expect(balancedBrackets('')).toBe('')
})

test('pair of open/closed bracket is valid', () => {
    expect(balancedBrackets('[]')).toBe('OK')
})

test('pair of closed/open bracket is not valid', () => {
    expect(balancedBrackets('][')).toBe('KO')
})

test('brackets start with ] is not valid', () => {
    expect(balancedBrackets(']][[]')).toBe('KO')
})


test('brackets start with ] is not valid', () => {
    expect(balancedBrackets(']][[]]')).toBe('KO')
})

test('brackets have odd number of bracket is not valid', () => {
    expect(balancedBrackets('[[]')).toBe('KO')
})

test('symmetrical brackets is valid', () => {
    expect(balancedBrackets('[[]]')).toBe('OK')
})

test('random test', () => {
    expect(balancedBrackets('[[][]]')).toBe('OK')
})

test('random test', () => {
    expect(balancedBrackets('[[[][]]]')).toBe('OK')
})

test('random test', () => {
    expect(balancedBrackets('[[[[]]]')).toBe('KO')
})

test('random test', () => {
    expect(balancedBrackets('[][]]')).toBe('KO')
})





