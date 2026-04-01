const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
let currentImage = null;
function openLightbox(imgSrc) {lightbox.style.display = "flex";
  lightboxImg.src = imgSrc;
  currentImage = imgSrc;}
function closeLightbox() {lightbox.style.display = "none";
  currentImage = null;}
document.addEventListener("DOMContentLoaded", () => {const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = "#ff9800";}});
  const hobbyImages = document.querySelectorAll(".hobby-gallery img");
  hobbyImages.forEach(img => {img.addEventListener("click", () => {
      openLightbox(img.src);});
  });
  const profilePics = document.querySelectorAll(".profile-pic");
  profilePics.forEach(pic => {pic.addEventListener("click", () => {
      openLightbox(pic.src);});
  });lightbox.addEventListener("click", () => {closeLightbox();});
  document.addEventListener("keydown", (event) => {if (event.key === "Escape" && currentImage) {closeLightbox();}});
}); 