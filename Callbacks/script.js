const printKen = () => {
  console.log("Ken the Ninja");
};

const printMaster = () => {
  console.log("Master wooly");
};

const call = (callback) => {
  console.log("Calling the callback funciton");
  callback();
};

call(printMaster);
