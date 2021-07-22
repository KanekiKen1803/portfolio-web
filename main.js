const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".menu-link");

selectElement(".menu-icon").addEventListener("click", () => {
  selectElement(".menulist").classList.toggle("active");
 selectElement(".menu-icon").classList.toggle("toggle");

});