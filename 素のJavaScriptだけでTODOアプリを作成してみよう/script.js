const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  //reset input
  document.getElementById("add-text").value = "";

  //div tag is generated
  const div = document.createElement("div");
  div.className = "list-row";

  //li tag is generated
  const li = document.createElement("li");
  li.innerText = inputText;
};

//when we click on the "add-button", onClick() function will run.
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
