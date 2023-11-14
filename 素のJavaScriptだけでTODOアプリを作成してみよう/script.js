const onClickAdd = () => {
  const inputText = document.getElementById("input-text").value.trim();

  if (inputText) {
    document.getElementById("input-text").value = "";

    const div = document.createElement("div");
    console.log(div);
    div.className = "list-row";

    const li = document.createElement("li");
    console.log(li);

    const p = document.createElement("p");
    p.innerText = inputText;
    console.log(p);
  }
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
