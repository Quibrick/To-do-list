import toogleVisibility from "./toogleVisibility";
import formConstructor from "./formConstructor";
import getValuesForm from "./getValuesForm";
import Task from "./TaskClass";
import btnConstructor from "./cancelBtn";

function createTask(id) {
    
    const content = document.getElementById("content");
    
    const hiddenContainer =document.createElement("div");
    hiddenContainer.classList.add("hidden-container");
    hiddenContainer.style.display = "none";

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    itemContainer.id = id;

    const form = formConstructor();
   
    //cancel button
    const cancelBtn = btnConstructor("cancel-btn", "cancel", "block");

    cancelBtn.addEventListener("click", () => {

        toogleVisibility(hiddenContainer,"none");
    });
    
    //add new task button
    const addNewBtn = btnConstructor("add-new-btn", "Add task", "block");
    
    addNewBtn.addEventListener('click',() => {

        toogleVisibility(hiddenContainer,"block");
    });

    //submit button
    const submitBtn = btnConstructor("submit-btn", "Submit task", "block");

    submitBtn.addEventListener("click", () => {

        toogleVisibility(hiddenContainer,"none");
        
        const valuesArray = getValuesForm();

        const taskObj = new Task (id,valuesArray[0], valuesArray[1], valuesArray[2], valuesArray[3], itemContainer); 

        console.log(taskObj);

        addNewBtn.innerHTML = "Edit Task";

        id++;

        createTask(id);
    });

    hiddenContainer.appendChild(form);
    hiddenContainer.appendChild(cancelBtn);
    hiddenContainer.appendChild(submitBtn);
    itemContainer.appendChild(addNewBtn);
    itemContainer.appendChild(hiddenContainer);
    
    content.appendChild(itemContainer);
}

export default createTask;