import btnConstructor from "./btnConstructor";
import modalConstructor from "./modalConstructor";
import nameForLocalStorage from "./nameForLocalStorage";
import setModal from "./setModal";
import setTask from "./setTask";
import toogleVisibility from "./toogleVisibility";

function taskItem(id, projectName) {

    //The container on the DOM for all tasks
    const tasksContainer = document.getElementById("tasks-container");
    
    //the singular task that is being created
    const singleTaskContainer = document.createElement("div");
    singleTaskContainer.classList.add("single-task-container");
    singleTaskContainer.id = `task-${id}`;
    
    //visible task part
    const visibleTask = document.createElement("div");
    visibleTask.classList.add("visible-task");
    visibleTask.style.display = "flex";
    
    //hidden info of a task unless usr clicks title
    const hiddenTask = document.createElement("div");
    hiddenTask.classList.add("hidden-task");
    hiddenTask.style.display = "none";
    
    //title btn
    const title = btnConstructor(`task-title-${id}`, "", "block");
    title.classList.add("task-title-class");
    
    //on click display hidden info of task
    title.addEventListener("click" , () => {

        toogleVisibility(hiddenTask,"flex");
    });
    visibleTask.appendChild(title);

    //container which holds Priority,Date etc on the right hand of screen
    const rightHandItems = document.createElement("div");
    rightHandItems.classList.add("right-hand-items");
    rightHandItems.style.display = "flex";
    visibleTask.appendChild(rightHandItems);
   
    //priority of a singular task
    const priority = document.createElement("div");
    priority.id = `task-priority-${id}`;
    priority.classList.add("task-look");
    rightHandItems.appendChild(priority);
    
    //due date of a singular task
    const dueDate = document.createElement("div");
    dueDate.id = `task-due-date-${id}`;
    dueDate.classList.add("task-look");
    rightHandItems.appendChild(dueDate);
   
    //edit task btn
    const editBtn = btnConstructor(`edit-task-${id}`, "", "block");
    editBtn.classList.add("task-btn");

    editBtn.addEventListener("click", () => {
        
        let taskManager = new Map(JSON.parse(localStorage.taskManager)); //create a new map !!!MAYBE CHANGE THIS    
        const taskObj = taskManager.get(`task-${id}`);
        modalConstructor();
        const modal = document.getElementById("modal-form");
        modal.style.display = "none";
        toogleVisibility(modal, "block");
        setModal(taskObj);
    });
   
    //img of edit task btn
    const editImage = document.createElement("img");
    editImage.id = "edit-task-img";
    editImage.src = './img/edit.svg';
    editBtn.appendChild(editImage);
    rightHandItems.appendChild(editBtn);
   
    //deletes btn
    const deleteBtn = btnConstructor(`delete-task-${id}`, "", "block");
    deleteBtn.classList.add("task-btn");
   
    //img of delete btn
    const deleteImage = document.createElement("img");
    deleteImage.id = "delete-task-img";
    deleteImage.src = './img/cancel.svg';
    
    //on click trigers delete logic
    deleteBtn.addEventListener("click", () => {
        
        singleTaskContainer.remove(); //remove the selected item from the DOM
        let taskManager = new Map(JSON.parse(localStorage.getItem(nameForLocalStorage(projectName)))); //create a new map !!!MAYBE CHANGE THIS    
        taskManager.delete(`task-${id}`);
        localStorage.setItem(`${nameForLocalStorage(projectName)}`, JSON.stringify(Array.from(taskManager.entries()))); 
    });
    deleteBtn.appendChild(deleteImage);
    rightHandItems.appendChild(deleteBtn);
   
    //hidden description until usr clicks on title
    const description = document.createElement("div");
    description.classList.add("task-description-class");
    description.id = `task-description-${id}`;
    description.classList.add("task-look");
    hiddenTask.appendChild(description);
    
    //append info of task to singular task
    singleTaskContainer.appendChild(visibleTask);
    singleTaskContainer.appendChild(hiddenTask);
    
    //append task to the DOM
    tasksContainer.appendChild(singleTaskContainer);
};

export default taskItem;