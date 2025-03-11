import { closeRolesModal } from '../uiHandler/classInfos.js';
import { openSelectionMenu, closeSelectionMenu, toggleSavedTeamsMenu } from '../uiHandler/selectionMenu.js';
import { saveCurrentTeam, loadTeamToLocalStorage } from '../storage/localStorage.js';
import { updateAll } from '../update/update.js';
import { clearSlot } from '../update/teamContainer.js';
import { setLanguage } from '../utils/translate.js';


import { exportTeamRoles, importTeamRoles  } from '../transfert/importExport.js';


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slot').forEach(slot => {
    if (slot) {
      slot.addEventListener('click', () => {
        openSelectionMenu(parseInt(slot.getAttribute('data-slot')));
      });
      slot.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const slotIndex = parseInt(slot.getAttribute('data-slot'));
        clearSlot(slotIndex);
        updateAll();
      });
    } else {
      console.error('Slot is null');
    }
  });
  document.getElementById("save-team-button").addEventListener("click", saveCurrentTeam);
  document.getElementById("show-teams-button").addEventListener("click", toggleSavedTeamsMenu);
  document.getElementById('close-menu-btn').addEventListener('click', closeSelectionMenu);
  loadTeamToLocalStorage();
  updateAll();
  setLanguage(currentLanguage);
});

document.addEventListener('keyup', function(e) {
  if (e.key === 'Shift') {
    isShiftPressed = false;
  }
  if (e.key === 'Control') {
    isControlPressed = false;
    closeRolesModal();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Shift') {
    isShiftPressed = true;
  }
  if (e.key === 'Control') {
    isControlPressed = true;
  }
  if (e.key === 'Escape') {
    closeSelectionMenu();
    closeRolesModal();
    toggleSavedTeamsMenu(true);
  }
});

document.getElementById('btn_export').onclick = function() {
  exportTeamRoles();
};

document.getElementById('btn_import').onclick = async function() {
  importTeamRoles();
};