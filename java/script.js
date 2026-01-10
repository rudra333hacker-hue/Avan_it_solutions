window.addEventListener('scroll', () => {
    const popItems = document.querySelectorAll('.pop-item');
    const title = document.querySelector('.center-title');
    const scrollY = window.scrollY;

    if (scrollY > 100) {
        popItems.forEach(item => item.classList.add('active'));
    } else {
        popItems.forEach(item => item.classList.remove('active'));
    }
    
    if (scrollY > 500) {
        title.style.opacity = Math.max(1 - (scrollY - 500) / 400, 0);
    } else {
        title.style.opacity = 1;
    }
});