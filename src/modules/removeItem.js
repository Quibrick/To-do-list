function removeItem(id) {
    
    taskObjLocal = JSON.parse(localStorage.getItem(`task-${id}`));

    console.log(taskObjLocal);
    localStorage.removeItem(`task-${id}`);
    localStorage.setItem("id", id);

}

export default removeItem;