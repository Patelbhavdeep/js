document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-btn");
  const newTaskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");

  addBtn.addEventListener("click", addTask);
  newTaskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
      const taskItem = createTaskElement(taskText);
      taskList.appendChild(taskItem);
      newTaskInput.value = "";
    }
  }

  function createTaskElement(taskText) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => editTask(span));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => li.remove());

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);

    return li;
  }

  function editTask(span) {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  }
});
