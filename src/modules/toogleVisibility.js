function toogleVisibility(element,displayStyle) {

    if (element.style.display === "none") {
        
        element.style.display = `${displayStyle}`;

    }else {
        
        element.style.display = "none";
    }
}

export default toogleVisibility;