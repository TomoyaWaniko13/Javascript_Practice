const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value.trim();

  //if the inputText is not empty
  if (inputText) {
    document.getElementById("add-text").value = "";

    createIncompleteList(inputText);
  }
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});

const deleteFromIncompleteList = (parent) => {
  document.getElementById("incomplete-list").removeChild(parent);
};

const createIncompleteList = (text) => {
  //create a div list-row
  const listRow = document.createElement("div");
  listRow.className = "list-row";
  //set the inputText to li
  const li = document.createElement("li");
  li.innerText = text;
  //add the li to the div list-row
  listRow.appendChild(li);
  //add the div list-row to the div incomplete-list
  document.getElementById("incomplete-list").appendChild(listRow);

  //create a doneButton
  const doneButton = document.createElement("button");
  doneButton.innerText = "done";

  //
  doneButton.addEventListener("click", () => {
    deleteFromIncompleteList(doneButton.parentNode);

    const addTarget = doneButton.parentNode;
    const doneText = addTarget.firstElementChild.innerText;

    //reset the div addTarget.
    addTarget.textContent = null;

    //we will add done_li to the addTarget(div)
    const done_li = document.createElement("li");
    done_li.innerText = doneText;

    //We will add undoButton to the addTarget(div);
    const undoButton = document.createElement("button");
    undoButton.innerText = "undo";
    undoButton.addEventListener("click", () => {
      console.log("undoButton is working!");
      const deleteTarget = undoButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //undoButton.parentNode.firstElementChild is a li tag
      const completeText = undoButton.parentNode.firstElementChild.innerText;
      createIncompleteList(completeText);
    });

    addTarget.appendChild(done_li);
    addTarget.appendChild(undoButton);

    document.getElementById("complete-list").appendChild(addTarget);
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
};
