import btnConstructor from "./btnConstructor";
import project from "./project";
import toogleVisibility from "./toogleVisibility";

function createNewProjectBtn(customProjectList) {

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
    
    //the btn, just toogles the display for the btn's and input form
    const createNewProjectBtn = btnConstructor("create-new-project", "+ Create new project", "block");
    createNewProjectBtn.classList.add("left-bar-btn");
    createNewProjectBtn.addEventListener('click',() => {
        
        toogleVisibility(hiddenContainer, "block");
        toogleVisibility(createNewProjectBtn, "none");
    });
    leftBar.appendChild(createNewProjectBtn);
    
    //the project name input
    const projectNameInput = document.createElement("input");
    projectNameInput.id = "project-name-input";
    projectNameInput.placeholder = "Project Name";
    hiddenContainer.appendChild(projectNameInput);
    
    //the submit project btn
    const submitProjectBtn = btnConstructor("submit-btn-left", "Submit", "block");
    submitProjectBtn.addEventListener("click", () => {

        if(projectNameInput.value.length != 0) {  //check to see if inputs !=null
            
            customProjectList.push(projectNameInput.value);
            localStorage.setItem("custom-project-list" , JSON.stringify(customProjectList));
            console.log(customProjectList);
            project(projectNameInput.value); //create the project tab
            toogleVisibility(hiddenContainer, "none");
            toogleVisibility(createNewProjectBtn, "block");
            projectNameInput.value = "";
       
        } else {
            
            //needs work
            console.log("er");
        }
    });
    hiddenButtons.appendChild(submitProjectBtn);
    
    //the cancel btn, just changes displays
    const cancelBtn = btnConstructor("cancel-btn-left", "Cancel", "block");
    cancelBtn.addEventListener("click", () => {

        toogleVisibility(hiddenContainer, "none");
        toogleVisibility(createNewProjectBtn, "block");
    });
    hiddenButtons.appendChild(cancelBtn);

    hiddenContainer.appendChild(hiddenButtons);
    leftBar.appendChild(hiddenContainer);
}

export default createNewProjectBtn;