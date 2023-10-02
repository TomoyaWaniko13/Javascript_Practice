// Normal functions
//<STEP1>
const introduceNormal = (name) => {
  console.log(name);
};

introduceNormal("Tomoya Waniko");

//Callback functions
const introduceCallback = (callback) => {
  callback("Tomoay Waniko");
};

introduceCallback((name) => {
  console.log(name);
});

///====================================//

//Declaring the function beforehand
//<SETP1> define a function
const printKen = () => {
  console.log("Ken the Ninja");
};

//<STEP2> recives a functinon and call the function(same)
const call = (callback) => {
  callback();
};

call(printKen);
// ===================================//

//Declaring a function directly in the argument
//<STEP2> recives a functinon and call the function(same)
const call2 = (callback) => {
  callback();
};

//<STEP1 and 3>define a function when the function call2 is called
call2(() => {
  console.log("Ken the Ninja");
});
