// DOM Elements //
const heroImage = document.querySelector("hero__animation__img");

const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
const bl = document.querySelector("#grid__bl");
//const br = document.querySelector("#grid__br");//

const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
const blBtn = document.querySelector("#grid__bl__btn");
//const brBtn = document.querySelector("#grid__br__btn");//

const tlContent = document.querySelector("#grid__tl__content");
const trContent = document.querySelector("#grid__tr__content");
const blContent = document.querySelector("#grid__bl__content");
//const brContent = document.querySelector("#grid__br__content");//

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
                tlContent.style.transform = "translateX(5vw) translateY(0)";
                tlContent.style.width = "100vw";
                tlContent.style.height = "100vw";
                tlContent.style.top = "0";
                tlContent.style.display = "flex";
                tlContent.style.alignItems = "center";
                tlContent.style.justifyContent = "center";
                tlContent.style.background = "var(--bg-transparent)";
                tlContent.style.zIndex = "200";
                tlBtn.style.zindex = "300";
                trBtn.style.zindex = "100";
                blBtn.style.zindex = "100";
               // brBtn.style.zindex = "100";
            } else {
                tlActive = "translateX(5vw) translateY(0)";
                tlContent.style.transform = "translateX(5vw) translateY(0)";
                tlContent.style.width = "30vw";
                tlContent.style.height = "0";
                tlContent.style.top = "10vh";
                tlContent.style.display = "block";
            }
        break;

        case "top-right":
            if (window.innerWidth <= 1100) {
                trActive = "translateX(0) translateY(0)";
                trContent.style.transform = "translateX(0vw) translateY(0)";
                trContent.style.width = "100vw";
                trContent.style.height = "100vh";
                trContent.style.top = "0";
                trContent.style.display = "flex";
                trContent.style.alignItems = "center";
                trContent.style.justifyContent = "center";
                trContent.style.background = "var(--bg-transparent)";
                trContent.style.zIndex = "200";
                trBtn.style.zIndex = "300";
                tlBtn.style.zIndex = "100";
                blBtn.style.zIndex = "100";
                //brBtn.style.zIndex = "100";
              } else {
                trActive = "translateX(-5vw) translateY(0)";
                trContent.style.transform = "translateX(-5vw) translateY(0)";
                trContent.style.width = "30vw";
                trContent.style.height = "0";
                trContent.style.top = "10vh";
                trContent.style.display = "block";
              }
              break;

        case "bottom-left":
            if (window.innerWidth <= 600) {
                blActive = "translateX(0) translateY(0)";
                blContent.style.transform = "translateX(0vw) translateY(0)";
                blContent.style.width = "100vw";
                blContent.style.height = "100vh";
                blContent.style.top = "0";
                blContent.style.display = "flex";
                blContent.style.alignItems = "center";
                blContent.style.justifyContent = "center";
                blContent.style.background = "var(--bg-transparent)";
                blContent.style.zIndex = "200";
                trBtn.style.zIndex = "100";
                tlBtn.style.zIndex = "100";
                blBtn.style.zIndex = "300";
               // brBtn.style.zIndex = "100";
               projectOne.style.margin = "70";
               projectOne.style.margin = "auto auto 0.5rem";
               projectTwo.style.margin = "70";
               projectThree.style.margin = "70";
            } else if (window.innerWidth <= 1100) {
                blActive = "translateX(-5vw) translateY(0)";
                blContent.style.transform = "translateX(-5vw) translateY(0)";
                blContent.style.width = "30vw";
                blContent.style.height = "0";
                blContent.style.top = "10vh";
                blContent.style.display = "block";
            } else {
                blActive = "translateX(-5vw) translateY(0)";
                blContent.style.transform = "translateX(-5vw) translateY(0)";
                blContent.style.width = "30vw";
                blContent.style.height = "0";
                blContent.style.top = "10vh";
                blContent.style.display = "block";
            }
            break;

      //  case "bottom-right":
      //      if (window.innerWidth <= 1100) {
      //          brActive = "translateX(0) translateY(0)";
      //          brContent.style.transform = "translateX(0vw) translateY(0)";
      //          brContent.style.width = "100vw";
      //          brContent.style.height = "100vh";
      //          brContent.style.bottom = "0";
     //           brContent.style.display = "flex";
     //           brContent.style.flexDirection = "column";
      //          brContent.style.alignItems = "center";
     //           brContent.style.justifyContent = "center";
    //            brContent.style.background = "var(--bg-transparent)";
     //           brContent.style.zIndex = "200";
      //          trBtn.style.zIndex = "100";
     //           tlBtn.style.zIndex = "100";
      //          blBtn.style.zIndex = "100";
      //          brBtn.style.zIndex = "300";
     //   } else {
     //           brActive = "translateX(-5vw) translateY(0)";
      //          brContent.style.transform = "translateX(-5vw) translateY(0)";
      //          brContent.style.width = "30vw";
     //           brContent.style.height = "0";
     //           brContent.style.bottom = "30vh";
     //           brContent.style.display = "block";
     //       }
      //      break; //

        default:
    }
}     

// Store the last reverse animation, ready to be played //
let lastReverseAnimation = "";

// Play animation //
function playAnimation(animation, reverseAnimation) {
  // Remove all the animation classes from heroImage //
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
    tlBtn.innerHTML = "About"
    trBtn.innerHTML = "Merch"
    blBtn.innerHTML = "Book"
    brBtn.innerHTML = "Blog"

   switch (activeCorner) {
    case "top-left":
        tlBtn.style.background =bgColor;
        tlBtn.style.color = textColor;
        tlContent.style.transform = tlHidden;
        break;
    case "top-right":
        trBtn.style.background =bgColor;
        trBtn.style.color = textColor;
        trContent.style.transform = tlHidden;
        break;
   case "bottom-left":
        blBtn.style.background =bgColor;
        blBtn.style.color = textColor;
        blContent.style.transform = tlHidden;
        break;
   case "bottom-right":
        brBtn.style.background =bgColor;
        brBtn.style.color = textColor;
        brContent.style.transform = tlHidden;
        break;

        default: 
   }

   heroImage.className = "";
   lastReverseAnimation = "";
   activeCorner = "";
   heroImage.classList.add(reverseAnimation);
   setTimeout(function () {
    heroImage.classList.remove(reverseAnimation)
   }, 200);
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
        blBtn.innerHTML = "Books<br />&darr;";

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
        brBtn.innerHTML = "Blog<br/>&darr;";

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