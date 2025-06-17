var typed = new Typed(".text", {
    strings: ["Mendix Developer", "Quality Assurance Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 1000,
    loop: true
});


document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const navbar = document.querySelector('.navbar');
  
    mobileMenuIcon.addEventListener('click', function () {
      navbar.classList.toggle('show-menu');
    });
  });