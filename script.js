// Mobile Menu Toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    });
});

// Form Submission Handler
function handleSubmit(event) {
    event.preventDefault();
    
    const formMessage = document.getElementById('form-message');
    const form = document.getElementById('contactForm');
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const feedbackType = document.getElementById('feedback-type').value;
    
    // Simple validation
    if (name && email && subject && message) {
        // Show success message
        formMessage.className = 'form-message success';
        formMessage.textContent = `Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`;
        
        // Reset form
        form.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    } else {
        // Show error message
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Please fill in all required fields.';
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to skills progress bars when they come into view
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('style').match(/width:\s*(\d+%)/)[1];
        }
    });
}, observerOptions);

document.querySelectorAll('.progress').forEach(progress => {
    observer.observe(progress);
});
