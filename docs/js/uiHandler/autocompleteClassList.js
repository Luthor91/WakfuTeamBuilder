let g_isAutocompleteValidated = false;

function getAutocompleteValidated() {
    return g_isAutocompleteValidated;
}

function setAutocompleteValidated(l_isAutocompleteValidated) {
    g_isAutocompleteValidated = l_isAutocompleteValidated;
}

function isAutocompleteClassListHidden() {
    const container = document.getElementById("autocomplete-container");
    return container.style.display == "none";
}

function isAutocompleteClassListDisplayed() {
    const container = document.getElementById("autocomplete-container");
    return container.style.display == "flex";
}

function hideAutocompleteClassList() {
    const container = document.getElementById("autocomplete-container");
    container.style.display = "none";
}

function displayAutocompleteClassList() {
    const container = document.getElementById("autocomplete-container");
    container.style.display = "flex";
}

function toggleAutocompleteClassList() {
    const container = document.getElementById("autocomplete-container");
    const isDisplayed = container.style.display == "flex" ? true : false;
    if (isDisplayed) {
        container.style.display = "none";
    } else {
        container.style.display = "flex";
        document.getElementById("autocomplete-input").focus();
    }
}


export { 
    getAutocompleteValidated, setAutocompleteValidated,
    isAutocompleteClassListHidden, isAutocompleteClassListDisplayed, 
    hideAutocompleteClassList, displayAutocompleteClassList, 
    toggleAutocompleteClassList 
};