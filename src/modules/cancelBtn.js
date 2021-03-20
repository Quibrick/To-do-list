function btnConstructor(id, innerHTML, display) {

    const cancelBtn = document.createElement("button");
    cancelBtn.id = id;
    cancelBtn.innerHTML = innerHTML;
    cancelBtn.style.display = display;

    return cancelBtn;
}

export default btnConstructor;

