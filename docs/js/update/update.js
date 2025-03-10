import { teamRoles } from './teamManagement.js';
import { updateSlotOrder, updateTeamContainer, updateRolesPanel, updateRolesSummary } from './update/ui.js';
import { updateGauges } from './update/gauge.js';

function updateAll() {
    teamRoles = updateSlotOrder();
    updateTeamContainer();
    updateRolesPanel();
    updateRolesSummary();
    updateGauges();
}

export { updateAll };