const player = "bobby";
let experience = 100;
let wizardLevel = false;

//{}creates a new scope.
if (experience > 90) {
  let wizardLevel = true;
  //it outputs true
  console.log("inside", wizardLevel);
}
//it outputs false
console.log("outside", wizardLevel);

const player2 = "Tomoya";
let experience2 = 100;
//do not use var
var wizardLevel2 = true;

if (experience2 > 90) {
  let wizardLevel = true;
  //it outputs ture
  console.log("inside", wizardLevel2);
}

//it outputs ture
console.log("outside", wizardLevel2);

const player3 = "bobby";
let experience3 = 100;
let wizardLevel3 = false;

if (experience3 > 90) {
  let wizardLevel3 = true;
}

const a = function () {
  console.log("a");
};

//you can change properties of a const object.
const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};

const player4 = obj.player;
const experience4 = obj.experience;
let wizardLevel4 = obj.wizardLevel;

// const { player4, experience4 } = obj;
// let { wizardLevel4 } = obj;

const name = "john snow";

const b = "Simon";
const c = true;
const d = {};

const obj3 = {
  b: b,
  c: c,
  d: d,
};

const age = 2;
const greetingBest = `Hello ${name} you seem to be ${age - 10}.`;

//no default value for name
function greet(name = "", age = 30, pet = "cat") {
  return `Hello ${name} you seem to be ${age}. What a lovely ${pet} you have!`;
}

//Symobos are used because they
//create completely unique type.
//sym2 !== sym3
var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

//you can leave out
function add(a, b) {
  return a + b;
}
//if you have a single return,
//you can just put it on one line.
const add2 = (a, b) => {
  return a + b;
};

const add3 = (a, b) => a + b;
