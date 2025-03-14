let g_teamRoles = Array(6).fill({ class: null, voie: null, image: null });

function initTeamRoles() {
    return Array(6).fill().map(() => ({ class: null, voie: null, image: null }));
}

function isTeamRolesEmpty() {
    let countEmptySpace = 0;
    g_teamRoles.forEach(teamRole => {
        if (teamRole.class === null) {
            countEmptySpace++;
        }
    });
    return (countEmptySpace == 6);
}

function isTeamRolesFull() {
    let countEmptySpace = 0;
    g_teamRoles.forEach(teamRole => {
        if (teamRole.class === null) {
            countEmptySpace++;
        }
    });
    return (countEmptySpace == 0);
}

function setTeamRoles(l_teamRoles) {
    g_teamRoles = l_teamRoles;
}


function getTeamRoles() {
    return g_teamRoles;
}

export { initTeamRoles, isTeamRolesEmpty, isTeamRolesFull, setTeamRoles, getTeamRoles };