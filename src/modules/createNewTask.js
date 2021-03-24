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
function createNewTask(id) {
    
    const addNewTaskDiv = document.getElementById("add-new");
    
    const hiddenContainer = document.createElement("div");
    hiddenContainer.classList.add("hidden-container");
    hiddenContainer.style.display = "none";

    const hiddenButtons = document.createElement("div");
    hiddenButtons.classList.add("hidden-buttons");
    hiddenButtons.style.display = "flex";

    const form = formConstructor("create-task");

    //cancel button
    const cancelBtn = btnConstructor("cancel-btn", "Cancel", "block");

    cancelBtn.addEventListener("click", () => {

        toogleVisibility(hiddenContainer,"none");
        toogleVisibility(addNewBtn, "block")
    });
    
    //add new task button
    const addNewBtn = btnConstructor("add-new-btn", "+ Add task", "block");
    
    addNewBtn.addEventListener('click',() => {

        toogleVisibility(hiddenContainer, "block");
        toogleVisibility(addNewBtn, "none");
    });

    //submit button
    const submitBtn = btnConstructor("submit-btn", "Submit", "block");

    submitBtn.addEventListener("click", () => {
        
        const valuesArray = getValuesForm("create-task");
        
        if(formValidation(valuesArray)) {

            taskItemConstructor(id);
            const taskObj = new Task (id, valuesArray[0], valuesArray[1], valuesArray[2], valuesArray[3]);
            setTask(taskObj);
            clearForm();
            toogleVisibility(hiddenContainer, "none");
            toogleVisibility(addNewBtn, "block");
            localStorage.setItem(`task-${id}`, JSON.stringify(taskObj));
            id ++;
            localStorage.setItem("id", id);
        }
    });

    hiddenContainer.appendChild(form);
    hiddenButtons.appendChild(submitBtn);
    hiddenButtons.appendChild(cancelBtn);
    hiddenContainer.appendChild(hiddenButtons);
    addNewTaskDiv.appendChild(addNewBtn);
    addNewTaskDiv.appendChild(hiddenContainer);
}

export default createNewTask;