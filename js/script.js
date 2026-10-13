// 1. Create the lightbox HTML and add it to the end of <body>
document.body.insertAdjacentHTML("beforeend", `
  <div class="lightbox" id="lightbox">
    <span class="close" id="closeBtn">&times;</span>
    <img id="lightboxImg" src="" alt="">
    <p id="lightboxCaption"></p>
  </div>
`);

// 2. Grab the elements (they exist now because we just created them)
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeBtn = document.getElementById("closeBtn");

// 3. Open when a photo is clicked
document.querySelectorAll(".photo").forEach(photo => {
  photo.addEventListener("click", () => {
    const img = photo.querySelector("img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = photo.querySelector("figcaption").textContent;
    lightbox.classList.add("active");
  });
});

// 4. Close with X, background click, or Escape
function closeLightbox() {
  lightbox.classList.remove("active");
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});


