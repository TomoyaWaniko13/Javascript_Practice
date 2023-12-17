// console.log("First");
//
// setTimeout(() => {
//     console.log("Second: After 1 second");
// }, 1000);
//
// console.log("Third");

// console.log("First");
//
// new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("second: After 1 second");
//         resolve();
//     }, 1000);
// }).then(() => {
//     console.log("Third");
// });
//
// const promise = new Promise((resolve, reject) => {
//     resolve();
// }).then(()=>{
//     console.log("Resolved");
// });
//
// const promise2 = new Promise((resolve, reject) => {
//     reject();
// })
//     .then(() => {
//         console.log("resolved");
//     })
//     .catch(() => {
//         console.log("reject");
//     });
//
// const promise4 = new Promise((resolve, reject) => {
//     resolve("input value");
// })
//     .then((val) => {
//         console.log(`then1: ${val}`);
//         return val;
//     })
//     .catch((val) => {
//         console.log(`catch ${val}`)
//         return val;
//     })
//     .then((val) => {
//         console.log(`then2: ${val}`);
//     });
//

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//     }, 1000);
// }).then(() => {
//     console.log("promise 1 has finished.");
// })
//
// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//     }, 3000);
// }).then(() => {
//     console.log("Promise2 has finished.")
// });
//
// Promise.all([promise1, promise2]).then(() => {
//     console.log("All done!");
// });

// const promise3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//     }, 1000);
// }).then(() => {
//     console.log("promise 3 has done.");
// });
//
// const promise4 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//     }, 2000);
// }).then(() => {
//     console.log("promise 2 has done.");
// });
//
// Promise.race([promise3, promise4]).then(() => {
//     console.log("Either one has finished.")
// });

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//     }, 1000)
// }).then(() => {
//     console.log("promise 1 has finished!")
// })
//
// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//     }, 3000);
// }).then(()=>{
//     console.log("Promise 2 has finished!");
// })
//
// Promise.all([promise1,promise2]).then(()=>{
//     console.log("All have finished!");
// })
//
// const promise3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//     }, 1000);
// }).then(() => {
//     console.log("Promise 3 has finished!");
// });
//
// const promise4 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//     }, 3000);
// }).then(() => {
//     console.log("Promise 4 has finished!");
// });
//
// Promise.race([promise3,promise4]).then(()=>{
//     console.log("Either 3 or 4 has finished!");
// })

// const alwaysLate = (ms) => {
//     new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     }).then(() => {
//         console.log(`Sorry, I kept you waiting for ${ms} ms...`);
//     });
// }
//
// const alwaysLate2 = async (ms) => {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });
//     console.log(`Sorry, I kept you waiting for ${ms} ms`);
// };

// const asyncFunc = async () => {
//     return 1;
// };
//

// const ms = 2000;
//
// console.log("First");
//
// setTimeout(() => {
//     console.log(`Second: after ${ms} ms.`);
// }, ms);
//
//
// console.log("Third");

// console.log("First");
//
// new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("second (After 3 seconds...)");
//         resolve();
//     }, 3000);
// }).then(() => {
//     console.log("Third");
// });
//

// const promise1 = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve();
//     }, 1000);
// }).then(()=>{
//     console.log("promise 1 has finished!");
// })
//
// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//     }, 3000);
// }).then(() => {
//     console.log("promise 2 has finished!")
// });
//
// Promise.all([promise1, promise2]).then(() => {
//     console.log("All have done!")
// });

// const promise1 = new Promise((resolve, reject) => {
//     reject();
// }).then(() => {
//     console.log("Resolved");
// }).catch(() => {
//     console.log("You are REJECTED!!!!");
// });

// const promise1 = new Promise((resolve, reject) => {
//     reject();
// }).then(()=>{
//     console.log("resolved!!!")
// }).catch(()=>{
//     console.log("rejected...")
// });

// const promise1 = new Promise((resolve, reject) => {
//     reject("passed val");
// })
//     .then((val) => {
//         console.log(`then1 ${val} `);
//         return val;
//     })
//     .catch((val) => {
//         console.log(`catch ${val}`);
//         return val;
//     })
//     .then((val) => {
//         console.log(`then2 ${val}`);
//         return val;
//     });

