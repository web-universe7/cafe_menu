// Handles navigation and interactive events across pages
document.addEventListener('DOMContentLoaded', () => {
    // Open Menu Button event handler on index.html
    const openMenuBtn = document.getElementById('openMenuBtn');
    if (openMenuBtn) {
        openMenuBtn.addEventListener('click', () => {
            window.location.href = 'coffee.html';
        });
    }

    // Back to Home Button event handler on coffee.html
    const backHomeBtn = document.getElementById('backHomeBtn');
    if (backHomeBtn) {
        backHomeBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});