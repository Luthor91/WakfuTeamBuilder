import { classData, LANGUAGES, TRANSLATIONS, translate } from './ext/utils_package.js';


const IMPORTANT_ROLES = [
    "Area", "Constant", 
    "Heal", "Shield", "Placeur", "Resurection",
    "Buff DI", "Rall Resistance"
];

const OPTIONAL_ROLES = [
    "Burst", "Ranged", "Melee", "Indirect", "Single Target", 
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
    'Specific': ["Resurection", "Anti Shield", "Anti Heal", "Entity Stabilized", "Enemy Stabilized", "Allies Stabilized", "Self Stabilized", "Invulnerability"]
};


let currentLanguage = LANGUAGES.EN;
let teamRoles = Array(6).fill({ class: null, voie: null, image: null });
let selectedSlot = null;


// Initialisation des événements
document.addEventListener('DOMContentLoaded', () => {
    
    const languageSelector = document.getElementById('language-selector');
    languageSelector.value = currentLanguage;
    languageSelector.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });

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
    updateBalanceGauge();
    updateGauges();
});


function changeLanguage(language) {
    currentLanguage = language;
    updateUI();
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
    }).catch(err => {
        console.error("Failed to copy to clipboard:", err);
    });
};


document.getElementById('btn_import').onclick = function() {
    console.log("Import function triggered");

    // Récupérer la valeur du champ de texte où l'utilisateur a collé la chaîne exportée
    const importString = document.getElementById("role-input").value.trim();

    // Vérifier que la chaîne n'est pas vide
    if (importString === "") {
        console.log("No data to import");
        return;
    }

    // Séparer les rôles par le caractère ";"
    const rolePairs = importString.split(";").filter(pair => pair !== "");

    // Parcourir chaque rôle et l'ajouter à l'équipe
    rolePairs.forEach(pair => {
        const [classId, roleId] = pair.split("-");

        // Assure-toi que classId et roleId sont des valeurs valides et existent dans tes données
        for (const className in classData.Classes) {
            if (classData.Classes[className].Id.toString() === classId) {
                // Ajouter le rôle à l'équipe (ici tu peux ajouter ce rôle dans l'interface graphique)
                const classVoies = classData.Classes[className]?.Voies;

                // Vérifier si le rôle existe dans les voies de la classe
                for (const voieName in classVoies) {
                    if (classVoies[voieName].Id.toString() === roleId) {
                        // Trouver un slot vide dans l'équipe et affecter la classe et la voie
                        const emptySlot = teamRoles.findIndex(slot => !slot.class && !slot.voie);
                        if (emptySlot !== -1) {
                            teamRoles[emptySlot] = {
                                class: className,
                                voie: voieName,
                                image: classData.Classes[className].Image // Assumer que l'image est dans `classData.Classes[className].Image`
                            };

                            // Mise à jour de l'élément team-container avec l'image
                            const teamContainer = document.getElementById("team-container");
                            const slotElement = teamContainer.children[emptySlot];
                            if (slotElement) {
                                // Vérifier s'il y a déjà une image et la remplacer
                                let imgElement = slotElement.querySelector("img");
                                if (!imgElement) {
                                    imgElement = document.createElement("img");
                                    slotElement.appendChild(imgElement);
                                }
                                imgElement.src = classData.Classes[className].Image;
                            }

                            // Mise à jour du team-roles-panel avec la classe et voie
                            const rolesPanel = document.getElementById("team-roles-panel");
                            const panelSlot = rolesPanel.children[emptySlot];
                            if (panelSlot) {
                                // Remplir le menu déroulant de la classe et de la voie
                                const classSelect = panelSlot.querySelector(".class-select");
                                const voieSelect = panelSlot.querySelector(".voie-select");

                                if (classSelect) {
                                    classSelect.value = className;
                                }
                                if (voieSelect) {
                                    voieSelect.value = voieName;
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    console.log("teamRoles : ", teamRoles);
    teamRoles = [...teamRoles];

    // Après l'importation, on met à jour l'interface graphique
    updateRolesPanel();
    updateRolesSummary();
    updateBalanceGauge();
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


// Fonction pour mettre à jour l'interface
function updateUI() {
    // Mettre à jour les titres
    document.querySelector('h1').textContent = translate('TEAM_BUILDER', currentLanguage);
    document.querySelectorAll('h3').forEach(h3 => {
        if (h3.textContent.includes('Roles choice')) {
            h3.textContent = translate('ROLES_CHOICE', currentLanguage);
        } else if (h3.textContent.includes('Team composition')) {
            h3.textContent = translate('TEAM_COMPOSITION', currentLanguage);
        } else if (h3.textContent.includes('Team roles')) {
            h3.textContent = translate('TEAM_ROLES', currentLanguage);
        } else if (h3.textContent.includes('Summary of roles')) {
            h3.textContent = translate('ROLES_SUMMARY', currentLanguage);
        }
    });

    // Mettre à jour la légende
    document.querySelectorAll('.legend span').forEach(span => {
        const text = span.textContent.trim();
        if (text.includes('Role filled')) {
            span.lastChild.textContent = translate('ROLE_FILLED', currentLanguage);
        } else if (text.includes('Important role')) {
            span.lastChild.textContent = translate('ROLE_IMPORTANT_MISSING', currentLanguage);
        } else if (text.includes('Optional role')) {
            span.lastChild.textContent = translate('ROLE_OPTIONAL_MISSING', currentLanguage);
        }
    });

    // Mettre à jour les labels de la jauge
    const gaugeLabels = document.querySelectorAll('.gauge-labels span');
    gaugeLabels[0].textContent = translate('MELEE', currentLanguage);
    gaugeLabels[1].textContent = translate('RANGED', currentLanguage);

    // Mettre à jour le bouton de fermeture
    document.getElementById('close-menu-btn').textContent = translate('CLOSE', currentLanguage);

    // Mettre à jour les sélecteurs de rôles
    document.querySelectorAll('.voie-select option[value=""]').forEach(option => {
        option.textContent = translate('CHOOSE_ROLE', currentLanguage);
    });

    // Mettre à jour le résumé des rôles et autres éléments dynamiques
    updateRolesSummary();
    updateRolesPanel();
    updateTeamRoles();
    updateRolesSummary();
    updateBalanceGauge()
    updateGauges();
}

function updateTeamRoles() {
    const rolesContainer = document.getElementById('roles-under-gauge');
    rolesContainer.innerHTML = ''; // Réinitialiser la section des rôles
    
    // Initialiser un tableau de rôles actuels
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

    // Pour chaque catégorie de rôle, filtrer et afficher les rôles correspondants
    Object.keys(CATEGORIES).forEach(category => {
        const categoryRoles = CATEGORIES[category].filter(role => currentRoles.includes(role));
        const missingImportant = CATEGORIES[category].filter(role => !currentRoles.includes(role) && IMPORTANT_ROLES.includes(role));
        const missingOptional = CATEGORIES[category].filter(role => !currentRoles.includes(role) && OPTIONAL_ROLES.includes(role));
        
    // Si la catégorie contient des rôles, on crée un titre de catégorie
    if (categoryRoles.length || missingImportant.length || missingOptional.length) {
        const categoryTitle = document.createElement('h4');
        categoryTitle.textContent = category;
        categoryTitle.style.cursor = "pointer"; // Indique qu'il est cliquable

        // Ajout de l'événement pour replier/déplier
        categoryTitle.addEventListener("click", function () {
            let sibling = categoryTitle.nextElementSibling;
            while (sibling && sibling.tagName !== "H4") {
                sibling.style.display = sibling.style.display === "none" ? "inline-block" : "none";
                sibling = sibling.nextElementSibling;
            }
        });

        rolesContainer.appendChild(categoryTitle);
    }

        
        // Fonction pour ajouter les rôles dans la section
        const displayRoles = (roles, colorRole) => {
            roles.forEach(role => {
                const roleElement = document.createElement('div');
                roleElement.classList.add('role-item');
                roleElement.style.color = colorRole;
                roleElement.textContent = role;
                rolesContainer.appendChild(roleElement);
            });
        };

        // Afficher les rôles remplis et manquants
        displayRoles(categoryRoles, 'green');
        displayRoles(missingImportant, 'red');
        displayRoles(missingOptional, 'yellow');
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
                        // Ajouter la valeur à la somme, en s'assurant de ne pas dépasser 10
                        console.log("statName : ", totalStats[statName], " + ", statValue);
                        
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


// Fonction pour calculer la balance Melee/Ranged
function calculateMeleeRangedBalance() {
    let balance = 0;
    
    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.Classes[slot.class].Voies;
            if (classVoies[slot.voie] && slot.voie.includes('DPT')) {
                const voieValues = classVoies[slot.voie];
                if (voieValues.Roles.includes('Melee')) {
                    balance -= 1;
                }
                if (voieValues.Roles.includes('Ranged')) {
                    balance += 1;
                }
            }
        }
    });
    
    return balance;
}


// Fonction pour mettre à jour la jauge
function updateBalanceGauge() {
    const balance = calculateMeleeRangedBalance();
    const gaugeContainer = document.querySelector('.balance-gauge-container');
    if (!gaugeContainer) return;

    const cursor = gaugeContainer.querySelector('.gauge-cursor');
    
    // Calculer la position du curseur (50% est le centre)
    let position = 50; // Position de base (centre)
    position += (balance * 10); // Chaque point déplace de 10%
    position = Math.max(0, Math.min(100, position)); // Limiter entre 0 et 100%
    
    cursor.style.left = `${position}%`;
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
    updateBalanceGauge();
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
    const summaryContainer = document.getElementById('roles-summary');
    summaryContainer.innerHTML = ''; // Vider le contenu existant    
    
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
    if (dptCount > supportCount) {
        const warningDiv = document.createElement('div');
        warningDiv.textContent = translate('DPT_SUPPORT_WARNING', currentLanguage);
        warningDiv.style.color = 'red';
        warningDiv.style.fontWeight = 'bold';
        warningDiv.style.marginBottom = '10px';
        summaryContainer.appendChild(warningDiv);
    }

    const elementsDPT = getElementsDPT();
    const requiredElements = ["Fire", "Water", "Earth", "Air"];
    const missingElements = requiredElements.filter(el => !elementsDPT.includes(el));
    
    if (missingElements.length > 0) {
        const warningDiv = document.createElement('div');
        warningDiv.textContent = `Lack of ${missingElements.join(', ')} element(s)`;
        warningDiv.style.color = 'yellow';
        warningDiv.style.fontWeight = 'bold';
        warningDiv.style.marginBottom = '10px';
        summaryContainer.appendChild(warningDiv);
    } else {
        const warningDiv = document.createElement('div');
        warningDiv.textContent = `DPT Multi Elements`;
        warningDiv.style.color = 'green';
        warningDiv.style.fontWeight = 'bold';
        warningDiv.style.marginBottom = '10px';
        summaryContainer.appendChild(warningDiv);
    }

    const hasStabilized = hasStabilizedRole();
    if (!hasStabilized) {
        const warningDiv = document.createElement('div');
        warningDiv.textContent = "Need Stabilized Class";
        warningDiv.style.color = 'yellow';
        warningDiv.style.fontWeight = 'bold';
        warningDiv.style.marginBottom = '10px';
        summaryContainer.appendChild(warningDiv);
    }

    const hasInvulnerability = hasInvulnerabilityRole();    
    if (!hasInvulnerability) {
        const warningDiv = document.createElement('div');
        warningDiv.textContent = "Need Invulnerability Class";
        warningDiv.style.color = 'yellow';
        warningDiv.style.fontWeight = 'bold';
        warningDiv.style.marginBottom = '10px';
        summaryContainer.appendChild(warningDiv);
    }


    const rolesToCheck = [
        "Rall Resistance",
        "Placeur",
        "Heal",
        "Shield",
        "DPT",
        "Resurection"
    ];

    rolesToCheck.forEach(role => {
        const roleDiv = document.createElement('div');
        roleDiv.textContent = role;
        roleDiv.className = presentRoles.has(role) ? 'role-present' : 'role-missing';
        summaryContainer.appendChild(roleDiv);
    });
    
}

// Mettre à jour le panneau des rôles
function updateRolesPanel() {
    const rolesPanel = document.getElementById('team-roles-panel');
    rolesPanel.innerHTML = '';

    teamRoles.forEach((slot, index) => {
        const slotImg = document.querySelector(`.slot[data-slot="${index}"] img`);
        if (slotImg) {
            const container = document.createElement('div');
            container.className = 'role-selection';
            
            const thumbnail = document.createElement('img');
            thumbnail.src = slotImg.src;
            thumbnail.className = 'role-thumbnail';
            
            const select = document.createElement('select');
            select.className = 'voie-select';
            const className = getClassNameFromFile(slotImg.src.split('/').pop());
            
            select.innerHTML = '<option value="">Choose main role</option>';
            
            if (className && classData.Classes[className]) {
                Object.keys(classData.Classes[className].Voies).forEach(voie => {
                    const option = document.createElement('option');
                    option.value = voie;
                    option.textContent = voie;
                    if (teamRoles[index].voie === voie) {
                        option.selected = true;
                    }
                    select.appendChild(option);
                });
            }
            
            select.onchange = (e) => {
                teamRoles[index] = {
                    class: className,
                    voie: e.target.value
                };
                updateRolesSummary();
                updateBalanceGauge();
            };
            
            container.appendChild(thumbnail);
            container.appendChild(select);
            rolesPanel.appendChild(container);
        }
    });
}

function selectClass(imgSrc) {
    if (selectedSlot !== null) {
        const slot = document.querySelector(`.slot[data-slot="${selectedSlot}"]`);
        slot.innerHTML = "";
        const img = document.createElement("img");
        img.src = `assets/${imgSrc}`;
        slot.appendChild(img);
        
        const className = getClassNameFromFile(imgSrc);
        teamRoles[selectedSlot] = {
            class: className,
            voie: null
        };
        
        updateRolesPanel();
        updateRolesSummary();
        updateBalanceGauge();
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
        const img = createClassImage(imgSrc);
        //img.classList.add("half-image"); // Appliquer le style
        menuContent.appendChild(img);
    });

    menu.classList.remove("hidden");
}


function createClassImage(imgSrc) {
    const img = document.createElement("img");
    img.src = `assets/${imgSrc}`;
    img.dataset.src = imgSrc;  // Stocker l'image actuelle

    // Clic droit pour changer le genre
    img.oncontextmenu = (e) => {
        e.preventDefault();
        const [gender, className] = img.dataset.src.split('_');
        let newGender = gender === 'male' ? 'female' : 'male';

        let newImgSrc = `${newGender}_${className}`;
        img.src = `assets/${newImgSrc}`;
        img.dataset.src = newImgSrc;  // Mettre à jour l'image actuelle

        teamRoles[selectedSlot].image = `assets/${newImgSrc}`; 
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