// const promise1 = new Promise((resolve, reject) => {
//     reject("passed value");
// })
//     .then((val) => {
//         console.log(`then: ${val}`);
//         return val;
//     })
//     .catch((val) => {
//         console.log(`catch: ${val}`);
//         return val;
//     })
//     .then((val)=>{
//         console.log(`then ${val}`);
//     });
//
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 1000);
// })
//     .then(() => {
//         console.log("promise 1 has finished!");
//     });
//
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 2000);
// })
//     .then(() => {
//         console.log("promise 2 has finished!")
//     });
//
// Promise.all([promise1, promise2]).then(() => {
//     console.log(".all: All promises have finished!");
// });
//
// Promise.race([promise1, promise2]).then(() => {
//     console.log(".race: One of these promises have finished!")
// });

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 2000);
// })
//     .then(() => {
//         console.log("1 has finished");
//     });
//
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 3000);
// })
//     .then(() => {
//         console.log("2 has finished");
//     });
//
// Promise.all(([promise1, promise2])).then(() => {
//     console.log("1 and 2 have finished.")
// });
//
//
// const late = (ms) => {
//     new Promise
// }

// const example = () => {
//     console.log("example gets run");
// }

// const late = (ms) => {
//     new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     }).then(() => {
//         console.log(`Sorry, I kept you waiting for ${ms} ms.`)
//     });
// }
//

// const late = async (ms) => {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     })
//     console.log("log log");
// }

// const asyncFunc = async () =>{
//     let x, y;
//
//     x = new Promise(resolve =>{
//         setTimeout(() => {
//             resolve(1);
//         }, 1000);
//     })
//
//     y = new Promise
// }

// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("Stuff worked");
//     }
//     reject("Error");
// })
//
// promise
//     .then(result => result + "!")
//     .then(result2 => {
//         throw Error;
//         console.log(result2);
//     })
//     .catch(() => console.log("in .catch()"));

// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("Stuff worked");
//     }
//     reject("Error");
// })
//
// const promise2 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 1000, "resolve after 1000ms");
// })
//
// const promise3 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 2000, "resolve after 2000ms");
// })
//
// const promise4 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,3000,"resolve after 3000ms")
// })
//
// Promise.all([promise2, promise3, promise4]).then(value => console.log(value));


// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums"
// ]
//
// Promise.all(urls.map(url => {
//     return fetch(url).then(resp => resp.json());
// })).then(results => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
// })


// const promise = new Promise((resolve, reject )=> {
//     if (true) {
//         resolve("Stuff worked!");
//     } else {
//         reject("Error!");
//     }
// });
//
// promise
//     .then(result => {
//         throw Error
//         result + "!"
//     })
//     .then(result2 => {
//         console.log(result2);
//     })
//     .catch(console.log);

// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("Stuff worked");
//     } else {
//         reject("Error");
//     }
// })
//
// promise
//     .then((result) => result + "!")
//     .then((result) => {
//     console.log(result);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "HI!");
// })
//
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "Neko");
// })
//
// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, "Neko-san");
// })
//
// Promise
//     .all([promise2, promise3, promise4])
//     .then(values => {
//         console.log(values);
//     })

// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums"
// ]
//
// Promise.all(urls.map(url => {
//     return fetch(url).then(resp => resp.json());
// }))
//     .then(results => {
//         console.log(results[0]);
//         console.log(results[1]);
//         console.log(results[2]);
//     })
//     .catch(() => console.log("error"));
//

// const animals = {
//     tiger:23,
//     lion:5,
//     monkey:2
// }
//
// const {tiger, ...rest} = animals;
//
// console.log(tiger)

// async function fetchUsers() {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await resp.json();
//     console.log(data);
// }
//

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(resp => resp.json())
//     .then(console.log);


// const getData = async function () {
//     const [users, posts] =
//         await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())));
//     console.log(users[0]);
// };
//
// getData();

// Promise.all(urls.map(url =>
//     fetch(url).then(resp => resp.json())
// )).then(array => {
//     console.log(array[0]);
//     console.log(array[1]);
// })

// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts"
// ]
//
// const getData = async function () {
//     const [users, posts] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())));
//     console.log(users);
// };
//
// getData();

