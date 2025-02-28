import { classData, LANGUAGES, TRANSLATIONS, translate } from './ext/utils_package.js';


const IMPORTANT_ROLES = [
    "Area", "Constant", 
    "Heal", "Shield", "Placeur", "Resurection",
    "Buff DI", "Rall Resistance"
];

const OPTIONAL_ROLES = [
    "Burst", "Ranged", "Melee", "Poison", "Single Target", 
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


// Initialisation des événements
document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('.slot').forEach(slot => {
        slot.addEventListener('click', () => {
            openSelectionMenu(parseInt(slot.dataset.slot));
        });
        
        // Ajout du gestionnaire de clic droit
        slot.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Empêche l'apparition du menu contextuel par défaut
            const slotIndex = parseInt(slot.dataset.slot);
            clearSlot(slotIndex);
        });
    });

    // Gestionnaire pour le bouton Fermer
    document.getElementById('close-menu-btn').addEventListener('click', closeSelectionMenu);

    // Initialisation des panneaux
    updateRolesPanel();
    updateRolesSummary();
    updateGauges();
    setLanguage("en");
    
});


function setLanguage(lang) {
    currentLanguage = lang;

    document.querySelectorAll("[data-translator]").forEach(element => {
        const translationKey = element.dataset.translator;
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
        tooltip.classList.add('temp-tooltip'); // Ajouter la classe CSS

        // Positionner la tooltip
        tooltip.style.top = `${this.getBoundingClientRect().top - 40}px`; // Position juste au-dessus du bouton
        tooltip.style.left = `${this.getBoundingClientRect().left + this.offsetWidth / 2 - 75}px`; // Centré horizontalement par rapport au bouton

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


document.getElementById('btn_import').onclick = function() {
    console.log("Import function triggered");

    const importString = document.getElementById("role-input").value.trim();

    if (importString === "") {
        console.log("No data to import");
        return;
    }

    const rolePairs = importString.split(";").filter(pair => pair !== "");

    let index = 0; // Index pour l'écrasement des valeurs dans teamRoles

    rolePairs.forEach(pair => {
        const [classId, roleId] = pair.split("-");

        for (const className in classData.Classes) {
            if (classData.Classes[className].Id.toString() === classId) {
                const classVoies = classData.Classes[className]?.Voies;

                for (const voieName in classVoies) {
                    if (classVoies[voieName].Id.toString() === roleId) {
                        // Écraser directement la valeur dans teamRoles
                        if (index < teamRoles.length) {
                            teamRoles[index] = {
                                class: className,
                                voie: voieName,
                                image: classData.Classes[className].Image
                            };

                            // Mise à jour de l'affichage
                            const teamContainer = document.getElementById("team-container");
                            const slotElement = teamContainer.children[index];
                            if (slotElement) {
                                let imgElement = slotElement.querySelector("img");
                                if (!imgElement) {
                                    imgElement = document.createElement("img");
                                    slotElement.appendChild(imgElement);
                                }
                                imgElement.src = classData.Classes[className].Image;
                            }

                            const rolesPanel = document.getElementById("team-roles-panel");
                            const panelSlot = rolesPanel.children[index];
                            if (panelSlot) {
                                const classSelect = panelSlot.querySelector(".class-select");
                                const voieSelect = panelSlot.querySelector(".voie-select");

                                if (classSelect) {
                                    classSelect.value = className;
                                }
                                if (voieSelect) {
                                    voieSelect.value = voieName;
                                }
                            }

                            index++; // Passer au prochain slot
                        }
                    }
                }
            }
        }
    });

    console.log("teamRoles : ", teamRoles);
    teamRoles = [...teamRoles];

    updateRolesPanel();
    updateRolesSummary();
    updateTeamRoles();
    
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
                    roleElement.classList.add('role-badge', className);
                    roleElement.textContent = role;
                    rolesWrapper.appendChild(roleElement);
                });
            };

            // Ajout des rôles avec différentes couleurs
            displayRoles(categoryRoles, 'filled-role');  // Vert
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
function countRoles() {
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
    slot.innerHTML = "";
    teamRoles[slotIndex] = { class: null, voie: null };
    updateRolesPanel();
    updateRolesSummary();
    updateTeamRoles();
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

    const { dptCount, supportCount } = countRoles();
    const warningDiv = document.createElement('div');
    if (dptCount > supportCount) {
        warningDiv.dataset.translator = 'warn_dpt_greater_than_support';
        warningDiv.textContent = translate('warn_dpt_greater_than_support', currentLanguage);
        warningDiv.className = 'warn-message warn-red';
    } else {
        warningDiv.dataset.translator = 'warn_need_dpt';
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
        warningDiv.dataset.translator = 'warn_multielement_dpt';
        warningDiv.textContent = translate('warn_multielement_dpt', currentLanguage);
        warningDiv.className = 'warn-message warn-green';
        summaryContainerWarns.appendChild(warningDiv);
    }

    if (!hasStabilizedRole()) {
        const warningDiv = document.createElement('div');
        warningDiv.dataset.translator = 'warn_stabilized';
        warningDiv.textContent = translate('warn_stabilized', currentLanguage);
        warningDiv.className = 'warn-message warn-yellow';
        summaryContainerWarns.appendChild(warningDiv);
    }

    if (!hasInvulnerabilityRole()) {
        const warningDiv = document.createElement('div');
        warningDiv.dataset.translator = 'warn_invulnerability';
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
        roleDiv.textContent = role;
        roleDiv.className = presentRoles.has(role) ? 'role-present' : 'role-missing';
        summaryContainerRequired.appendChild(roleDiv);
    });
}


