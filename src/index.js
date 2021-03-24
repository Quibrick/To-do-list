import createNewTask from "./modules/createNewTask";
import setTask from "./modules/setTask";
import taskItemConstructor from "./modules/taskItemConstructor";

function main() {

    if (localStorage.length === 0){
        
        let storage = [];
        let id = 0; //on startup
        createNewTask(id, storage);
    
    }else {

        let id = JSON.parse(localStorage.getItem("id"));
        createNewTask(id);

        for(let i = 0; i < id; i++) {

            let task = JSON.parse(localStorage.getItem(`task-${i}`));

            taskItemConstructor(task.id);
            setTask(task);
        }
    }
}

main();


