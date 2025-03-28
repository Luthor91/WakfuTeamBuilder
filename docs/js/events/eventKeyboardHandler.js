import { hideRolesModal } from '../uiHandler/classInfos.js';
import { g_currentClassIndex, getCurrentClassIndex, handleClickOnSelectionMenuImage, hideSelectionMenu, isSelectionMenuDisplayed, openSelectionMenu, setCurrentClassIndex, toggleSavedTeamsMenu } from '../uiHandler/selectionMenu.js';
import { getAutocompleteValidated, hideAutocompleteClassList, toggleAutocompleteClassList } from '../uiHandler/autoCompleteClassList.js';
import { updateAutocompleteClassList, validateClassListSelection } from '../update/autoCompleteClassList.js';
import { focusSlot, getFocusedSlot, setFocusedSlot } from '../uiHandler/slot.js';
import { clearSlot } from '../update/teamContainer.js';
import { updateAll } from '../update/update.js';


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

// .focus()
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

  if (e.key === "Delete") {    
    const l_focusedIndex = getFocusedSlot();
    console.log("Slot ", l_focusedIndex, " will be deleted");
    if (l_focusedIndex !== -1) {
      clearSlot(l_focusedIndex);
      updateAll();
    }
  }


  const items = document.getElementById("menu-content").children;
  const l_currentClassIndex = getCurrentClassIndex();

  if (e.key === "Enter") {
      g_isEnterPressed = true;

    if (getAutocompleteValidated() == true) {
      validateClassListSelection();
    }

    const l_focusedIndex = getFocusedSlot();
    if (l_focusedIndex !== -1 && !isSelectionMenuDisplayed()) {
      console.log("Slot ", l_focusedIndex, " will be filled");
      // Minus 1 parce que l'index des slots commence à 0
      openSelectionMenu(l_focusedIndex - 1);
    }

    if (l_currentClassIndex >= 0 && isSelectionMenuDisplayed()) {
      console.log("clic");
      items[l_currentClassIndex].click();
      const img = items[l_currentClassIndex].children[0];
      handleClickOnSelectionMenuImage(img);

    }
  }

  const l_isSelectionMenuDisplayed = isSelectionMenuDisplayed();
  if (e.key === "ArrowRight") {
    if (l_isSelectionMenuDisplayed && l_currentClassIndex < items.length - 1) setCurrentClassIndex(l_currentClassIndex + 1);
  }
  if (e.key === "ArrowLeft") {
    if (l_isSelectionMenuDisplayed && l_currentClassIndex > 0) setCurrentClassIndex(l_currentClassIndex - 1);
  }
  if (e.key === "ArrowDown") {
    if (l_isSelectionMenuDisplayed && l_currentClassIndex + 6 < items.length) setCurrentClassIndex(l_currentClassIndex + 6);
  }  
  if (e.key === "ArrowUp") {
    if (l_isSelectionMenuDisplayed && l_currentClassIndex - 6 >= 0) setCurrentClassIndex(l_currentClassIndex - 6);
  }

  if (e.key >= 1 && e.key <= 6) { 
    console.log("Slot Index selected : ", e.key);
    setFocusedSlot(e.key);
    focusSlot(e.key - 1);
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