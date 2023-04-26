const button = document.getElementById("profile-button");
const profile = document.getElementById("profile");

let isMenuOpened = false;

button.addEventListener("click", function () {
  isMenuOpened = !isMenuOpened;
  if (isMenuOpened) {
    profile.style.width = "201px";
    profile.style.minWidth = "201px";
  } else {
    profile.style.width = "30px";
    profile.style.minWidth = "30px";
  }
});
