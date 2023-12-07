document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (!taskInput.value.trim()) {
    alert("Напиши текст!");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.className = "task";
  taskItem.innerHTML = `
  <input type="checkbox" onchange="updateTaskStatus(this)">
  <span>${taskInput.value}</span>
  <button onclick="removeTask(this) ">Remove</button >`;

  taskList.appendChild(taskItem);
  saveTasks();
  taskInput.value = "";
}

function updateTaskStatus(checkbox) { saveTasks(); }

function removeTask(button) {
  const taskItem = button.parentNode;
  const taskList = document.getElementById("taskList");
  taskList.removeChild(taskItem);
  saveTasks();
}

function saveTasks() {
  const taskList = document.getElementById("taskList");
  const tasks = Array.from(taskList.children).map(taskItem => ({
    text: taskItem.querySelector("span").innerText,
    status: taskItem.querySelector("input").checked
  }));

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const taskList = document.getElementById("taskList");
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);
    tasks.forEach(task => {
      const taskItem = document.createElement("li");
      taskItem.className = "task";
      taskItem.innerHTML = `
      <input type="checkbox" onchange="updateTaskStatus(this)" ${task.status ? "checked" : ""}>
      <span>${task.text}</span>
      <button onclick="removeTask(this)">Remove</button >`;
      taskList.appendChild(taskItem);
    });
  }
}