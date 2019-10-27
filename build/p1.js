"use strict";
function p1(a) {
    // [ 1, 2, 10 ] => [ '(1) (2) (3)' ]
    return a.map(function (x) { return "(" + x + ")"; }).join(' ');
    // console.log( a.map( x => `(${x})` ).join(' '));
}
// p1([ 1, 2, 10 ] );
console.log(p1([1, 2, 10]));
console.log(p1([1])); // tu powinniśmy podać array
// console.log( p1 ( null  ) );
