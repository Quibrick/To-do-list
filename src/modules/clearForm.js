//Clears the Add task from on the DOM
function clearForm(identifier) {

    const title = document.getElementById(`title-${identifier}`);
    const description = document.getElementById(`description-${identifier}`);
    const dueDate = document.getElementById(`due-date-${identifier}`);
    title.value = "";
    description.value = "";
    dueDate.value = "";
}

export default clearForm;