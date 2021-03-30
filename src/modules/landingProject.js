import btnConstructor from "./btnConstructor";

function landingProject() {

    const title = document.getElementById("page-view-title");
    const tasksContainer = document.getElementById("tasks-container");

    const projectsContainer = document.getElementById("projects");
    title.textContent =  "My Project";


    const projectBtn = btnConstructor("landing-project", "My Project", "block");
    projectBtn.addEventListener("click", () => {

        title.textContent = "My Project";
        while (tasksContainer.firstChild) {

            tasksContainer.removeChild(tasksContainer.lastChild);
        }
    })

    projectBtn.classList.add("left-bar-btn");
    projectsContainer.appendChild(projectBtn);
}

export default landingProject;