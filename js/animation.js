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

//Add an EventListener to the window object to listen for resize event (click) //

