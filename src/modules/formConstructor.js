//creates the form for the ToDo item
function formConstructor() {
    
    const form = document.createElement("form");
    form.classList.add("hidden-form");
    form.style.display = "flex";

    const titleLabel = document.createElement("label");
    titleLabel.htmlFor = "title";
    titleLabel.innerHTML = "Title";
    
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.required = true;
    
    form.appendChild(titleLabel);
    form.appendChild(titleInput)

    const descriptionLabel = document.createElement("label");
    descriptionLabel.htmlFor = "description";
    descriptionLabel.innerHTML = "Description";
    
    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text-area";
    descriptionInput.id = "description";
    descriptionInput.required = true;

    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);

    const dueDateLabel = document.createElement("label");
    dueDateLabel.htmlFor = "due-date";
    dueDateLabel.innerHTML = "Due-date";

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "due-date";
    dueDateInput.required = true;

    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);

    const priorityLabel = document.createElement("label");
    priorityLabel.htmlFor = "priority";
    priorityLabel.innerHTML = "Priority";

    const priorityInput = document.createElement("input");
    priorityInput.type = "text";
    priorityInput.id = "priority";
    priorityInput.required = true;

    form.appendChild(priorityLabel);
    form.appendChild(priorityInput);

    return form;
}

export default formConstructor;