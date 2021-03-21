import toogleVisibility from "./toogleVisibility";
import formConstructor from "./formConstructor";
import getValuesForm from "./getValuesForm";
import btnConstructor from "./cancelBtn";
import formValidation from "./formValidation";
import taskItem from "./taskItem";
import Task from "./TaskClass";
import clearForm from "./clearForm";

function createNewTask() {
    
    const addNewTaskDiv = document.getElementById("add-new");
    
    const hiddenContainer =document.createElement("div");
    hiddenContainer.classList.add("hidden-container");
    hiddenContainer.style.display = "none";

    const form = formConstructor("create-task");
   
    //cancel button
    const cancelBtn = btnConstructor("cancel-btn", "cancel", "block");

    cancelBtn.addEventListener("click", () => {

        toogleVisibility(hiddenContainer,"none");
        toogleVisibility(addNewBtn, "block")
    });
    
    //add new task button
    const addNewBtn = btnConstructor("add-new-btn", "Add task", "block");
    
    addNewBtn.addEventListener('click',() => {

        toogleVisibility(hiddenContainer, "block");
        toogleVisibility(addNewBtn, "none");
    });

    //submit button
    const submitBtn = btnConstructor("submit-btn", "Submit task", "block");

    submitBtn.addEventListener("click", () => {
        
        const valuesArray = getValuesForm("create-task");
        
        if(formValidation(valuesArray)) {

            const taskObj = new Task (valuesArray[0], valuesArray[1], valuesArray[2], valuesArray[3]);
            taskItem(taskObj);
            console.log(taskObj)
            clearForm();
            toogleVisibility(hiddenContainer, "none");
            toogleVisibility(addNewBtn, "block");
        }
        
    });

    hiddenContainer.appendChild(form);
    hiddenContainer.appendChild(cancelBtn);
    hiddenContainer.appendChild(submitBtn);
    addNewTaskDiv.appendChild(addNewBtn);
    addNewTaskDiv.appendChild(hiddenContainer);
    
}

export default createNewTask;