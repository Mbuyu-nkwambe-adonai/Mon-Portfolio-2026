// Sélection des éléments
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const moonIcon = darkModeToggle.querySelector('i');
const progressBar = document.getElementById('progress-bar');
const scrollToTopBtn = document.getElementById('scroll-to-top');

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

/* --- BARRE DE PROGRESSION ET BOUTON RETOUR EN HAUT --- */
window.addEventListener('scroll', () => {
    // Calcul de la progression du scroll
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";

    // Affichage du bouton retour en haut
    if (winScroll > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});