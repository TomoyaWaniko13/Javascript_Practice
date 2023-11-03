// // // console.log("Hello");
// // // var val1 = "var variable";
// // // console.log(val1);

// // // //val can be rewritten
// // // val1 = "rewrite val1";
// // // console.log(val1);

// // // //val can be decleared
// // // var val1 = "Redclear val1";
// // // console.log(val1);

// // // let val2 = "let variables";
// // // console.log(val2);

// // // //let can be rewritten
// // // val2 = "rewrite let";
// // // console.log(val2);

// // // let val2 = "declear let again";

// // // const val3 = "const variable";
// // // console.log(val3);

// // // //const cannot be rewritten
// // // val3 = "const variable";

// // // //const cannot be redcleared
// // // const val3 = "redclear const";

// // const val4 = {
// //   name: "Tomoya",
// //   age: 50,
// // };

// // console.log(val4);
// // val4.name = "Ayana";
// // console.log(val4);

// // const val5 = ["dog", "cat"];
// // val5[0] = "bird";
// // val4.push;
// // console.log(val5);

// const name = "Tomoya";
// const age = 100;

// const message2 = `My name is ${name}`;
// console.log(message2);

// function func1(str) {
//   return str;
// }

// console.log(func1("This is func1"));

// const func2 = (str) => str;
// console.log(func2("This is func2"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

// const myProfile = {
//   name: "Neko-san",
//   age: 28,
// };

// const message1 = `My name is ${myProfile.name}, I am ${myProfile.age} years old.`;

// const { name, age } = myProfile;
// const message2 = `My name is ${name}, I am ${age} years old.`;
// console.log(message2);

const myProfile = ["Neko-san", 20];
const [name, age] = myProfile;
const message4 = `My name is ${name}, I am ${age} years old.`;
console.log(message4);
