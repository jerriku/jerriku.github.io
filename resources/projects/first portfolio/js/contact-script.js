let empty = document.getElementsByClassName("form");
for (i = 0; i < empty.length; i++) {
    empty[i].value = "";
}

function dragElement(element) {
    const dragBox = document.getElementById("drag-box");
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    if (dragBox) {
        dragBox.onmousedown = dragMouseDown;
    } else {
        element.onmousedown = dragMouseDown;
    }

    function closeDragElement() {
        document.getElementById("form-email").focus();
        document.onmouseup = null;
        document.onmousemove = null;
    }
    
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }
    
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
}

document.getElementById("form-email").focus();
dragElement(document.getElementById("screen"));

let userEmail = document.getElementById("form-email") || alert("Please enter an email address");
console.log(userEmail);