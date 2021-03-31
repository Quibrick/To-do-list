import addTask from "./addTask";
import btnConstructor from "./btnConstructor";
import nameForLocalStorage from "./nameForLocalStorage";
import setTask from "./setTask";
import taskItemConstructor from "./taskItem";

function project(projectName) {

    //container on the left hand where projects get appended to
    const projectsContainer = document.getElementById("projects");

    const tasksContainer = document.getElementById("tasks-container");
    
    //the title of the project, acts as a btn
    const projectBtn = btnConstructor(`${projectName}`, `${projectName}`, "block");
    projectBtn.addEventListener("click", () => {

        while (tasksContainer.firstChild) {

            tasksContainer.removeChild(tasksContainer.lastChild);
        };
    
        const addNew = document.getElementById("add-new"); //get add-new tab of previous project
        addNew.remove(); //remove add-new tab
        const title = document.getElementById("page-view-title");
        title.textContent =  projectName; //correct the title on the top of the page
        
        let id = JSON.parse(localStorage.getItem("id")); //get global id from localStorage
        
        const localStorageName = nameForLocalStorage(`${projectName}`);

        let taskManager = JSON.parse(localStorage.getItem(`${localStorageName}`));

        if (taskManager === null) {
            
            let taskManager = new Map(); //make a new Map obj for the specific project
            addTask(id,taskManager,nameForLocalStorage(projectName) ); //create new +Add task btn
        
        } else {

            let taskManager = new Map(JSON.parse(localStorage.getItem(nameForLocalStorage(projectName))));
            addTask(id, taskManager, nameForLocalStorage(`${projectName}`));
            for(let value of taskManager.values()) {

                taskItemConstructor(value.id);
                setTask(value);
            }

        }
    });

    //append to the DOM
    projectBtn.classList.add("left-bar-btn");
    projectsContainer.appendChild(projectBtn);
}

export default project;