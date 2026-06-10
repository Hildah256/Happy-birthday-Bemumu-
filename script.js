let pages = document.querySelectorAll(".page");
let current = 0;

function showPage(i) {
  pages.forEach(p => p.classList.remove("active"));
  pages[i].classList.add("active");
}

function nextPage() {
  current++;
  if (current < pages.length) {
    showPage(current);
  }
}

function playMusic() {
  window.open("https://www.youtube.com/results?search_query=Kinoti+You", "_blank");
}
