const photos = document.querySelectorAll(".photo");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeBtn = document.getElementById("closeBtn");

// Open lightbox when a photo is clicked
photos.forEach(photo => {
  photo.addEventListener("click", () => {
    const img = photo.querySelector("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = photo.querySelector("figcaption").textContent;
    lightbox.classList.add("active");
  });
});

// Close with the X button, clicking the background, or pressing Escape
closeBtn.addEventListener("click", () => lightbox.classList.remove("active"));

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.classList.remove("active");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") lightbox.classList.remove("active");
});