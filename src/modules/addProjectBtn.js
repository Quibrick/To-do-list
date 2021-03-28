import btnConstructor from "./btnConstructor";

function addProjectBtn() {

    const projectsContainer = document.getElementById("projects");

    const addNewProject = btnConstructor("create-new-project", "+ Create new project", "block");
    addNewProject.classList.add("left-bar-btn");

    projectsContainer.appendChild(addNewProject);
}

export default addProjectBtn;