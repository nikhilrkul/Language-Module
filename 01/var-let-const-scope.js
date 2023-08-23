let x = 10;
console.log(x);

function changeK() {
  let x = 20;
  console.log(x);

  if (true) {
    let x = 30;
    console.log(x);
  }
  console.log(x);
}

changeK();

/**
 * 10
 * err -> cannot access x before init
 * 20
 * 20
 * 30
 * 30
 * 20
 */

// var x = 10;
// console.log(x);

// function changeK() {
//   console.log(x);
//   var x = 20;

//   if (true) {
//     console.log(x);
//     var x = 30;
//     console.log(x);
//   }
//   console.log(x);
// }

// changeK();

/**
 * 10
 * 10
 * 20
 * 30
 */