function updateRolesPanel() {
    const rolesPanel = document.getElementById('team-roles-panel');
    rolesPanel.innerHTML = '';

    let importantSlot = null;
    let importantPriority = -1; // Niveau de priorité du rôle le plus important trouvé
    const priorityOrder = ["AreaBurst", "Burst", "Area", "Constant"];

    teamRoles.forEach((slot, index) => {
        const slotImg = document.querySelector(`.slot[data-slot="${index}"] img`);
        const slotElement = document.querySelector(`.slot[data-slot="${index}"]`);

        if (slotElement) {
            slotElement.classList.remove("slot-important"); // On enlève la classe à tous les slots
        }

        if (slotImg) {
            const container = document.createElement('div');
            container.className = 'role-selection';

            const thumbnail = document.createElement('img');
            thumbnail.src = slotImg.src;
            thumbnail.className = 'role-thumbnail';

            const select = document.createElement('select');
            select.className = 'voie-select';
            const className = getClassNameFromFile(slotImg.src.split('/').pop());

            if (className && classData.Classes[className]) {
                const dptGroup = document.createElement('optgroup');
                dptGroup.label = 'DPT';

                const supportGroup = document.createElement('optgroup');
                supportGroup.label = 'Support';

                const specificGroup = document.createElement('optgroup');
                specificGroup.label = 'Specific';

                let defaultOption = null;
                let slotRoles = [];

                Object.entries(classData.Classes[className].Voies).forEach(([voie, data]) => {
                    const option = document.createElement('option');
                    option.value = voie;
                    option.textContent = voie;

                    // Sélection par défaut si Id = 1 et pas encore de voie définie
                    if (data.Id === 1 && slot.voie == null) {
                        defaultOption = option;
                    }

                    // Ajouter au bon optgroup
                    if (voie.startsWith('DPT')) {
                        dptGroup.appendChild(option);
                    } else if (voie.startsWith('Support')) {
                        supportGroup.appendChild(option);
                    } else if (voie.startsWith('Specific')) {
                        specificGroup.appendChild(option);
                    }

                    if (slot.voie === voie) {
                        slotRoles = data.Roles; // Récupérer les rôles du personnage actuel
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
                    slotRoles = classData.Classes[className].Voies[defaultOption.value].Roles;
                }

                console.log("slot :", slot);

                // Vérification des rôles et assignation de "slot-important"
                let slotPriority = priorityOrder.indexOf(
                    slotRoles.includes("Area") && slotRoles.includes("Burst") ? "AreaBurst" :
                    slotRoles.includes("Burst") ? "Burst" :
                    slotRoles.includes("Area") ? "Area" :
                    slotRoles.includes("Constant") ? "Constant" : null
                );

                if (slotPriority !== -1 && (importantSlot === null || slotPriority < importantPriority)) {
                    importantSlot = slotElement;
                    importantPriority = slotPriority;
                }
            }

            select.onchange = (e) => {
                teamRoles[index] = {
                    class: className,
                    voie: e.target.value
                };
                updateRolesSummary();
            };

            container.appendChild(thumbnail);
            container.appendChild(select);
            rolesPanel.appendChild(container);

            select.dispatchEvent(new Event('change'));
        }
    });

    // Appliquer la classe "slot-important" au slot sélectionné
    if (importantSlot) {
        importantSlot.classList.add("slot-important");
    }
}


function selectClass(imgSrc) {
    if (selectedSlot !== null) {
        const slot = document.querySelector(`.slot[data-slot="${selectedSlot}"]`);
        slot.innerHTML = "";
        const img = document.createElement("img");
        img.src = `assets/classes/${imgSrc}`;
        slot.appendChild(img);
        
        const className = getClassNameFromFile(imgSrc);
        teamRoles[selectedSlot] = {
            class: className,
            voie: null
        };
        
        updateRolesPanel();
        updateRolesSummary();
    }
    closeSelectionMenu();
}


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
        textOverlay.classList.add("class-name");
        textOverlay.textContent = className;

        // Ajouter l'image et le texte dans le conteneur
        container.appendChild(img);
        container.appendChild(textOverlay);
        menuContent.appendChild(container);
    });

    menu.classList.remove("hidden");
}


function createClassImage(imgSrc) {
    const img = document.createElement("img");
    img.src = `assets/classes/${imgSrc}`;
    img.dataset.src = imgSrc;  // Stocker l'image actuelle

    // Clic droit pour changer le genre
    img.oncontextmenu = (e) => {
        e.preventDefault();
        const [gender, className] = img.dataset.src.split('_');
        let newGender = gender === 'male' ? 'female' : 'male';

        let newImgSrc = `${newGender}_${className}`;
        img.src = `assets/classes/${newImgSrc}`;
        img.dataset.src = newImgSrc;  // Mettre à jour l'image actuelle

        teamRoles[selectedSlot].image = `assets/classes/${newImgSrc}`; 
    };

    // Clic gauche normal
    img.onclick = () => {
        selectClass(img.dataset.src); // Toujours utiliser l'image actuelle
    }
    
    return img;
}


function closeSelectionMenu() {    
    const menu = document.getElementById("selection-menu");
    if (menu) {
        menu.classList.add("hidden");
    }
}
