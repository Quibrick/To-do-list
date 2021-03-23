//creates the form for the ToDo item
function formConstructor() {
    
    const form = document.createElement("form");
    form.classList.add("hidden-form");
    form.style.display = "flex";
    
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Title";
    titleInput.id = "title";
    titleInput.required = true;
    
    form.appendChild(titleInput)
    
    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text-area";
    descriptionInput.placeholder = "Description";
    descriptionInput.id = "description";
    descriptionInput.required = true;

    form.appendChild(descriptionInput);

    const priorityInput = document.createElement("input");
    priorityInput.type = "text";
    priorityInput.placeholder = "Priority"
    priorityInput.id = "priority";
    priorityInput.required = true;

    form.appendChild(priorityInput);

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "due-date";
    dueDateInput.required = true;

    form.appendChild(dueDateInput);

    return form;
}

export default formConstructor;