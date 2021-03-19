function getValuesForm() {

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    let array = [title , description];

    return array;
}

export default getValuesForm;