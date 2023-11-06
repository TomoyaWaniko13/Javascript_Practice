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

      //thigns we need to add to the <div id="complete-list">
      const addTarget = doneButton.parentNode;
      const doneText = addTarget.firstElementChild.innerText;
      console.log(`doneText: ${doneText}`);

      //reset addTarget (div)
      addTarget.textContent = null;
      console.log(addTarget);

      const li = document.createElement("li");
      li.innerText = doneText;

     //create a undoButton
      const undoButton = document.createElement("button");
      backButton.innerText = 
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
