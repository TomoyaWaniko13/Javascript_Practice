function first() {
  var greet = "Hi";
  function second() {
    alert(greet);
  }
  return second;
}

var newFunc = first();
newFunc();

const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

const multiply = (a, b) => a * b;
//=> is a function
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

var a = 1;
function b() {
  a = 2;
}
