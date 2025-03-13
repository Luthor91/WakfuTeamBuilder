import { CLASS_DATA } from '../dataModel/class.js';
import { translate } from '../utils/translate.js';
import { getTeamRoles, setTeamRoles } from '../dataModel/team.js';
import { getCurrentLanguage } from '../dataModel/translation.js';
import { getControlPressed, getShiftPressed } from '../events/eventKeyboardHandler.js';
import { saveTeamToLocalStorage } from '../storage/localStorage.js';
import { updateAll } from '../update/update.js';
import { showSavedTeamsMenu } from './favorite.js';
import { showClassRoles } from '../uiHandler/classInfos.js';

let selectedSlot = null;


// Update the openSelectionMenu function to track shift key state
function openSelectionMenu(slotIndex) {
    selectedSlot = slotIndex;
    const menu = document.getElementById("selection-menu");
    const menuContent = document.getElementById("menu-content");
    menuContent.innerHTML = "";
    Object.keys(CLASS_DATA.Classes).forEach(className => {
        const imgSrc = `male_${className.toLowerCase()}.png`;
        // Vérifier si la classe est déjà prise
        let l_teamRoles = getTeamRoles();
        const isTaken = l_teamRoles.some(role => role.class === className);
        // Créer un conteneur pour l'image et le texte
        const container = document.createElement("div");
        container.classList.add("class-container");
        if (isTaken) {
            container.classList.add("taken"); // Ajoute la classe CSS si la classe est prise
        }
        // Créer l'image
        const img = _createClassImage(imgSrc);
        // Créer le texte
        const textOverlay = document.createElement("div");
        const data_translator = className.toLocaleLowerCase().replaceAll(' ', '_');
        const l_currentLanguage = getCurrentLanguage();
        textOverlay.classList.add("class-name");
        textOverlay.setAttribute('data-translator', data_translator);
        textOverlay.textContent = translate(data_translator, l_currentLanguage);
        // Ajouter l'image et le texte dans le conteneur
        container.appendChild(img);
        container.appendChild(textOverlay);
        menuContent.appendChild(container);
    });
    menu.classList.remove("hidden");
}

function closeSelectionMenu() {    
    const menu = document.getElementById("selection-menu");
    if (menu) {
        menu.classList.add("hidden");
    }
}

// Fonction pour basculer la visibilité du menu des équipes sauvegardées
function toggleSavedTeamsMenu(escapePressed = false) {
    const menu = document.getElementById("saved-teams-menu");

    if (menu.classList.contains("hidden")) {
        if (escapePressed == true) {
            return;
        }
        showSavedTeamsMenu();
    } else {
        menu.classList.add("hidden");
    }
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

        const l_isControlPressed = getControlPressed();
        if (l_isControlPressed) {
            const className = img.getAttribute('src').split('_', 2)[1].split('.', 1)[0];
            showClassRoles(className);
            return;
            
        }

        const l_isShiftPressed = getShiftPressed();
        if (l_isShiftPressed) {
            // If shift is pressed, select this class but don't close the menu
            selectClassWithShift(img.getAttribute('src'));
        } else {
            // Normal behavior for regular click
            _selectClass(img.getAttribute('src'));
        }
    }
    
    return img;
}

function _selectClass(imgSrc) {
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
    closeSelectionMenu();
}

// Modified selectClassWithShift function
function selectClassWithShift(imgSrc) {
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
            _updateSelectionMenuTakenClasses();

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
                closeSelectionMenu();
                return;
            }
        } else {
            console.error('Slot is null');
        }
    }
}

// New function to update the "taken" classes in the selection menu
function _updateSelectionMenuTakenClasses() {
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
            
            // Check if this class is in the team
            const l_teamRoles = getTeamRoles();
            const isTaken = l_teamRoles.some(role => role.class === className);
            
            // Update the container class accordingly
            if (isTaken) {
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

export { openSelectionMenu, closeSelectionMenu, toggleSavedTeamsMenu, selectClassWithShift };