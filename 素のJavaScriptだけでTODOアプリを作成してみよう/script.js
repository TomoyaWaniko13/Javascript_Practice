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
    console.log("Done button is working");
    document.getElementById("complete-list").removeChild();
  });

  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    console.log(deleteTarget);
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
