import btnConstructor from "./btnConstructor";
import formConstructor from "./formConstructor";
import toogleVisibility from "./toogleVisibility";

function modalConstructor() {

    //select the body of page to display modal
    const bodyDOM = document.getElementsByTagName("body")[0];
    
    //contains everything modal related
    const modalContainer = document.createElement("div");
    modalContainer.id = "modal-form";
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

    //TODO! START WORKING ON SUBMIT BTN IN ORDER TO UPDATE TASKS ON THE DOM AND ON THE STORAGE !


    const cancelBtn = btnConstructor("discard-btn-modal", "Discard", "block");
    cancelBtn.addEventListener("click", () => {

        toogleVisibility(modalContainer, "none");
        modalContainer.remove();

    });

    hiddenButtons.appendChild(saveBtn);
    hiddenButtons.appendChild(cancelBtn);

    modalContent.appendChild(hiddenButtons);


    modalContent.classList.add("modal-content");

    modalContainer.appendChild(modalContent);

    bodyDOM.appendChild(modalContainer);
}

export default modalConstructor;