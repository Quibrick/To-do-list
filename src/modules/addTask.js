import toogleVisibility from "./toogleVisibility";
import formConstructor from "./formConstructor";
import getValuesForm from "./getValuesForm";
import btnConstructor from "./btnConstructor";
import formValidation from "./formValidation";
import setTask from "./setTask";
import Task from "./TaskClass";
import clearForm from "./clearForm";
import taskItem from "./taskItem";

/*
New Task button displayed on the DOM
gets the project name argument in order
to create the coresponding localStorage,
taskManager is a Map() object, id is a -
global, localy stored , variable in order to
enumerate local storage inserstions    
*/

function addTask(id, taskManager, projectName) {
    
    //content HTML parent
    const content = document.getElementById("content");

    //the container
    const addNewTaskDiv = document.createElement("div");
    addNewTaskDiv.id = "add-new";
    
    //contains the form with display-none
    const hiddenContainer = document.createElement("div");
    hiddenContainer.classList.add("hidden-container");
    hiddenContainer.style.display = "none";
    
    //contains submit and cancel btns
    const hiddenButtons = document.createElement("div");
    hiddenButtons.classList.add("hidden-buttons");
    hiddenButtons.style.display = "flex";
   
    //the form where user inputs task info
    const form = formConstructor("add-task");
    hiddenContainer.appendChild(form);
    
    //add task btn
    const addNewBtn = btnConstructor("add-new-btn", "+ Add task", "block");
   
    //on click display hidden form and hide add task btn
    addNewBtn.addEventListener('click',() => {

        toogleVisibility(hiddenContainer, "block");
        toogleVisibility(addNewBtn, "none");
    });
    addNewTaskDiv.appendChild(addNewBtn);
    
    //submit btn
    const submitBtn = btnConstructor("submit-btn", "Submit", "block");
   
    //on click event triggers task creation logic
    submitBtn.addEventListener("click", () => {
        //gets values from the input fields and returns and array
        const valuesArray = getValuesForm("add-task");
        //if input != empty
        if(formValidation(valuesArray)) {
            
            taskItem(id); //create the DOM element 
            const taskObj = new Task (id, valuesArray[0], valuesArray[1], valuesArray[2], valuesArray[3]); //create the coresponding object
            taskManager.set(`task-${id}`, taskObj); //map() stores the obj
            localStorage.setItem(`${projectName}`, JSON.stringify(Array.from(taskManager.entries())));//localy store map() with the projects name
            id ++;
            localStorage.setItem("id", id); //localy store id
            setTask(taskObj); //fills the DOM element with the taskobj values
            clearForm("add-task"); //clears form
            toogleVisibility(hiddenContainer, "none");
            toogleVisibility(addNewBtn, "block");
        }
    });
    hiddenButtons.appendChild(submitBtn);
    
    //cancel button
    const cancelBtn = btnConstructor("cancel-btn", "Cancel", "block");
    
    //cancels the form and hides it
    cancelBtn.addEventListener("click", () => {

        toogleVisibility(hiddenContainer,"none");
        toogleVisibility(addNewBtn, "block");
        clearForm("add-task");
    });
    hiddenButtons.appendChild(cancelBtn);
    
    //append all elements to the DOM element
    hiddenContainer.appendChild(hiddenButtons);
    addNewTaskDiv.appendChild(hiddenContainer);
    content.appendChild(addNewTaskDiv);
}

export default addTask;