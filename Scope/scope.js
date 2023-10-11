var b = "Can I acess this?";

function bb() {
  b = "hello";
}

// Root scope(window)
var fun = 5;
function funFnction() {
  // lose access to var fun = 5;
  var fun = "hellooo";
  console.log(1, fun);
}

function funerFnction() {
  // lose access to var fun = 5;
  var fun = "Byee";
  console.log(2, fun);
}

function funestFunction() {
  fun = "AHHHHHH";
  console.log(3, fun);
}

console.log("window", fun);
funFnction();
funerFnction();
funestFunction();

// condition ? expr1 : expr2;
function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Aceess Denied";

function moveCommand(direction) {
  var whatHppens;
  switch (direction) {
    case "forward":
      whatHappens = "move forward";
      break;
    case "back":
      whatHappens = "move backward";
      break;
    case "right":
      whatHappens = "move right";
      break;
    case "left":
      whatHppens = "move left";
    default:
      whatHppens = "please enter a valid direction";
  }
  return whatHppens;
}
