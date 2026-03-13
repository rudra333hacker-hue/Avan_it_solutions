// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // --- Hamburger Menu ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }

    // --- Highlight Active Page in Navbar ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // --- Particle Background (ReactBits-inspired) ---
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function initParticles() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            particles = [];
            const particleCount = Math.floor(width * height / 8000); // ~200 particles on desktop
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 2 + 1,
                    speedX: (Math.random() - 0.5) * 0.2,
                    speedY: (Math.random() - 0.5) * 0.2,
                    opacity: Math.random() * 0.3 + 0.1
                });
            }
        }

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#888888';
            particles.forEach(p => {
                ctx.globalAlpha = p.opacity;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                // Move
                p.x += p.speedX;
                p.y += p.speedY;
                // Wrap around
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;
            });
            requestAnimationFrame(drawParticles);
        }

        window.addEventListener('resize', () => {
            initParticles();
        });
        initParticles();
        drawParticles();
    }

    // --- Anime.js Animations ---

    // 1. Staggered fade-in for hero title letters (if we had split text, but we'll animate lines)
    anime({
        targets: '.title-line',
        translateY: [50, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: anime.stagger(200)
    });

    // 2. Floating animation for flying words (continuous)
    anime({
        targets: '.pop-word',
        translateY: [0, -15, 0],
        easing: 'easeInOutSine',
        duration: 3000,
        loop: true,
        delay: (el, i) => i * 200
    });

    // 3. Scroll-based flying word activation (using Anime.js to animate them into position)
    const heroWrapper = document.querySelector('.hero-wrapper');
    const words = document.querySelectorAll('.pop-word');
    window.addEventListener('scroll', () => {
        if (!heroWrapper) return;
        const scrollY = window.scrollY;
        const wrapperTop = heroWrapper.offsetTop;
        const relativeScroll = scrollY - wrapperTop;

        if (relativeScroll > 100) {
            // Animate words to their positions
            anime({
                targets: words,
                opacity: 1,
                scale: 1,
                top: (el) => {
                    const id = el.id;
                    if (id === 'word1' || id === 'word2') return '25%';
                    return '75%';
                },
                left: (el) => {
                    const id = el.id;
                    if (id === 'word1' || id === 'word3') return '20%';
                    return '80%';
                },
                duration: 800,
                easing: 'easeOutCubic',
                delay: anime.stagger(100) // stagger appearance
            });
        } else {
            // Reset
            anime({
                targets: words,
                opacity: 0,
                scale: 0.8,
                top: '50%',
                left: '50%',
                duration: 400
            });
        }
    });

    // 4. Hover animations on cards using Anime.js (as a complement to CSS)
    document.querySelectorAll('.card, .feature-item').forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.05,
                borderColor: '#555',
                boxShadow: '0 0 20px rgba(255,255,255,0.1)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                borderColor: 'var(--border-gray)',
                boxShadow: 'none',
                duration: 300
            });
        });
    });

    // 5. Scroll-triggered fade-ins for sections (using Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    easing: 'easeOutQuad'
                });
                observer.unobserve(entry.target); // only once
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.expertise-section, .about-section, .performance-section, .feature-item').forEach(el => {
        el.style.opacity = 0;
        observer.observe(el);
    });
});

// --- BULLETPROOF PRELOADER HIDE ---
(function() {
    // Get preloader element
    const preloader = document.getElementById('preloader');
    
    // If preloader doesn't exist, stop
    if (!preloader) {
        console.warn('Preloader not found!');
        return;
    }

    // Log for debugging
    console.log('Preloader found. Will hide in 2 seconds.');

    // Hide after 2 seconds
    setTimeout(() => {
        preloader.classList.add('hidden');
        console.log('Preloader hidden class added.');

        // Remove from DOM after transition (optional)
        setTimeout(() => {
            if (preloader.parentNode) {
                preloader.remove();
                console.log('Preloader removed from DOM.');
            }
        }, 1000); // matches CSS transition
    }, 2000); // 2000ms = 2 seconds

    // Fallback: If something goes wrong with the class, force hide after 3 seconds
    setTimeout(() => {
        if (!preloader.classList.contains('hidden')) {
            preloader.style.display = 'none';
            console.log('Preloader forcefully hidden (fallback).');
        }
    }, 3000);
})();
