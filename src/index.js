import createNewTask from "./modules/createNewTask";
import setTask from "./modules/setTask";
import taskItemConstructor from "./modules/taskItemConstructor";
import TaskManager from "./modules/TaskManagerClass";

function main() {

    let id = JSON.parse(localStorage.getItem("id"));

    if (id === null) {
        
        let taskManager = new TaskManager();
        let id = 0; //on startup
        createNewTask(id, taskManager);
    
    }else {

        createNewTask(id);

        for(let i = 0; i < id; i++) {

            let task = JSON.parse(localStorage.getItem(`task-${i}`));

            taskItemConstructor(task.id);
            setTask(task);
        }
    }
}

main();


