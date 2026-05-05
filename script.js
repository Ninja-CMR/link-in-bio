document.addEventListener('DOMContentLoaded', () => {
    // Initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const card = document.getElementById('main-card');

    // Add visible class with a slight delay for fade-in effect
    setTimeout(() => {
        card.classList.add('visible');
    }, 100);

    // Add haptic feedback simulation or micro-interactions
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // Potential for subtle sound or custom cursor effects
        });

        button.addEventListener('click', (e) => {
            // Ripple effect could be added here if desired
        });
    });
});
