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