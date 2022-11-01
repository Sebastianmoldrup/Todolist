const input = document.getElementById(`input`);
const output = document.getElementById(`output`);
const addbtn = document.getElementById(`addbtn`);

// Event listener for button to be clicked to add a Todo
addbtn.addEventListener(`click`, addTodo);

// Function for adding the Todo item
function addTodo(e) {

    if(input.value === "") {
        window.alert("Write something before adding!")
        return;
    }

    // If the event doesnt get handled correctly it wont execute by default
    //e.preventDefault();

    // Adding DOM elements for the Todo Items
    const todoDiv = document.createElement(`div`);
    const todoItem = document.createElement(`span`);
    const deleteBtn = document.createElement(`button`);

    // Adding text to the todoItem and deleteBtn
    todoItem.innerText = input.value;
    deleteBtn.innerText = "Remove";

    // Adding tailwindcss with class to the DOM elements
    todoDiv.classList.add("flex", "flex-row", "gap-5", "justify-between", "items-center", "py-1");
    todoItem.classList.add("text-white", "p-1");
    deleteBtn.classList.add("text-white", "border-2", "border-red-600", "rounded-xl", "py-2", "px-4", "hover:border-white", "hover:text-red-400");

    // Appending the DOM elements
    todoDiv.appendChild(todoItem);
    todoDiv.appendChild(deleteBtn);
    output.appendChild(todoDiv);

    // Resetting the input when adding a todo item
    input.value = "";

    // Adding a event listener for the deleteBtn to run the deleteTodo function
    deleteBtn.addEventListener('click', deleteTodo);
}



// Function for deleting a Todo Item
function deleteTodo(e) {

    // Making a variable to store the event target
    const item = e.target;

    // Making a variable to store the event target parent element
    const todo = item.parentElement;

    // Removing the entire Todo by deleting the parent element
    todo.remove();
}