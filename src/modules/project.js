import addTask from "./addTask";
import btnConstructor from "./btnConstructor";
import nameForLocalStorage from "./nameForLocalStorage";
import setTask from "./setTask";
import taskItem from "./taskItem";

function project(projectName) {
    
    //container on the left hand where projects get appended to
    const projectsContainer = document.getElementById("projects");
    //the container with individual tasks that appears on the middle of the screen
    const tasksContainer = document.getElementById("tasks-container");
    //contains project btn and delet btn
    const singleProjectContainer = document.createElement("div");
    singleProjectContainer.classList.add("single-project-container");
    singleProjectContainer.style.display = "flex";
    
    //the title of the project, acts as a btn
    const projectBtn = btnConstructor(`${projectName}`, `${projectName}`, "block");
    projectBtn.classList.add("left-bar-btn");
    projectBtn.addEventListener("click", () => {
        
        //on click clear tasks container
        while (tasksContainer.firstChild) {

            tasksContainer.removeChild(tasksContainer.lastChild);
        };

        const addNew = document.getElementById("add-new"); //get add-new tab of previous project
        addNew.remove(); //remove add-new tab
        const title = document.getElementById("page-view-title");
        title.textContent =  projectName; //correct the title on the top of the page
        let id = JSON.parse(localStorage.getItem("id")); //get global id from localStorage
        
        let taskManager = JSON.parse(localStorage.getItem(nameForLocalStorage(projectName))); //get the corresponding table from localstorage
        
        if (taskManager === null) {
            
            let taskManager = new Map(); //make a new Map obj for the specific project
            addTask(id,taskManager,nameForLocalStorage(projectName) ); //create new +Add task btn
        
        } else { //populate content of clicked project with saved tasks

            let taskManager = new Map(JSON.parse(localStorage.getItem(nameForLocalStorage(projectName))));
            addTask(id, taskManager, nameForLocalStorage(`${projectName}`));
            
            for(let value of taskManager.values()) {

                taskItem(value.id, projectName);
                setTask(value);
            }
        }
    });
    singleProjectContainer.appendChild(projectBtn);

    //Default project cannot be deleted
    if (projectName != "Todo") {
        
        //delete selected project from left bar
        const deleteProjectBtn = btnConstructor(`delete-${projectName}-btn`, "", "block");
        deleteProjectBtn.classList.add("task-btn");
        
        //X mark
        const deleteProjectImage = document.createElement("img");
        deleteProjectImage.src = './img/cancel.svg';
        deleteProjectBtn.classList.add("delete-img")
        deleteProjectBtn.appendChild(deleteProjectImage);
        
        //Clears selected from local storage and the dom and reloads window
        deleteProjectBtn.addEventListener("click", () => {
            
            location.reload();
            singleProjectContainer.remove();
            localStorage.removeItem(nameForLocalStorage(projectName));
            let customProjectList = JSON.parse(localStorage.getItem("custom-project-list")); //get custom projects
            customProjectList = customProjectList.filter(name => name != projectName);
            localStorage.setItem("custom-project-list", JSON.stringify(customProjectList));
        });
        singleProjectContainer.appendChild(deleteProjectBtn);
    }

    //append to the DOM
    projectsContainer.appendChild(singleProjectContainer);
}

export default project;