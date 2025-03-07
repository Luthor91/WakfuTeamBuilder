import { classData, LANGUAGES, TRANSLATIONS, translate } from './ext/utils_package.js';


const IMPORTANT_ROLES = [
    "Area", "Single Target", 
    "Heal", "Shield", "Placeur", "Resurection",
    "Buff DI", "Rall Resistance"
];

const OPTIONAL_ROLES = [
    "Burst", "Ranged", "Melee", "Poison", 
    "Entity Stabilized", "Enemy Stabilized", "Allies Stabilized", "Self Stabilized", "Invulnerability",
    "Sub Shield", "Sub Heal", "Sub DPT", "Sub Tank", "Sub Placeur", "Off Tank",
    "Buff AP", "Buff MP", "Buff Resistance", "Buff Crit", "Buff PO", "Buff Parade", "Buff WP",
    "Rall AP", "Rall MP", "Rall DI", "Rall Crit", "Rall PO", "Rall Parade", "Rall WP",
    "Anti Shield", "Anti Heal"
];

const CATEGORIES = {
    'Damage Type': ["Constant", "Burst", "Single Target", "Area", "Melee", "Ranged", "Indirect"],
    'Buff': ["Buff DI", "Buff AP", "Buff MP", "Buff Resistance", "Buff Crit", "Buff PO", "Buff Parade", "Buff WP"],
    'Rall': ["Rall DI", "Rall AP", "Rall MP", "Rall Resistance", "Rall Crit", "Rall PO", "Rall Parade", "Rall WP"],
    'Sub Roles': ["Off Tank", "Sub Shield", "Sub Heal", "Sub DPT", "Sub Placeur"],
    'Specific': ["Resurection", "Anti Shield", "Anti Heal", "Enemy Stabilized", "Allies Stabilized", "Self Stabilized", "Invulnerability"]
};


let currentLanguage = LANGUAGES.EN;
let teamRoles = Array(6).fill({ class: null, voie: null, image: null });
let selectedSlot = null;

let isShiftPressed = false;
let isControlPressed = false;


// Initialisation des événements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slot').forEach(slot => {
        if (slot) {
            slot.addEventListener('click', () => {
                openSelectionMenu(parseInt(slot.getAttribute('data-slot')));
            });

            // Ajout du gestionnaire de clic droit
            slot.addEventListener('contextmenu', (e) => {
                e.preventDefault(); // Empêche l'apparition du menu contextuel par défaut
                const slotIndex = parseInt(slot.getAttribute('data-slot'));
                clearSlot(slotIndex);
            });
        } else {
            console.error('Slot is null');
        }
    });

    // Gestionnaires d'événements pour les boutons
    document.getElementById("save-team-button").addEventListener("click", saveCurrentTeam);
    document.getElementById("show-teams-button").addEventListener("click", toggleSavedTeamsMenu);
    // Gestionnaire pour le bouton Fermer
    document.getElementById('close-menu-btn').addEventListener('click', closeSelectionMenu);
    loadTeamToLocalStorage();
    // Initialisation des panneaux
    updateAll();
    setLanguage("en");
});


document.addEventListener('keyup', function(e) {
    if (e.key === 'Shift') {
        isShiftPressed = false;
    }
    if (e.key === 'Control') {
        isControlPressed = false;
        closeRolesModal();
    }

});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Shift') {
        isShiftPressed = true;
    }
    if (e.key === 'Control') {
        isControlPressed = true;
    }
    if (e.key === 'Escape') {
        closeSelectionMenu();
        closeRolesModal();
        toggleSavedTeamsMenu(true);
    }
});


function updateAll() {
    teamRoles = updateSlotOrder();
    updateTeamContainer();
    updateRolesPanel();
    updateRolesSummary();
    updateGauges(); 
}


function setLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll("[data-translator]").forEach(element => {
        const translationKey = element.getAttribute('data-translator'); 
        if (TRANSLATIONS[translationKey] && TRANSLATIONS[translationKey][lang]) {
            element.textContent = TRANSLATIONS[translationKey][lang];
        }
    });
}


document.getElementById('btn_export').onclick = function() {
    console.log("Export function triggered");

    let result = [];

    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.Classes[slot.class]?.Voies;
            if (classVoies && classVoies[slot.voie]) {
                const classId = classData.Classes[slot.class].Id; // ID de la classe
                const roleId = classVoies[slot.voie].Id; // ID du rôle dans la classe
                result.push(`${classId}-${roleId}`);
            }
        }
    });

    const exportString = result.join(";") + ";";
    
    // Copier dans le presse-papier
    navigator.clipboard.writeText(exportString).then(() => {
        console.log("Exported string copied to clipboard:", exportString);

        // Créer et afficher la tooltip près du bouton
        const tooltip = document.createElement('div');
        tooltip.textContent = "Code copié dans le presse-papier";
        tooltip.classList.add('temp-notification');

        tooltip.style.top = `${this.getBoundingClientRect().top - 40}px`;
        tooltip.style.left = `${this.getBoundingClientRect().left + this.offsetWidth / 2 + 50}px`;

        document.body.appendChild(tooltip);

        // Maintenir la tooltip visible pendant 1,5 secondes, puis commencer la disparition
        setTimeout(() => {
            // Graduellement rendre la tooltip transparente
            let opacity = 1;
            const fadeOut = setInterval(() => {
                if (opacity <= 0) {
                    clearInterval(fadeOut);
                    tooltip.remove(); // Retirer la tooltip une fois qu'elle est complètement transparente
                } else {
                    opacity -= 0.05;
                    tooltip.style.opacity = opacity;
                }
            }, 50); // Changer l'opacité tous les 50ms
        }, 1500); // Après 1,5 secondes, commencer la disparition

        tooltip.onclick = function() {
            tooltip.classList.add('hidden');
        }

    }).catch(err => {
        console.error("Failed to copy to clipboard:", err);
    });
};


