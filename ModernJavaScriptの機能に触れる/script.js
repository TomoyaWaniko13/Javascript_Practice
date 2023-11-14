// // // // // console.log("Hello");
// // // // // var val1 = "var variable";
// // // // // console.log(val1);

// // // // // //val can be rewritten
// // // // // val1 = "rewrite val1";
// // // // // console.log(val1);

// // // // // //val can be decleared
// // // // // var val1 = "Redclear val1";
// // // // // console.log(val1);

// // // // // let val2 = "let variables";
// // // // // console.log(val2);

// // // // // //let can be rewritten
// // // // // val2 = "rewrite let";
// // // // // console.log(val2);

// // // // // let val2 = "declear let again";

// // // // // const val3 = "const variable";
// // // // // console.log(val3);

// // // // // //const cannot be rewritten
// // // // // val3 = "const variable";

// // // // // //const cannot be redcleared
// // // // // const val3 = "redclear const";

// // // // const val4 = {
// // // //   name: "Tomoya",
// // // //   age: 50,
// // // // };

// // // // console.log(val4);
// // // // val4.name = "Ayana";
// // // // console.log(val4);

// // // // const val5 = ["dog", "cat"];
// // // // val5[0] = "bird";
// // // // val4.push;
// // // // console.log(val5);

// // // const name = "Tomoya";
// // // const age = 100;

// // // const message2 = `My name is ${name}`;
// // // console.log(message2);

// // // function func1(str) {
// // //   return str;
// // // }

// // // console.log(func1("This is func1"));

// // // const func2 = (str) => str;
// // // console.log(func2("This is func2"));

// // // const func3 = (num1, num2) => {
// // //   return num1 + num2;
// // // };

// // // console.log(func3(10, 20));

// // // const myProfile = {
// // //   name: "Neko-san",
// // //   age: 28,
// // // };

// // // const message1 = `My name is ${myProfile.name}, I am ${myProfile.age} years old.`;

// // // const { name, age } = myProfile;
// // // const message2 = `My name is ${name}, I am ${age} years old.`;
// // // console.log(message2);

// // const myProfile = ["Neko-san", 20];
// // const [name, age] = myProfile;
// // const message4 = `My name is ${name}, I am ${age} years old.`;
// // console.log(message4);

// const sayHello = (name) => console.log(`Hello! ${name}`);
// sayHello();

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log("...arr3: " + arr3);

// const arr4 = [10, 30];
// const arr5 = [30, 40];

// for (let index = 0; index < nameArray.length; index++) {
//   console.log(nameArray[index]);
// }

// const nameArray2 = nameArray.map((name) => {
//   return name;
// });

// console.log(nameArray2);

// const nameArray = ["Neko", "Tired-Neko", "Tomoya"];

// nameArray.map((name, index) => console.log(`${name}: ${index}`));

// const filter = nameArray.filter((name) => name === "Neko");
// console.log(filter);

// console.log(...nameArray);

// const newNameArray = nameArray.map((name) => {
//   if (name === "Tomoya") {
//     return name;
//   } else {
//     return `${name}-san`;
//   }
// });

// console.log(newNameArray);

// const val1 = 1 < 0 ? "This is True" : "This is false";
// const val2 = 1 > 0 ? "This is True" : "This is false";
// console.log(val1);
// console.log(val2);

// const num = 1300;

// const formattedNumber = console.log(num.toLocaleString());

// const num2 = "1100";
// const formattedNumber2 =
//   typeof num === "number" ? num2.toLocaleString() : "Enter a number";

// console.log(formattedNumber2);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "Exceed 100" : "OK";
// };

// console.log(checkSum(50, 60));

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "Exceed" : "OK";
// };

// console.log(checkSum(50, 40));

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("Either 1 and 2 are true");
// }

// if (flag1 && flag2) {
//   console.log("Both 1 and 2 are true");
// }

// const num2 = null;
// // &&は左側がtrueなら右側を返す
// const fee2 = num2 && "You have set something";
// console.log(fee2);

// var val1 = "var variable";
// console.log(val1);

// val1 = "rewrite var variable";
// var val1 = "redeclear var variable";

// let val2 = "let variables";
// console.log(val2);

// val2 = "let variable";

// const val3 = "const variable";

// const val4 = {
//   name: "JavaScript_Neko_San",
//   age: 28,
// };

// val4.name = "Python_Neko_San";
// console.log(val4);

// const val5 = ["JavaScript_Neko_San", "Docker_Neko_San"];
// val5[0] = "Tired_Neko_San";
// val5.push("Super_Neko_San");
// console.log(val5);

// const fun1 = function (str) {
//   return str;
// };

// console.log(fun1("func1"));

// const func3 = (nun1, num2) => num1 + num2;

// console.log(func3(10, 20));

// const myProfile = {
//   name: "Neko-san",
//   age: 100,
// };

// const { name, age } = myProfile;
// console.log(`My name is ${name}, I am ${age} years old.`);

// const hello = (name = "Neko") => console.log(`Hello, ${name} san!`);
// hello();
// hello("JavaScript-Neko");

// const array1 = [1, 2];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(array1[0], array1[1]);
// sumFunc(...array1);

// const array2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...array3] = array3;

const nameArray = ["Tired_Neko_San", "Fish_Neko_San", "Yandere_Neko_San"];
nameArray.map((name, index) => console.log(index));

const numArray = [1, 2, 3, 4, 5];
