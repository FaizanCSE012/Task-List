document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                ${taskText} <button class="delete-btn">Delete</button>
            `;

            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });
});
