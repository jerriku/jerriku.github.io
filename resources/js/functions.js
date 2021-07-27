const element = document.getElementById("screen");
const dragBox = document.getElementById("drag-box");
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

if (dragBox) {
    dragBox.onmousedown = dragMouseDown;
} else {
    element.onmousedown = dragMouseDown;
}

function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
}

function elementDrag(e) {
    console.log("hi");
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    console.log({pos1, pos2, pos3, pos4});
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
}

function dragMouseDown (e) {
    console.log("hello");
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
}