import btnConstructor from "./btnConstructor";
import toogleVisibility from "./toogleVisibility";

function createNewProjectBtn() {

    const projectsContainer = document.getElementById("projects");
    
    const hiddenContainer = document.createElement("div");
    hiddenContainer.classList.add("hidden-container");
    hiddenContainer.id = "left-hand-hidden-container";
    hiddenContainer.style.display = "none";

    const hiddenButtons = document.createElement("div");
    hiddenButtons.classList.add("left-hand-hidden-buttons");
    hiddenButtons.style.display = "flex";
    
    const createNewProjectBtn = btnConstructor("create-new-project", "+ Create new project", "block");
    createNewProjectBtn.classList.add("left-bar-btn");

    createNewProjectBtn.addEventListener('click',() => {
        
        toogleVisibility(hiddenContainer, "block");
        toogleVisibility(createNewProjectBtn, "none");
    });
    projectsContainer.appendChild(createNewProjectBtn);
    
    const projectNameInput = document.createElement("input");
    projectNameInput.id = "project-name-input";
    projectNameInput.placeholder = "Project Name";
    hiddenContainer.appendChild(projectNameInput);
    
    const submitProjectBtn = btnConstructor("submit-btn-left", "Submit", "block");

    const cancelBtn = btnConstructor("cancel-btn-left", "Cancel", "block");

    cancelBtn.addEventListener("click", () => {

        toogleVisibility(hiddenContainer, "none");
        toogleVisibility(createNewProjectBtn, "block");
    })

    hiddenButtons.appendChild(submitProjectBtn);
    hiddenButtons.appendChild(cancelBtn);

    hiddenContainer.appendChild(hiddenButtons);

    projectsContainer.appendChild(hiddenContainer);

}

export default createNewProjectBtn;