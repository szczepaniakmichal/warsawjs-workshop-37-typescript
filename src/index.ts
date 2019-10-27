type A = Array<string> | null;

export function p1 (a: A): string {
    // [ 1, 2, 10 ] => [ '(1) (2) (3)' ]

    if (a) {
        return a.map( x => `(${x})` ).join(' ')
    }

    return '';
}

console.log( p1 ([ 'abc', 'x', 'def', 'y', 'Z' ] ) );