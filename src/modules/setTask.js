function setTask(taskObj) {

    const title = document.getElementById(`task-title-${taskObj.id}`);
    const description = document.getElementById(`task-description-${taskObj.id}`);
    const dueDate = document.getElementById(`task-due-date-${taskObj.id}`);
    const priority = document.getElementById(`task-priority-${taskObj.id}`);

    title.innerHTML = `+ ${taskObj.title}`;
    description.innerHTML  = `Description : ${taskObj.description}`;
    dueDate.innerHTML = `Due-date : ${taskObj.dueDate}`;
    priority.innerHTML = `Priority : ${taskObj.priority}`;

}

export default setTask;