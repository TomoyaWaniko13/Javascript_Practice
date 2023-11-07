const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;

  //if the
  if (inputText) {
    document.getElementById("add-text").value = "";

    const listRow = document.createElement("div");
    listRow.className = "list-row";

    const li = document.createElement("li");
    li.innerText = inputText;

    listRow.appendChild(li);
    document.getElementById("incomplete-list").appendChild(listRow);

    const doneButton = document.createElement("button");
    doneButton.innerText = "done";

    doneButton.addEventListener("click", () => {
      deleteFromIncompleteList(doneButton.parentNode);

      const addTarget = doneButton.parentNode;
      const doneText = addTarget.firstElementChild.innerText;

      //reset the div addTarget.
      addTarget.textContent = null;
      const done_li = document.createElement("li");
      done_li.innerText = doneText;

      const undoButton = document.createElement("button");
      undoButton.innerText = "undo";

      addTarget.appendChild(done_li);
      addTarget.appendChild(undoButton);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", () => {
      deleteFromIncompleteList(deleteButton.parentNode);
    });

    listRow.appendChild(li);
    listRow.appendChild(doneButton);
    listRow.appendChild(deleteButton);

    document.getElementById("incomplete-list").appendChild(listRow);
  }
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});

const deleteFromIncompleteList = (parent) => {
  document.getElementById("incomplete-list").removeChild(parent);
};