document.getElementById('btn_import').onclick = async function() {
    console.log("Import function triggered");

    let importString = document.getElementById("role-input").value.trim();

    // Si l'entrée est vide, essayer de récupérer le contenu du presse-papiers
    if (importString === "") {
        try {
            importString = await navigator.clipboard.readText();
            importString = importString.trim();
            console.log("Presse-papiers récupéré :", importString);
        } catch (err) {
            console.error("Impossible d'accéder au presse-papiers :", err);
            return;
        }
    }

    if (importString === "") {
        console.log("Aucune donnée à importer");
        return;
    }


    const rolePairs = importString.split(";").filter(pair => pair !== "");
    
    // Réinitialiser teamRoles avec des slots vides
    teamRoles = Array(6).fill().map(() => ({ class: null, voie: null, image: null }));
    
    let index = 0;
    rolePairs.forEach(pair => {
        if (pair && index < teamRoles.length) {
            const [classId, roleId] = pair.split("-");
            
            // Rechercher la classe correspondant à l'ID
            for (const className in classData.Classes) {
                if (classData.Classes[className].Id.toString() === classId) {
                    const classVoies = classData.Classes[className]?.Voies;
                    
                    // Rechercher la voie correspondant à l'ID de rôle
                    for (const voieName in classVoies) {
                        if (classVoies[voieName].Id.toString() === roleId) {
                            teamRoles[index] = {
                                class: className,
                                voie: voieName,
                                image: classData.Classes[className].Image
                            };
                            index++;
                            break;
                        }
                    }
                    break;
                }
            }
        }
    });
    
    updateAll();
    
    console.log("Import completed");
};


document.getElementById('main-gauge-DPT').onclick = function() {
    const subGaugeContainer = document.getElementById(`sub-gauges-DPT`);
    
    // Cacher toutes les sous-jauges sauf celle cliquée
    document.querySelectorAll(".sub-gauges").forEach(el => {
        if (el !== subGaugeContainer) {
            el.classList.add("hidden");
        }
    });

    // Alterner l'affichage de la sous-jauge cliquée
    subGaugeContainer.classList.toggle("hidden");
}

document.getElementById('main-gauge-Support').onclick = function() {
    const subGaugeContainer = document.getElementById(`sub-gauges-Support`);
    
    // Cacher toutes les sous-jauges sauf celle cliquée
    document.querySelectorAll(".sub-gauges").forEach(el => {
        if (el !== subGaugeContainer) {
            el.classList.add("hidden");
        }
    });

    // Alterner l'affichage de la sous-jauge cliquée
    subGaugeContainer.classList.toggle("hidden");
}

document.getElementById('main-gauge-Entrave').onclick = function() {
    const subGaugeContainer = document.getElementById(`sub-gauges-Entrave`);
    
    // Cacher toutes les sous-jauges sauf celle cliquée
    document.querySelectorAll(".sub-gauges").forEach(el => {
        if (el !== subGaugeContainer) {
            el.classList.add("hidden");
        }
    });

    // Alterner l'affichage de la sous-jauge cliquée
    subGaugeContainer.classList.toggle("hidden");
}

document.getElementById("flag_french").onclick = function() {    
    setLanguage("fr");
};

document.getElementById("flag_english").onclick = function() {
    setLanguage("en");
};


