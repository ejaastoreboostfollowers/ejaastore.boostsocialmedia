// Smooth scroll for navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Hitung offset dari header yang fixed
        const offsetPosition = targetSection.offsetTop - document.querySelector('header').offsetHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

