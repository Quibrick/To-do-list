function nameForLocalStorage(projectName) {

    const localStorageName = projectName.replace(/\s/g, '');

    return localStorageName;
};

export default nameForLocalStorage;