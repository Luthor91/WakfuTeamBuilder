import { CLASS_DATA } from '../dataModel/class.js';
import { translate } from '../utils/translate.js';
import { getTeamRoles, setTeamRoles, teamHasClass } from '../dataModel/team.js';
import { getCurrentLanguage } from '../dataModel/translation.js';
import { getControlPressed, getShiftPressed } from '../events/eventKeyboardHandler.js';
import { saveTeamToLocalStorage } from '../storage/localStorage.js';
import { updateAll } from '../update/update.js';
import { displayFavoriteTeamsMenu } from './favorite.js';
import { displayClassRoles } from '../uiHandler/classInfos.js';

let selectedSlot = null;
let g_currentClassIndex = -1;
let g_isSelectionMenuDislayed = false;

function openSelectionMenu(slotIndex) {
    selectedSlot = slotIndex;
    const menu = document.getElementById("selection-menu");
    const menuContent = document.getElementById("menu-content");
    menuContent.innerHTML = "";

    Object.keys(CLASS_DATA.Classes).forEach(className => {
        const imgSrc = `male_${className.toLowerCase()}.png`;
        const isTaken = teamHasClass(className);

        // Conteneur principal
        const container = document.createElement("div");
        container.classList.add("class-container");
        if (isTaken) {
            container.classList.add("taken");
        }

        // Image de classe
        const img = _createClassImage(imgSrc);

        // Nom de la classe
        const textOverlay = document.createElement("div");
        const data_translator = className.toLocaleLowerCase().replaceAll(' ', '_');
        const l_currentLanguage = getCurrentLanguage();
        textOverlay.classList.add("class-name");
        textOverlay.setAttribute('data-translator', data_translator);
        textOverlay.textContent = translate(data_translator, l_currentLanguage);

        // Ajout des éléments dans le conteneur
        container.appendChild(img);
        container.appendChild(textOverlay);
        menuContent.appendChild(container);
    });

    menu.classList.remove("hidden");
    g_isSelectionMenuDislayed = true;

}


function hideSelectionMenu() {    
    const menu = document.getElementById("selection-menu");
    if (menu) {
        menu.classList.add("hidden");
        g_isSelectionMenuDislayed = false;
    }
}

// Fonction pour basculer la visibilité du menu des équipes sauvegardées
function toggleSavedTeamsMenu(escapePressed = false) {
    const menu = document.getElementById("saved-teams-menu");

    if (menu.classList.contains("hidden")) {
        if (escapePressed == true) {
            return;
        }
        displayFavoriteTeamsMenu();
        g_isSelectionMenuDislayed = true;
    } else {
        menu.classList.add("hidden");
        g_isSelectionMenuDislayed = false;

    }
}

function isSelectionMenuDisplayed() {
    return g_isSelectionMenuDislayed;
}

// Update createClassImage to handle shift-click
function _createClassImage(imgSrc) {
    const img = document.createElement("img");
    img.src = `assets/classes/${imgSrc}`;
    
    // Clic droit pour changer le genre
    img.oncontextmenu = (e) => {
        e.preventDefault();

        // Extraire seulement le nom du fichier sans le chemin complet
        const filename = img.src.split('/').pop();  // "male_warrior.png"
        const [gender, className] = filename.split('_');

        let newGender = gender === 'male' ? 'female' : 'male';
        let newImgSrc = `${newGender}_${className}`;

        img.src = `assets/classes/${newImgSrc}`;
        console.log(img.src);
        
        img.dataset.src = newImgSrc;  // Mettre à jour l'image actuelle

        if (selectedSlot !== null) {
            let l_teamRoles = getTeamRoles();
            l_teamRoles[selectedSlot].image = `assets/classes/${newImgSrc}`;
            setTeamRoles(l_teamRoles);
        }
    };

    // Clic gauche avec gestion du shift
    img.onclick = (_) => {
        handleClickOnSelectionMenuImage(img);
    }
    
    return img;
}


function handleClickOnSelectionMenuImage(img) {
    const l_isControlPressed = getControlPressed();
    if (l_isControlPressed) {
        const className = img.getAttribute('src').split('_', 2)[1].split('.', 1)[0];
        displayClassRoles(className);
        return;
        
    }

    const l_isShiftPressed = getShiftPressed();
    if (l_isShiftPressed) {
        // If shift is pressed, select this class but don't close the menu
        _selectMultipleClasses(img.getAttribute('src'));
    } else {
        // Normal behavior for regular click
        _selectSingleClass(img.getAttribute('src'));
    }
    
}


