function toogleVisibility(form) {

    if (form.style.display === "none") {
        
        form.style.display = "flex";

    }else {
        
        form.style.display = "none";
    }
}

export default toogleVisibility;