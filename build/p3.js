"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_letter_1 = __importDefault(require("is-letter"));
const cr = { a: [], x: 1 };
const d = {
    a: ['abc', 'x', 'def', 'y', 'Z'],
};
const b = {
    a: ['abc', 'x', 'def', 'y', 'Z'],
    x: 2,
};
function p3(a) {
    // [ 1, 2, 10 ] => [ '(1) (2) (3)' ]
    if (b.a) {
        return b.a.filter(is_letter_1.default)
            .map((x) => `( ${x} )`)
            .slice(0, b.x)
            .join(' ');
    }
    return '';
}
console.log(p3(b));
// console.log( p2 ([ 'abc', 'x', 'def', 'y', 'Z' ] ) );
console.log(p3({ a: null, x: 1 }));
