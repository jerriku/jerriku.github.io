const timer = 5;
const titleArray = ["J", "", "Hi,<br>I'm Jeric,<br>software engineer."];
let title = titleArray[0];
let plus = 0;
let minus = timer;
let idle = false;
let fullMsg = false;
let counter = 0;

function deleteText() {
    title = titleArray[1];
    idle = false;
    setTimeout(function() {addText();}, 2000);
}

function addText() {
    idle = true;
    title = titleArray[2];
    if (counter < title.length) {
        $(".title").append(title[counter]);
        counter++;
        setTimeout(addText, 210);
    }
    idle = false;
}

function titleOnIdle() {
    if (idle == false && fullMsg == false){
        setTimeout(function() {
            if (plus != timer){
                $(".title")[0].innerHTML = title + "_";
                plus++;
            } else if (plus == timer){
                if (minus != 0) {
                    $(".title")[0].innerHTML = title;
                    minus--;
                } else {
                    minus = timer;
                    plus = 0;
                }
            }
            titleOnIdle();
        }, 100);
    } else if (idle == true && fullMsg == false) {
        $(".title")[0].innerHTML = title + "_";
    } else if (idle == true && fullMsg == true){

    }
}

function writeTitle() {

}

function startTextAnimation() {
    titleOnIdle();
    setTimeout(function() {
        idle = true;
        deleteText();
    }, 2000);
}
startTextAnimation();