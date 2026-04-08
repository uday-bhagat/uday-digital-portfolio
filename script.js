const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

// Dark Mode logic
toggleBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Scroll Animation
const reveal = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(s => {
        const windowHeight = window.innerHeight;
        const revealTop = s.getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
            s.style.opacity = "1";
            s.style.transform = "translateY(0)";
        }
    });
};

// Initial state for reveal
document.querySelectorAll('section').forEach(s => {
    s.style.opacity = "0";
    s.style.transform = "translateY(30px)";
    s.style.transition = "1s ease";
});

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
