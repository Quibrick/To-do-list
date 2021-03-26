import btnConstructor from "./btnConstructor";
import removeItem from "./removeItem";
import toogleVisibility from "./toogleVisibility";

function taskItemConstructor(id) {

    //The container on the DOM for all tasks
    const tasksContainer = document.getElementById("tasks-container");

    //the singular task that is being created
    const singleTaskContainer = document.createElement("div");
    singleTaskContainer.classList.add("single-task-container");
    singleTaskContainer.id = `task-${id}`;

    //visible part
    const visibleTask = document.createElement("div");
    visibleTask.classList.add("visible-task");
    visibleTask.style.display = "flex";
    
    //part that shows when usr clicks on title
    const hiddenTask = document.createElement("div");
    hiddenTask.classList.add("hidden-task");
    hiddenTask.style.display = "none";
    
    const title = document.createElement("button");
    title.classList.add("task-title-class");
    title.id = `task-title-${id}`;
    
    title.addEventListener("click" , () => {

        toogleVisibility(hiddenTask,"flex");
    });
    
    visibleTask.appendChild(title);

    //container which holds Priority,Date etc on the right 
    const rightHandItems = document.createElement("div");
    rightHandItems.classList.add("right-hand-items");
    rightHandItems.style.display = "flex";
    
    visibleTask.appendChild(rightHandItems);

    const priority = document.createElement("div");
    priority.id = `task-priority-${id}`;
    priority.classList.add("task-look");
    
    rightHandItems.appendChild(priority);
    
    const dueDate = document.createElement("div");
    dueDate.id = `task-due-date-${id}`;
    dueDate.classList.add("task-look");

    rightHandItems.appendChild(dueDate);

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

        console.log(id);
         
        //singleTaskContainer.remove(id);
        //removeItem(id);
    });

    rightHandItems.appendChild(deleteBtn);

    const description = document.createElement("div");
    description.classList.add("task-description-class");
    description.id = `task-description-${id}`;
    description.classList.add("task-look");
    
    hiddenTask.appendChild(description);
    
    singleTaskContainer.appendChild(visibleTask);
    singleTaskContainer.appendChild(hiddenTask);

    tasksContainer.appendChild(singleTaskContainer);
};

export default taskItemConstructor;