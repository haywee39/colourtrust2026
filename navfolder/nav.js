
// // Wait for DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//   // Get the navigation element
//   const nav = document.querySelector('.sticky-nav');
//   const menuToggle = document.querySelector('.sticky-nav-toggle');
//   const menu = document.querySelector('.sticky-nav-menu');
  
//   // Scroll event listener
//   window.addEventListener('scroll', function() {
//     // Add 'scrolled' class when page is scrolled
//     if (window.scrollY > 50) {
//       nav.classList.add('scrolled');
//     } else {
//       nav.classList.remove('scrolled');
//     }
//   });
  
//   // Mobile menu toggle
//   if (menuToggle) {
//     menuToggle.addEventListener('click', function() {
//       menu.classList.toggle('mobile-active');
//       // Toggle icon between bars and times (X)
//       const icon = menuToggle.querySelector('i');
//       if (icon.classList.contains('fa-bars')) {
//         icon.classList.remove('fa-bars');
//         icon.classList.add('fa-times');
//       } else {
//         icon.classList.remove('fa-times');
//         icon.classList.add('fa-bars');
//       }
//     });
//   }
  
//   // Handle clicks on menu links (for mobile)
//   const menuLinks = document.querySelectorAll('.sticky-nav-menu a');
//   menuLinks.forEach(link => {
//     link.addEventListener('click', function() {
//       // If current viewport is mobile size
//       if (window.innerWidth <= 768) {
//         menu.classList.remove('mobile-active');
//         const icon = menuToggle.querySelector('i');
//         icon.classList.remove('fa-times');
//         icon.classList.add('fa-bars');
//       }
      
//       // Remove active class from all links
//       menuLinks.forEach(item => item.classList.remove('active'));
//       // Add active class to clicked link
//       this.classList.add('active');
//     });
//   });
// });

// // Resize event handler to reset mobile menu
// window.addEventListener('resize', function() {
//   const menu = document.querySelector('.sticky-nav-menu');
//   const menuToggle = document.querySelector('.sticky-nav-toggle');
//   const icon = menuToggle?.querySelector('i');
  
//   if (window.innerWidth > 768) {
//     menu?.classList.remove('mobile-active');
//     if (icon && icon.classList.contains('fa-times')) {
//       icon.classList.remove('fa-times');
//       icon.classList.add('fa-bars');
//     }
//   }
// });




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