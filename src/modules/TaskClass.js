//Todo item class
class Task {

    constructor (id,title, description, dueDate, priority, htmlElement) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.htmlElement = htmlElement;
    };
    
}

export default Task;