let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

const inputIsGreaterThanZero = () => input.value.length > 0;

const addListItem = () => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
};

const addListItemAfterClick = (event) => {
  if (inputIsGreaterThanZero) {
    addListItem();
  }
};

const addListItemAfterKeyPress = (event) => {
  if (inputIsGreaterThanZero && event.key === "Enter") {
    addListItem();
  }
};

button.addEventListener("click", addListItemAfterClick);

input.addEventListener("keydown", addListItemAfterKeyPress);
