import btnConstructor from "./btnConstructor";
import toogleVisibility from "./toogleVisibility";

function taskItemConstructor(id) {

    const tasksContainer = document.getElementById("tasks-container");

    const singleTaskContainer = document.createElement("div");
    singleTaskContainer.classList.add("single-task-container");
    singleTaskContainer.id = `task-${id}`;

    const visibleTask = document.createElement("div");
    visibleTask.classList.add("visible-task");
    visibleTask.style.display = "flex";
    
    const title = document.createElement("button");
    title.classList.add("task-title-class");
    title.id = `task-title-${id}`;
    
    visibleTask.appendChild(title);

    const rightHandItems = document.createElement("div");
    rightHandItems.classList.add("right-hand-items");
    rightHandItems.style.display = "flex";
    
    visibleTask.appendChild(rightHandItems);

    const hiddenTask = document.createElement("div");
    hiddenTask.classList.add("hidden-task");
    hiddenTask.style.display = "none";
    
    title.addEventListener("click" , () => {

        toogleVisibility(hiddenTask,"flex");
    });
    
    const priority = document.createElement("div");
    priority.id = `task-priority-${id}`;
    priority.classList.add("task-look");
    
    rightHandItems.appendChild(priority);
    
    const dueDate = document.createElement("div");
    dueDate.id = `task-due-date-${id}`;
    dueDate.classList.add("task-look");

    rightHandItems.appendChild(dueDate);

    const description = document.createElement("div");
    description.classList.add("task-description-class");
    description.id = `task-description-${id}`;
    description.classList.add("task-look");
    
    hiddenTask.appendChild(description);
    
    const editBtn = btnConstructor(`edit-task-${id}`, "", "block");
    editBtn.classList.add("task-btn");

    const editImage = document.createElement("img");
    editImage.id = "edit-task-img";
    editImage.src = './img/edit.svg';

    editBtn.appendChild(editImage);

    rightHandItems.appendChild(editBtn);

    const deleteBtn = btnConstructor(`delete-task-${id}`, "", "block");
    deleteBtn.classList.add("task-btn");

    const deleteImage = document.createElement("img");
    deleteImage.id = "delete-task-img";
    deleteImage.src = './img/cancel.svg';

    deleteBtn.appendChild(deleteImage);

    deleteBtn.addEventListener("click", () => {

        singleTaskContainer.remove();
        
    })

    rightHandItems.appendChild(deleteBtn);

    singleTaskContainer.appendChild(visibleTask);
    singleTaskContainer.appendChild(hiddenTask);

    tasksContainer.appendChild(singleTaskContainer);
};

export default taskItemConstructor;