
// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';

function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

// Navigation Management
let currentPage = 'home';

function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageName + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    const activeButton = document.querySelector(`[data-page="${pageName}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    currentPage = pageName;
}

// Robot Movement
let mousePosition = { x: 0, y: 0 };
let robotPosition = { x: 0, y: 0 };

function updateMousePosition(e) {
    const rect = document.getElementById('container').getBoundingClientRect();
    mousePosition.x = e.clientX - rect.left;
    mousePosition.y = e.clientY - rect.top;
}

function updateRobotPosition() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const deltaX = mousePosition.x - centerX;
    const deltaY = mousePosition.y - centerY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 200;
    
    if (distance > 50) {
        const normalizedX = deltaX / distance;
        const normalizedY = deltaY / distance;
        
        const targetDistance = Math.min(distance - 100, maxDistance);
        
        robotPosition.x = normalizedX * targetDistance;
        robotPosition.y = normalizedY * targetDistance;
        
        const robot = document.getElementById('ai-robot');
        robot.style.transform = `translate(calc(-50% + ${robotPosition.x}px), calc(-50% + ${robotPosition.y}px))`;
    }
}

// FAQ Functionality
function toggleFAQ(element) {
    element.classList.toggle('open');
}

// Contact Form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    // Show success message (you can replace this with actual form submission logic)
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    e.target.reset();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Theme toggle event
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Navigation events
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageName = button.getAttribute('data-page');
            showPage(pageName);
        });
    });
    
    // Mouse movement for robot
    document.getElementById('container').addEventListener('mousemove', updateMousePosition);
    setInterval(updateRobotPosition, 50);
    
    // FAQ events
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            toggleFAQ(question.parentElement);
        });
    });
    
    // Contact form event
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Initialize with home page
    showPage('home');
});

// Additional utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--tech-glass);
        border: 1px solid var(--tech-blue);
        border-radius: 8px;
        padding: 16px 24px;
        color: var(--foreground);
        backdrop-filter: blur(10px);
        z-index: 1000;
        animation: fade-in 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fade-out 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Example usage for buttons (you can add this to any button click)
function handleButtonClick(buttonText) {
    showNotification(`${buttonText} clicked!`);
}

// Add click handlers to all holo buttons
document.addEventListener('DOMContentLoaded', function() {
    const holoButtons = document.querySelectorAll('.holo-button');
    holoButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.type !== 'submit') {
                handleButtonClick(button.textContent);
            }
        });
    });
});
