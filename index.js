document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTodoItem(taskText);
            todoInput.value = ''; 
        }
    });

    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });

    function addTodoItem(taskText, priority = 'low') {
        const listItem = document.createElement('li');
        listItem.classList.add(`${priority}-priority`); 

        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.textContent = taskText;

        const prioritySelect = document.createElement('select');
        prioritySelect.classList.add('priority-select');
        prioritySelect.innerHTML = `
            <option value="low" ${priority === 'low' ? 'selected' : ''}>Low</option>
            <option value="medium" ${priority === 'medium' ? 'selected' : ''}>Medium</option>
            <option value="high" ${priority === 'high' ? 'selected' : ''}>High</option>
        `;
        prioritySelect.addEventListener('change', (event) => {
            const newPriority = event.target.value;
            listItem.classList.remove('low-priority', 'medium-priority', 'high-priority');
            listItem.classList.add(`${newPriority}-priority`);
        });
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            listItem.remove(); 
        });
        listItem.appendChild(taskSpan);
        listItem.appendChild(prioritySelect);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    }
});