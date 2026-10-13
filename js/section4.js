const track = document.getElementById("track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function update() {
  const card = track.querySelector(".carousel-card");
  const gap = parseFloat(getComputedStyle(track).columnGap);
  const step = card.offsetWidth + gap;

  // how many cards fit on screen right now
  const visible = Math.round(track.parentElement.offsetWidth / step);
  const maxIndex = track.children.length - visible;

  // keep index inside the allowed range
  index = Math.max(0, Math.min(index, maxIndex));

  track.style.transform = `translateX(-${index * step}px)`;
}

nextBtn.addEventListener("click", () => { index++; update(); });
prevBtn.addEventListener("click", () => { index--; update(); });

window.addEventListener("resize", update);