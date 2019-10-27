import isLetter from 'is-letter';

type A = Array<string> | null;

function p2 (a: A): string {
    // [ 1, 2, 10 ] => [ '(1) (2) (3)' ]

    if (a) {  // jesli a jest true to wiadomo ze  nie jest null lub cos czego sie nie spodziewamy
        return a.map( x => `(${x})` ).join(' ')
    }

    return '';
}

console.log( p2 ([ 'abc', 'x', 'def', 'y', 'Z' ] ) );