let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex);

function showProject(num) {
//  //
    if (num > project.length) {
        slideIndex = 1;
    }
}