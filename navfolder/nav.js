
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.sticky-nav');
    const menuToggle = document.querySelector('.sticky-nav-toggle');
    const menu = document.querySelector('.sticky-nav-menu');
    const links = document.querySelectorAll('.sticky-nav-menu a');
    const icon = menuToggle?.querySelector('i');

    // 1. Smooth Scroll Class Toggle
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.onclick = () => {
            menu.classList.toggle('mobile-active');
            
            // Toggle between Burger and X
            if (icon) {
                icon.className = menu.classList.contains('mobile-active') 
                    ? 'fas fa-times' 
                    : 'fas fa-bars';
            }
        };
    }

    // 3. Link Handling
    links.forEach(link => {
        link.onclick = () => {
            // Close menu on click (Mobile)
            if (window.innerWidth <= 768) {
                menu.classList.remove('mobile-active');
                if (icon) icon.className = 'fas fa-bars';
            }

            // Update Active Class
            links.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        };
    });
});