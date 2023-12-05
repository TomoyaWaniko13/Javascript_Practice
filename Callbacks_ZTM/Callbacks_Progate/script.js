// const call = (callback) => {
//   callback("Mom", 0);
// };
//
// call((name, age) => {
//   console.log(`${name} is ${age} years`);
// });

const printTomoya = () => {
    console.log("Tomoya Neko san");
}

const printNeko = () => {
    console.log("super Neko san")
}

const call = (callback) => {
    console.log("Calling the callback function");
    callback();
}

call(printNeko);