const a = 1;
const b = 10;
const c = 100;

console.log("1");
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
