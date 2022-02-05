window.addEventListener("load", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const list = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    const task_ent = document.createElement("div");
    task_ent.classList.add("task");

    const task_content = document.createElement("div");
    task_content.classList.add("content");

    task_ent.appendChild(task_content);

    const task_input = document.createElement("input");
    task_input.classList.add("text");
    task_input.type = "text";
    task_input.value = task;
    task_input.setAttribute("readonly", "readonly");

    task_content.appendChild(task_input);

    const task_action = document.createElement("div");
    task_action.classList.add("action");

    const task_edit = document.createElement("button");
    task_edit.classList.add("edit");
    task_edit.innerText = "Edit";

    const task_delete = document.createElement("button");
    task_delete.classList.add("delete");
    task_delete.innerText = "Delete";

    task_action.appendChild(task_edit);
    task_action.appendChild(task_delete);

    task_ent.appendChild(task_action);

    list.appendChild(task_ent);

    input.value = "";

    task_edit.addEventListener("click", (e) => {
      if (task_edit.innerText.toLowerCase() == "edit") {
        task_edit.innerText = "Save";
        task_input.removeAttribute("readonly");
        task_input.focus();
      } else {
        task_edit.innerText = "Edit";
        task_input.setAttribute("readonly", "readonly");
      }
    });

    task_delete.addEventListener("click", (e) => {
      list.removeChild(task_ent);
    });
  });
});