// script.js

// Intersection Observer for cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Random hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'hearts';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 1000);

// Initialize skill bars
function initializeSkillBars() {
    document.querySelectorAll('.skill-progress').forEach(bar => {
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = bar.dataset.width + '%';
        }, 500);
    });
}

// Reinitialize skill bars when skills section is visible
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            initializeSkillBars();
        }
    });
}, { threshold: 0.1 });

skillsObserver.observe(document.querySelector('#skills'));
