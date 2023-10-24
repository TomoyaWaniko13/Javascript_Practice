var a = 5;
var b = a;

b++;

let obj1 = { name: "Yao", password: "123" };
let obj2 = obj1;

//obj1 and obj2 's password change because of
//pass by reference
obj2.password = "456";

console.log(obj1);
console.log(obj2);

//an array is an object.
//Pass by reference
var c = [1, 2, 3, 4, 5];
var d = [].concat(c);
d.push(1827);
console.log(c);
console.log(d);

//pass by value
var e = [].concat(c);
console.log(e);

let original = { a: "a", b: "b", c: "c" };
//assign(object you want to copy to, object you want to copy from)
let clone = Object.assign({}, original);
let clone2 = { ...original };

//check wheter it is "pass by value" or "pass by reference"
original.c = 5;
console.log(original);
console.log(clone);
console.log(clone2);

let original2 = {
  a: "a",
  b: "b",
  c: {
    deep: "try and copy me",
  },
};

//shallow cloning
let clone3 = Object.assign({}, original2);
let clone4 = { ...original2 };
let superClone = JSON.parse(JSON.stringify());
console.log(original2);
console.log(clone);
console.log(clone2);
console.log(superClone);
//