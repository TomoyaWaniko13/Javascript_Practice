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
      alert("This button is working!");
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      alert("This button is working!");
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
