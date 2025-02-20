import { classData } from './datas/data_model.js';

// Variables globales

// Définition des rôles importants et optionnels
const IMPORTANT_ROLES = [
    "Zone", "Constant", 
    "Heal", "Shield", "Placeur", "Resurection",
    "Buff DI", "Rall Resistance"
];

const OPTIONAL_ROLES = [
    "Constant", "Ranged", "Melee", "Indirect", 
    "Stabilized", "Self Stabilized", "Invulnerability",
    "Sub Shield", "Sub Heal", "Sub DPT", "Sub Tank", "Sub Placeur", 
    "Buff PA", "Buff Crit", "Buff PM", "Buff PO", "Buff PW", "Buff Resistance",
    "Rall PA", "Rall PM", "Rall DI", "Rall PO", "Rall Crit",
    "Anti Shield", "Anti Heal"
];

const CATEGORIES = {
    'Damage Type': ["Constant", "Zone", "Burst", "Melee", "Ranged"],
    'Buff': ["Buff DI", "Buff PA", "Buff Crit", "Buff PM", "Buff PO", "Buff PW", "Buff Resistance"],
    'Rall': ["Rall Resistance", "Rall PA", "Rall PM", "Rall DI", "Rall PO", "Rall Crit"],
    'Sub Roles': ["Sub Shield", "Sub Heal", "Sub DPT", "Off Tank", "Sub Placeur"]
};


let teamRoles = Array(6).fill({ class: null, voie: null });
let selectedSlot = null;
let simpMode = false;


function updateTeamRoles() {
    const rolesContainer = document.getElementById('roles-under-gauge');
    rolesContainer.innerHTML = ''; // Réinitialiser la section des rôles
    
    // Initialiser un tableau de rôles actuels
    const currentRoles = [];
    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.classes[slot.class].Voies;
            if (classVoies[slot.voie]) {
                classVoies[slot.voie].forEach(role => {
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
function getElementsDPT() {
    let elementsDPT = [];

    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.classes[slot.class].Voies;
            const classElements = classData.classes[slot.class].Elements;
            if (classVoies[slot.voie]) {
                if (slot.voie.startsWith('DPT')) {
                    elementsDPT.push(...classElements)
                }
            }
        }
    });
    
    console.log(elementsDPT);
    

    return elementsDPT;
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
function hasStabilizedRole() {
    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = classData.classes[slot.class].Voies;
            if (classVoies[slot.voie].includes("Stabilized") || classVoies[slot.voie].includes("Self Stabilized")) {
                return true;
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

