//Clears the Add task from on the DOM
function clearForm() {

    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const dueDate = document.getElementById("due-date");

    title.value = "";
    description.value = "";
    dueDate.value = "";
}

export default clearForm;