import addTaskConstructor from "./modules/addTaskConstructor";
import setTask from "./modules/setTask";
import taskItemConstructor from "./modules/taskItemConstructor";
import TaskManager from "./modules/TaskManagerClass";

function main() {
    //get id from local storage
    let id = JSON.parse(localStorage.getItem("id"));

    if (id === null) {
        
        let taskManager = new Map(); //maps all task objects
        let id = 0; //id for every obj
        addTaskConstructor(id, taskManager); //creates add-task DOM item
    
    } else {

        let taskManager = new Map(JSON.parse(localStorage.taskManager));
        addTaskConstructor(id, taskManager);

        for(let value of taskManager.values()) {

            taskItemConstructor(value.id);
            setTask(value);
        }
    }
}

main();


