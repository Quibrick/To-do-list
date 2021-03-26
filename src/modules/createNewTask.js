import toogleVisibility from "./toogleVisibility";
import formConstructor from "./formConstructor";
import getValuesForm from "./getValuesForm";
import btnConstructor from "./btnConstructor";
import formValidation from "./formValidation";
import setTask from "./setTask";
import Task from "./TaskClass";
import clearForm from "./clearForm";
import taskItemConstructor from "./taskItemConstructor";

//New Task button displayed on the DOM
function createNewTask(id, taskManager) {
    
    const addNewTaskDiv = document.getElementById("add-new");
    
    const hiddenContainer = document.createElement("div");
    hiddenContainer.classList.add("hidden-container");
    hiddenContainer.style.display = "none";

    const hiddenButtons = document.createElement("div");
    hiddenButtons.classList.add("hidden-buttons");
    hiddenButtons.style.display = "flex";

    const form = formConstructor();

    hiddenContainer.appendChild(form);
    
    //add new task button
    const addNewBtn = btnConstructor("add-new-btn", "+ Add task", "block");
    
    addNewBtn.addEventListener('click',() => {
        
        toogleVisibility(hiddenContainer, "block");
        toogleVisibility(addNewBtn, "none");
    });
    
    addNewTaskDiv.appendChild(addNewBtn);
    
    //submit button
    const submitBtn = btnConstructor("submit-btn", "Submit", "block");

    submitBtn.addEventListener("click", () => {
        
        const valuesArray = getValuesForm("create-task");
        
        if(formValidation(valuesArray)) {
            
            taskItemConstructor(id);
            const taskObj = new Task (id, valuesArray[0], valuesArray[1], valuesArray[2], valuesArray[3]);
            taskManager.tasks.push(taskObj)
            localStorage.setItem("Task-Manager", JSON.stringify(taskManager));
            localStorage.setItem(`task-${id}`, JSON.stringify(taskObj));
            id ++;
            localStorage.setItem("id", id);
            setTask(taskObj);
            clearForm();
            toogleVisibility(hiddenContainer, "none");
            toogleVisibility(addNewBtn, "block");
        }
    });
    
    hiddenButtons.appendChild(submitBtn);
    
    //cancel button
    const cancelBtn = btnConstructor("cancel-btn", "Cancel", "block");

    cancelBtn.addEventListener("click", () => {

        toogleVisibility(hiddenContainer,"none");
        toogleVisibility(addNewBtn, "block")
    });
    
    hiddenButtons.appendChild(cancelBtn);
    

    hiddenContainer.appendChild(hiddenButtons);
    addNewTaskDiv.appendChild(hiddenContainer);
}

export default createNewTask;