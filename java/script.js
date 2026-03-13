// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // --- Hamburger Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });

        // Close menu when a link is clicked (for better UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }

    // --- Flying Words Scroll Effect ---
    const heroWrapper = document.querySelector('.hero-wrapper');
    const w1 = document.getElementById('word1');
    const w2 = document.getElementById('word2');
    const w3 = document.getElementById('word3');
    const w4 = document.getElementById('word4');
    const title = document.getElementById('center-title');
    const subtitle = document.getElementById('hero-sub');

    window.addEventListener('scroll', function() {
        if (!heroWrapper) return;

        let scrollPos = window.scrollY;
        let wrapperTop = heroWrapper.offsetTop;
        let relativeScroll = scrollPos - wrapperTop;

        if (relativeScroll > 100) {
            // Activate all words together (or you can stagger them)
            w1.classList.add('active');
            w2.classList.add('active');
            w3.classList.add('active');
            w4.classList.add('active');
            
            title.style.opacity = '0.05';
            title.style.transform = 'scale(0.9)';
            subtitle.style.opacity = '0';
        } else {
            w1.classList.remove('active');
            w2.classList.remove('active');
            w3.classList.remove('active');
            w4.classList.remove('active');
            
            title.style.opacity = '1';
            title.style.transform = 'scale(1)';
            subtitle.style.opacity = '1';
        }
    });
});
