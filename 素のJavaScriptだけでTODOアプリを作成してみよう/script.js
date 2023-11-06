const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;

  //if the text is not empty
  if (inputText !== null) {
    document.getElementById("add-text").value = "";

    const div = document.createElement("div");
    div.className = "list-row";

    const li = document.createElement("li");
    li.innerText = inputText;

    const completeButton = document.createElement("button");
    completeButton.innerText = "done";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";

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
