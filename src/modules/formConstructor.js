//creates the form for the Add task view
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
    
    const radioInputContainer = document.createElement("div");
    radioInputContainer.id = "radio-input-container";
    
    const priorityLabel = document.createElement("p");
    priorityLabel.innerHTML = "Priority :";
    
    radioInputContainer.appendChild(priorityLabel);
    
    const labels = ["High", "Normal", "Low"];
    
    for(let i = 0; i < labels.length; i++) {
        
        const label = document.createElement("label");
        label.htmlFor = labels[i];
        label.innerHTML = labels[i];
        label.name = "priority";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "priority";
        input.value = labels[i];
        
        radioInputContainer.appendChild(label);
        radioInputContainer.appendChild(input);
    }
    
    form.appendChild(radioInputContainer);
    
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "due-date";
    dueDateInput.required = true;

    form.appendChild(dueDateInput);

    return form;
}

export default formConstructor;