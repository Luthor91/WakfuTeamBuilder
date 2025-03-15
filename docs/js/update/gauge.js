import { getTeamRoles, isTeamRolesEmpty } from '../dataModel/team.js';
import { CLASS_DATA } from '../dataModel/class.js';



function updateGauges() {
    const totalStats = {};

    if (isTeamRolesEmpty()) {
        document.querySelectorAll("[id^='gauge-']").forEach(gauge => {
            updateGaugeBar(gauge, 0);
        });
        return;
    }

    const l_teamRoles = getTeamRoles();
    l_teamRoles.forEach(slot => {
        if (slot.class && slot.voie) {
        const classVoies = CLASS_DATA.Classes[slot.class].Voies;
        if (classVoies[slot.voie]) {
            const notes = classVoies[slot.voie].Notes;
            for (const category in notes) {
            const categoryData = notes[category];
            for (const statName in categoryData) {
                const statValue = categoryData[statName];
                if (!totalStats[statName]) {
                totalStats[statName] = 0;
                }
                totalStats[statName] += statValue;
            }
            }
        }
        }
    });
    for (const statName in totalStats) {
        const statGaugeId = `gauge-${statName}`;
        const statElement = document.getElementById(statGaugeId);
        if (statElement) {
            updateGaugeBar(statElement, Math.min(totalStats[statName], 10));
        }
    }
}
  
function updateGaugeBar(element, value) {
    element.setAttribute('data-value', value);
    element.style.setProperty('--gauge-width', `${value * 10}%`);
    let color;
    if (value <= 0) {
        color = '#ff0000';
    } else if (value <= 2) {
        color = '#ff5500';
    } else if (value <= 5) {
        color = '#ffaa00';
    } else if (value <= 7) {
        color = '#aaff00';
    } else {
        color = '#00ff00';
    }
    element.style.setProperty('--gauge-color', color);
}

export { updateGauges, updateGaugeBar };