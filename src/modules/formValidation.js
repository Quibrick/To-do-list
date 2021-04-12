//validates the form inputs so there is no null entry
function formValidation(values) {

    const length = values.length;

    for(let i = 0; i < length; i++) {
        
        if(values[i] === '') {

            console.log("woops")
            return false;
        }
    }

    return true;
}

export default formValidation;