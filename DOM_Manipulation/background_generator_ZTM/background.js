var rgbDisplay = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// background: linear-gradient(to right, red, yellow);
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  rgbDisplay.textContent = body.style.background;

  // Set text color based on brightness
  const mixedColor = getMixedColor(
    hexToRgb(color1.value),
    hexToRgb(color2.value)
  );

  if (getBrightness(mixedColor) < 128) {
    document.body.style.color = "white";
  } else {
    document.body.style.color = "black";
  }
}

// This function calculates the perceived brightness of a color.
// Formula: brightness = (R * 299 + G * 587 + B * 114) / 1000
function getBrightness(rgb) {
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

// This function converts a hex color value (like #FF5733) to its RGB equivalent.
function hexToRgb(hex) {
  // Remove the hash at the start if it's there
  //    Regular Expression
  //   /^#/
  //   / and /: These delimiters mark the start and end of a regular expression.
  //   ^: This asserts the position at the start of a line. It's called the "start of line anchor."
  //   #: This matches the hash (#) character literally.
  //   Examples:
  //   For #FF5733, after the replace(), you get: FF5733
  //   For FF5733, after the replace(), you still get: FF5733 (because there's no # to replace)
  hex = hex.replace(/^#/, "");

  // parseInt(hex, 16) interprets the hex string as
  //  a base-16 (hexadecimal) number and converts it to a decimal value.
  var bigint = parseInt(hex, 16);

  //   // When you have a color like #FF5733, each pair of characters represent a color component:

  // FF is for red
  // 57 is for green
  // 33 is for blue
  // These are in hexadecimal format.

  // When you convert the whole thing (FF5733)
  // to a single big number (let's call it bigint),
  // it contains all three color components.

  // Now, we want to separate them back out.

  // 1. Getting Red (r):
  // bigint >> 16: This is like pushing all numbers
  //  two steps to the right. After this, the red part
  // (FF) comes to the position of the blue part.

  // & 255: This step helps to only grab the last two
  // characters (now the red part) and ignore everything else.

  // 2. Getting Green (g):
  // bigint >> 8: This is like pushing all numbers one
  // step to the right. Now, the green part (57) comes to the position of the blue part.

  // & 255: This step helps to only grab the last two
  //  characters (now the green part) and ignore everything else.

  // 3. Getting Blue (b):
  // bigint & 255: For blue, we don't need to push anything.
  // We just grab the last two characters, which is the blue part (33).
  // In short, this code separates the red, green, and blue parts
  //  from the big combined number.

  var r = (bigint >> 16) & 255; //red
  var g = (bigint >> 8) & 255; //green
  var b = bigint & 255; //blue

  return { r: r, g: g, b: b };
}

// This function calculates the midpoint color between color1 and color2.
function getMixedColor(color1, color2) {
  return {
    r: (color1.r + color2.r) / 2,
    g: (color1.g + color2.g) / 2,
    b: (color1.b + color2.b) / 2,
  };
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
