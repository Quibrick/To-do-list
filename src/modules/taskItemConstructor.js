import toogleVisibility from "./toogleVisibility";

function taskItemConstructor(id) {

    const tasksContainer = document.getElementById("tasks-container");

    const singleTaskContainer = document.createElement("div");
    singleTaskContainer.classList.add("single-task-container");
    singleTaskContainer.id = `task-${id}`;

    const visibleTask = document.createElement("div");
    visibleTask.classList.add("visible-task");
    visibleTask.style.display = "flex";

    const rightHandItems = document.createElement("div");
    rightHandItems.classList.add("right-hand-items");
    rightHandItems.style.display = "flex";

    const hiddenTask = document.createElement("div");
    hiddenTask.classList.add("hidden-task");
    hiddenTask.style.display = "none";
    
    const title = document.createElement("button");
    title.classList.add("task-look");
    title.id = `task-title-${id}`;

    title.addEventListener("click" , () => {

        toogleVisibility(hiddenTask,"block");
    });
    
    const description = document.createElement("div");
    description.id = `task-description-${id}`;
    description.classList.add("task-look");

    const dueDate = document.createElement("div");
    dueDate.id = `task-due-date-${id}`;
    dueDate.classList.add("task-look");

    const priority = document.createElement("div");
    priority.id = `task-priority-${id}`;
    priority.classList.add("task-look");

    visibleTask.appendChild(title);
    rightHandItems.appendChild(priority);
    rightHandItems.appendChild(dueDate);
    visibleTask.appendChild(rightHandItems);
    hiddenTask.appendChild(description);

    singleTaskContainer.appendChild(visibleTask);
    singleTaskContainer.appendChild(hiddenTask);

    tasksContainer.appendChild(singleTaskContainer);

}

export default taskItemConstructor;