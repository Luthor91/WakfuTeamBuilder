import { classData } from '../dataModel/class.js';
import { teamRoles, updateAll } from './teamManagement.js';


function exportTeamRoles() {
    console.log("Export function triggered");
    let result = [];
    teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
        const classVoies = classData.Classes[slot.class]?.Voies;
        if (classVoies && classVoies[slot.voie]) {
            const classId = classData.Classes[slot.class].Id;
            const roleId = classVoies[slot.voie].Id;
            result.push(`${classId}-${roleId}`);
        }
        }
    });
    const exportString = result.join(";") + ";";
    navigator.clipboard.writeText(exportString).then(() => {
        console.log("Exported string copied to clipboard:", exportString);
        // Code pour afficher la tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = "Code copié dans le presse-papier";
        tooltip.classList.add('temp-notification');
        document.body.appendChild(tooltip);
        setTimeout(() => {
        tooltip.remove();
        }, 1500);
    }).catch(err => {
        console.error("Failed to copy to clipboard:", err);
    });
}

async function importTeamRoles() {
    console.log("Import function triggered");
    let importString = document.getElementById("role-input").value.trim();
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
    teamRoles = Array(6).fill().map(() => ({ class: null, voie: null, image: null }));
    let index = 0;
    rolePairs.forEach(pair => {
        if (pair && index < teamRoles.length) {
        const [classId, roleId] = pair.split("-");
        for (const className in classData.Classes) {
            if (classData.Classes[className].Id.toString() === classId) {
            const classVoies = classData.Classes[className]?.Voies;
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
}

export { exportTeamRoles, importTeamRoles };