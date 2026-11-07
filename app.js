// Handles navigation and interactive events across pages
document.addEventListener('DOMContentLoaded', () => {
    const openMenuBtn = document.getElementById('openMenuBtn');
    if (openMenuBtn) {
        openMenuBtn.addEventListener('click', () => {
            window.location.href = 'coffee.html';
        });
    }
});
