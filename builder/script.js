import { classData } from './datas/data_model.js';

// Variables globales

// Définition des rôles importants et optionnels
const IMPORTANT_ROLES = [
    "Zone", "Burst", "Ranged", "Melee", 
    "Heal", "Shield", "Placeur", "Resurection",
    "Buff DI", "Rall Resistance"
];

const OPTIONAL_ROLES = [
    "Constant", "Off Shield", "Off Heal", "Off DPT", "Off Tank", "Off Placeur", 
    "Buff PA", "Buff Crit", "Buff PM", "Buff PO", "Buff PW", "Buff Resistance",
    "Rall PA", "Rall PM", "Rall DI", "Rall PO", "Rall Crit",
    "Anti Shield", "Anti Heal"
];


let teamRoles = Array(6).fill({ class: null, voie: null });
let selectedSlot = null;
let simpMode = false;


// Fonction pour mettre à jour les rôles sous la jauge
function updateTeamRoles() {
    const rolesContainer = document.getElementById('roles-under-gauge');
    rolesContainer.innerHTML = ''; // Réinitialiser la section des rôles
    const currentRoles = [];

    // On passe en revue les rôles de l'équipe
    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.classes[slot.class].Voies;
            if (classVoies[slot.voie]) {
                const voieRoles = classVoies[slot.voie];
                voieRoles.forEach(role => {
                    currentRoles.push(role);
                });
            }
        }
    });

    // Tri des rôles : on commence par les rôles remplis, puis on ajoute les manquants importants et optionnels
    const teamRolesToDisplay = [...IMPORTANT_ROLES.filter(role => currentRoles.includes(role)),
                                ...OPTIONAL_ROLES.filter(role => currentRoles.includes(role))];
    const missingImportantRoles = IMPORTANT_ROLES.filter(role => !currentRoles.includes(role));
    const missingOptionalRoles = OPTIONAL_ROLES.filter(role => !currentRoles.includes(role));

    // Fonction pour créer une ligne de rôles
    const createRoleLine = (roles, roleType) => {
        if (roles.length === 0) return; // Ne pas créer de ligne si pas de rôles

        const lineContainer = document.createElement('div');
        lineContainer.classList.add('role-line');
        
        roles.forEach(role => {
            const roleElement = document.createElement('div');
            roleElement.classList.add('role-item');
            roleElement.textContent = role;
            
            // Appliquer la classe appropriée
            if (roleType === 'filled') {
                roleElement.classList.add('role-filled');
            } else if (roleType === 'missing-important') {
                roleElement.classList.add('role-missing-important');
            } else {
                roleElement.classList.add('role-missing-optional');
            }
            
            lineContainer.appendChild(roleElement);
        });

        rolesContainer.appendChild(lineContainer);
    };

    // Créer les trois lignes distinctes
    if (teamRolesToDisplay.length > 0) {
        createRoleLine(teamRolesToDisplay, 'filled');
    }
    if (missingImportantRoles.length > 0) {
        createRoleLine(missingImportantRoles, 'missing-important');
    }
    if (missingOptionalRoles.length > 0) {
        createRoleLine(missingOptionalRoles, 'missing-optional');
    }
}

// Fonction pour calculer la balance Melee/Ranged
function calculateMeleeRangedBalance() {
    let balance = 0;
    
    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.classes[slot.class].Voies;
            if (classVoies[slot.voie] && slot.voie.includes('DPT')) {
                const voieValues = classVoies[slot.voie];
                if (voieValues.includes('Melee')) {
                    balance -= 1;
                }
                if (voieValues.includes('Ranged')) {
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
function countRoles() {
    let dptCount = 0;
    let supportCount = 0;

    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.classes[slot.class].Voies;
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
function hasRole(roleName) {
    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.classes[slot.class].Voies;
            if (classVoies[slot.voie]) {
                if (slot.voie.startsWith(roleName)) {
                    return true;
                }
            }
        }
    });
    

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
    summaryContainer.innerHTML = '<h3>Résumé des rôles</h3>';
    
    const presentRoles = new Set();
    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.classes[slot.class].Voies;
            if (classVoies[slot.voie]) {
                if (slot.voie.startsWith('DPT')) {
                    presentRoles.add('DPT');
                } else if (classVoies[slot.voie].includes('Heal')) {
                    presentRoles.add('Heal');
                } else if (classVoies[slot.voie].includes('Shield')) {
                    presentRoles.add('Shield');
                }
                if (classVoies[slot.voie].includes('Placeur')) {
                    presentRoles.add('Placeur');
                }
                if (classVoies[slot.voie].includes('Rall Resistance')) {
                    presentRoles.add('Rall Resistance');
                }
                if (classVoies[slot.voie].includes('Resurection')) {
                    presentRoles.add('Resurection');
                }
            }
        }
    });

    updateTeamRoles();

    const { dptCount, supportCount } = countRoles();
    if (dptCount > supportCount) {
        const warningDiv = document.createElement('div');
        warningDiv.textContent = "Number of DPT greater than Supports";
        warningDiv.style.color = '#ff0000';
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
    const rolesPanel = document.getElementById('roles-panel');
    rolesPanel.innerHTML = '<h3>Choix des rôles</h3>';

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
            
            select.innerHTML = '<option value="">Choisir une voie</option>';
            
            if (className && classData.classes[className]) {
                Object.keys(classData.classes[className].Voies).forEach(voie => {
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

    Object.keys(classData.classes).forEach(className => {
        const imgSrc = simpMode ? 
            `female_${className.toLowerCase()}.png` : 
            `male_${className.toLowerCase()}.png`;
        const img = createClassImage(imgSrc);
        menuContent.appendChild(img);
    });

    menu.classList.remove("hidden");
}

function createClassImage(imgSrc) {
    const img = document.createElement("img");
    img.src = `assets/${imgSrc}`;
    img.onclick = () => selectClass(imgSrc);
    return img;
}

function closeSelectionMenu() {
    document.getElementById("selection-menu").classList.add("hidden");
}

function toggleSimpMode() {
    simpMode = !simpMode;
    const btn = document.getElementById("simp-mode-btn");
    btn.textContent = simpMode ? "Simp Mode: ON" : "Simp Mode: OFF";
    
    document.querySelectorAll('.slot img').forEach(img => {
        const currentSrc = img.src;
        const fileName = currentSrc.split('/').pop();
        const className = fileName.split('_')[1];
        img.src = `assets/${simpMode ? 'female' : 'male'}_${className}`;
    });
}

// Initialisation des événements
document.addEventListener('DOMContentLoaded', () => {
    // Gestionnaire pour les slots
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


    // Gestionnaire pour le bouton Simp Mode
    document.getElementById('simp-mode-btn').addEventListener('click', toggleSimpMode);

    // Gestionnaire pour le bouton Fermer
    document.getElementById('close-menu-btn').addEventListener('click', closeSelectionMenu);

    // Initialisation des panneaux
    updateRolesPanel();
    updateRolesSummary();
    updateBalanceGauge();
});