function updateTeamRoles() {
    const rolesContainer = document.getElementById('roles-under-gauge');
    rolesContainer.innerHTML = ''; // Réinitialiser la section des rôles
    const currentRoles = [];
    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.Classes[slot.class].Voies;
            if (classVoies[slot.voie]) {
                classVoies[slot.voie].Roles.forEach(role => {
                    currentRoles.push(role);
                });
            }
        }
    });
    Object.keys(CATEGORIES).forEach(category => {
        const categoryRoles = CATEGORIES[category].filter(role => currentRoles.includes(role));
        const missingImportant = CATEGORIES[category].filter(role => !currentRoles.includes(role) && IMPORTANT_ROLES.includes(role));
        const missingOptional = CATEGORIES[category].filter(role => !currentRoles.includes(role) && OPTIONAL_ROLES.includes(role));
        if (categoryRoles.length || missingImportant.length || missingOptional.length) {
            // Création du conteneur de catégorie
            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('role-category');
            // Titre de la catégorie
            const categoryTitle = document.createElement('h4');
            categoryTitle.textContent = category;
            categoryTitle.setAttribute('data-translator', category.toLocaleLowerCase().replaceAll(' ', '_'));
            categoryTitle.classList.add('category-title');
            categoryTitle.style.cursor = "pointer"; 
            // Conteneur des rôles
            const rolesWrapper = document.createElement('div');
            rolesWrapper.classList.add('roles-wrapper');
            categoryTitle.addEventListener("click", function () {
                rolesWrapper.style.display = rolesWrapper.style.display === "none" ? "flex" : "none";
            });
            // Fonction pour ajouter les rôles avec un style badge
            const displayRoles = (roles, className) => {
                roles.forEach(role => {
                    const roleElement = document.createElement('span');
                    const data_translator = role.toLocaleLowerCase().replaceAll(' ', '_');
                    roleElement.classList.add('role-badge', className);
                    roleElement.textContent = role;
                    roleElement.setAttribute('data-translator', data_translator);
                    roleElement.textContent = translate(data_translator, currentLanguage);
                    rolesWrapper.appendChild(roleElement);
                });
            };
            // Ajout des rôles avec différentes couleurs
            displayRoles(categoryRoles, 'filled-role'); // Vert
            displayRoles(missingImportant, 'important-role'); // Rouge
            displayRoles(missingOptional, 'optional-role'); // Jaune
            // Ajout des éléments au conteneur
            categoryContainer.appendChild(categoryTitle);
            categoryContainer.appendChild(rolesWrapper);
            rolesContainer.appendChild(categoryContainer);
        }
    });
    updateGauges();
}


function updateTeamContainer() {
    // Récupérer le conteneur d'équipe
    const teamContainer = document.getElementById("team-container");

    // Parcourir chaque slot dans teamRoles
    teamRoles.forEach((slot, index) => {
        // Récupérer l'élément slot correspondant
        const slotElement = teamContainer.children[index];

        if (slotElement) {
            slotElement.setAttribute('data-slot', index); // Assigner l'attribut data-slot

            // Si le slot contient une classe (n'est pas vide)
            if (slot.class) {
                // Chercher si une image existe déjà dans ce slot
                let imgElement = slotElement.querySelector("img");

                // Si aucune image n'existe, en créer une nouvelle
                if (!imgElement) {
                    imgElement = document.createElement("img");
                    slotElement.appendChild(imgElement);
                }

                // Mettre à jour la source de l'image
                if (slot.image) {
                    imgElement.src = slot.image;
                } else {
                    imgElement.src = classData.Classes[slot.class].Image;
                    // Mettre à jour slot.image pour la cohérence
                    slot.image = classData.Classes[slot.class].Image;
                }

                // Vérifier si la voie existe pour cette classe
                if (slot.voie && !classData.Classes[slot.class].Voies[slot.voie]) {
                    console.warn(`La voie ${slot.voie} n'existe pas pour la classe ${slot.class}`);
                    slot.voie = null; // Réinitialiser si la voie n'est pas valide
                }

                // Si la voie n'est pas définie, essayer de définir une voie par défaut
                if (!slot.voie) {
                    // Essayer de trouver la première voie disponible
                    const voies = Object.keys(classData.Classes[slot.class].Voies);
                    if (voies.length > 0) {
                        slot.voie = voies[0];
                    }
                }
            } else {
                // Si le slot est vide, supprimer tout contenu
                slotElement.innerHTML = "";
                // Réinitialiser complètement le slot dans teamRoles
                teamRoles[index] = { class: null, voie: null, image: null };
            }
        } else {
            console.error('Slot element is null');
        }
    });

    // Mettre à jour également les sélecteurs de voie dans le panneau des rôles
    const rolesPanel = document.getElementById("team-roles-panel");
    if (rolesPanel) {
        teamRoles.forEach((slot, index) => {
            const panelSlot = rolesPanel.children[index];
            if (panelSlot) {
                const voieSelect = panelSlot.querySelector(".voie-select");
                if (voieSelect && slot.voie) {
                    // Trouver et sélectionner l'option correspondant à la voie actuelle
                    const option = voieSelect.querySelector(`option[value="${slot.voie}"]`);
                    if (option) {
                        option.selected = true;
                    }
                }
            }
        });
    }
}


function updateGauges() {
    // Objet pour stocker les sommes des statistiques
    const totalStats = {};
    
    // Parcourir tous les membres de l'équipe et additionner leurs stats
    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.Classes[slot.class].Voies;
            if (classVoies[slot.voie]) {
                const notes = classVoies[slot.voie].Notes;
                for (const category in notes) {
                    const categoryData = notes[category];
                    for (const statName in categoryData) {
                        const statValue = categoryData[statName];
                        // Initialiser la stat si elle n'existe pas encore
                        if (!totalStats[statName]) {
                            totalStats[statName] = 0;
                        }
                        totalStats[statName] = Math.min(totalStats[statName] + statValue, 10);
                    }
                }
            }
        }
    });
    
    // Mettre à jour les jauges avec les sommes calculées
    for (const statName in totalStats) {
        const statGaugeId = `gauge-${statName}`;
        const statElement = document.getElementById(statGaugeId);
        if (statElement) {
            updateGaugeBar(statElement, totalStats[statName]);
        }
    }
}


