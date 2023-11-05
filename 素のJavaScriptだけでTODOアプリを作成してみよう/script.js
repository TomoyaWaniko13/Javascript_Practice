const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  console.log(inputText);
  //reset input
  document.getElementById("add-text").value = "";

  //div tag is generated
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  //li tag is generated
  const li = document.createElement("li");
  li.innerText = inputText;

  //li tag is added to div
  div.appendChild(li);
  console.log(div);

  document.getElementById("incomplete-list").appendChild(div);
};

//when we click on the "add-button", onClick() function run runs.
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
