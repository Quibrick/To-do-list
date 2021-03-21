
function getValuesForm(id) {

    const title = document.getElementById(`title-${id}`).value;
    const description = document.getElementById(`description-${id}`).value;
    const dueDate = document.getElementById(`due-date-${id}`).value;
    const priority = document.getElementById(`priority-${id}`).value;

    let formValues = [title , description, dueDate, priority];

    return formValues;

}

export default getValuesForm;