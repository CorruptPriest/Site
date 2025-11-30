// Minimal script for Lantara website
console.log('Lantara Eco-Site Loaded');

// Active link handling on scroll
const sections = document.querySelectorAll('.scroll-section');
const navLinks = document.querySelectorAll('.side-nav a');
const container = document.querySelector('.scroll-container');

const observerOptions = {
    root: container,
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});
