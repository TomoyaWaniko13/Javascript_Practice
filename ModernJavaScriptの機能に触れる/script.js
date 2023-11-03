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
