// Sélection des éléments
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const moonIcon = darkModeToggle.querySelector('i');

/* --- LOGIQUE DU MENU MOBILE --- */
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isOpen = navMenu.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
});

// Fermer le menu si on clique sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

/* --- LOGIQUE DU MODE SOMBRE --- */
// Vérifier la préférence enregistrée au chargement
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    moonIcon.classList.replace('fa-moon', 'fa-sun');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        moonIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        moonIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});