import createNewProjectBtn from "./modules/createNewProject";
import addTask from "./modules/addTask";
import setTask from "./modules/setTask";
import taskItemConstructor from "./modules/taskItem";
import project from "./modules/project";
import nameForLocalStorage from "./modules/nameForLocalStorage";

function onLoad() {
    
    //get id from local storage
    let id = JSON.parse(localStorage.getItem("id"));
    
    //if id is null initiate a new session
    if (id === null) {
        
        let customProjectList = []; //stores project names
        let taskManager = new Map(); //maps all task objects
        localStorage.setItem("Todo", JSON.stringify(Array.from(taskManager.entries())));
        id = 0; //id for every object
        localStorage.setItem("id", id);
        addTask(id, taskManager, "Todo"); //creates add-task DOM item
        project("Todo"); //fixed project, always appears
        document.getElementById("Todo").click();
        customProjectList.push("Todo");
        localStorage.setItem("custom-project-list", JSON.stringify(customProjectList))
        createNewProjectBtn(customProjectList); //Create new project DOM item

    } else {

        let customProjectList = JSON.parse(localStorage.getItem("custom-project-list")); //get custom projects
        let taskManager = new Map(JSON.parse(localStorage.Todo));
        addTask(id, taskManager, "Todo");  
        
        //populate left hand bar with user created projects
        const lengthOfList = customProjectList.length;
        
        for (let i = 0; i < lengthOfList; i++) {
            
            project(customProjectList[i]);
        }
        
        createNewProjectBtn(customProjectList);
        
        //populate default To Do project
        for (let value of taskManager.values()) {
            
            taskItemConstructor(value.id);
            setTask(value);
        }

        document.getElementById("Todo").click();
    }
}

onLoad();


