// Optional: Add smooth scrolling for carousels
document.querySelectorAll('.cards').forEach(carousel => {
  carousel.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    carousel.scrollLeft += evt.deltaY;
  });
});
