import nameForLocalStorage from "./nameForLocalStorage";
import setTask from "./setTask";
import Task from "./TaskClass";

//when the edit modal opens populate input with items values
function setModal(taskObj, taskManager, projectName) {

    //get input fields
    const title = document.getElementById("title-modal");
    const description = document.getElementById("description-modal");
    const dueDate = document.getElementById("due-date-modal");
    let priority; //variable in order to check the correct radio input

    //assign obj values to input fields
    title.value = `${taskObj.title}`;
    description.value = `${taskObj.description}`;
    dueDate.value = `${taskObj.dueDate}`;
    
    //sets the modal radio buttons with taskObj.priority value
    switch (taskObj.priority) {

        case "High":
            document.getElementsByName("priority-modal")[0].checked = true;
            break;

        case "Normal":
            document.getElementsByName("priority-modal")[1].checked = true;
            break;

        case "Low":
            document.getElementsByName("priority-modal")[2].checked = true;
            break;
    }

    const saveBtn = document.getElementById("save-changes-btn-modal");
    saveBtn.addEventListener("click", () => {
        
        //get the last clicked values from radio btns
        priority = document.querySelector('input[name="priority-modal"]:checked').value;
        taskObj = new Task(taskObj.id, title.value, description.value, dueDate.value, priority); //make a new obj
        taskManager.set(`task-${taskObj.id}`, taskObj); //map() stores the obj
        setTask(taskObj);
        localStorage.setItem(nameForLocalStorage(projectName), JSON.stringify(Array.from(taskManager.entries())));//localy store map() with the projects name

    })
};

export default setModal;