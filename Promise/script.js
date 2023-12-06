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

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "HI!");
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Neko");
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Neko-san");
})

Promise
    .all([promise2, promise2, promise4])
    .then(values => {
        console.log(values);
    })
;