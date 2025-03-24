/** @type {import {date | number} from "module";} */
import { future, getDays } from "./module/date.js";

/** @var {Date} today -- Initialise la date et l'heure du jour */
let today = new Date();

/** @const {HTMLElement} ul -- crée une balise <ul> */
const ul = document.createElement('ul');
/** @description -- Ajoute la liste <ul> au <body> */
document.body.appendChild(ul);

/** @const {HTMLElement} li1 -- crée une balise <li> */
const li1 = document.createElement('li');

/** @const {HTMLElement} li2 -- crée une balise <li> */
const li2 = document.createElement('li');

/** @const {HTMLElement} li3 -- crée une balise <li> */
const li3 = document.createElement('li');

/** @const {HTMLElement} li4 -- crée une balise <li> */
const li4 = document.createElement('li');

/** @description -- Ajoute les contenus dans les lignes <li> */
li1.innerHTML = 'Bruxelles: ' + today.toLocaleString("fr-BE", { timeZone: "Europe/Brussels"});
li2.innerHTML = 'Anchorage: ' + today.toLocaleString("en-US", { timeZone: "America/Anchorage"});
li3.innerHTML = 'Reykjavik: ' + today.toLocaleString("is-IS", { timeZone: "Atlantic/Reykjavik"});
li4.innerHTML = 'Moscou: ' + today.toLocaleString("ru-RU", { timeZone: "Europe/Moscow"});

/** @description -- Ajoute les <li> à la liste <ul> */
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

/** @const {HTMLElement} div -- créer une balise <div> */
const div = document.createElement('div');

/** @const {HTMLElement} p1 -- créer une balise <p> */
const p1 = document.createElement('p');

/** @description -- ajoute le contenu de p1 */
p1.textContent = 'Il s\'est ecoulé: ' + getDays('1992-01-07') + ' jours depuis ma naissance.';

/** @description -- ajoute le <p> à la <div> */
div.appendChild(p1);

/** @description -- ajout le <div> au <body> */
document.body.appendChild(div);

/** @const {HTMLElement} sectionEight -- Cible la balise <section id="height">*/
const sectionEight = document.getElementById('eight');

/** @const {HTMLElement} userInput -- Cible l'input id="date" */
const userInput = document.querySelector('#date');

/** @const {HTMLElement} p3 -- créer une balise <p> */
const p3 = document.createElement('p');

/** @description -- ajoute le <p> à la <section id="height"> */
sectionEight.appendChild(p3);

/** @description --Ajoute un ecouteur d'evenement sur input.value */
userInput.addEventListener('keyup', function() {
    /** @var {number} input -- Valeur de retour de l'entrée utilisateur */
    let input = userInput.value;

    /** @description -- Ajoute le contenu de p3 */
    p3.innerHTML = `Dans ${input} heures nous serons le ` + future(input);
});

/** @const {HTMLElement} p2 -- créer une balise <p> */
const p2 = document.createElement('p');

/** @description -- ajoute le contenu de p2 */
p2.innerHTML = "Dans 80.000 heures, nous serons le: " + future(80000);

/** @description -- ajoute le <p> à la <section id="height"> */
sectionEight.appendChild(p2);







