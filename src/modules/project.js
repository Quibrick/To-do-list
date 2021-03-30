import btnConstructor from "./btnConstructor";

function project(projectNameInput) {

    const title = document.getElementById("page-view-title");
    const tasksContainer = document.getElementById("tasks-container");

    const projectsContainer = document.getElementById("projects");


    const projectBtn = btnConstructor(`project-${projectNameInput.value}`, `${projectNameInput.value}`, "block");
    projectBtn.addEventListener("click", () => {

        title.textContent =  String(projectNameInput.value);
        console.log(projectNameInput.value);
        while (tasksContainer.firstChild) {

            tasksContainer.removeChild(tasksContainer.lastChild);
        }
    })

    projectBtn.classList.add("left-bar-btn");
    projectsContainer.appendChild(projectBtn);
}

export default project;