function updateGaugeBar(element, value) {
    // Mettre à jour l'attribut data-value
    element.setAttribute('data-value', value);
    
    // Mettre à jour la largeur
    element.style.setProperty('--gauge-width', `${value * 10}%`);
    
    // Déterminer la couleur en fonction de la valeur
    let color;
    if (value <= 0) {
        color = '#ff0000';  // Rouge
    } else if (value <= 2) {
        color = '#ff5500';  // Rouge-Orange
    } else if (value <= 5) {
        color = '#ffaa00';  // Orange
    } else if (value <= 7) {
        color = '#aaff00';  // Vert-Orange
    } else {
        color = '#00ff00';  // Vert
    }
    
    // Appliquer la couleur
    element.style.setProperty('--gauge-color', color);
}


function updateSlotOrder() {
    // Créer une copie du tableau pour ne pas modifier l'original directement
    let sortedRoles = JSON.parse(JSON.stringify(teamRoles));

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
    while (result.length < teamRoles.length) {
        result.push({ class: null, voie: null, image: null });
    }

    // Retourner le tableau trié au lieu de simplement modifier teamRoles
    return result.slice(0, teamRoles.length);
}

/**
 * Vérifie si un slot possède un rôle donné.
 */
function slotHasRole(slot, role) {
    if (!slot.class || !slot.voie) return false;
    return classData.Classes[slot.class]?.Voies[slot.voie]?.Roles.includes(role);
}


/**
 * Vérifie si le nom de la "voie" du slot contient un mot spécifique.
 */
function slotVoieContains(slot, keyword) {
    if (!slot.class || !slot.voie) return false;
    return slot.voie.toLowerCase().includes(keyword.toLowerCase());
}


/**
 * Compte le nombre total de rôles d'un slot.
 */
function countRoles(slot) {
    if (!slot.class || !slot.voie) return 0;
    return classData.Classes[slot.class]?.Voies[slot.voie]?.Roles.length || 0;
}



// Fonction pour compter les rôles DPT et Support
function getElementsDPT() {
    let elementsDPT = [];

    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.Classes[slot.class].Voies;
            const classElements = classData.Classes[slot.class].Elements;
            if (classVoies[slot.voie]) {
                if (slot.voie.startsWith('DPT')) {
                    elementsDPT.push(...classElements)
                }
            }
        }
    });
    
    return elementsDPT;
}


// Fonction pour compter les rôles DPT et Support
function countRolesDPTandSupport() {
    let dptCount = 0;
    let supportCount = 0;

    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.Classes[slot.class].Voies;
            if (classVoies[slot.voie]) {
                if (slot.voie.startsWith('DPT')) {
                    dptCount++;
                } else if (slot.voie.startsWith('Support')) {
                    supportCount++;
                }
            }
        }
    });
    

    return { dptCount, supportCount };
}


// Fonction pour compter les rôles DPT et Support
function hasStabilizedRole() {
    for (const slot of teamRoles) {
        if (slot.class && slot.voie) {
            const classVoies = classData.Classes[slot.class].Voies;
            
            if (classVoies[slot.voie].Roles.includes("Entity Stabilized") 
                || classVoies[slot.voie].Roles.includes("Self Stabilized")
            ) {
                return true;
            }
        }
    };
    
    return false;
}


// Fonction pour compter les rôles DPT et Support
function hasInvulnerabilityRole() {
    for (const slot of teamRoles) {
        if (slot.class && slot.voie) {
            const classVoies = classData.Classes[slot.class].Voies;
            if (classVoies[slot.voie].Roles.includes("Invulnerability")) {
                return true;
            }
        }
    }
    return false;
}



// Fonction pour vider un slot
function clearSlot(slotIndex) {
    const slot = document.querySelector(`.slot[data-slot="${slotIndex}"]`);
    if (slot) {
        slot.innerHTML = "";
        teamRoles[slotIndex] = { class: null, voie: null, image: null };
        updateAll();
    } else {
        console.error('Slot is null');
    }
}

// Fonction pour obtenir le nom de la classe à partir du nom de fichier
function getClassNameFromFile(filename) {
    const classMatch = filename.match(/(male|female)_(\w+)\.png/);
    if (classMatch) {
        return classMatch[2].charAt(0).toUpperCase() + classMatch[2].slice(1);
    }
    return null;
}

