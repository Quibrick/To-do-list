function clearForm() {

    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const dueDate = document.getElementById("due-date");
    const priority = document.getElementById("priority");

    title.value = "";
    description.value = "";
    dueDate.value = "";
}

export default clearForm;