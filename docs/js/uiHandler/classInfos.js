import { CLASS_DATA } from '../dataModel/class.js';


function displayClassRoles(className) {
    const formattedClassName = className.charAt(0).toUpperCase() + className.slice(1);
    if (!CLASS_DATA.Classes[formattedClassName]) {
        console.error("Classe non trouvée :", className);
        return;
    }
    const classInfo = CLASS_DATA.Classes[formattedClassName];
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

function hideRolesModal() {
    document.getElementById("class-info-display").style.display = "none";
}


export { displayClassRoles, hideRolesModal };