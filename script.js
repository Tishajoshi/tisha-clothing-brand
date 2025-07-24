// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Testimonial Slider
const testimonialSlider = {
    currentIndex: 0,
    testimonials: document.querySelectorAll('.testimonial-card'),
    dots: document.querySelectorAll('.dot'),
    prevBtn: document.querySelector('.prev-btn'),
    nextBtn: document.querySelector('.next-btn'),
    
    init() {
        this.showTestimonial(this.currentIndex);
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.showTestimonial(index);
            });
        });
        
        // Auto slide every 5 seconds
        this.autoSlide = setInterval(() => this.nextSlide(), 5000);
    },
    
    showTestimonial(index) {
        this.testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        this.dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        this.testimonials[index].classList.add('active');
        this.dots[index].classList.add('active');
        this.currentIndex = index;
    },
    
    nextSlide() {
        let newIndex = this.currentIndex + 1;
        if (newIndex >= this.testimonials.length) {
            newIndex = 0;
        }
        this.showTestimonial(newIndex);
    },
    
    prevSlide() {
        let newIndex = this.currentIndex - 1;
        if (newIndex < 0) {
            newIndex = this.testimonials.length - 1;
        }
        this.showTestimonial(newIndex);
    }
};

// Initialize testimonial slider
if (document.querySelector('.testimonials-slider')) {
    testimonialSlider.init();
}

// Form submissions
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.querySelector('.newsletter-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Header Scroll Effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = 'none';
        header.style.padding = '15px 0';
    }
});

// Collection item hover effect for mobile
const collectionItems = document.querySelectorAll('.collection-item');

if (window.innerWidth < 768) {
    collectionItems.forEach(item => {
        item.addEventListener('click', function() {
            const overlay = this.querySelector('.collection-overlay');
            if (overlay.style.transform === 'translateY(0px)') {
                overlay.style.transform = 'translateY(100%)';
            } else {
                overlay.style.transform = 'translateY(0)';
            }
        });
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.section-header, .feature-card, .collection-item, .about-content, .testimonial-card.active');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial styles for animation
document.querySelectorAll('.section-header, .feature-card, .collection-item, .about-content, .testimonial-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Update copyright year
document.querySelector('.copyright p').innerText = 
    `© ${new Date().getFullYear()} Tisha Clothing. All rights reserved.`;

