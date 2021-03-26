//Task item class
class Task {

    constructor (id, title, description, dueDate, priority) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    set ChangeTitle(title) {

        this.title = title;
    }

    set ChangeDescription(description) {

        this.description = description;
    }

}

export default Task;

