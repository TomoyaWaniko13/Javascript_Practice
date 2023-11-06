const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  alert(inputText);

  const div = document.createElement("div");
  console.log(div);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
