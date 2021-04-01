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
        let id = 1; //id for every object
        addTask(id, taskManager, nameForLocalStorage("To Do")); //creates add-task DOM item
        createNewProjectBtn(customProjectList); //Create new project DOM item
        project("To Do"); //fixed project, always appears
        document.getElementById("To Do").click();
    
    } else {

        project("To Do"); //create the default ToDo project
        document.getElementById("To Do").click();
        let customProjectList = JSON.parse(localStorage.getItem("custom-project-list")); //get custom projects

        if( customProjectList != null) {

            //populate left hand bar with user created projects
            const lengthOfList = customProjectList.length;
            for(let i = 0; i < lengthOfList; i++) {
                
                project(customProjectList[i]);
            }

            createNewProjectBtn(customProjectList);
            
        } else { //user hasnt created any custom projects

            const customProjectList = [];
            createNewProjectBtn(customProjectList);
        }

        let taskManager = new Map(JSON.parse(localStorage.ToDo));
        addTask(id, taskManager, nameForLocalStorage("To Do"));
        
        //populate default To Do project
        for(let value of taskManager.values()) {
            
            taskItemConstructor(value.id);
            setTask(value);
        }
       
    }
}

onLoad();