function _selectSingleClass(imgSrc) {
    if (selectedSlot !== null) {
        const slot = document.querySelector(`.slot[data-slot="${selectedSlot}"]`);
        if (slot) {
            slot.innerHTML = "";
            const img = document.createElement("img");
            img.src = `${imgSrc}`;            
            slot.appendChild(img);

            const className = _getClassNameFromFile(imgSrc);
            let selectedVoie = null;
            Object.entries(CLASS_DATA.Classes[className].Voies).forEach(([voie, data]) => {
                if (data.Id === 1) {
                    selectedVoie = voie;
                }
            });
            let l_teamRoles = getTeamRoles();
            l_teamRoles[selectedSlot] = {
                class: className,
                voie: selectedVoie,
                image: `${imgSrc}`
            };
            
            setTeamRoles(l_teamRoles);
            saveTeamToLocalStorage();
            updateAll();
        } else {
            console.error('Slot is null');
        }
    }
    hideSelectionMenu();
}

// Modified _selectMultipleClasses function
function _selectMultipleClasses(imgSrc) {
    const l_teamRoles = getTeamRoles();
    if (selectedSlot !== null && selectedSlot < l_teamRoles.length) {
        const slot = document.querySelector(`.slot[data-slot="${selectedSlot}"]`);
        if (slot) {
            slot.innerHTML = "";
            const img = document.createElement("img");
            img.src = `${imgSrc}`;
            slot.appendChild(img);
            const className = _getClassNameFromFile(imgSrc);
            let selectedVoie = null;
            Object.entries(CLASS_DATA.Classes[className].Voies).forEach(([voie, data]) => {
                if (data.Id === 1) {
                    selectedVoie = voie;
                }
            });
            let l_teamRoles = getTeamRoles();
            l_teamRoles[selectedSlot] = {
                class: className,
                voie: selectedVoie,
                image: `${imgSrc}`
            };
            setTeamRoles(l_teamRoles);
                
            saveTeamToLocalStorage();
            updateAll();

            // Update the selection menu to reflect the new "taken" classes
            _updateSelectionMenuWithTakenClasses();

            // Move to the next slot if available
            if (selectedSlot < 5) { // Assuming 6 slots (0-5)
                selectedSlot++;

                // Highlight the new selected slot
                const slots = document.querySelectorAll('.slot');
                slots.forEach(s => s.classList.remove('selected-slot'));
                const nextSlot = document.querySelector(`.slot[data-slot="${selectedSlot}"]`);
                if (nextSlot) {
                    nextSlot.classList.add('selected-slot');
                }
            } else {
                // If we're at the last slot, close the menu
                hideSelectionMenu();
                return;
            }
        } else {
            console.error('Slot is null');
        }
    }
}

// New function to update the "taken" classes in the selection menu
function _updateSelectionMenuWithTakenClasses() {
    const menuContent = document.getElementById("menu-content");
    if (!menuContent) return;
    
    // Get all class containers in the menu
    const classContainers = menuContent.querySelectorAll(".class-container");
    
    // For each container, check if the class is in the team
    classContainers.forEach(container => {
        const img = container.querySelector("img");
        if (img) {
            const imgSrc = img.getAttribute('src');            
            const className = _getClassNameFromFile(imgSrc);
            
            // Update the container class accordingly
            if (teamHasClass(className)) {
                container.classList.add("taken");
            } else {
                container.classList.remove("taken");
            }
        }
    });
}

// Fonction pour obtenir le nom de la classe à partir du nom de fichier
function _getClassNameFromFile(filename) {
    const classMatch = filename.match(/(male|female)_(\w+)\.png/);
    if (classMatch) {
        return classMatch[2].charAt(0).toUpperCase() + classMatch[2].slice(1);
    }
    return null;
}

function updateFocus() {
    const menuContent = document.getElementById("menu-content");
    const items = menuContent.children;
    // Retirer le focus de tous les éléments
    Array.from(items).forEach(item => item.classList.remove("focused-selectionMenu"));

    if (g_currentClassIndex >= 0 && g_currentClassIndex < items.length) {
        items[g_currentClassIndex].classList.add("focused-selectionMenu");
    }
}


function getCurrentClassIndex() {
    return g_currentClassIndex;
}

function setCurrentClassIndex(l_currentClassIndex) {
    g_currentClassIndex = l_currentClassIndex;
    updateFocus(g_currentClassIndex);
}

export { 
    openSelectionMenu, hideSelectionMenu, toggleSavedTeamsMenu, 
    _selectMultipleClasses, updateFocus, getCurrentClassIndex, 
    setCurrentClassIndex, isSelectionMenuDisplayed, handleClickOnSelectionMenuImage,
    g_currentClassIndex
};