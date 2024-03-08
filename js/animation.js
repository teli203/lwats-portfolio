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

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");

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
let activeCorner = "";

//Add an EventListener to the window object to listen for resize event (listen,click,etc) //
window.addEventListener("resize",handleWindowResize);

// Function that handles the styling when resizing window //
function handleWindowResize(){
    switch (activeCorner) {
        case "top-left":
            if (window.innerWidth <= 1100) {
                tlActive = "translateX(0) translateY(0)";
                tlContent.style.width = "100vw";
            } else {

            }
        break;
        case "top-right":

        break;
        case "bottom-left":

        break;
        case "bottom-right":

        break;
    }

}

// Store the last reverse animation, ready to be played //
let lastReverseAnimation = "";

// Play animation //
function playAnimation(animation, reverseAnimation) {
  //  Remove all the animation classes from heroImage //
  heroImage.className = "";
  if (lastReverseAnimation !== "") {
    // Btn Clicked! reverse code goes here //
   heroImage.classList.add(lastReverseAnimation);
   setTimeout(function () {
    heroImage.classList.remove(lastReverseAnimation);
    heroImage.classList.add(animation);
    lastReverseAnimation = reverseAnimation;
   }, 200);
  } else {
    heroImage.classList.add(animation);
    lastReverseAnimation = reverseAnimation;
  }  
}

function playClosingAnimation(reverseAnimation) {

}

// Onclick Corner Btn functions //
// top left btn About //
tlBtn.onclick = function () {
    if (activeCorner === "top-left") {
        playClosingAnimation("reverse-animate-top-left");
    } else {
        trActive.innerHTML = "Merch";
        blActive.innerHTML = "Books";
        brActive.innerHTML = "Blog";

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

// top right btn Merch //
trBtn.onclick = function () {
    if (activeCorner === "top-right") {
        playClosingAnimation("reverse-animate-top-right");
    } else {
        tlActive.innerHTML = "About";
        blActive.innerHTML = "Books";
        brActive.innerHTML = "Blog";

        // Set active corner //
        activeCorner = "top-right";
        trBtn.innerHTML = "&uarr;<br />Merch";

        handleWindowResize();
        playAnimation("animate-top-right", "reverse-animate-top-right");

        // Change Background Colors //
        trBtn.style.background = bgColorAlt;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColor;

        // Change Text Colors //
        trBtn.style.color = textColorAlt;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColor;

        // Change of the Corners Content //
        trContent.style.transform = trActive;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlHidden;
    }
};

// bottom left btn Books //
blBtn.onclick = function () {
    if (activeCorner === "bottom-left") {
        playClosingAnimation("reverse-animate-bottom-left");
    } else {
        tlActive.innerHTML = "About";
        trActive.innerHTML = "Merch";
        brActive.innerHTML = "Blog";

        // Set active corner //
        activeCorner = "bottom-left";
        blBtn.innerHTML = "Books<br />&darr";

        handleWindowResize();
        playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

        // Change Background Colors //
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColorAlt;
        tlBtn.style.background = bgColor;

        // Change Text Colors //
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textAlt;
        tlBtn.style.color = textColor;

        // Change of the Corners Content //
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blActive;
        tlContent.style.transform = tlHidden;
    }
};

// bottom right btn blog//
brBtn.onclick = function () {
    if (activeCorner === "bottom-right") {
        playClosingAnimation("reverse-animate-bottom-right");
    } else {
        tlActive.innerHTML = "About";
        trActive.innerHTML = "Merch";
        blActive.innerHTML = "Books";

        // Set active corner //
        activeCorner = "bottom-right";
        brBtn.innerHTML = "Blog<br />&darr";

        handleWindowResize();
        playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

        // Change Background Colors //
        trBtn.style.background = bgColor;
        brBtn.style.background = bgAlt;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColor;

        // Change Text Colors //
        trBtn.style.color = textColor;
        brBtn.style.color = textAlt;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColor;

        // Change of the Corners Content //
        trContent.style.transform = trHidden;
        brContent.style.transform = brActive;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlHidden;
    }
};
