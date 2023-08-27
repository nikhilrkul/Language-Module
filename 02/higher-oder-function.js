function createGreet(greeting) {
  function greet(name) {
    console.log(greeting + " " + name + "!");
  }

  return greet;
}

const gm = createGreet("Good morning");
const ge = createGreet("Good evening");

gm("Nikhil");
ge("Nikhil");

//Output : Good morning Nikhil !

const arr = [1, 14, 45, 13, 46, 654, 3, 23, 21];
function increaseComparator(a, b) {
  return a - b;
}

console.log(arr.sort(increaseComparator));
