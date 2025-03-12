import { ROLES_TO_CHECK } from "../dataModel/role.js";
import { getTeamRoles, setTeamRoles } from '../dataModel/team.js';
import { updateTeamRoles } from '../update/teamContainer.js'




function updateRolesPanel() {
    const rolesPanel = document.getElementById('team-roles-panel');
    rolesPanel.innerHTML = '';

    function updateImportantSlot() {
        let importantSlot = null;
        let importantPriority = -1;
        let importantRolesLength = -1;
        let l_teamRoles = getTeamRoles();

        l_teamRoles.forEach((slot, index) => {
            const slotElement = document.querySelector(`.slot[data-slot="${index}"]`);
            if (slotElement) {
                slotElement.classList.remove("slot-important"); // On enlève la classe à tous les slots
            }

            if (slot.voie) {
                const className = slot.class;
                const slotRoles = CLASS_DATA.Classes[className]?.Voies[slot.voie]?.Roles || [];
                
                // Déterminer la priorité en fonction des combinaisons de rôles
                let slotPriority = -1;
                
                for (let i = 0; i < PRIORITY_ORDER.length; i++) {
                    const rolesCombo = PRIORITY_ORDER[i];
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

    // Parcourir g_teamRoles dans son ordre actuel pour maintenir la cohérence
    l_teamRoles.forEach((slot, index) => {
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
            
            if (CLASS_DATA.Classes[slot.class]) {
                const dptGroup = document.createElement('optgroup');
                dptGroup.label = 'DPT';

                const supportGroup = document.createElement('optgroup');
                supportGroup.label = 'Support';

                const specificGroup = document.createElement('optgroup');
                specificGroup.label = 'Specific';

                let defaultOption = null;

                Object.entries(CLASS_DATA.Classes[slot.class].Voies).forEach(([voie, data]) => {
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
                    l_teamRoles[index].voie = defaultOption.value;
                    slot.voie = defaultOption.value;
                }
                
                // Improved onchange handler in updateRolesPanel:
                select.onchange = (e) => {
                    // Update the voie for this slot
                    l_teamRoles[index].voie = e.target.value;
                    setTeamRoles(l_teamRoles);
                    // Use updateAll to ensure complete refresh
                    updateAll();
                };
                
                container.appendChild(select);
            }
        }
        
        rolesPanel.appendChild(container);
    });
    setTeamRoles(l_teamRoles);
    updateImportantSlot(); // Appliquer la classe lors du premier affichage
}

function updateRolesSummary() {
    const summaryContainerWarns = document.getElementById('roles-summary-content-warns');
    const summaryContainerRequired = document.getElementById('roles-summary-content-required');
    
    summaryContainerWarns.innerHTML = ''; // Vider les warnings
    summaryContainerRequired.innerHTML = ''; // Vider les rôles requis
    
    const presentRoles = new Set();

    let l_teamRoles = getTeamRoles();

    l_teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
            const classVoies = CLASS_DATA.Classes[slot.class].Voies;
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

    setTeamRoles(l_teamRoles);
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


    ROLES_TO_CHECK.forEach(role => {
        const roleDiv = document.createElement('div');
        const data_translator = role.toLocaleLowerCase().replaceAll(' ', '_');
        roleDiv.setAttribute('data-translator', data_translator);
        roleDiv.textContent = translate(data_translator, currentLanguage);
        roleDiv.className = presentRoles.has(role) ? 'role-present' : 'role-missing';
        summaryContainerRequired.appendChild(roleDiv);
    });
}


function updateTeamRoles() {
    const rolesContainer = document.getElementById('roles-under-gauge');
    rolesContainer.innerHTML = ''; // Réinitialiser la section des rôles
    const currentRoles = [];

    let l_teamRoles = getTeamRoles();
    l_teamRoles.forEach(slot => {
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
    
    setTeamRoles(l_teamRoles);
    updateGauges();
}

export { updateRolesPanel, updateRolesSummary, updateTeamRoles };