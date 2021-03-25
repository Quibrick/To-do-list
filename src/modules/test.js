//Todo item class
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

class HashTable {

    constructor() {

        this.values = [];

    }

}

const hash = new HashTable();

let i = 0;

while(i < 10) {

    const task = new Task(i, "a", "b", "c", "g");
    hash.values.push(task);
    i++;
}

console.log(hash);