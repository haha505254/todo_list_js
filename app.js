let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click",e=>{
    e.preventDefault();
    console.log(e.target.parentElement);
    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDate = form.children[2].value;
    if (todoText === ""){
        alert("Please Enter some Text");
        return;
    }

    let todo = document.createElement("div");
    todo.classList.add("todo");
    let text = document.createElement("p");
    text.innerText = todoText;
    text.classList.add("todo-text");
    let time = document.createElement("p");
    time.classList.add("todo-time");
    time.innerText = todoMonth + "/" + todoDate;
    todo.appendChild(text);
    todo.appendChild(time);
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completeButton.addEventListener("click",e=>{
        let todoItem = e.target.parentElement;
        todoItem.classList.toggle("done");
    })

    let trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.addEventListener("click",e=>{
        let trashItem = e.target.parentElement;
        trashItem.addEventListener("animationend", () => {
            trashItem.remove();
          });

        trashItem.style.animation = "scaleDown 0.3s forwards";

    })

    todo.appendChild(completeButton);
    todo.appendChild(trashButton);
    
    todo.style.animation = "scaleUp 0.3s forwards";
    form.children[0].value = "";
    section.appendChild(todo);

})