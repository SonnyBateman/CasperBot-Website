const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", navToggle);

//toggle mobile menu

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

function github() {
  window.open("https://github.com/SonnyBateman/CasperBot");
}
