// console.log("First");
//
// setTimeout(() => {
//     console.log("Second: After 1 second");
// }, 1000);
//
// console.log("Third");

console.log("First");

new Promise((resolve) => {
    setTimeout(() => {
        console.log("second: After 1 second");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Third");
});

const promise = new Promise((resolve, reject) => {
    resolve();
}).then(()=>{
    console.log("Resolved");
});

const promise2 = new Promise((resolve, reject) => {
    reject();
})
    .then(() => {
        console.log("resolved");
    })
    .catch(() => {
        console.log("reject");
    });

const promise4 = new Promise((resolve, reject) => {
    resolve("input value");
})
    .then((val) => {
        console.log(`then1: ${val}`);
        return val;
    })
    .catch((val) => {
        console.log(`catch ${val}`)
        return val;
    })
    .then((val) => {
        console.log(`then2: ${val}`);
    });
