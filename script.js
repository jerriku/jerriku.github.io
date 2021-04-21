const projects = document.getElementsByClassName("projects-link");
const contentPick = choice => {
    const contents = [...document.getElementsByClassName("content")];
    contents.forEach(content => {
        content.style.display = "none";
    });
    switch(choice) {
        case "calculator":
            $("#calculator").css("display", "inline-block");
            break;
        case "account storage":
            $("#account-storage").css("display", "inline-block");
            break;
        case "keyboard tester":
            $("#keyboard-tester").css("display", "inline-block");
            break;
        case "website #1":
            $("#website-1").css("display", "inline-block");
            break;
        case "typing game":
            $("#type-game").css("display", "inline-block");
            break;
        case "tab storage":
            $("#tab-storage").css("display", "inline-block");
            break;
        case "forex journal":
            $("#forex-journal").css("display", "inline-block");
            break;
        case "discord bot":
            $("#discord-bot").css("display", "inline-block");
            break;
        default:
            $("#main-page").css("display", "inline-block");
            break;
    }
}

$(".projects-link").click(e => {
    contentPick(e.currentTarget.firstChild.textContent);
})