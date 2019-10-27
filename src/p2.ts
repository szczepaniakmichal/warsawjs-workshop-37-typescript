import isLetter from 'is-letter';


function p1 (a: Array<number>) {
    // [ 1, 2, 10 ] => [ '(1) (2) (3)' ]

    if (isLetter("a")) {  // jesli a jest true to wiadomo ze  nie jest null lub cos czego sie nie spodziewamy
        return a.map( x => `(${x})` ).join(' ')
    }
}

