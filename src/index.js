import createNewProjectBtn from "./modules/createNewProject";
import addTask from "./modules/addTask";
import setTask from "./modules/setTask";
import taskItemConstructor from "./modules/taskItem";
import project from "./modules/project";
import nameForLocalStorage from "./modules/nameForLocalStorage";

function main() {
    //get id from local storage
    let id = JSON.parse(localStorage.getItem("id"));

    if (id === null) {
        
        let taskManager = new Map(); //maps all task objects
        let id = 0; //id for every obj
        addTask(id, taskManager, nameForLocalStorage("To Do")); //creates add-task DOM item
        createNewProjectBtn();
        project("To Do")
        const title = document.getElementById("page-view-title");
        title.textContent = "To Do";
        //landingProject();
    
    } else {

        const title = document.getElementById("page-view-title");
        title.textContent = "To Do";
        createNewProjectBtn();
        project("To Do")
        let taskManager = new Map(JSON.parse(localStorage.ToDo));
        addTask(id, taskManager, nameForLocalStorage("To Do"));
        for(let value of taskManager.values()) {

            taskItemConstructor(value.id);
            setTask(value);
        }
    }
}

main();


