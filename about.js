// Scroll reveal animation
const scrollReveal = () => {
    const elements = document.querySelectorAll('.scroll-reveal');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
};

// Number counter animation
const animateNumbers = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 16);
    });
};

// Add scroll-reveal class to sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about-section, .themes-section, .objectives-section, .speakers-section, .cta-section');
    sections.forEach(section => {
        section.classList.add('scroll-reveal');
    });
    
    // Initialize number animation when stats section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    });
    
    const statsSection = document.querySelector('.about-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
});

// Event listeners
window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);

// Add hover effects for theme cards
document.querySelectorAll('.theme-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});