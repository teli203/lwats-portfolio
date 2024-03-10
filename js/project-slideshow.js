let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex);

function showProject(num) {
// Goes to first pjt after click from last btn //
    if (num > project.length) {
        slideIndex = 1;
}

// Goes to last pjt after clicking backwards from first pjt  //
if (num < 1) {
    slideIndex = project.length;
}

//hides all pjts  //
for (let i = 0; i < project.length; i++) {
    project[i].style.display = "none";
}
project[slideIndex - 1].style.display = "flex";
}

function navigateProject(num) {
    // Changes the slide index based on the back or forward click of the arrow //
    showProject((slideIndex += num));
}