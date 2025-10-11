// Page Loader
window.addEventListener('load', function() {
    setTimeout(() => {
        const loader = document.getElementById('pageLoader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"], .smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || this.dataset.target);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active Navigation
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Typing Animation
const typingTexts = [
    'Mạng Máy Tính',
    'Network Engineer',
    'System Administrator',
    'Cybersecurity Enthusiast'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('heroTyping');

function typeText() {
    if (!typingElement) return; // Guard against null element
    
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let timeout = isDeleting ? 100 : 200;
    
    if (!isDeleting && charIndex === currentText.length) {
        timeout = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        timeout = 500;
    }
    
    setTimeout(typeText, timeout);
}

// Parallax Effect
function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.parallax');
    const rate = scrolled * -0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${rate}px)`;
    }
}

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-item')) {
                entry.target.classList.add('animate');
                const progressBar = entry.target.querySelector('.skill-progress-bar');
                const width = progressBar.getAttribute('data-width');
                setTimeout(() => {
                    progressBar.style.width = width + '%';
                }, 200);
            }
            
            // Animate project cards
            if (entry.target.classList.contains('project-card')) {
                entry.target.classList.add('animate');
            }
            
            // Animate contact cards
            if (entry.target.classList.contains('contact-card')) {
                entry.target.classList.add('animate');
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.animate-on-scroll, .skill-item, .project-card, .contact-card').forEach(el => {
    observer.observe(el);
});

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
    }
}

// Enhanced scroll effects with performance optimization
let ticking = false;

function updateScrollEffects() {
    if (!ticking) {
        requestAnimationFrame(() => {
            updateActiveNav();
            handleParallax();
            handleNavbarScroll();
            ticking = false;
        });
        ticking = true;
    }
}

// Performance optimization: debounce scroll events
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        
        if (callNow) func.apply(context, args);
    };
}

// Apply debouncing to scroll handler
const debouncedScrollHandler = debounce(updateScrollEffects, 10);

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    typeText();
    updateActiveNav();
    
    // Add scroll listener with optimization
    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
    
    // Add staggered animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add staggered animation to contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.3}s`;
    });
});

// Mobile menu close on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// Preload critical resources
const preloadResources = [
    'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'
];

preloadResources.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = url;
    document.head.appendChild(link);
});

// Add smooth hover effects for better UX
document.querySelectorAll('.btn-hero').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});