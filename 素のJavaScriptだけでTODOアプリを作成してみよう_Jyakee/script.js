const onClickAdd = () => {
    const inputText = document.getElementById("input-text").value.trim();

    if (inputText) {
        document.getElementById("input-text").value = "";
        createUnfinishedTodo(inputText);
    }
};

const createUnfinishedTodo = (todo) => {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.className = "list-row"

    const p = document.createElement("p");
    p.innerText = todo;

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

        //create a undo button and set it under the div tag
        const undoButton = document.createElement("button");
        undoButton.innerText = "undo";
        undoButton.addEventListener("click", () => {
            const todoText = undoButton.previousElementSibling.innerText;
            createUnfinishedTodo(todoText);
            undoButton.closest("li").remove();
        });
        //moveTarget is the li tag
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
};

document.getElementById("add-button").addEventListener("click", () => {
    onClickAdd();
});