// Mettre à jour le résumé des rôles
function updateRolesSummary() {
    const summaryContainerWarns = document.getElementById('roles-summary-content-warns');
    const summaryContainerRequired = document.getElementById('roles-summary-content-required');
    
    summaryContainerWarns.innerHTML = ''; // Vider les warnings
    summaryContainerRequired.innerHTML = ''; // Vider les rôles requis
    
    const presentRoles = new Set();
    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.Classes[slot.class].Voies;
            if (classVoies[slot.voie]) {
                if (slot.voie.startsWith('DPT')) {
                    presentRoles.add('DPT');
                } else if (classVoies[slot.voie].Roles.includes('Heal')) {
                    presentRoles.add('Heal');
                } else if (classVoies[slot.voie].Roles.includes('Shield')) {
                    presentRoles.add('Shield');
                }
                if (classVoies[slot.voie].Roles.includes('Placeur')) {
                    presentRoles.add('Placeur');
                }
                if (classVoies[slot.voie].Roles.includes('Rall Resistance')) {
                    presentRoles.add('Rall Resistance');
                }
                if (classVoies[slot.voie].Roles.includes('Resurection')) {
                    presentRoles.add('Resurection');
                }
            }
        }
    });

    updateTeamRoles();

    const { dptCount, supportCount } = countRolesDPTandSupport();
    const warningDiv = document.createElement('div');
    if (dptCount > supportCount) {
        warningDiv.setAttribute('data-translator', 'warn_dpt_greater_than_support');
        warningDiv.textContent = translate('warn_dpt_greater_than_support', currentLanguage);
        warningDiv.className = 'warn-message warn-red';
    } else if(dptCount == 0) {
        warningDiv.setAttribute('data-translator', 'warn_need_dpt');
        warningDiv.textContent = translate('warn_need_dpt', currentLanguage);
        warningDiv.className = 'warn-message warn-red';
    }
    summaryContainerWarns.appendChild(warningDiv);

    const elementsDPT = getElementsDPT();
    const requiredElements = ["Fire", "Water", "Earth", "Air"];
    const missingElements = requiredElements
        .filter(el => !elementsDPT.includes(el))
        .map(el => TRANSLATIONS.elements[el][currentLanguage]);

    if (missingElements.length > 0) {
        const warningDiv = document.createElement('div');
        warningDiv.textContent = currentLanguage === 'fr' 
            ? `Manque de l'élément ${missingElements.join(', ')}`
            : `Lack of ${missingElements.join(', ')} element(s)`;
        warningDiv.className = 'warn-message warn-yellow';
        summaryContainerWarns.appendChild(warningDiv);
    } else if (elementsDPT.length > 0) {
        const warningDiv = document.createElement('div');
        warningDiv.setAttribute('data-translator', 'warn_multielement_dpt');
        warningDiv.textContent = translate('warn_multielement_dpt', currentLanguage);
        warningDiv.className = 'warn-message warn-green';
        summaryContainerWarns.appendChild(warningDiv);
    }

    if (!hasStabilizedRole()) {
        const warningDiv = document.createElement('div');
        warningDiv.setAttribute('data-translator', 'warn_stabilized');
        warningDiv.textContent = translate('warn_stabilized', currentLanguage);
        warningDiv.className = 'warn-message warn-yellow';
        summaryContainerWarns.appendChild(warningDiv);
    }

    if (!hasInvulnerabilityRole()) {
        const warningDiv = document.createElement('div');
        warningDiv.setAttribute('data-translator', 'warn_invulnerability');
        warningDiv.textContent = translate('warn_invulnerability', currentLanguage);
        warningDiv.className = 'warn-message warn-yellow';
        summaryContainerWarns.appendChild(warningDiv);
    }

    const rolesToCheck = [
        "DPT",
        "Heal",
        "Resurection",
        "Rall Resistance",
        "Shield",
        "Placeur",
    ];

    rolesToCheck.forEach(role => {
        const roleDiv = document.createElement('div');
        const data_translator = role.toLocaleLowerCase().replaceAll(' ', '_');
        roleDiv.setAttribute('data-translator', data_translator);
        roleDiv.textContent = translate(data_translator, currentLanguage);
        roleDiv.className = presentRoles.has(role) ? 'role-present' : 'role-missing';
        summaryContainerRequired.appendChild(roleDiv);
    });
}


