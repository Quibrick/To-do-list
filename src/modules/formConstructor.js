//creates the form for the Add task view
function formConstructor(identifier) {
    
    //create the form element
    const form = document.createElement("form");
    form.classList.add("hidden-form");
    form.style.display = "flex";
    
    //form title
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Title";
    titleInput.id = `title-${identifier}`;
    titleInput.required = true;
    form.appendChild(titleInput)
    
    //form description
    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text-area";
    descriptionInput.cols = "60";
    descriptionInput.rows = "8";
    descriptionInput.placeholder = "Description";
    descriptionInput.id = `description-${identifier}`;
    descriptionInput.required = true;
    form.appendChild(descriptionInput);
    
    //priority input container
    const radioInputContainer = document.createElement("div");
    radioInputContainer.id = "radio-input-container";
    
    //priority label
    const priorityLabel = document.createElement("p");
    priorityLabel.innerHTML = "Priority :";
    radioInputContainer.appendChild(priorityLabel);
   
    //labels for priority
    const labels = ["High", "Normal", "Low"];
   
    //create the labels and append them to their container
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
    
    //due date input as a calendar
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = `due-date-${identifier}`;
    dueDateInput.required = true;
    form.appendChild(dueDateInput);

    return form;
}

export default formConstructor;