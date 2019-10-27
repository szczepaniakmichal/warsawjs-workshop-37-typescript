import isLetter from 'is-letter';
import {MarkRequired, StrictOmit} from "ts-essentials";

type A = Array<string> | null;

type B = {
    a: A,
    x: number,  // ? to opcja, property nie jest wymagany
};

type C = {
    a: A,
    x?: number,
};

type CR = MarkRequired<C, 'x'>;

const cr: CR = { a: [], x: 1 };

type D = StrictOmit<B, 'x'>;

const d: D = {
    a: [ 'abc', 'x', 'def', 'y', 'Z' ],
};

const b: B = {
    a: [ 'abc', 'x', 'def', 'y', 'Z' ],
    x: 2,
};

function p3 (a: B): string {
    // [ 1, 2, 10 ] => [ '(1) (2) (3)' ]

    if (b.a) {
        return b.a.filter(isLetter)
            .map( (x: any) => `( ${x} )` )
            .slice(0, b.x)
            .join(' ')
    }
    return '';
}
console.log(p3(b));

// console.log( p2 ([ 'abc', 'x', 'def', 'y', 'Z' ] ) );
console.log( p3 ({a: null, x: 1 }) );