function updateRolesPanel() {
    const rolesPanel = document.getElementById('team-roles-panel');
    rolesPanel.innerHTML = '';

    // Nouvel ordre de priorité
    const priorityOrder = [
        ["Area", "Burst", "Ranged", "Melee"], // Combinaison complète en priorité
        ["Area", "Burst"], // Area + Burst en deuxième
        ["Area"], // Area seul en troisième
        ["Burst"], // Burst seul en quatrième
        ["Constant"] // Constant en dernier
    ];

    function updateImportantSlot() {
        let importantSlot = null;
        let importantPriority = -1;
        let importantRolesLength = -1;

        teamRoles.forEach((slot, index) => {
            const slotElement = document.querySelector(`.slot[data-slot="${index}"]`);
            if (slotElement) {
                slotElement.classList.remove("slot-important"); // On enlève la classe à tous les slots
            }

            if (slot.voie) {
                const className = slot.class;
                const slotRoles = classData.Classes[className]?.Voies[slot.voie]?.Roles || [];
                
                // Déterminer la priorité en fonction des combinaisons de rôles
                let slotPriority = -1;
                
                for (let i = 0; i < priorityOrder.length; i++) {
                    const rolesCombo = priorityOrder[i];
                    // Vérifier si tous les rôles de la combinaison sont présents
                    const allRolesPresent = rolesCombo.every(role => slotRoles.includes(role));
                    
                    if (allRolesPresent) {
                        slotPriority = i;
                        break;
                    }
                }

                // Si on a trouvé une priorité valide
                if (slotPriority !== -1) {
                    // En cas d'égalité de priorité, on compare la longueur du tableau Roles
                    if (importantSlot === null || 
                        slotPriority < importantPriority || 
                        (slotPriority === importantPriority && slotRoles.length > importantRolesLength)) {
                        importantSlot = slotElement;
                        importantPriority = slotPriority;
                        importantRolesLength = slotRoles.length;
                    }
                }
            }
        });

        if (importantSlot) {
            importantSlot.classList.add("slot-important");
        }
    }

    // Parcourir teamRoles dans son ordre actuel pour maintenir la cohérence
    teamRoles.forEach((slot, index) => {
        // Créer un conteneur pour chaque slot
        const container = document.createElement('div');
        container.className = 'role-selection';
        container.style.display = 'none';
        
        if (slot.class && slot.image) {
        container.style.display = 'flex';

            const thumbnail = document.createElement('img');
            thumbnail.src = slot.image;
            thumbnail.className = 'role-thumbnail';
            container.appendChild(thumbnail);
            
            const select = document.createElement('select');
            select.className = 'voie-select';
            
            if (classData.Classes[slot.class]) {
                const dptGroup = document.createElement('optgroup');
                dptGroup.label = 'DPT';

                const supportGroup = document.createElement('optgroup');
                supportGroup.label = 'Support';

                const specificGroup = document.createElement('optgroup');
                specificGroup.label = 'Specific';

                let defaultOption = null;

                Object.entries(classData.Classes[slot.class].Voies).forEach(([voie, data]) => {
                    const option = document.createElement('option');
                    option.value = voie;
                    option.textContent = voie;

                    if (data.Id === 1 && slot.voie == null) {
                        defaultOption = option;
                    }

                    if (voie.startsWith('DPT')) {
                        dptGroup.appendChild(option);
                    } else if (voie.startsWith('Support')) {
                        supportGroup.appendChild(option);
                    } else if (voie.startsWith('Specific')) {
                        specificGroup.appendChild(option);
                    }
                });

                if (dptGroup.children.length > 0) select.appendChild(dptGroup);
                if (supportGroup.children.length > 0) select.appendChild(supportGroup);
                if (specificGroup.children.length > 0) select.appendChild(specificGroup);

                if (slot.voie) {
                    const voieOption = select.querySelector(`option[value="${slot.voie}"]`);
                    if (voieOption) {
                        voieOption.selected = true;
                    }
                } else if (defaultOption) {
                    defaultOption.selected = true;
                    teamRoles[index].voie = defaultOption.value;
                    slot.voie = defaultOption.value;
                }
                
                // Improved onchange handler in updateRolesPanel:
                select.onchange = (e) => {
                    // Update the voie for this slot
                    teamRoles[index].voie = e.target.value;
                    // Use updateAll to ensure complete refresh
                    updateAll();
                };
                
                container.appendChild(select);
            }
        }
        
        rolesPanel.appendChild(container);
    });

    updateImportantSlot(); // Appliquer la classe lors du premier affichage
}


