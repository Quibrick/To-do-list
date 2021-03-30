import btnConstructor from "./btnConstructor";
import project from "./project";
import toogleVisibility from "./toogleVisibility";

function createNewProjectBtn() {

    //left bar
    const leftBar = document.getElementById("left-bar");
   
    //holds the input form
    const hiddenContainer = document.createElement("div");
    hiddenContainer.classList.add("hidden-container");
    hiddenContainer.id = "left-hand-hidden-container";
    hiddenContainer.style.display = "none";

    //holds the submit and cancel btns
    const hiddenButtons = document.createElement("div");
    hiddenButtons.classList.add("left-hand-hidden-buttons");
    hiddenButtons.style.display = "flex";
    
    //the btn 
    const createNewProjectBtn = btnConstructor("create-new-project", "+ Create new project", "block");
    createNewProjectBtn.classList.add("left-bar-btn");
    createNewProjectBtn.addEventListener('click',() => {
        
        toogleVisibility(hiddenContainer, "block");
        toogleVisibility(createNewProjectBtn, "none");
    });
    leftBar.appendChild(createNewProjectBtn);
    
    const projectNameInput = document.createElement("input");
    projectNameInput.id = "project-name-input";
    projectNameInput.placeholder = "Project Name";
    hiddenContainer.appendChild(projectNameInput);
    
    const submitProjectBtn = btnConstructor("submit-btn-left", "Submit", "block");

    submitProjectBtn.addEventListener("click", () => {

        if(projectNameInput.value.length != 0) {
            
            project(projectNameInput);
            toogleVisibility(hiddenContainer, "none");
            toogleVisibility(createNewProjectBtn, "block");
        } else {
            console.log("er");
        }
    });
    const cancelBtn = btnConstructor("cancel-btn-left", "Cancel", "block");

    cancelBtn.addEventListener("click", () => {

        toogleVisibility(hiddenContainer, "none");
        toogleVisibility(createNewProjectBtn, "block");
    })

    hiddenButtons.appendChild(submitProjectBtn);
    hiddenButtons.appendChild(cancelBtn);

    hiddenContainer.appendChild(hiddenButtons);

    leftBar.appendChild(hiddenContainer);

}

export default createNewProjectBtn;