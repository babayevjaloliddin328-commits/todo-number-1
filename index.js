const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elDelete = document.querySelector(".delete");
const elList = document.querySelector(".list");
const list  = document.querySelector(".list");
const text = document.querySelector(".todo-text");
const add = document.querySelector(".add");

add.addEventListener("click", (addEvent)=> {
    addEvent.preventDefault();
    const value = elInput.value;
    text.textContent = `${value}`;    
});