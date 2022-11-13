let trafficLight = document.querySelector("#trafficLight");
let trafficLightCircleTop = document.querySelector("#trafficLightCircleTop");
let trafficLightCircleMiddle = document.querySelector("#trafficLightCircleMiddle");
let trafficLightCircleBottom = document.querySelector("#trafficLightCircleBottom");

function makeGreen() {
    trafficLightCircleBottom.style.background = ("black");
    trafficLightCircleTop.style.background = ("green");
    trafficLight.removeEventListener("click", makeGreen);
    trafficLight.addEventListener("click", makeYellow);
}

function makeYellow() {
    trafficLightCircleTop.style.background = ("black");
    trafficLightCircleMiddle.style.background = ("yellow");
    trafficLight.removeEventListener("click", makeYellow);
    trafficLight.addEventListener("click", makeRed);
}

function makeRed() {
    trafficLightCircleMiddle.style.background = ("black");
    trafficLightCircleBottom.style.background = ("red");
    trafficLight.removeEventListener("click", makeRed);
    trafficLight.addEventListener("click", makeGreen);
}

trafficLight.addEventListener("click", makeGreen);