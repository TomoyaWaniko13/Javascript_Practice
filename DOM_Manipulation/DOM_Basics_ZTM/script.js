let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = docuemnt.querySelector("ul");

const inputLength = () => input.ariaValueMax.length;

const createListElement = () => {
  let li = document.createElement;
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
};

const addListAfterClick = () => {
  if (inputLength() > 0) {
    createListElement;
  }
};

const addListAfterKeypress = (event) {
    if(inputLength() > 0 && event.key === "Enter"){
        createListElement();
    }
}


// function inputLength() {
//   return input.value.length;
// }

// button.addEventListener("click", () => {
//   if (input.value.length > 0) {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }
// });

// input.addEventListener("keydown", (event) => {
//   if (input.value.length > 0 && event.key === "Enter") {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }
// });
