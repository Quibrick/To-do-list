import createNewProjectBtn from "./modules/createNewProject";
import addTask from "./modules/addTask";
import setTask from "./modules/setTask";
import taskItemConstructor from "./modules/taskItem";
import project from "./modules/project";
import nameForLocalStorage from "./modules/nameForLocalStorage";

function main() {
    
    //get id from local storage
    let id = JSON.parse(localStorage.getItem("id"));
    const title = document.getElementById("page-view-title");
    title.textContent = "To Do";

    if (id === null) {
        
        let customProjectList = [];
        let taskManager = new Map(); //maps all task objects
        let id = 0; //id for every obj
        addTask(id, taskManager, nameForLocalStorage("To Do")); //creates add-task DOM item
        createNewProjectBtn(customProjectList);
        project("To Do");
    
    } else {

        project("To Do");
        let customProjectList = JSON.parse(localStorage.getItem("custom-project-list"));
        let taskManager = new Map(JSON.parse(localStorage.ToDo));
        addTask(id, taskManager, nameForLocalStorage("To Do"));
        
        //populate default To Do project
        for(let value of taskManager.values()) {
            
            taskItemConstructor(value.id);
            setTask(value);
        }
        
        //populate left hand bar with user created projects
        const lengthOfList = customProjectList.length;
        for(let i = 0; i < lengthOfList; i++) {
            
            project(customProjectList[i]);
        }
        
        createNewProjectBtn(customProjectList);
    }
}

main();


