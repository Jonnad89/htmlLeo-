const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById('priority');
const taskList = document.getElementById('taskList');

// Cargamos del localStorage al inicio
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const text = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (text === '') return;

    const newTask = {
        text, 
        priority,
        completed : false
    };

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasks();
    taskForm.reset();
});

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add(task.priority);
        if (task.completed) li.classList.add('completada');
        li.innerHTML = `
        <span>${task.text}</span>
        <ddiv>
        <button onclick="toggleComplete(${index})">✅</button>
        <button onclick="deleteTask(${index})">🧺</button>
        </ddiv>
        `;
        taskList.appendChild(li)
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('taks', JSON.stringify(tasks));
    renderTasks();
}