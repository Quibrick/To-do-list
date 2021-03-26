//constructs buttons for the DOM 
function btnConstructor(id, innerHTML, display) {

    const btn = document.createElement("button");
    btn.id = id;
    btn.innerHTML = innerHTML;
    btn.style.display = display;

    return btn;
}

export default btnConstructor;

