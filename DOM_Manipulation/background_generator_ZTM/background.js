const h3 = document.querySelector("h3");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const body = document.getElementById("gradient");

console.log(body);

function updateBackground() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener("input", updateBackground);

color2.addEventListener("input", updateBackground);
