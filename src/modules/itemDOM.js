function createItemDOM() {

    const content = document.getElementById("content");

    const breakPoint = document.createElement("br");

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    const addNewBtn = document.createElement("button");
    addNewBtn.classList.add("add-new-dropdown");
    addNewBtn.innerHTML = "Add new item";

    itemContainer.appendChild(addNewBtn);
    
    const form = document.createElement("form");
    form.classList.add("hidden-form");
    
    addNewBtn.addEventListener('click', () => {

        if (form.style.display = "none") {
            
            form.style.display = "block";

        }else {

            form.style.display = "none";

        }
    })
    
    const titleLabel = document.createElement("label");
    titleLabel.htmlFor = "title";
    titleLabel.innerHTML = "Title";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";

    form.appendChild(titleLabel);
    form.appendChild(titleInput)

    itemContainer.appendChild(form);
    content.appendChild(itemContainer);
}

export default createItemDOM;