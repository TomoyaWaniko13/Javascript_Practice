const a = 1;
const b = 10;
const c = 100;

console.log("1");
//What if this is a big task?
console.log("2");
console.log("3");

const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};

//Call Stack
//
// console.log("4");
// two()
// one()

//Recursion = a function that calls itself.
function foo() {
  foo();
}

console.log("1");
setTimeout(() => {
  console.log("2 and 2000 miliseconds");
}, 2000);
console.log("3");

console.log("1");
setTimeout(() => {
  console.log("2 and 0 milisecond");
}, 0);
console.log("3");
