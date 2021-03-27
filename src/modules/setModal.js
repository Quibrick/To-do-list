//when the edit modal opens populate input with items values
function setModal(taskObj) {

    const title = document.getElementById("title-modal");
    const description = document.getElementById("description-modal");
    const dueDate = document.getElementById("due-date-modal");

    title.value = `${taskObj.title}`;
    description.value  = `${taskObj.description}`;
    dueDate.value = `${taskObj.dueDate}`;
};

export default setModal;