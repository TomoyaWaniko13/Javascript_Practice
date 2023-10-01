function add(a, b) {
  return a + b;
}

//assgin a function to a variable
const addFunc = add; //no ()!

const myMax = Math.max;

//same results
console.log(add(1, 2), addFunc(1, 2));
//same results
console.log(Math.max(1, 2), myMax(1, 2));
