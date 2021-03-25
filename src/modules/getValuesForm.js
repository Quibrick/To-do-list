
function getValuesForm(id) {

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.querySelector('input[name="priority"]:checked').value;

    let formValues = [title , description, dueDate, priority];

    return formValues;

}

export default getValuesForm;