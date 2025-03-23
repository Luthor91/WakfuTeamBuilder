import { hideRolesModal } from '../uiHandler/classInfos.js';
import { hideSelectionMenu, toggleSavedTeamsMenu } from '../uiHandler/selectionMenu.js';
import { displayAutocompleteClassList, getAutocompleteValidated, hideAutocompleteClassList, isAutocompleteClassListDisplayed, toggleAutocompleteClassList } from '../uiHandler/autocompleteClassList.js';
import { updateAutocompleteClassList, validateClassListSelection } from '../update/autocompleteClassList.js';


let g_isShiftPressed = false;
let g_isControlPressed = false;
let g_isInsertPressed = false;
let g_isEnterPressed = false;


document.getElementById("autocomplete-input").addEventListener("input", () => {
  const input = document.getElementById("autocomplete-input");
  updateAutocompleteClassList(input.value)
});


document.addEventListener('keyup', function(e) {
  if (e.key === 'Shift') {
    g_isShiftPressed = false;
  }
  if (e.key === 'Control') {
    g_isControlPressed = false;
    hideRolesModal();
  }
  if (e.key === 'Insert') {
    g_isInsertPressed = false;
  }

  if (e.key === "Enter") {
    g_isEnterPressed = false;
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
    hideRolesModal();
    hideAutocompleteClassList();
    toggleSavedTeamsMenu(true);
  }
  if (e.key === 'Insert') {
    g_isInsertPressed = true;
    toggleAutocompleteClassList();
  }

  if (e.key === "Enter") {
      g_isEnterPressed = true;

    if (getAutocompleteValidated() == true) {
      validateClassListSelection();
    }
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

function getInsertPressed() {
  return g_isInsertPressed;
}

function setInsertPressed(l_isAltPressed) {
  g_isInsertPressed = l_isAltPressed;
}

function getEnterPressed() {
  return g_isEnterPressed;
}

function setEnterPressed(l_isEnterPressed) {
  g_isEnterPressed = l_isEnterPressed;
}

export { 
  getShiftPressed, setShiftPressed, 
  getControlPressed, setControlPressed, 
  getInsertPressed, setInsertPressed,
  getEnterPressed, setEnterPressed,

};