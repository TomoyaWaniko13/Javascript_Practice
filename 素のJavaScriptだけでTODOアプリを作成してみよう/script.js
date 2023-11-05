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

  //button tag(complete) is generated.
  const completeButton = document.createElement("button");
  completeButton.innerText = "done";

  //delete the parent tag(div) of the button that was clicked on
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode;

    //get a text about TODO
    const text = addTarget.firstElementChild.innerText;

    deleteFromIncompleteList(completeButton.parentNode);
  });

  //button tag(imcomplete) is generated.
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    //delete the parent tag(div) of the button that was clicked on
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //li tag is added to div
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//when we click on the "add-button", onClick() function runs.
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
