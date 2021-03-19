import getValuesForm from "./getValuesForm";
import ToDo from "./todoClass";

function addNewItem(array) {

    const btn = document.getElementById("add-new-dropdown");

    btn.addEventListener('click', () => {

        const form = document.getElementById("forma").style.display = "block";

        let formValues = getValuesForm();
        const todoItem = new ToDo(formValues[0], formValues[1]);
        array.push(todoItem);
        localStorage.setItem("items", JSON.stringify(array));

        console.log(JSON.parse(localStorage.getItem("items") || "[]"));
    })
}

export default addNewItem;