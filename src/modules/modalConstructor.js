import btnConstructor from "./btnConstructor";
import formConstructor from "./formConstructor";
import getValuesForm from "./getValuesForm";
import toogleVisibility from "./toogleVisibility";

function modalConstructor(taskObj) {

    //select the body of page to display modal
    const bodyDOM = document.getElementsByTagName("body")[0];
    
    //contains everything modal related
    const modalContainer = document.createElement("div");
    modalContainer.id = "modal-form";
    modalContainer.style.display = "none";
    modalContainer.classList.add("modal");
    
    //modal content
    const modalContent = document.createElement("div");
    
    const editTaskTitle = document.createElement("h1");
    editTaskTitle.id = "edit-task-title-modal";
    editTaskTitle.innerHTML = "Edit task";
    modalContent.appendChild(editTaskTitle);

    //modal form
    const form = formConstructor("modal");
    modalContent.appendChild(form);

    //save and discard btns
    const hiddenButtons = document.createElement("div");
    hiddenButtons.classList.add("hidden-buttons");
    hiddenButtons.style.display = "flex";
    
    const saveBtn = btnConstructor("save-changes-btn-modal", "Save changes", "block");
    saveBtn.addEventListener("click", () => {
        

    })
    hiddenButtons.appendChild(saveBtn);
    
    const cancelBtn = btnConstructor("discard-btn-modal", "Discard", "block");
    cancelBtn.addEventListener("click", () => {
        
        toogleVisibility(modalContainer, "none");
        modalContainer.remove();
        
    });
    hiddenButtons.appendChild(cancelBtn);
    
    modalContent.appendChild(hiddenButtons);
    modalContent.classList.add("modal-content");
    
    modalContainer.appendChild(modalContent);
    
    
    bodyDOM.appendChild(modalContainer);    
}

export default modalConstructor;