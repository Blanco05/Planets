let angleuno = 0, angledue = 0, angletre = 0, anglequattro = 0, angleVenus = 0;
let angleJupyter = 0, angleSaturn = 0, angleUranus = 0, angleNeptun = 0;
let animationFrameIdPlanets;
let animationFrameIdRocket;
let animationFrameIdStarwars;
let menuVisible = false;
let xrazzo = 0;
let yrazzo = 0;
let xstarwars = 0;
let ystarwars = 0;
let xrandomrazzo = Math.random() * window.innerWidth;
let yrandomrazzo = Math.random() * window.innerHeight;
let xrandomstarwars = Math.random() * window.innerWidth;
let yrandomstarwars = Math.random() * window.innerHeight;
const speed = 1.5;

const planetterra = document.getElementById("planetterra");
const planetdue = document.getElementById("planetdue");
const planettre = document.getElementById("planettre");
const planetquattro = document.getElementById("planetquattro");
const planetVenus = document.getElementById("planetVenus");
const planetJupyter = document.getElementById("planetJupyter");
const planetSaturn = document.getElementById("planetSaturn");
const planetUranus = document.getElementById("planetUranus");
const planetNeptun = document.getElementById("planetNeptun");
const razzo = document.getElementById("razzo");
const starwarsObj = document.getElementById("starwars");
const aumento = 2;

function rotatePlanets() {
    angleuno += 1.6;
    const radiusuno = 100 * aumento;
    const xuno = Math.cos(angleuno * (Math.PI / 180)) * radiusuno;
    const yuno = Math.sin(angleuno * (Math.PI / 180)) * radiusuno / 2;
    planetterra.style.transform = `translate(${xuno}px, ${yuno}px)`;
    updatePlanetVisibility(planetterra, yuno);

    angledue += 10;
    const radiusdue = 15 * aumento;
    const xdue = xuno + Math.cos(angledue * (Math.PI / 180)) * radiusdue;
    const ydue = yuno + Math.sin(angledue * (Math.PI / 180)) * radiusdue;
    planetdue.style.transform = `translate(${xdue}px, ${ydue}px)`;
    updatePlanetVisibility(planetdue, ydue);

    anglequattro += 4.2;
    const radiusquattro = 60 * aumento;
    const xquattro = Math.cos(anglequattro * (Math.PI / 180)) * radiusquattro;
    const yquattro = Math.sin(anglequattro * (Math.PI / 180)) * radiusquattro / 2;
    planetquattro.style.transform = `translate(${xquattro}px, ${yquattro}px)`;
    updatePlanetVisibility(planetquattro, yquattro);

    angleVenus += 1.2;
    const radiusVenus = 80 * aumento;
    const xVenus = Math.cos(angleVenus * (Math.PI / 180)) * radiusVenus;
    const yVenus = Math.sin(angleVenus * (Math.PI / 180)) * radiusVenus / 2;
    planetVenus.style.transform = `translate(${xVenus}px, ${yVenus}px)`;
    updatePlanetVisibility(planetVenus, yVenus);

    angletre += 0.9;
    const radiustre = 140 * aumento;
    const xtre = Math.cos(angletre * (Math.PI / 180)) * radiustre;
    const ytre = Math.sin(angletre * (Math.PI / 180)) * radiustre / 2;
    planettre.style.transform = `translate(${xtre}px, ${ytre}px)`;
    updatePlanetVisibility(planettre, ytre);

    angleJupyter += 0.2;
    const radiusJupyter = 250 * aumento;
    const xJupyter = Math.cos(angleJupyter * (Math.PI / 180)) * radiusJupyter;
    const yJupyter = Math.sin(angleJupyter * (Math.PI / 180)) * radiusJupyter / 2;
    planetJupyter.style.transform = `translate(${xJupyter}px, ${yJupyter}px)`;

    angleSaturn += 0.1;
    const radiusSaturn = 320 * aumento;
    const xSaturn = Math.cos(angleSaturn * (Math.PI / 180)) * radiusSaturn;
    const ySaturn = Math.sin(angleSaturn * (Math.PI / 180)) * radiusSaturn / 2;
    planetSaturn.style.transform = `translate(${xSaturn}px, ${ySaturn}px)`;

    angleUranus += 0.06;
    const radiusUranus = 370 * aumento;
    const xUranus = Math.cos(angleUranus * (Math.PI / 180)) * radiusUranus;
    const yUranus = Math.sin(angleUranus * (Math.PI / 180)) * radiusUranus / 2;
    planetUranus.style.transform = `translate(${xUranus}px, ${yUranus}px)`;

    angleNeptun += 0.04;
    const radiusNeptun = 400 * aumento;
    const xNeptun = Math.cos(angleNeptun * (Math.PI / 180)) * radiusNeptun;
    const yNeptun = Math.sin(angleNeptun * (Math.PI / 180)) * radiusNeptun / 2;
    planetNeptun.style.transform = `translate(${xNeptun}px, ${yNeptun}px)`;

    animationFrameIdPlanets = requestAnimationFrame(rotatePlanets);
}

function razzetto() {
    if (Math.abs(xrazzo - xrandomrazzo) < 1 && Math.abs(yrazzo - yrandomrazzo) < 1) {
        xrandomrazzo = Math.floor(window.innerWidth * Math.random());
        yrandomrazzo = Math.floor(window.innerHeight * Math.random());
        console.log(xrandomrazzo, yrandomrazzo);
    }
    const angle = Math.atan2(yrandomrazzo - yrazzo, xrandomrazzo - xrazzo);
    xrazzo += Math.cos(angle) * speed;
    yrazzo += Math.sin(angle) * speed;
    const degrees = angle * ((180) / Math.PI) + 90;
    razzo.style.transform = `translate(${xrazzo}px, ${yrazzo}px) rotate(${degrees}deg)`;
    animationFrameIdRocket = requestAnimationFrame(razzetto);
}

function starwars() {
    if (Math.abs(xstarwars - xrandomstarwars) < 1 && Math.abs(ystarwars - yrandomstarwars) < 1) {
        xrandomstarwars = Math.floor(window.innerWidth * Math.random());
        yrandomstarwars = Math.floor(window.innerHeight * Math.random());
        console.log(xrandomstarwars, yrandomstarwars);
    }
    const angle = Math.atan2(yrandomstarwars - ystarwars, xrandomstarwars - xstarwars);
    xstarwars += Math.cos(angle) * speed;
    ystarwars += Math.sin(angle) * speed;
    const degrees = angle * ((180) / Math.PI) + 90;
    starwarsObj.style.transform = `translate(${xstarwars}px, ${ystarwars}px) rotate(${degrees}deg)`;
    animationFrameIdStarwars = requestAnimationFrame(starwars);
}

razzo.style.transformOrigin = 'center top';

function updatePlanetVisibility(planet, y) {
    planet.style.zIndex = y >= 0 ? 2 : 0;
}

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");

    startButton.onclick = () => {
        if (!animationFrameIdPlanets) {
            rotatePlanets();
        }
        if (!animationFrameIdRocket) {
            razzetto();
        }
    };

    stopButton.onclick = () => {
        cancelAnimationFrame(animationFrameIdPlanets);
        cancelAnimationFrame(animationFrameIdRocket);
        animationFrameIdPlanets = null;
        animationFrameIdRocket = null;
    };
    startButton.click();
});

function toggleMenu() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle('show');
}


razzetto();
starwars();
