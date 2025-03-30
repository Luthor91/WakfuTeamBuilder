function displayNotification(message, color = null) {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.classList.add('temp-notification');
    notification.style.backgroundColor = color ? color : 'green'

    // Ajouter au body
    document.body.appendChild(notification);

    // Supprimer après 3 secondes avec une animation de fondu
    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 500);
    }, 3000);

    // Supprimer instantanément au clic
    notification.addEventListener('click', () => {
        notification.remove();
    });
}

// Fonction pour afficher une modal de confirmation
function displayConfirmationModal(message, onConfirm) {
    // Vérifier si une modal de confirmation est déjà affichée
    if (document.querySelector('.confirmation-modal')) {
        return;
    }

    // Créer l'overlay
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Créer la modal
    const modal = document.createElement("div");
    modal.classList.add("confirmation-modal");

    // Ajouter le message
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    modal.appendChild(messageElement);

    // Ajouter les boutons
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Oui";
    confirmButton.classList.add("confirm-button");
    confirmButton.addEventListener("click", () => {
        onConfirm();
        document.body.removeChild(overlay);
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Non";
    cancelButton.classList.add("cancel-button");
    cancelButton.addEventListener("click", () => {
        document.body.removeChild(overlay);
    });

    buttonsContainer.appendChild(confirmButton);
    buttonsContainer.appendChild(cancelButton);
    modal.appendChild(buttonsContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Ajouter un gestionnaire d'événements pour la touche "Entrée"
    document.addEventListener("keydown", function handleKeydown(event) {
        if (event.key === "Enter") {
            onConfirm();
            document.body.removeChild(overlay);
            document.removeEventListener("keydown", handleKeydown);
        }
    });
}


export { displayNotification, displayConfirmationModal };