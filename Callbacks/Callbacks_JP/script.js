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

// a function that recives another function
function doTwice() {
  func();
  func();
}

doTwice(function () {
  console.log("Hello!");
});

//  defines a function called doTwiceWithValue
//  that takes a single parameter named func.
function doTwiceWithValue(func) {
  // func('Hello!');: This line invokes
  //  the func function with the argument 'Hello!'
  func("Hello");
  func("I am there!");
}

// we use doTwiceWithValue() by passing in an anonymous function:
//An anonymous function in JavaScript is a function that doesn't
// have a name. Instead of defining a named function using the function
// keyword, you create a function without a name directly in your code.
//  Anonymous functions are typically used when you need a function for a
//  short-lived or specific purpose, and you don't intend to reuse it elsewhere
//   in your code.
doTwiceWithValue(function (message) {
  console.log(message);
});
