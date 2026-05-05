// Simplified JavaScript for UI enhancements only
document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scroll for anchor links
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
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(26, 26, 46, 0.98)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = 'rgba(26, 26, 46, 0.95)';
            }
        });
    }
    
    // Auto-refresh logs every 30 seconds (optional)
    // Uncomment if you want automatic log refresh
    /*
    setInterval(() => {
        fetch('/get_detection_status')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Update status indicators
                    updateStatusIndicators(data.status);
                }
            })
            .catch(error => console.error('Error:', error));
    }, 30000);
    */
});

// Slideshow functionality (if needed on home page)
class Slideshow {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.nav-dot');
        this.currentSlide = 0;
        this.slideInterval = null;
        
        if (this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        this.showSlide(0);
        this.startAutoPlay();
        this.addEventListeners();
    }
    
    showSlide(index) {
        if (index < 0) index = this.slides.length - 1;
        if (index >= this.slides.length) index = 0;
        
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }
    
    startAutoPlay() {
        this.slideInterval = setInterval(() => this.nextSlide(), 5000);
    }
    
    stopAutoPlay() {
        clearInterval(this.slideInterval);
    }
    
    addEventListeners() {
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.stopAutoPlay();
                this.showSlide(index);
                this.startAutoPlay();
            });
        });
        
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.addEventListener('mouseenter', () => this.stopAutoPlay());
            hero.addEventListener('mouseleave', () => this.startAutoPlay());
        }
    }
}

// Initialize slideshow on home page
if (document.querySelector('.slideshow-container')) {
    new Slideshow();
}