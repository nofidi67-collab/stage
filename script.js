document.addEventListener('DOMContentLoaded', () => {

    // 1. SUIVI DU CURSEUR PERSONNALISÉ
    const cursor = document.querySelector('.custom-cursor');
    
    if (window.matchMedia('(min-width: 992px)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        // Effet au survol des éléments cliquables
        const interactiveElements = document.querySelectorAll('a, button, .project-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.borderColor = 'var(--accent-purple)';
                cursor.style.backgroundColor = 'rgba(79, 172, 254, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.borderColor = 'var(--accent-cyan)';
                cursor.style.backgroundColor = 'transparent';
            });
        });
    } else {
        cursor.style.display = 'none';
    }

    // 2. BOUTON DARK / LIGHT MODE
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            htmlElement.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // 3. SOUMISSION DU FORMULAIRE
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Merci ${name} ! Votre message a été envoyé (simulation).`);
        form.reset();
    });
});
// 4. MENU HAMBURGER MOBILE
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    
    // Change l'icône entre les barres "hamburger" et une croix "X"
    const icon = menuToggle.querySelector('i');
    if (mainNav.classList.contains('active')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
});

// Ferme le menu automatiquement quand on clique sur un lien
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.querySelector('i').className = 'fas fa-bars';
    });
});
