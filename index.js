/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

 document.addEventListener('DOMContentLoaded', () => {

  // --- Accessibility: Detect Tab vs. Mouse navigation ---
  const handleFirstTab = (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
      window.addEventListener('mousedown', handleMouseDownOnce);
    }
  };

  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing');
    window.removeEventListener('mousedown', handleMouseDownOnce);
    window.addEventListener('keydown', handleFirstTab);
  };

  window.addEventListener('keydown', handleFirstTab);

  // --- Back to Top Button ---
  const backToTopButton = document.querySelector(".back-to-top");

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) { // Show button after scrolling 300px
        backToTopButton.classList.add("back-to-top--visible");
      } else {
        backToTopButton.classList.remove("back-to-top--visible");
      }
    });
  }

  // --- Dynamic Copyright Year ---
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- Hide Header on Scroll Down, Show on Scroll Up ---
  const headerNav = document.querySelector('.nav'); // Target the whole nav bar
  let lastScrollY = window.scrollY;

  if (headerNav) {
    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > headerNav.offsetHeight) {
            // Scrolled down and past the header height
            headerNav.classList.add('nav--hidden');
        } else {
            // Scrolled up or at the top
            headerNav.classList.remove('nav--hidden');
        }
        lastScrollY = window.scrollY; // Update last scroll position
    });
  }
})
