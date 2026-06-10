let pages = document.querySelectorAll(".page");
let current = 0;

let slideshowStarted = false;
let musicStarted = false;

// show page
function showPage(i) {
  pages.forEach(p => p.classList.remove("active"));
  pages[i].classList.add("active");
}


function startExperience() {
  startMusic();
  startSlideshow();
}


function startMusic() {
  if (musicStarted) return;

  const music = document.getElementById("bgMusic");
  if (music) {
    music.play().catch(err => {
      console.log("Music blocked by browser until user interaction");
    });
    musicStarted = true;
  }
}


function startSlideshow() {
  if (slideshowStarted) return;

  slideshowStarted = true;

  setInterval(() => {
    if (current < pages.length - 1) {
      current++;
      showPage(current);
    }
  }, 4000);
}


function nextPage() {
  if (current < pages.length - 1) {
    current++;
    showPage(current);
  }
}