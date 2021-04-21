let score = 0;
let combo = 0;
let retry = false;
let ready = false;
let hearts = 3;

$("#player-input")[0].value = "";

const getNumbers = max => {
    let array = [];
    for (i = 1; i < max+1; i++) {
        array.push(i);
    }
    return array;
}

const removeNumberFrom = (data, num) => {
    return data.filter(function(i) {
        return i != num;
    });
}

let maxNumbers = getNumbers(50);

function calculateWPM(word) {
    const WPM = Math.floor((word.length/timer) * 60)
    $("#player-wpm")[0].innerText = `${WPM}`;
    timer = 0;
}

function checkEnteredWord(event) {
    const keyPressed = event.code;
    if (ready && !retry) {
        const playerInput = $("#player-input")[0];
        pressedKey = true;
        if (keyPressed === "Space") {
            pressedKey = false;
            if(playerInput.value) {
                playerInput.value = playerInput.value.replace(/\s+/g, ''); //removes excess blank spaces - " "
                for (let i = 0; i < $("p").length; i++) {
                    if (playerInput.value === $("p")[i].textContent) {
                        calculateWPM(playerInput.value);
                        maxNumbers.push(Number($("p")[i].attributes[0].value));
                        $("p")[i].remove();
                        score++;
                        loadScore();
                    }
                }
                playerInput.value = "";
            }
            timer = 0;
        }
    }
}

function start(item) {
    setTimeout(function() {
        try {
            item.y += 5;
            if(`#${item.id}`) {$(`#${item.id}`)[0].style.top = item.y + "px";}
            if(item.y >= window.innerHeight * 0.98) {
                $(`#${item.id}`).remove();
                maxNumbers.push(item.id);
                $(`#heart${hearts}`)[0].style.display = "none";
                hearts--;
            }else {
                start(item);
            }
        } catch(err) {
            console.log("The error is " + err);
        }
    }, 50);
}

const loadScore = () => $("h1")[0].innerText = score;

const generateWord = (word, num, x, y) => {
    $(".word-container").append(`<p id="${num}">${word}</p>`);
    $(`#${num}`)[0].style.left = x + "px";
    $(`#${num}`)[0].style.top = y + "px";
}

const wordFactory = (word, x, y) => {
    const n = Math.floor(Math.random() * (maxNumbers.length - 1) + 1);
    const num = maxNumbers[n];
    maxNumbers = removeNumberFrom(maxNumbers, num);

    return {word, id:num, x, y}
}

async function setup() {
    if (!retry) {
        $.getJSON("https://raw.githubusercontent.com/jerriku/words/main/words_dictionary.json", function(data) {
        const maxWidth = Math.round(window.innerWidth * 0.78); //0.78 is the max x that the word can generate to, which is 78% of the windows width
        const minWidth = Math.round(window.innerWidth * 0.10); //0.10 is the min x that the word can generate to, which is 10% of the windows width
        const r = Math.floor(Math.random() * (data.length + 1));
        const x = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
        setTimeout(function() {
            const word = wordFactory(data[r], x, 0);
            generateWord(word.word, word.id, word.x, word.y);
            start(word);
            setup();
        }, textSpeed);
        });
    }
}

function restartGame() {
    retry = false;
    hearts = 3;
    score = 0;
    for (let i = 1; i < hearts + 1; i++) {
        $(`#heart${i}`)[0].style.display = "flex";
    }
    maxNumbers = getNumbers(50);
    $("#player-input")[0].value = "";
    $("#player-wpm")[0].innerText = "";
    $("button").remove();
    let list = $(".word-container")[0];
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    loadScore();
    setup();
}

function showRetryScreen() {
    retry = true;
    pressedKey = false;
    $("h1")[0].innerText = `You got ${score}`;
    $("body").append("<button onclick = 'restartGame()'>Retry?</button");
    $("button").css({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "none",
        cursor: "pointer"
    })

}

const setTimer = () => {
    $("#player-input").focus();
    setTimeout(function() {
        if (pressedKey) {
            timer += 0.1;
            $("#timer")[0].innerText = timer.toFixed(2);
        } else {
            $("#timer")[0].innerText = "";
        }
        if (hearts === 0 && !retry) showRetryScreen();
        setTimer();
    }, 100);
}

let textSpeed = 2000;
let timer = 0;
let pressedKey = false;

document.addEventListener("keydown", checkEnteredWord);
setup();

setTimeout(function() {
    setTimer();
    loadScore();
    ready = true;
}, textSpeed);