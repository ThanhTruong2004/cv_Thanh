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

// Smooth Scrolling - only for internal navigation links
document.querySelectorAll('a[href^="#"]:not([href="#"]), .smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Skip if it's not an internal navigation link (e.g., mailto:, tel:, http:)
        if (!href || href === '#' || href.includes('mailto:') || href.includes('tel:') || href.includes('http')) {
            return;
        }
        e.preventDefault();
        const target = document.querySelector(href || this.dataset.target);
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
                // Match the href attribute with the section id
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Typing Animation
const typingTexts = [
    'System Administrator',
    'Network Engineer',
    'Linux Enthusiast',
    'Automation Expert'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('heroTyping');

function typeText() {
    if (!typingElement) return;
    
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
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
    
    // Initialize theme
    initializeTheme();
    
    // Initialize Particles.js
    initializeParticles();
    
    // Load dynamic projects
    loadDynamicProjects();
    
    // Load GitHub repos
    loadGitHubRepos();
    
    // Initialize custom cursor
    initializeCustomCursor();
    
    // Initialize EmailJS & Contact Form
    initializeEmailJS();
    
    // Track visitor
    trackVisitor();
    
    // Update status bar time
    updateStatusTime();
    setInterval(updateStatusTime, 1000);
    
    // Start typing animation
    typeText();
    updateActiveNav();
    
    // Add scroll listener with optimization
    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
    
    // Add staggered animation to project cards
    const projectCards = document.querySelectorAll('.project-card-simple');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add staggered animation to contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.3}s`;
    });
    
    // Animate counter numbers for hero stats
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-count'));
        animateCounter(stat, target);
    });
    
    // Animate skill bars
    observeSkillBars();
});

// Mobile menu close on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            // Use Bootstrap 5 Collapse API
            if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            } else {
                // Fallback if Bootstrap is not loaded yet
                navbarCollapse.classList.remove('show');
            }
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

// Animate counter numbers
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current * 100) / 100;
        }
    }, stepTime);
}

// Theme Toggle
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Add animation
            themeToggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                themeToggle.style.transform = 'rotate(0deg)';
            }, 300);
        });
    }
}

// Update Status Bar Time
function updateStatusTime() {
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// Observe and animate skill bars
function observeSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                if (progressBar) {
                    const width = progressBar.getAttribute('data-width');
                    setTimeout(() => {
                        progressBar.style.width = width + '%';
                    }, 200);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillItems.forEach(item => observer.observe(item));
}

// Add smooth hover effects for better UX
document.querySelectorAll('.btn-hero').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Copy Email to Clipboard when clicking email icon
const copyEmailIcon = document.getElementById('copyEmailIcon');
if (copyEmailIcon) {
    copyEmailIcon.addEventListener('click', function(e) {
        e.preventDefault();
        const email = this.getAttribute('data-email');
        
        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            // Show notification
            const notification = document.createElement('div');
            notification.textContent = '📧 Email copied: ' + email;
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
                z-index: 10000;
                font-weight: 600;
                animation: slideIn 0.3s ease;
            `;
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        }).catch(err => {
            alert('Email: ' + email);
        });
    });
}

// Particles.js Configuration
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#00d4ff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00d4ff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Load Dynamic Projects từ JSON
async function loadDynamicProjects() {
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();
        
        // Optional: Có thể cập nhật projects hiện tại hoặc thêm section mới
        console.log('✅ Loaded projects:', data.projects);
        
        // Có thể render projects ở đây nếu muốn
        // renderProjects(data.projects);
        
    } catch (error) {
        console.error('❌ Error loading projects:', error);
    }
}

// Load GitHub Repositories
async function loadGitHubRepos() {
    try {
        const username = 'ThanhTruong2004';
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const repos = await response.json();
        
        console.log('✅ GitHub Repos loaded:', repos);
        
        // Có thể hiển thị repos trong một section riêng
        // renderGitHubRepos(repos);
        
        // Cập nhật status bar với số repos
        const repoCount = repos.length;
        console.log(`📦 Total public repos: ${repoCount}`);
        
    } catch (error) {
        console.error('❌ Error loading GitHub repos:', error);
    }
}

