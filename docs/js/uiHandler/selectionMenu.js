import { classData } from './dataModel/class.js';
import { translate } from './dataModel/translation.js';
import { teamRoles } from './teamManagement.js';


let selectedSlot = null;


// Update the openSelectionMenu function to track shift key state
function openSelectionMenu(slotIndex) {
    selectedSlot = slotIndex;
    const menu = document.getElementById("selection-menu");
    const menuContent = document.getElementById("menu-content");
    menuContent.innerHTML = "";
    Object.keys(classData.Classes).forEach(className => {
        const imgSrc = `male_${className.toLowerCase()}.png`;
        // Vérifier si la classe est déjà prise
        const isTaken = teamRoles.some(role => role.class === className);
        // Créer un conteneur pour l'image et le texte
        const container = document.createElement("div");
        container.classList.add("class-container");
        if (isTaken) {
            container.classList.add("taken"); // Ajoute la classe CSS si la classe est prise
        }
        // Créer l'image
        const img = createClassImage(imgSrc);
        // Créer le texte
        const textOverlay = document.createElement("div");
        const data_translator = className.toLocaleLowerCase().replaceAll(' ', '_');
        textOverlay.classList.add("class-name");
        textOverlay.setAttribute('data-translator', data_translator);
        textOverlay.textContent = translate(data_translator, currentLanguage);
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


export { openSelectionMenu, closeSelectionMenu };