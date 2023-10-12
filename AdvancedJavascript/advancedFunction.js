const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();
//Clousers = a function ran, the function excuted,
//it is never going to excute again.
//But it's going to remenber that there are references to those variables.
//so the child scope always has acess to the parent scope.

//Curring
const multiply = (a, b) => (a = b);
//a funciton in a function
const curriedMultiply = (c) => (d) => c * d;
let e = curriedMultiply(3)(4);
console.log(`The value is ${e}`);