function selectClass(imgSrc) {
    if (selectedSlot !== null) {
        const slot = document.querySelector(`.slot[data-slot="${selectedSlot}"]`);
        if (slot) {
            slot.innerHTML = "";
            const img = document.createElement("img");
            img.src = `${imgSrc}`;            
            slot.appendChild(img);

            const className = getClassNameFromFile(imgSrc);
            let selectedVoie = null;
            Object.entries(classData.Classes[className].Voies).forEach(([voie, data]) => {
                if (data.Id === 1) {
                    selectedVoie = voie;
                }
            });
            teamRoles[selectedSlot] = {
                class: className,
                voie: selectedVoie,
                image: `${imgSrc}`
            };
            if (teamRoles.length == 6) {
                saveTeamToLocalStorage();
            }
            updateAll();
        } else {
            console.error('Slot is null');
        }
    }
    closeSelectionMenu();
}

    
// Modified selectClassWithShift function
function selectClassWithShift(imgSrc) {
    if (selectedSlot !== null && selectedSlot < teamRoles.length) {
        const slot = document.querySelector(`.slot[data-slot="${selectedSlot}"]`);
        if (slot) {
            slot.innerHTML = "";
            const img = document.createElement("img");
            img.src = `${imgSrc}`;
            slot.appendChild(img);
            const className = getClassNameFromFile(imgSrc);
            let selectedVoie = null;
            Object.entries(classData.Classes[className].Voies).forEach(([voie, data]) => {
                if (data.Id === 1) {
                    selectedVoie = voie;
                }
            });
            teamRoles[selectedSlot] = {
                class: className,
                voie: selectedVoie,
                image: `${imgSrc}`
            };
            if (teamRoles.length == 6) {
                saveTeamToLocalStorage();
            }
            updateAll();

            // Update the selection menu to reflect the new "taken" classes
            updateSelectionMenuTakenClasses();

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
function updateSelectionMenuTakenClasses() {
    const menuContent = document.getElementById("menu-content");
    if (!menuContent) return;
    
    // Get all class containers in the menu
    const classContainers = menuContent.querySelectorAll(".class-container");
    
    // For each container, check if the class is in the team
    classContainers.forEach(container => {
        const img = container.querySelector("img");
        if (img) {
            const imgSrc = img.getAttribute('src');            
            const className = getClassNameFromFile(imgSrc);
            
            // Check if this class is in the team
            const isTaken = teamRoles.some(role => role.class === className);
            
            // Update the container class accordingly
            if (isTaken) {
                container.classList.add("taken");
            } else {
                container.classList.remove("taken");
            }
        }
    });
}


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


// Update createClassImage to handle shift-click
function createClassImage(imgSrc) {
    const img = document.createElement("img");
    img.src = `assets/classes/${imgSrc}`;
    
    // Clic droit pour changer le genre
    img.oncontextmenu = (e) => {
        e.preventDefault();
        const [gender, className] = img.getAttribute('src').split('_');
        let newGender = gender === 'male' ? 'female' : 'male';

        let newImgSrc = `${newGender}_${className}`;
        img.src = `assets/classes/${newImgSrc}`;
        img.dataset.src = newImgSrc;  // Mettre à jour l'image actuelle

        if (selectedSlot !== null) {
            teamRoles[selectedSlot].image = `assets/classes/${newImgSrc}`;
        }
    };

    // Clic gauche avec gestion du shift
    img.onclick = (e) => {

        if (isControlPressed) {
            const className = img.getAttribute('src').split('_', 2)[1].split('.', 1)[0];
            showClassRoles(className);
            return;
            
        }

        if (isShiftPressed) {
            // If shift is pressed, select this class but don't close the menu
            selectClassWithShift(img.getAttribute('src'));
        } else {
            // Normal behavior for regular click
            selectClass(img.getAttribute('src'));
        }
    }
    
    return img;
}


function closeSelectionMenu() {    
    const menu = document.getElementById("selection-menu");
    if (menu) {
        menu.classList.add("hidden");
    }
}

function closeRolesModal() {
    document.getElementById("class-info-display").style.display = "none";
}

// Fonction pour sauvegarder teamRoles dans un cookie
function saveTeamToLocalStorage() {
    try {
        // Convertir teamRoles en chaîne JSON et stocker dans localStorage
        localStorage.setItem("savedTeam", JSON.stringify(teamRoles));
        console.log("Équipe sauvegardée dans le localStorage");

    } catch (error) {
        console.error("Erreur lors de la sauvegarde de l'équipe:", error);
    }
}

// Fonction pour charger teamRoles depuis un cookie
function loadTeamToLocalStorage() {
    try {
        // Récupérer les données depuis localStorage
        const teamRolesJSON = localStorage.getItem("savedTeam");
        if (teamRolesJSON) {
            const savedTeam = JSON.parse(teamRolesJSON);
            // Vérifier que c'est un tableau valide (et max 6 éléments)
            if (Array.isArray(savedTeam) && savedTeam.length <= 6) {
                // Mettre à jour teamRoles
                teamRoles = savedTeam;

                // Mettre à jour l'interface
                updateAll();
                console.log("Équipe chargée depuis le localStorage");
                // Afficher une notification à l'utilisateur
                showNotification("Équipe chargée avec succès!");
                return true;
            }
        }
        console.log("Aucune équipe sauvegardée trouvée dans le localStorage");
    } catch (error) {
        console.error("Erreur lors du chargement de l'équipe:", error);
    }
    return false;
}


function showNotification(message, color = null) {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.classList.add('temp-notification');
    notification.style.backgroundColor = color ? color : 'green'

    // Ajouter au body
    document.body.appendChild(notification);

    // Supprimer après 3 secondes avec une animation de fondu
    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 500);
    }, 3000);

    // Supprimer instantanément au clic
    notification.addEventListener('click', () => {
        notification.remove();
    });
}


function showClassRoles(className) {
    const formattedClassName = className.charAt(0).toUpperCase() + className.slice(1);
    if (!classData.Classes[formattedClassName]) {
        console.error("Classe non trouvée :", className);
        return;
    }
    const classInfo = classData.Classes[formattedClassName];
    const classRolesContainer = document.getElementById("class-info-roles");
    classRolesContainer.innerHTML = "";
    let maxRoles = 0; // Pour adapter la grille dynamiquement
    Object.entries(classInfo.Voies).forEach(([voieName, voie]) => {
        maxRoles = Math.max(maxRoles, voie.Roles.length);
        // Création du conteneur de voie
        const voieContainer = document.createElement("div");
        voieContainer.classList.add("class-info-voie");
        // Titre de la voie (cliquable)
        const voieTitle = document.createElement("div");
        voieTitle.classList.add("class-info-voie-title");
        voieTitle.textContent = voieName;
        // Conteneur pour les rôles
        const rolesContainer = document.createElement("div");
        rolesContainer.classList.add("class-info-roles-container");
        // Ajouter chaque rôle
        voie.Roles.forEach(role => {
            const roleElement = document.createElement("div");
            roleElement.classList.add("class-role-badge");
            roleElement.setAttribute("data-translator", role.toLowerCase().replaceAll(' ', '_'));
            roleElement.textContent = role;
            rolesContainer.appendChild(roleElement);
        });
        // Toggle pour afficher/masquer les rôles
        voieTitle.addEventListener("click", () => {
            rolesContainer.classList.toggle("classe-role-hidden");
        });
        // Ajouter au DOM
        voieContainer.appendChild(voieTitle);
        voieContainer.appendChild(rolesContainer);
        classRolesContainer.appendChild(voieContainer);
    });
    // Ajuster dynamiquement le nombre de colonnes selon le maxRoles détecté
    document.querySelectorAll(".class-info-roles-container").forEach(container => {
        container.style.gridTemplateColumns = `repeat(${maxRoles}, 1fr)`;
    });
    // Affichage de la modal
    document.getElementById("class-info-display").style.display = "block";
}


