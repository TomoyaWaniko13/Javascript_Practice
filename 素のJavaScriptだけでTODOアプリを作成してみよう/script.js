const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  console.log(`This is an input text: ${inputText}`);

  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  const li = document.createElement("li");
  li.innerText = inputText;

  const completeButton = document.createElement("button");

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);

  completeButton.innerText = "done";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    const undoButton = document.createElement("button");
    undoButton.innerText = "undo";

    addTarget.appendChild(li);
    addTarget.appendChild(undoButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});

const deleteFromIncompleteList = (delteTarget) => {
  document.getElementById("incomplete-list").removeChild(delteTarget);
  console.log("delteFromIncompleteList() function has run!");
};
