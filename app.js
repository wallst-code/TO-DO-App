(function (app) {
  "use strict";
  //   const pageItems = {};

  app.taskListStartup = function () {
    const frm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");
    const taskInput = frm.querySelector("#taskInput");
    const submit = frm.querySelector("#submit");
    const removeButton = frm.querySelector("#remove");

    submit.addEventListener("click", addTask);
    taskList.addEventListener("click", completedTask);
    removeButton.addEventListener("click", removeCompletedTasks);
  };

  function addTask(e) {
    e.preventDefault();

    const li = document.createElement("li");
    li.innerText = taskInput.value;
    ul.appendChild(li);
  }
})((window.app = window.app || {}));
