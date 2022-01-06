'use strict';

const taskInput = document.querySelector('#taskInput');
const taskItems = document.getElementById('taskItems');
const addTask = document.getElementById('submit');
const removeTasks = document.getElementById('remove');
addTask.addEventListener('click', addTaskItem);
taskList.addEventListener('click', completedTask);
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

function completedTask(e) {
  e.preventDefault();
  if (e.target.classList.contains('completed-task')) {
    e.target.classList.remove('completed-task');
  } else {
    e.target.classList.add('completed-task');
  }
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
