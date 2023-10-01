const printKen = () => {
  console.log("Ken the Ninja");
};

const call = (callback) => {
  console.log("Calling the callback funciton.");
  callback();
};

call(printKen);

call(() => {
  console.log("Master Wooly");
});
