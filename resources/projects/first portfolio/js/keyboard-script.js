
const numRowValues = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"]; //192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 173, 61, 8 these are all event.keyCode Values
const tabRowValues = ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"]; //9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 163 UK Value 220 US Value
const capsRowValues = ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"]; //20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 222
const shiftRowValues = ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight"]; //16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191
const ctrlRowValues = ["ControlLeft", "OSLeft", "AltLeft", "Space", "AltRight", "OSRight", "ContextMenu", "ControlRight"]; //17, 18, 32, 225, 93, 17
const rows = ["#numRow", "#tabRow", "#capsRow", "#shiftRow", "#ctrlRow"];
const rowsForValues = [numRowValues, tabRowValues, capsRowValues, shiftRowValues, ctrlRowValues];

function createKeys() {
    for (i = 0; i < rows.length; i++) {
        let values = rows[i] + "Values";
        let row = rowsForValues[i];
        for (j = 0; j < row.length; j++) {
            $(rows[i]).append(`<li><div class="${row[j]} keys"></div></li>`);
            /*if (values === "#numRowValues") {
                $(rows[i]).append(`<li><div class="${numRowValues[j]} keys"></div></li>`);
            }
            if (values === "#tabRowValues") {
                $(rows[i]).append(`<li><div class="${tabRowValues[j]} keys"></div></li>`);
            }
            if (values === "#capsRowValues") {
                $(rows[i]).append(`<li><div class="${capsRowValues[j]} keys"></div></li>`);
            }
            if (values === "#shiftRowValues") {
                $(rows[i]).append(`<li><div class="${shiftRowValues[j]} keys"></div></li>`);
            }
            if (values === "#ctrlRowValues") {
                $(rows[i]).append(`<li><div class="${ctrlRowValues[j]} keys"></div></li>`);
            }*/
        }
    }
}

function drawKeys() {
    const keys = $(".keys");
    const mm = 3;
    let keyStyles = {
        textDecoration: "none",
        backgroundColor: "#222034",
        borderRadius: "10px",
        margin: mm * 0.5,
        height: mm + "em",
        width: mm + "em"
    };

    let tabAndBackSlashStyles = {
        "width": mm * 1.5 + "em"
    }

    let enterAndLeftShiftStyles = {
        "width": mm * 2.31 + "em"
    }

    let homeRowStyles = {
        width: mm * 1.25 + "em"
    }
    for (i = 0; i < keys.length; i++) {
        keys.css(keyStyles);
    }
    $(".Backspace").css({
        "width": mm * 2 + "em"
    });
    $(".Tab").css(tabAndBackSlashStyles);
    $(".Backslash").css(tabAndBackSlashStyles);
    $(".CapsLock").css({
        width: mm * 1.75 + "em"
    });
    $(".Enter").css(enterAndLeftShiftStyles);
    $(".ShiftLeft").css(enterAndLeftShiftStyles);
    $(".ShiftRight").css({
        width: mm * 2.82 + "em"
    });
    $(".ControlLeft").css(homeRowStyles);
    $(".OSLeft").css(homeRowStyles);
    $(".AltLeft").css(homeRowStyles);
    $(".AltRight").css(homeRowStyles);
    $(".OSRight").css(homeRowStyles);
    $(".ContextMenu").css(homeRowStyles);
    $(".ControlRight").css(homeRowStyles);
    $(".Space").css({
        "width": mm * 6.63 + "em"
    });
}

document.addEventListener("keydown", (event) => {
    console.log(event.code);
    const key = event.code;
    const changedColor = "#1c1a28";

    $(`.${key}`)[0].style.transition = "all 2ms";
    $(`.${key}`)[0].style.backgroundColor = changedColor;
});

document.addEventListener("keyup", (event) => {
    const key = event.code;
    const changedColor = "#222034";

    $(`.${key}`)[0].style.transition = "all 2ms";
    $(`.${key}`)[0].style.backgroundColor = changedColor;
});

createKeys();
drawKeys();