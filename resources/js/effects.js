const underscoreElement = document.getElementById("underscore");
let count = 0;

function underscoreAnimation() {
    setTimeout(() => {
        if (count != 5) {
            underscoreElement.style.opacity = "1";
            count++;
        } else if (count != 0) {
            underscoreElement.style.opacity = "0";
            count--;
        }
        underscoreAnimation();
    }, 1000);
}

underscoreAnimation();

const menuElement = document.getElementById("items-menu");
const navElement = document.getElementById("menu-nav");
let menuOpen = false;
navElement.addEventListener("click", () => {
    if (menuOpen) {
        menuElement.style.display = "none";
        navElement.style.width = "90px";
        menuOpen = false;
    } else {
        menuElement.style.display = "block";
        navElement.style.width = "auto";
        menuOpen = true;
    }
    console.log(menuOpen);
});