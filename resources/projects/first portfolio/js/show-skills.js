const skillSets = ["HTML", "CSS", "JavaScript", "Python"]; //languages I'm more confident in
const skillLevels = [40, 20, 70, 80]; //percentage skill in order
let skillBar = {
    height: "1em",
    width: "50em",
    backgroundColor: "white"
}
$(".content-box").append("<ul class='skill-sets'></ul>");

for (i = 0; i < skillSets.length; i++){
    $(".skill-sets").append(`<li class="skill-list">${skillSets[i]}: <div class="skill${i} all-skills"></div></li>`);
    $(`.skill${i}`).css({
        height: "1em",
        width: ((skillLevels[i] / 100) * 50) + "em",
        backgroundColor: "white"
    });
    $(".skill-list").css({
        listStyle: "none"
    });
    console.log(`${skillSets[i]}: ${(skillLevels[i] / 100) * 50}%`);
}
