const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value.trim();

  //if the text is not empty
  if (inputText) {
    document.getElementById("add-text").value = "";

    const div = document.createElement("div");
    div.className = "list-row";

    const li = document.createElement("li");
    li.innerText = inputText;

    const completeButton = document.createElement("button");
    completeButton.innerText = "done";

    completeButton.addEventListener("click", () => {
      deelteFromIncompleteList(completeButton.parentNode);

      //create a div tag
      const addTarget = completeButton.parentNode;
      //get a text from li tag
      const text = addTarget.firstElementChild.innerText;
      //reset under the div
      addTarget.textContent = null;

      //create a li tag
      const li = document.createElement("li");
      li.innerText = text;

      const undoButton = document.createElement("button");
      undoButton.innerText = "undo";

      addTarget.appendChild(li);
      addTarget.appendChild(undoButton);

      document.getElementById("complete-list").appendChild(addTarget);
    });

    const deleteButton = document.createElement("button");

    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", () => {
      deelteFromIncompleteList(deleteButton.parentNode);
    });

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //generate li tag
    document.getElementById("incomplete-list").appendChild(div);
  }
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});

const deelteFromIncompleteList = (parent) => {
  document.getElementById("incomplete-list").removeChild(parent);
};
