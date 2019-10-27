function p1 (a: Array<number>) {
     // [ 1, 2, 10 ] => [ '(1) (2) (3)' ]

    if (a) {  // jesli a jest true to wiadomo ze  nie jest null lub cos czego sie nie spodziewamy
        return a.map( x => `(${x})` ).join(' ')
    }
}

console.log( p1 ([ 1, 2, 10 ] ) );

console.log( p1 ( [1]  ) ); // tu powinniśmy podać array



