import createNewTask from "./modules/createNewTask";
import setTask from "./modules/setTask";
import taskItemConstructor from "./modules/taskItemConstructor";
import TaskManager from "./modules/TaskManagerClass";

function main() {

    let id = JSON.parse(localStorage.getItem("id"));

    if (id === null) {
        
        let taskManager = new Map();
        let id = 0; //on startup
        createNewTask(id, taskManager);
    
    }else {

        let taskManager = new Map(JSON.parse(localStorage.taskManager));

        createNewTask(id, taskManager);

        console.log(taskManager);

        for(let value of taskManager.values()) {

            taskItemConstructor(value.id);
            setTask(value);
        }
    }
}

main();


