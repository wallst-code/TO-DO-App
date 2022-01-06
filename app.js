'use strict';

const taskInput = document.querySelector('#taskInput');
const taskItems = document.getElementById('taskItems');
const addTask = document.getElementById('submit');
const removeTasks = document.getElementById('remove');

addTask.addEventListener('click', addTaskItem);
taskItems.addEventListener('click', markCompletedTask);
removeTasks.addEventListener('click', clearCompletedTasks);

function addTaskItem(e) {
  e.preventDefault();

  if (
    taskInput.value === '' ||
    taskInput.value === null ||
    taskInput.value.length === 0
  ) {
    taskInput.value = '';
  } else {
    const li = document.createElement('li');
    li.textContent = taskInput.value.toUpperCase();
    taskItems.appendChild(li);
  }

  taskInput.value = '';
}

function markCompletedTask(e) {
  e.target.classList.toggle('completed-task');
}

function clearCompletedTasks(e) {
  e.preventDefault();
  const items = Array.from(taskItems.children);

  items.forEach(el => {
    if (el.classList.contains('completed-task')) {
      taskItems.removeChild(el);
    }
  });
}
