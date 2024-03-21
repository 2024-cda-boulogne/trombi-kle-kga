for (let i = 1; i <= 12; i++) {
    document.getElementById('icon' + i).addEventListener('click', () => {
        // Afficher la popup correspondante
        const popup = document.getElementById('popup' + i);
        popup.style.display = 'block';
    });
}

// Fermer la popup quand on clique dans le vide
window.addEventListener('click', (e) => {
    for (let i = 1; i <= 12; i++) {
        const icon = document.getElementById('icon' + i);
        const popup = document.getElementById('popup' + i);
        if (e.target !== icon && e.target !== popup && popup.style.display === 'block') {
            popup.style.display = 'none';
        }
    }
});