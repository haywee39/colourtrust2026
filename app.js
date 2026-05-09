
        // AOS.init({ duration: 1000, mirror: true });

        // // NAVIGATION LOGIC
        // const menuToggle = document.getElementById('menuToggle');
        // const mobileNav = document.getElementById('mobileNav');
        // const navbar = document.getElementById('navbar');

        // // Toggle Mobile Menu
        // menuToggle.onclick = () => {
        //     menuToggle.classList.toggle('open');
        //     mobileNav.classList.toggle('open');
        // };

        // // Close menu on click
        // document.querySelectorAll('.mobile-nav a').forEach(link => {
        //     link.onclick = () => {
        //         menuToggle.classList.remove('open');
        //         mobileNav.classList.remove('open');
        //     };
        // });

        // // FIX: Handle Window Resize (Desktop/Mobile View Bug)
        // // window.addEventListener('resize', () => {
        // //     if (window.innerWidth > 992) {
        // //         menuToggle.classList.remove('open');
        // //         mobileNav.classList.remove('open');
        // //     }
        // // });

        // // Navbar Scroll
        // window.onscroll = () => {
        //     navbar.classList.toggle('scrolled', window.scrollY > 50);
        // };

        // // COUNTER LOGIC (Observer)
        // const observer = new IntersectionObserver(entries => {
        //     entries.forEach(entry => {
        //         if(entry.isIntersecting) {
        //             const counter = entry.target;
        //             const target = +counter.getAttribute('data-target');
        //             let count = 0;
        //             const update = () => {
        //                 const inc = target / 50;
        //                 if(count < target) {
        //                     count += inc;
        //                     counter.innerText = Math.ceil(count);
        //                     setTimeout(update, 20);
        //                 } else { counter.innerText = target; }
        //             };
        //             update();
        //         } else { entry.target.innerText = "0"; }
        //     });
        // }, { threshold: 0.5 });

        // document.querySelectorAll('.counter').forEach(c => observer.observe(c));
    

// 1. Initialize AOS (This can run immediately)
AOS.init({ duration: 1000, mirror: true });

// 2. COUNTER LOGIC (Observer) 
// Move this outside any fetch so it works for the stats already on the page
const observerOptions = { threshold: 0.5 };
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const counter = entry.target;
            // Prevent re-triggering if already counting
            if (counter.classList.contains('counted')) return; 
            
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const update = () => {
                const inc = target / 50;
                if(count < target) {
                    count += inc;
                    counter.innerText = Math.ceil(count);
                    setTimeout(update, 20);
                } else { 
                    counter.innerText = target + "+"; 
                    counter.classList.add('counted');
                }
            };
            update();
        }
    });
}, observerOptions);

document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));


// 3. NAVIGATION LOGIC (Waiting for the Fetch)
// We need to make sure the navbar is there before we attach listeners
function initNavLogic() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const navbar = document.getElementById('navbar');

    if (menuToggle && mobileNav) {
        menuToggle.onclick = () => {
            menuToggle.classList.toggle('open');
            mobileNav.classList.toggle('open');
        };

        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.onclick = () => {
                menuToggle.classList.remove('open');
                mobileNav.classList.remove('open');
            };
        });
    }

    // Navbar Scroll logic
    window.onscroll = () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    };
}

// Since your nav.js is also trying to do things, 
// the best way is to call initNavLogic() inside your nav.js fetch promise.
// Or, if you prefer to keep it in app.js, we can check periodically:
const checkNavInterval = setInterval(() => {
    if (document.getElementById('navbar')) {
        initNavLogic();
        clearInterval(checkNavInterval);
    }
}, 100);