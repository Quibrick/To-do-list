import toogleVisibility from "./toogleVisibility";

function taskItem(taskObj) {

    const tasksContainer = document.getElementById("tasks-container");

    const singleTaskContainer = document.createElement("div");
    singleTaskContainer.classList.add("single-task-container");

    const visibleTask = document.createElement("div");
    visibleTask.classList.add("visible-task");

    const hiddenTask = document.createElement("div");
    hiddenTask.classList.add("hidden-task");
    hiddenTask.style.display = "none";
    
    const title = document.createElement("button");
    title.classList.add("task-look");
    title.id = "task-title";

    title.addEventListener("click" , () => {

        toogleVisibility(hiddenTask,"block");
    })
    
    const description = document.createElement("div");
    description.id = "task-description";
    description.classList.add("task-look");

    const dueDate = document.createElement("div");
    dueDate.id = "task-due-date"
    dueDate.classList.add("task-look");

    const priority = document.createElement("div");
    priority.id = "task-priority"
    priority.classList.add("task-look");
    
    title.innerHTML = taskObj.title;
    description.innerHTML  = `Description : ${taskObj.description}`;
    dueDate.innerHTML = `Due-date : ${taskObj.dueDate}`;
    priority.innerHTML = `Priority : ${taskObj.priority}`;
    
    visibleTask.appendChild(title);
    visibleTask.appendChild(dueDate);
    visibleTask.appendChild(priority);
    hiddenTask.appendChild(description);

    singleTaskContainer.appendChild(visibleTask);
    singleTaskContainer.appendChild(hiddenTask);

    tasksContainer.appendChild(singleTaskContainer);
}

export default taskItem;