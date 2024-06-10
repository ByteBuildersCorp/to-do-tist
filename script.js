function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (title === '' || description === '') {
        alert('Please fill out both fields');
        return;
    }

    const now = new Date();
    const timestamp = now.toLocaleString(); // Format the date and time as a string

    const task = {
        title,
        description,
        timestamp, // Include the timestamp in the task object
        completed: false
    };

    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';

    renderTasks();
}

function renderTasks() {
    const pendingTasks = document.getElementById('pending-tasks');
    const completedTasks = document.getElementById('completed-tasks');
    pendingTasks.innerHTML = '';
    completedTasks.innerHTML = '';

    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
            <strong>${task.title}</strong> - ${task.description}
            <br><small>${task.timestamp}</small>
            <br>
            <button onclick="deleteTask(${index})">Delete</button>
            <button onclick="toggleTask(${index})">${task.completed ? 'Mark as Pending' : 'Mark as Complete'}</button>
        `;

        if (task.completed) {
            taskElement.classList.add('completed');
            completedTasks.appendChild(taskElement);
        } else {
            pendingTasks.appendChild(taskElement);
        }
    });
}

function deleteTask(index) {
    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function toggleTask(index) {
    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Initial render
renderTasks();