import { CLASS_DATA, CLASS_LIST } from "../dataModel/class.js";
import { initTeamRoles, isTeamHasEmptySlot, setTeamRoles } from "../dataModel/team.js";
import { saveTeamToLocalStorage } from "../storage/localStorage.js";
import { setAutocompleteValidated } from "../uiHandler/autocompleteClassList.js";
import { updateAll } from './update.js';


function updateAutocompleteClassList(filter) {
    const list = document.getElementById("autocomplete-list");
    const items = list.querySelectorAll(".autocomplete-item");

    let visibleCount = 0;

    items.forEach(item => {
        const text = item.dataset.value;
        if (text.toLowerCase().startsWith(filter.toLowerCase())) {
            item.style.display = "block";
            visibleCount++;

            // Mise en évidence de la partie correspondante (sans altérer la casse)
            const match = `<span class="highlighted">${text.slice(0, filter.length)}</span>${text.slice(filter.length)}`;
            item.innerHTML = match;

            // Sélectionner automatiquement si c'est le seul
            if (visibleCount === 1) {
                item.classList.add("selected");
            } else {
                item.classList.remove("selected");
            }
        } else {
            item.style.display = "none";
            item.classList.remove("selected");
        }
    });

    // Si un seul élément est visible, on le valide directement
    if (visibleCount === 1) {
        setAutocompleteValidated(true);
    }
}


function validateClassListSelection() {
    const list = document.getElementById("autocomplete-list");
    const input = document.getElementById("autocomplete-input");
    const selectedItem = list.querySelector(".selected");

    if (!selectedItem) return;

    const value = selectedItem.textContent;
    const loweredValue = selectedItem.textContent.toLowerCase();

    let l_teamRoles = initTeamRoles();

    for (const [index, slot] of l_teamRoles.entries()) {
        
        if (!isTeamHasEmptySlot(index)) continue;

        // Vérifier si la classe existe directement
        const classData = CLASS_DATA.Classes[value];

        if (!classData) continue;

        // Vérifier si la voie avec ID 1 existe
        const voieName = Object.keys(classData.Voies).find(
            (key) => classData.Voies[key].Id === 1
        );
            
        if (voieName) {
            l_teamRoles[index] = {
                class: value,
                voie: voieName,
                image: classData.Image,
            };
            input.textContent = "";
            console.log(l_teamRoles);
            
            break; // Sortir de la boucle après avoir rempli un slot vide
        }
    }

    setTeamRoles(l_teamRoles);
    saveTeamToLocalStorage();
    updateAll();
    _emptyAutocompleteAutocompleteInput();

}


function _emptyAutocompleteAutocompleteInput() {
    const autocompleteInput = document.getElementById("autocomplete-input");
    if (autocompleteInput == null) return;

    autocompleteInput.value = '';
    setAutocompleteValidated(false);
    updateAutocompleteClassList('');
}


export { updateAutocompleteClassList, validateClassListSelection };