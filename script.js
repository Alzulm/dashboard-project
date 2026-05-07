console.log("Dashboard connection is OK!");

const addButton = document.querySelector('#add-btn');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

addButton.addEventListener('click', () => {

    const objective = todoInput.value;
    console.log(objective);
    if (objective !== "") {
        const newLi = document.createElement('li');
        newLi.textContent = objective;
        todoList.appendChild(newLi);
        todoInput.value = "";
    }

});