//Gets the values from the form
function getValuesForm(identifier) {

    const title = document.getElementById(`title-${identifier}`).value;
    const description = document.getElementById(`description-${identifier}`).value;
    const dueDate = document.getElementById(`due-date-${identifier}`).value;
    const priority = document.querySelector('input[name="priority"]:checked').value;

    let formValues = [title , description, dueDate, priority];

    return formValues;

}

export default getValuesForm;