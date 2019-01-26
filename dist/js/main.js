// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu__branding");
const menuNav = document.querySelector(".menu__nav");
const navItems = document.querySelectorAll(".menu__nav-item");
const btnLine = document.querySelectorAll(".menu-btn__line");
const about = document.querySelector("#about");
const topOfAbout = about.offsetTop;

// Set initial state of menu
let showMenu = false;

// Add event listeners
menuBtn.addEventListener("click", toggleMenu);
navItems.forEach(item => item.addEventListener("click", toggleMenu));

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Reset menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Reset menu state
    showMenu = false;
  }
}

function changeMenuColor() {
  if (window.scrollY >= topOfAbout) {
    btnLine.forEach(line => line.classList.add("dark"));
  } else {
    btnLine.forEach(line => line.classList.remove("dark"));
  }
}

window.addEventListener("scroll", changeMenuColor);
