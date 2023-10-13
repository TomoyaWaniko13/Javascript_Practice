let button = document.getElementById("enter");
let input = document.getElementById("uerinput");
let ul = document.querySelector("ul");

const inputLength = () => input.value.length;

const addListItem = () => {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
};

const addListItemAfterClick = () => {
  if (inputLength() > 0) {
    addListItem();
  }
};

const addListItemAfterEnterEnter = (event) => {
  if (inputLength() > 0 && event.key === "enter") {
    createListElement();
  }
};

button.addEventListener("click", addListItemAfterClick);

input.addEventListener("keydown", addListItemAfterKeypress);
