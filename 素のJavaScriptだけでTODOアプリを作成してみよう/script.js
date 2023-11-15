const onClickAdd = () => {
  const inputText = document.getElementById("input-text").value.trim();

  if (inputText) {
    document.getElementById("input-text").value = "";

    const div = document.createElement("div");
    div.className = "list-row";

    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = inputText;

    li.appendChild(div);
    div.appendChild(p);

    console.log(li);
    document.getElementById("unfinished-area-ul").appendChild(li);
  }
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
