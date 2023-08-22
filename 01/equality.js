// == equality
// === Strictly equal

console.log(1 == "1");
console.log(1 === "1");

console.log("" == 0);
console.log((0).toString());
console.log(Number(0));

/**
 *  For complex objects
 */

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 === arr2); // because lvalue is not same (no need to even check the rval)
console.log(arr1 == arr2);

console.log(arr1 === arr3); // true : because they are same objects (lvalue are same as rValue)
