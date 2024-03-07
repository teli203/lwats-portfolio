// DOM Elements //
const heroImage = document.querySelector("hero__animation__img");

const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
const bl = document.querySelector("#grid__bl");
const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
const blBtn = document.querySelector("#grid__bl__btn");
const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__content");
const trContent = document.querySelector("#grid__tr__content");
const blContent = document.querySelector("#grid__bl__content");
const brContent = document.querySelector("#grid__br__content");

const bookOne = document.querySelector("#.b-1");
const bookTwo = document.querySelector("#.b-2");
const bookThree = document.querySelector("#.b-3");

// Colors & Positions //
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translate(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)"; 

let trActive = "translate(-5vw) translateY(0)"; 
let trHidden = "translateX(100vw) translateY(-100vh)"; 

let blActive = "translate(10vw) translateY(7)"; 
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translate(-5vw) translateY(0)"; 
let brHidden = "translateX(100vw) translateY(100vh)";

// Define Corners that are Open //
let activeCorner ="";

//Add an EventListener to the window object to listen for resize event (listen,click,etc) //
window.addEventListener("resize",handleWindowResize);

// Function that handles the styling when resizing window //
function handleWindowResize(){
    // write function //
}

// Store the last reverse animation, ready to be played //
let lastReverseAnimation = "";

// Play animation //
function playAnimation(animation, reverseAnimation) {
    
}

function playClosingAnimation(reverseAnimation) {

}

// Onclick Corner Btn functions //
// top left btn About Author & Blog//
tlBtn.onclick = function () {
    if (activeCorner === "top-left") {
        playClosingAnimation(reverse-animate-top-left);
    } else {
        // Set active corner //
        activeCorner = "top-left";
        tlBtn.innerHTML = "&uarr;<br />About";

        handleWindowResize();
        playAnimation("animate-top-left", "reverse-animate-top-left");

        // Change Background Colors //
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColorAlt;

        // Change Text Colors //
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColorAlt;

        // Change of the Corners Content //
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }
};

// top right btn book 3//
trBtn.onclick = function () {
    if (activeCorner === "top-right") {
        playClosingAnimation(reverse-animate-top-right);
    } else {
        // Set active corner //
        activeCorner = "top-right";
        tlBtn.innerHTML = "&uarr;<br />Triumph";

        handleWindowResize();
        playAnimation("animate-top-right", "reverse-animate-top-right");

        // Change Background Colors //
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColorAlt;

        // Change Text Colors //
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColorAlt;

        // Change of the Corners Content //
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }
};

// bottom left btn  book 1//
blBtn.onclick = function () {
    if (activeCorner === "bottom-left") {
        playClosingAnimation(reverse-animate-bottom-left);
    } else {
        // Set active corner //
        activeCorner = "bottom-left";
        tlBtn.innerHTML = "&uarr;<br />Settle";

        handleWindowResize();
        playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

        // Change Background Colors //
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColorAlt;

        // Change Text Colors //
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColorAlt;

        // Change of the Corners Content //
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }
};

// bottom right btn book 3//
brBtn.onclick = function () {
    if (activeCorner === "bottom-right") {
        playClosingAnimation(reverse-animate-bottom-right);
    } else {
        // Set active corner //
        activeCorner = "bottom-right";
        tlBtn.innerHTML = "&uarr;<br />Defeat";

        handleWindowResize();
        playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

        // Change Background Colors //
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColorAlt;

        // Change Text Colors //
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColorAlt;

        // Change of the Corners Content //
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }
};
