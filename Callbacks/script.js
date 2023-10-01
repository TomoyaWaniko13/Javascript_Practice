const call = (callback) => {
  callback("Mom", 0);
};

call((name, age) => {
  console.log(`${name} is ${age} years old.`);
});
