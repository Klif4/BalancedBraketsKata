export function balancedBrackets(brackets: string): string {
    if (brackets === '') return '';
    if (brackets.startsWith('[') && isSymmetrical(brackets)) return 'OK';
    return 'KO';
}

const isSymmetrical = (brackets: string):boolean => {
    const leftSide = brackets.slice(0, brackets.length / 2)
    const rightSide = brackets.slice(brackets.length / 2, brackets.length)
    const mirroredRightSide = toMirror(rightSide)
    return leftSide  === mirroredRightSide;
}

const toMirror = (brackets: string): string => {
    return brackets.split('')
        .reverse()
        .map(bracket => bracket === '[' ? ']' : '[')
        .join('');
};
