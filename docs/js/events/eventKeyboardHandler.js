import { closeRolesModal } from '../uiHandler/classInfos.js';
import { hideSelectionMenu, toggleSavedTeamsMenu } from '../uiHandler/selectionMenu.js';


let g_isShiftPressed = false;
let g_isControlPressed = false;


document.addEventListener('keyup', function(e) {
  if (e.key === 'Shift') {
    g_isShiftPressed = false;
  }
  if (e.key === 'Control') {
    g_isControlPressed = false;
    closeRolesModal();
  }
});


document.addEventListener('keydown', function(e) {
  if (e.key === 'Shift') {
    g_isShiftPressed = true;
  }
  if (e.key === 'Control') {
    g_isControlPressed = true;
  }
  if (e.key === 'Escape') {
    hideSelectionMenu();
    closeRolesModal();
    toggleSavedTeamsMenu(true);
  }
});


function getShiftPressed() {
  return g_isShiftPressed;
}

function setShiftPressed(l_isShiftPressed) {
    g_isShiftPressed = l_isShiftPressed;
}

function getControlPressed() {
  return g_isControlPressed;
}

function setControlPressed(l_isControlPressed) {
    g_isControlPressed = l_isControlPressed;
}

export { getShiftPressed, setShiftPressed, getControlPressed, setControlPressed };