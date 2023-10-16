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
