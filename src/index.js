import createNewProjectBtn from "./modules/createNewProject";
import addTask from "./modules/addTask";
import setTask from "./modules/setTask";
import taskItemConstructor from "./modules/taskItem";
import TaskManager from "./modules/TaskManagerClass";
import project from "./modules/project";
import landingProject from "./modules/landingProject";

function main() {
    //get id from local storage
    let id = JSON.parse(localStorage.getItem("id"));

    if (id === null) {
        
        let taskManager = new Map(); //maps all task objects
        let id = 0; //id for every obj
        addTask(id, taskManager); //creates add-task DOM item
        createNewProjectBtn();
        landingProject();
    
    } else {

        createNewProjectBtn();
        let taskManager = new Map(JSON.parse(localStorage.taskManager));
        addTask(id, taskManager);

        for(let value of taskManager.values()) {

            taskItemConstructor(value.id);
            setTask(value);
        }
    }
}

main();


