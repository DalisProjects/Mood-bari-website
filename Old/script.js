function scrollToSection(){
  document.getElementById("contact").scrollIntoView({
    behavior:"smooth"
  });
}

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width + 10; // include margin
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Auto-slide every 3 seconds
setInterval(() => {
  index = (index + 1) % slides.length;
  updateCarousel();
}, 1800);
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Update carousel on resize
window.addEventListener('resize', updateCarousel);