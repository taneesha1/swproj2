// Add this to your existing JavaScript file
document.addEventListener("DOMContentLoaded", function () {
  const toggleMenu = document.querySelector(".toggle-menu");
  const navLinks = document.querySelector(".nav-links");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Toggle mobile menu
  toggleMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Handle dropdowns on mobile
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.classList.toggle("active");
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest("nav")) {
      navLinks.classList.remove("active");
      dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
    }
  });
});

const tl = gsap.timeline();
tl.from(".logo", {
  y: -50,
  duration: 1,
  opacity: 0
})

tl.from(".nav-links li", {
  y: -30,
  duration: 1,
  stagger: 0.15,
  opacity: 0
})