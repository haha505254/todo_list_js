let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click",e=>{
    e.preventDefault();
    console.log(e.target.parentElement);
    let form = e.target.parentElement;
    let todotext = form.children[0].value;
    let todomonth = form.children[1].value;
    let tododate = form.children[2].value;
    console.log(todotext);
    console.log(todomonth);
    console.log(tododate);
    let todo = document.createElement("div");
    todo.classList.add("todo");
    let text = document.createElement("p");
    text.innerText = todotext;
    text.classList.add("todo-text");
    let time = document.createElement("p");
    time.classList.add("todo-time");
    time.innerText = todomonth + "/" + tododate;
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

    todo.appendChild(completeButton);
    todo.appendChild(trashButton);
    
    todo.style.animation = "scaleUp 0.3s forwards";

    section.appendChild(todo);


})