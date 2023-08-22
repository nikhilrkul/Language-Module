console.log(typeof 10);
console.log(typeof "abcd");
console.log(typeof true);
console.log(typeof 8.5);
console.log(typeof undefined);
console.log(typeof null);

let a = { a: 10, b: "abc" };
let b = [1, 2, 3];
let c = BigInt(15246728765);
let d = Symbol("abcd");

console.log(a + " : " + typeof a);
console.log(b + " : " + typeof b);
console.log(c + " : " + typeof c);
console.log(typeof d);

let i = { a: 10 };
let e = 10;

console.log(i.a === e);
