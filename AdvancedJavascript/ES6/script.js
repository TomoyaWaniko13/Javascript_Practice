let experience = 100;
var a = false;

if (experience > 90) {
  a = true;
  console.log("inner a:", a);
}
console.log("outer a:", a);

let b = false;

if (experience > 90) {
  b = true;
  console.log("inner b:", b);
}
console.log("outer b:", b);

let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
  console.log("inside", wizardLevel);
}
console.log("outside", wizardLevel);

const lastName = "Tomoya";

const obj = {
  name: "Tomoya",
  age: 24,
  isCat: false,
};

// const name = obj.name;
// const age = obj.age;
// let isCat = obj.isCat;

const { name, age } = obj;
let { isCat } = obj;

const name2 = "Akira";

const obj2 = {
  [name2]: "hello",
  [1 + 2]: "hihi",
};

console.log(obj2.Akira);

const d = "Tomoya";
const e = "true";
const f = {};

const obj3 = {
  d,
  e,
  f,
};

// const obj3 = {
//   d: d,
//   e: e,
//   f: f,
// };

const nameX = "Tomoya";
const ageX = 100;
const pet = "cat";

const greetingBest = `Hello ${nameX} you seem to be ${
  ageX - 10
}. What a lovely ${pet} you have.`;

console.log(greetingBest);

function greet(name=``, age=`30`, pet=`cat`){
  
}