let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");
}

function nextPage() {
  currentPage++;
  if (currentPage < pages.length) {
    showPage(currentPage);
  }
}

function playSong() {
  alert("🎵 Playing Kinoti - You (YouTube will open/stream depends on browser)");
  window.open("https://www.youtube.com/results?search_query=Kinoti+You", "_blank");
}
