import { getTeamRoles, setTeamRoles } from '../dataModel/team.js';
import { CLASS_DATA } from '../dataModel/class.js';
import { countRoles } from './roleContainers.js';
import { saveTeamToLocalStorage } from '../storage/localStorage.js';
import { updateAll } from '../update/update.js';


function updateSlotOrder() {
    // Créer une copie du tableau pour ne pas modifier l'original directement
    let l_teamRoles = getTeamRoles();
    let sortedRoles = JSON.parse(JSON.stringify(l_teamRoles));

    // Définir les critères de tri par ordre de priorité
    const sortingCriteria = [
        (slot) => slotHasRole(slot, "Shield"),         // 1. Shield
        (slot) => slotHasRole(slot, "Heal") && slotHasRole(slot, "Sub Shield"), // 2. Heal + Sub Shield
        (slot) => slotHasRole(slot, "Heal"),           // 3. Heal
        (slot) => slotVoieContains(slot, "Utilitaire"),     // 4. Utilitaire
        (slot) => slotHasRole(slot, "Placeur"),        // 5. Placeur
        (slot) => slotHasRole(slot, "Area"),           // 6. Area
        (slot) => slotHasRole(slot, "Burst")           // 7. Burst
    ];

    // Filtrer les slots non vides
    const nonEmptySlots = sortedRoles.filter(slot => slot.class && slot.voie);
    // Filtrer les slots vides
    const emptySlots = sortedRoles.filter(slot => !slot.class || !slot.voie);
    
    // Tableau pour stocker les résultats triés
    let result = [];

    // Pour chaque critère, trouver et ajouter les slots correspondants
    for (const criterion of sortingCriteria) {
        let matchingSlots = nonEmptySlots.filter(slot => criterion(slot));
        
        // Trier les éléments correspondants par nombre de rôles en cas d'égalité
        matchingSlots.sort((a, b) => countRoles(b) - countRoles(a));

        // Ajouter les slots correspondants au résultat
        result.push(...matchingSlots);

        // Retirer les slots correspondants de la liste originale
        nonEmptySlots.splice(0, nonEmptySlots.length, ...nonEmptySlots.filter(slot => !matchingSlots.includes(slot)));
    }

    // Ajouter les slots restants qui n'ont pas été classés
    result.push(...nonEmptySlots);

    // Ajouter les slots vides à la fin
    result.push(...emptySlots);

    // S'assurer que le tableau a toujours la même taille que l'original
    while (result.length < l_teamRoles.length) {
        result.push({ class: null, voie: null, image: null });
    }

    // Retourner le tableau trié au lieu de simplement modifier teamRoles
    return result.slice(0, l_teamRoles.length);
}


function updateTeamContainer() {
    const teamContainer = document.getElementById("team-container");

    let l_teamRoles = getTeamRoles();
    l_teamRoles.forEach((slot, index) => {
        const slotElement = teamContainer.children[index];

        if (slotElement) {
            slotElement.setAttribute('data-slot', index);

            if (slot.class) {
                let imgElement = slotElement.querySelector("img");

                if (!imgElement) {
                    imgElement = document.createElement("img");
                    slotElement.appendChild(imgElement);
                }

                if (slot.image) {
                    imgElement.src = slot.image;
                } else {
                    imgElement.src = CLASS_DATA.Classes[slot.class].Image;
                    slot.image = CLASS_DATA.Classes[slot.class].Image;
                }

                if (slot.voie && !CLASS_DATA.Classes[slot.class].Voies[slot.voie]) {
                    console.warn(`La voie ${slot.voie} n'existe pas pour la classe ${slot.class}`);
                    slot.voie = null;
                }

                if (!slot.voie) {
                    const voies = Object.keys(CLASS_DATA.Classes[slot.class].Voies);
                    if (voies.length > 0) {
                        slot.voie = voies[0];
                    }
                }

                // Ajout du bouton de suppression (si absent)
                let deleteButton = slotElement.querySelector(".delete-button");
                if (!deleteButton) {
                    deleteButton = document.createElement("div");
                    deleteButton.classList.add("delete-button-slot");
                    deleteButton.textContent = "✖";
                    deleteButton.onclick = (event) => {
                        // Empêche l'ouverture du pannel de selection de classe
                        event.stopPropagation(); 
                        clearSlot(index);
                    };
                    slotElement.appendChild(deleteButton);
                }

            } else {
                slotElement.innerHTML = "";
                l_teamRoles[index] = { class: null, voie: null, image: null };
            }
        } else {
            console.error('Slot element is null');
        }   
    });

    setTeamRoles(l_teamRoles);

    const rolesPanel = document.getElementById("team-roles-panel");
    if (rolesPanel) {
        l_teamRoles.forEach((slot, index) => {
            const panelSlot = rolesPanel.children[index];
            if (panelSlot) {
                const voieSelect = panelSlot.querySelector(".voie-select");
                if (voieSelect && slot.voie) {
                    const option = voieSelect.querySelector(`option[value="${slot.voie}"]`);
                    if (option) {
                        option.selected = true;
                    }
                }
            }
        });
    }
}


function clearSlot(slotIndex) {
    const slot = document.querySelector(`.slot[data-slot="${slotIndex}"]`);
    if (slot) {
        slot.innerHTML = "";
        let l_teamRoles = getTeamRoles();
        l_teamRoles[slotIndex] = { class: null, voie: null, image: null };
        setTeamRoles(l_teamRoles);
        saveTeamToLocalStorage();
        updateAll();
    } else {
        console.error('Slot is null');
    }
}

/**
 * Vérifie si un slot possède un rôle donné.
 */
function slotHasRole(slot, role) {
    if (!slot.class || !slot.voie) return false;
    return CLASS_DATA.Classes[slot.class]?.Voies[slot.voie]?.Roles.includes(role);
}


/**
 * Vérifie si le nom de la "voie" du slot contient un mot spécifique.
 */
function slotVoieContains(slot, keyword) {
    if (!slot.class || !slot.voie) return false;
    return slot.voie.toLowerCase().includes(keyword.toLowerCase());
}

export { updateSlotOrder, updateTeamContainer, clearSlot, slotHasRole, slotVoieContains };