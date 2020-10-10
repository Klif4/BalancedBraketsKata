import {balancedBrackets} from "../src/balanced-brackets";

test('empty brackets', () => {
    expect(balancedBrackets('')).toBe('')
})