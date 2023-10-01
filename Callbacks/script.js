const printKen = () => {
  console.log("Ken the Ninja");
};

//callback is a parameter becaues it does not have()
const call = (callback) => {
  console.log("Calling the callback funciton");
  //callback() is a funciton because it has ()
  callback();
};

call(printKen);

//JavaScript Study VII
