import toogleVisibility from "./toogleVisibility";
import formConstructor from "./formConstructor";

function createItem() {
    
    const content = document.getElementById("content");
    
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    const form = formConstructor();

    const addNewBtn = document.createElement("button");
    addNewBtn.classList.add("add-new-dropdown");
    addNewBtn.innerHTML = "Add new item";
    addNewBtn.addEventListener('click',() => {

        toogleVisibility(form);
    });
    
    itemContainer.appendChild(form);
    itemContainer.appendChild(addNewBtn);

    content.appendChild(itemContainer);
}

export default createItem;