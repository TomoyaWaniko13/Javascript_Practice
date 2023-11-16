const onClickAdd = () => {
  const inputText = document.getElementById("input-text").value.trim();
  console.log(inputText);

  if (inputText) {
    document.getElementById("input-text").value = "";

    const li = document.createElement("li");

    const div = document.createElement("div");
    div.className = "list-row";

    const p = document.createElement("p");
    p.innerText = inputText;

    const doneButton = document.createElement("button");
    doneButton.innerText = "Done";
    doneButton.addEventListener("click", () => {
      // const moveTarget = doneButton.parentElement.parentElement;
      // const div = doneButton.parentElement;
      // div.removeChild(doneButton);
      // div.removeChild(deleteButton);

      //moveTarget is the li tag
      const moveTarget = doneButton.closest("li");
      doneButton.nextElementSibling.remove();
      doneButton.remove();
      const undoButton = document.createElement("button");
      undoButton.innerText = "undo";
      moveTarget.firstElementChild.appendChild(undoButton);
      document.getElementById("finished-area-ul").appendChild(moveTarget);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      const deleteTarget = deleteButton.closest("li");
      document.getElementById("unfinished-area-ul").removeChild(deleteTarget);
    });

    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(doneButton);
    div.appendChild(deleteButton);
    document.getElementById("unfinished-area-ul").appendChild(li);
  }
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