// Bouton pour fermer la modal
document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.createElement("button");
    closeButton.classList.add("close-modal-btn");
    closeButton.textContent = "Fermer";
    closeButton.addEventListener("click", () => {
        document.getElementById("class-info-display").style.display = "none";
    });

    document.getElementById("class-info-display").appendChild(closeButton);
});


/**
 * Handling favorite team
 */

// Fonction pour sauvegarder l'équipe actuelle dans le localStorage
function saveCurrentTeam() {
    let savedTeams = JSON.parse(localStorage.getItem("savedTeams")) || [];
    
    if (savedTeams.length >= 10) {
        showNotification("Supprimez une équipe avant d'en rajouter une.", "red");
        return;
    }
    savedTeams.push(teamRoles);
    localStorage.setItem("savedTeams", JSON.stringify(savedTeams));
    showNotification("Équipe ajoutée aux favoris !");
}

// Fonction pour afficher le menu des équipes sauvegardées
function showSavedTeamsMenu() {
    const savedTeams = JSON.parse(localStorage.getItem("savedTeams")) || [];
    const menu = document.getElementById("saved-teams-menu");
    menu.innerHTML = ""; // Vider le contenu existant
    
    if (savedTeams.length == 0) {
        showNotification("Aucune équipe dans les favoris.", "red");
        return;
    }

    savedTeams.forEach((team, index) => {
        const teamContainer = document.createElement("div");
        teamContainer.classList.add("favorite-team-container");

        team.forEach(member => {
            const memberContainer = document.createElement("div");
            memberContainer.classList.add("member-container");
            const img = document.createElement("img");

            if (member.voie === null) {
                member.voie = '';
            }
            
            if (member.image) {
                img.src = member.image;
            } else {
                img.src = ""; // Pas d'image par défaut
                img.style.backgroundColor = "transparent"; // Carré transparent
            }
            img.classList.add("member-image");

            const voie = document.createElement("span");
            const data_translator = member.voie.toLowerCase().replaceAll(' ', '_');
            voie.setAttribute("data-translator", data_translator);
            voie.textContent = translate(data_translator, currentLanguage);
            voie.classList.add("member-voie");

            memberContainer.appendChild(img);
            memberContainer.appendChild(voie);
            teamContainer.appendChild(memberContainer);
        });

        // Ajouter un espace vide si l'équipe a moins de six membres
        if (team.length < 6) {
            const emptySpace = document.createElement("div");
            const emptyImg = document.createElement("img");
            emptyImg.style.backgroundColor = "transparent"; // Carré transparent
            emptySpace.appendChild(emptyImg);
            teamContainer.appendChild(emptySpace);
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            confirmDeleteTeam(index);
        });

        teamContainer.appendChild(deleteButton);
        teamContainer.addEventListener("click", () => applySavedTeam(team));
        menu.appendChild(teamContainer);
    });

    menu.classList.remove("hidden"); // Afficher le menu
}

// Fonction pour appliquer une équipe sauvegardée
function applySavedTeam(team) {
    teamRoles = team;
    updateAll();
    toggleSavedTeamsMenu(); // Ferme le menu après avoir appliqué l'équipe
}

// Fonction pour afficher une modal de confirmation
function showConfirmationModal(message, onConfirm) {
    // Vérifier si une modal de confirmation est déjà affichée
    if (document.querySelector('.confirmation-modal')) {
        return;
    }

    // Créer l'overlay
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Créer la modal
    const modal = document.createElement("div");
    modal.classList.add("confirmation-modal");

    // Ajouter le message
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    modal.appendChild(messageElement);

    // Ajouter les boutons
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Oui";
    confirmButton.classList.add("confirm-button");
    confirmButton.addEventListener("click", () => {
        onConfirm();
        document.body.removeChild(overlay);
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Non";
    cancelButton.classList.add("cancel-button");
    cancelButton.addEventListener("click", () => {
        document.body.removeChild(overlay);
    });

    buttonsContainer.appendChild(confirmButton);
    buttonsContainer.appendChild(cancelButton);
    modal.appendChild(buttonsContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Ajouter un gestionnaire d'événements pour la touche "Entrée"
    document.addEventListener("keydown", function handleKeydown(event) {
        if (event.key === "Enter") {
            onConfirm();
            document.body.removeChild(overlay);
            document.removeEventListener("keydown", handleKeydown);
        }
    });
}

// Fonction pour confirmer la suppression d'une équipe
function confirmDeleteTeam(index) {
    showConfirmationModal("Êtes-vous sûr de vouloir supprimer cette équipe ?", () => {
        deleteTeam(index);
    });
}

// Fonction pour supprimer une équipe du localStorage
function deleteTeam(index) {
    let savedTeams = JSON.parse(localStorage.getItem("savedTeams")) || [];
    savedTeams.splice(index, 1);
    localStorage.setItem("savedTeams", JSON.stringify(savedTeams));
    showNotification("Équipe supprimée !");
    document.querySelector(".saved-teams-menu").remove();
    showSavedTeamsMenu();
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
