// Pass by value and Pass by reference

// Javascript -> ?

let a = 10;
function change(b) {
  b = 2;
}

change(a);
console.log(a); // proof that it is pass by value

let x = [1, 2, 3];

function updateX(y) {
  y.push(4);
}

updateX(x);
console.log(x); // proof that it is pass by value (i.e. lvalue)
