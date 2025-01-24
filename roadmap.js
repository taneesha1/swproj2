document.addEventListener('DOMContentLoaded', function() {
    // Initialize the carousel with custom settings
    const roadmapCarousel = new bootstrap.Carousel(document.getElementById('roadmapCarousel'), {
        interval: 5000, // Change slides every 5 seconds
        wrap: true, // Continuous loop
        keyboard: true, // Allow keyboard navigation
        touch: true // Allow touch/swipe navigation
    });

    // Handle Read More buttons
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.roadmap-card');
            const cardText = card.querySelector('.card-text');
            
            if (this.textContent === 'Read More') {
                // Expand
                cardText.style.maxHeight = cardText.scrollHeight + 'px';
                this.textContent = 'Read Less';
            } else {
                // Collapse
                cardText.style.maxHeight = '86px';
                this.textContent = 'Read More';
            }
        });
    });

    // Pause carousel on hover
    document.getElementById('roadmapCarousel').addEventListener('mouseenter', function() {
        roadmapCarousel.pause();
    });

    document.getElementById('roadmapCarousel').addEventListener('mouseleave', function() {
        roadmapCarousel.cycle();
    });

    // Handle touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    const carousel = document.getElementById('roadmapCarousel');
    
    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
    }, false);
    
    carousel.addEventListener('touchmove', function(e) {
        touchEndX = e.touches[0].clientX;
    }, false);
    
    carousel.addEventListener('touchend', function() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                roadmapCarousel.next();
            } else {
                // Swipe right - previous slide
                roadmapCarousel.prev();
            }
        }
    }, false);

    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            roadmapCarousel.prev();
        } else if (e.key === 'ArrowRight') {
            roadmapCarousel.next();
        }
    });
});
