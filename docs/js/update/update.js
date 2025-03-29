import { updateRolesPanel, updateRolesSummary } from '../update/roleContainers.js';
import { updateSlotOrder, updateTeamContainer } from '../update/teamContainer.js';
import { setTeamRoles } from '../dataModel/team.js';
import { updateGauges } from '../update/gauge.js';
import { getCurrentLanguage } from '../dataModel/translation.js';
import { setLanguage } from '../utils/translate.js';

function updateAll() {
    const l_teamRoles = updateSlotOrder();
    setTeamRoles(l_teamRoles);
    updateTeamContainer();
    updateRolesPanel();
    updateRolesSummary();
    updateGauges();
    setLanguage(getCurrentLanguage());
}

export { updateAll };