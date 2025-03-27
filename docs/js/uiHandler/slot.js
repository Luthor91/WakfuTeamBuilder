
let g_focusedIndex = -1;


function focusSlot(index) {
    let slots = document.querySelectorAll(".slot");

    if (index < 0 || index >= slots.length) return; // Empêche un index hors limites

    if (g_focusedIndex !== -1 && g_focusedIndex < slots.length) {
        slots[g_focusedIndex].classList.remove("focused");
    }

    g_focusedIndex = index;
    slots[g_focusedIndex].classList.add("focused");
    slots.forEach((slot, l_index) => {
        if (l_index == g_focusedIndex) return;
        slot.classList.remove("focused");
    })
}


function getFocusedSlot() {
    return g_focusedIndex;
}

function setFocusedSlot(l_focusedIndex) {
    console.log("FocusedIndex = ", l_focusedIndex);
    g_focusedIndex = l_focusedIndex;
}


export { focusSlot, getFocusedSlot, setFocusedSlot };