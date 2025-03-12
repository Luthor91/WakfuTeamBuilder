let g_teamRoles = Array(6).fill({ class: null, voie: null, image: null });

function initTeamRoles() {
    return Array(6).fill().map(() => ({ class: null, voie: null, image: null }));
}

function setTeamRoles(l_teamRoles) {
    g_teamRoles = l_teamRoles;
}


function getTeamRoles() {
    return g_teamRoles;
}

export { initTeamRoles, setTeamRoles, getTeamRoles };