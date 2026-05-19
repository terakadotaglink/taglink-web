window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    const heroText = document.querySelector('.hero-text');
    
    setTimeout(() => {
        splash.classList.add('fade-out');
        setTimeout(() => {
            if (heroText) {
                heroText.classList.add('is-visible');
            }
        }, 500);
    }, 2000);
});

const revealElements = document.querySelectorAll(".reveal");
const scrollReveal = () => {
    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 80) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);