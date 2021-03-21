import createTask from "./modules/itemDisplayDOM";


function main() {

    let storage = JSON.parse(localStorage.getItem("tasks"));
    let id = JSON.parse(localStorage.getItem("id"));

    if (storage === null) {

        let storage = [];
        id = 0;
        createTask(id,storage);
    
    }else {

        createTask(id,storage);
    }
}

main();