'use strict';

const taskInput = document.querySelector('#task-input');
const taskItems = document.getElementById('task-items');
const addTask = document.getElementById('submit');
const removeTasks = document.getElementById('remove');

addTask.addEventListener('click', addTaskItem);
taskItems.addEventListener('click', markCompletedTask);
removeTasks.addEventListener('click', clearCompletedTasks);

function addTaskItem(e) {
  e.preventDefault();
  taskInput.value && displayItem(taskInput.value);
  taskInput.value = '';
}

function markCompletedTask(e) {
  e.target.classList.toggle('completed-task');
}

function clearCompletedTasks(e) {
  e.preventDefault();
  const items = Array.from(taskItems.children);

  items.forEach(el => {
    if (el.classList.contains('completed-task')) taskItems.removeChild(el);
  });
}

function displayItem(todo) {
  const li = document.createElement('li');
  li.textContent = todo.toUpperCase();
  taskItems.appendChild(li);
}
