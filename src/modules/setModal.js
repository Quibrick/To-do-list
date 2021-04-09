import nameForLocalStorage from "./nameForLocalStorage";
import setTask from "./setTask";
import Task from "./TaskClass";

//when the edit modal opens populate input with items values
function setModal(taskObj, taskManager, projectName) {

    const title = document.getElementById("title-modal");
    const description = document.getElementById("description-modal");
    const dueDate = document.getElementById("due-date-modal");
    document.querySelector('input[name="rate"]:checked').value;


    title.value = `${taskObj.title}`;
    description.value  = `${taskObj.description}`;
    dueDate.value = `${taskObj.dueDate}`;

    const saveBtn = document.getElementById("save-changes-btn-modal");

    saveBtn.addEventListener("click", () => {

        taskObj = new Task (taskObj.id, title.value, description.value, dueDate.value, );
        taskManager.set(`task-${taskObj.id}`, taskObj); //map() stores the obj
        setTask(taskObj);
        localStorage.setItem(nameForLocalStorage(projectName), JSON.stringify(Array.from(taskManager.entries())));//localy store map() with the projects name
        
    })
};

export default setModal;