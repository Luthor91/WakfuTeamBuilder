import { classData } from './dataModel/class.js';
import { translate } from './dataModel/translation.js';
import { teamRoles } from './teamManagement.js';

function showNotification(message, color = null) {
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



export { showNotification };