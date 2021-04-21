
const numRowValues = ["esc", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"]; //192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 173, 61, 8 these are all event.keyCode Values
const tabRowValues = ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "Backslash"]; //9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 163 UK Value 220 US Value
const capsRowValues = ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "apos", "Enter"]; //20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 222
const shiftRowValues = ["ShiftLeft", "Z", "X", "C", "V", "B", "N", "M", "comma", "dot", "Slash", "ShiftRight"]; //16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191
const ctrlRowValues = ["ControlLeft", "OSLeft", "AltLeft", "Space", "AltRight", "OSRight", "ContextMenu", "ControlRight"]; //17, 18, 32, 225, 93, 17
const rows = ["#numRow", "#tabRow", "#capsRow", "#shiftRow", "#ctrlRow"];
const rowsForValues = [numRowValues, tabRowValues, capsRowValues, shiftRowValues, ctrlRowValues];

function createKeys() {
    for (i = 0; i < rows.length; i++) {
        let row = rowsForValues[i];
        for (j = 0; j < row.length; j++) {
            $(rows[i]).append(`<li><div class="${row[j]} keys"></div></li>`);
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

createKeys();
drawKeys();