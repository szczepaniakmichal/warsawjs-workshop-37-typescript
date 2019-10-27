import isNotLetter from 'is-not-letter';

const x = 'abc';

console.log( `${x}: ${isNotLetter(x).toString() }`);