import toogleVisibility from "./toogleVisibility";
import formConstructor from "./formConstructor";
import getValuesForm from "./getValuesForm";
import Todo from "./todoClass";
import clearForm from "./clearForm";

function createItem() {
    
    const content = document.getElementById("content");
    
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    const form = formConstructor();
   
    //cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.innerHTML = "cancel";
    cancelBtn.style.display = "none";

    cancelBtn.addEventListener("click", () => {

        toogleVisibility(addNewBtn,"block");
        toogleVisibility(form,"flex");
        toogleVisibility(cancelBtn,"block");
        toogleVisibility(submitItem,"block");
    })
    
    //submit button
    const submitItem = document.createElement("button");
    submitItem.classList.add("form-buttons");
    submitItem.innerHTML = "Submit Item";
    submitItem.style.display = "none";

    submitItem.addEventListener("click", () => {

        const todoInfo = getValuesForm();
        const todoObj = new Todo(todoInfo[0],todoInfo[1],todoInfo[2],todoInfo[3]);
        console.log(todoObj);
        toogleVisibility(addNewBtn,"block");
        toogleVisibility(form,"flex");
        toogleVisibility(cancelBtn,"block");
        toogleVisibility(submitItem,"block");
        addNewBtn.innerHTML = todoInfo[0];
        clearForm();
        createItem();
    })

    //add new task button
    const addNewBtn = document.createElement("button");
    addNewBtn.classList.add("form-buttons");
    addNewBtn.innerHTML = "Add new item";
    
    addNewBtn.addEventListener('click',() => {

        toogleVisibility(addNewBtn,"block");
        toogleVisibility(form,"flex");
        toogleVisibility(cancelBtn,"block");
        toogleVisibility(submitItem,"block");
    });


    itemContainer.appendChild(form);
    itemContainer.appendChild(addNewBtn);
    itemContainer.appendChild(cancelBtn);
    itemContainer.appendChild(submitItem);

    content.appendChild(itemContainer);
}

export default createItem;