// const animals = {
//     tiger: 23,
//     lion: 5,
//     monkey: 2,
//     bird: 4
// }
//
// function objectSpread(p1, p2, p3) {
//     console.log(p1);
//     console.log(p2);
//     console.log(p3);
// }
//
// const {tiger, lion, ...rest} = animals;
//
// objectSpread(tiger, lion, rest);


// Promise.all(urls.map(url => {
//     return fetch(url).then(people => people.json());
// }))
//     .then(array =>{
//         console.log("1", array[0]);
//         console.log("2", array[1]);
//     })

// Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
//     .then(array => {
//         console.log(array[0]);
//     });

// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts"
// ]
//
// Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
//     .then(array => {
//         console.log(array[0]);
//         console.log(array[1]);
//     });

// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts"
// ]
//
// const getData2 = async function () {
//     const arrayOfPromises = urls.map(url => fetch(url));
//     for await (let request of arrayOfPromises) {
//         const data = await request.json();
//         console.log(data);
//     }
// };
//
// getData2();

// const loopThroughUrls = url => {
//     for (url of urls) {
//         console.log(url);
//     }
// }

// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/"
// ]

// async function resolveSample() {
//     return "resolve!";
// }
//
// resolveSample().then(value => console.log(value));

// async function rejectSample() {
//     throw new Error("Reject...");
// }
//
// rejectSample().catch(err => {
//     console.log(err);
// })

// function sampleResolve(value) {
//     return new Promise(resolve => setTimeout(resolve, 1000, value * 2));
// }
//
// async function sample() {
//     const result = await sampleResolve(5);
//     return result + 5;
// }
//
// sample().then(result => {
//     console.log(result);
// });

// async function resolveSample() {
//     return "resolve!";
// }
//
// resolveSample().then(result => console.log(result));
//
// async function rejectSample() {
//     throw new Error("reject");
// }
//
// rejectSample()
//     .then(result => console.log(`Resolve: ${result}`))
//     .catch(error => console.log(`Reject: ${error}`));

// async function resolveSample() {
//     return "Resolve!!";
// }
//
// resolveSample().then(console.log);

// function sampleResolve(value) {
//     return new Promise(resolve => {
//         setTimeout(resolve, 3000, value * 2);
//     })
// }
//
// async function sample() {
//     const result = await sampleResolve(10);
//     return result + 5;
// }
//
// sample().then(result =>{
//     console.log(result);
// });

//
// function sample() {
//     let result = 0;
//
//     return sampleResolve(10)
//         .then((value) => {
//             result += value + 10;
//             return result;
//         })
// }
//
// sample().then(console.log);

// function multiplyByTwo(value) {
//     return new Promise(resolve => {
//         setTimeout(resolve, 2000, value * 2);
//     });
// }

// async function sample() {
//     let value = 0;
//
//     for (let i = 0; i < 4; i++) {
//         const result = await multiplyByTwo(10);
//
//     }
// }
//
// sample();

// function sampleResolve(value) {
//     return new Promise(resolve => {
//         setTimeout(resolve, 2000, value * 3);
//     })
// }
//
// function multiplyByTwo(value) {
//     return new Promise(resolve => {
//         setTimeout(resolve, 2000, value * 2);
//     })
// }
//
// function multiplyByThree(value) {
//     return new Promise(resolve => {
//         setTimeout(resolve, 3000, value * 3);
//     })
// }
//
// async function sample() {
//     const [a, b]
//         = await Promise.all([multiplyByTwo(2), multiplyByThree(3)]);
//     const c = await multiplyByThree(b);
// }


// function sample() {
//     const promiseA = multiplyByTwo(2);
//     const promiseB = multiplyByThree(3);
//     const promiseC = promiseB.then(value => {
//         return multiplyByThree(value);
//     });
//
//     return Promise.all([promiseA, promiseB, promiseC])
//         .then(([a, b, c]) => {
//             return [a, b, c];
//         });
// }
//
// sample().then(([a, b, c]) => {
//     console.log(a, b, c);
// });

const urls = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/users"
]

const getData = async function () {
    try {
        const[users,posts]
            = await Promise.all(urls.map(url));
    } catch (err){
        console.log(err);
    }
};

//
// Promise.all(urls.map(url => {
//     return fetch(url).then(response => response.json());
// })).then(array => {
//     console.log("1", array[0]);
//     console.log("2", array[1]);
// })
//     .finally(() => {
//         console.log("\nfinally!!!")
//     })
