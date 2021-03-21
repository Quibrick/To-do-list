function formValidation(values) {

    const length = values.length;

    for(let i = 0; i < length; i++) {
        
        if(values[i] === '') {

            return false;
        }
    }

    return true;

}

export default formValidation;