// Custom Cursor
function initializeCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    
    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Dot follows immediately
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    // Smooth outline following
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        
        requestAnimationFrame(animateOutline);
    }
    animateOutline();
    
    // Enlarge on hover clickable elements
    const clickables = document.querySelectorAll('a, button, .btn, .contact-link, .social-link, .project-link-simple');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.opacity = '0.8';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.opacity = '0.5';
        });
    });
}

// EmailJS Configuration & Contact Form
function initializeEmailJS() {
    // Load credentials từ config.js (file bảo mật, không push lên GitHub)
    const EMAILJS_PUBLIC_KEY = typeof CONFIG !== 'undefined' ? CONFIG.emailjs.publicKey : 'YOUR_PUBLIC_KEY_HERE';
    const EMAILJS_SERVICE_ID = typeof CONFIG !== 'undefined' ? CONFIG.emailjs.serviceId : 'YOUR_SERVICE_ID_HERE';
    const EMAILJS_TEMPLATE_ID = typeof CONFIG !== 'undefined' ? CONFIG.emailjs.templateId : 'YOUR_TEMPLATE_ID_HERE';
    
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log('✅ EmailJS initialized');
    } else {
        console.warn('⚠️ EmailJS chưa được cấu hình. Vui lòng cập nhật credentials!');
    }
    
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Disable button
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Đang gửi...</span>';
            formStatus.style.display = 'none';
            
            try {
                // Get form data
                const formData = {
                    user_name: document.getElementById('userName').value,
                    user_email: document.getElementById('userEmail').value,
                    user_phone: document.getElementById('userPhone').value || 'Không cung cấp',
                    subject: document.getElementById('userSubject').value,
                    message: document.getElementById('userMessage').value,
                    timestamp: new Date().toLocaleString('vi-VN')
                };
                
                // Save to localStorage (backup)
                saveContactToLocalStorage(formData);
                
                // Send via EmailJS
                if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
                    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData);
                    
                    // Success
                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Gửi thành công! Tôi sẽ liên hệ lại sớm.';
                    formStatus.style.display = 'block';
                    
                    // Reset form
                    contactForm.reset();
                } else {
                    // Demo mode - no EmailJS configured
                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = '<i class="fas fa-info-circle"></i> Form đã lưu vào localStorage (EmailJS chưa cấu hình)';
                    formStatus.style.display = 'block';
                }
                
            } catch (error) {
                console.error('❌ Error:', error);
                formStatus.className = 'form-status error';
                formStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> Có lỗi xảy ra. Vui lòng thử lại!';
                formStatus.style.display = 'block';
            } finally {
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> <span>Gửi tin nhắn</span>';
            }
        });
    }
}

// Save contact to localStorage
function saveContactToLocalStorage(formData) {
    try {
        let contacts = JSON.parse(localStorage.getItem('portfolioContacts') || '[]');
        contacts.push({
            ...formData,
            id: Date.now()
        });
        localStorage.setItem('portfolioContacts', JSON.stringify(contacts));
        console.log('💾 Contact saved to localStorage');
    } catch (error) {
        console.error('❌ Error saving to localStorage:', error);
    }
}

// Visitor Tracking
function trackVisitor() {
    try {
        // Get visitor stats
        let stats = JSON.parse(localStorage.getItem('visitorStats') || '{}');
        
        // Update stats
        stats.totalVisits = (stats.totalVisits || 0) + 1;
        stats.lastVisit = new Date().toISOString();
        stats.firstVisit = stats.firstVisit || new Date().toISOString();
        
        // Save back
        localStorage.setItem('visitorStats', JSON.stringify(stats));
        
        console.log('👤 Visitor tracked:', stats);
        console.log(`📊 Total visits: ${stats.totalVisits}`);
        
        // Optional: Display visitor count somewhere
        displayVisitorCount(stats.totalVisits);
        
    } catch (error) {
        console.error('❌ Error tracking visitor:', error);
    }
}

// Display visitor count in status bar or footer
function displayVisitorCount(count) {
    // Có thể thêm vào status bar hoặc footer
    // Ví dụ: thêm vào status bar
    const statusBar = document.querySelector('.status-bar');
    if (statusBar && count > 1) {
        const visitorBadge = document.createElement('div');
        visitorBadge.className = 'status-item';
        visitorBadge.innerHTML = `<i class="fas fa-eye"></i> <span>Visits: ${count}</span>`;
        statusBar.appendChild(visitorBadge);
    }
}