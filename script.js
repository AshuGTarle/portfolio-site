// Portfolio site JS
console.log("Portfolio site loaded!");

// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const burger = document.querySelector(".hamburger");

  nav.classList.toggle("show");

  // Animate hamburger into X
  if (nav.classList.contains("show")) {
    burger.innerHTML = "✖"; // cross icon
  } else {
    burger.innerHTML = "☰"; // hamburger icon
  }
}
