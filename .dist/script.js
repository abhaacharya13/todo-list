let taskList = [];

// Load tasks from localStorage
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        taskList = savedTasks;
        renderTasks();
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(taskList));