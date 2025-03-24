/** @var {Date} today -- Initialise la date et l'heure du jour */
let today = new Date();

/**
 * 
 * @param {@param {Date} d } d -- date de naissance de l'utilisateur
 * @returns {number} -- retourne le nombre de jouers écoulés depuis la naissance de l'utilisateur
 */
export function getDays(d) {
    /** @description -- convertit la date de naissance en ms*/
    let date = new Date(d).getTime();
    /** @description -- convertit la date du jour en ms */
    let now = new Date().getTime();
    /** @description -- calcule la différence entre les deux dates */
    let diff = now - date;  
    /** @description -- retourne le nombre de jours écoulés */
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

/**
 * 
 * @param {@param {number} nbr } nbr -- nombre d'heures à ajouter
 * @returns {string} -- retourne la date et l'heure dans le futur
 */
export function future(nbr) {
    /** @description -- calcule la date et l'heure dans le futur */
    let future = today.getTime() + (nbr * 60 * 60 * 1000);
    /** @description -- convertit la date et l'heure dans le futur en objet Date */
    let futureDate = new Date(future);
    /** @description -- retourne la date et l'heure dans le futur */
    return futureDate.toLocaleString("fr-BE", { timeZone: "Europe/Brussels"});
}