const button = document.getElementById("nav-button");
const nav = document.getElementById("nav");
const navList = document.getElementsByClassName('navList')

let isMenuOpened = false;

button.addEventListener("click", function () {
  isMenuOpened = !isMenuOpened;
  if (isMenuOpened) {
    nav.style.width = "200px";
    nav.style.minWidth = "200px";
    
  } else {
    nav.style.width = "30px";
    nav.style.minWidth = "30px";
  }
});
