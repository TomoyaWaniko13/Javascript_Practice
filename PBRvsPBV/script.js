var a = 5;
var b = a;

b++;

let obj1 = { name: "Tomoya", password: "123" };
let obj2 = obj1;

obj2.password = "123456";

console.log(obj1);
console.log(obj2);

var c = [1, 2, 3, 4, 5, 6];
var d = c;
d.push(187628761);
console.log(d);
