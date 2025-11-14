"use strict"; Timéo Vigneron

// ------------------------------------------------------
// Jeu du Plus / Moins
// ------------------------------------------------------

let secret = 0;
let essais = [];

// ------------------------------------------------------
// 1. Fonction de tirage aléatoire (vue en cours)
//    Retourne un nombre entier entre min et max inclus
// ------------------------------------------------------
function tirageNombre(min, max) {
    // compléter le code ci-dessous
let nombre = Math.floor(Math.random() * (max - min + 1)) + min;
    return nombre;
}

// ------------------------------------------------------
// 2. Initialisation du jeu
//    - tirage du nombre secret
//    - remise à zéro des essais
//    - remise à zéro des affichages
// ------------------------------------------------------
function demarrerJeu() {
	// compléter le code ci-dessous
function demarrerJeu() {
    secret = tirageNombre(1,50);   
document.querySelector("#indice").innerHTML = "Nouvelle partie";
}

// ------------------------------------------------------
// 3. Affichage de l’historique des essais
//    - construire une chaîne HTML avec tous les essais
//    - utiliser une boucle for et le tableau essais[]
// ------------------------------------------------------
function afficherHistorique() {
	// compléter le code ci-dessous
	function afficherHistorique() {
    for (let i = 1; i <= essais.length; i++)
 texte += "<li>" + essais[i] + "</li>";
}

// ------------------------------------------------------
// 4. Fonction appelée quand l’utilisateur clique sur “Tester”
//    - lit la valeur saisie
//    - la convertit en nombre
//    - la stocke dans le tableau essais[]
//    - compare avec le secret
//    - affiche l’indice ("plus", "moins", "bravo")
// ------------------------------------------------------
function tester() {
	// compléter le code ci-dessous
function tester() {
    let valeur = document.querySelector("#proposition").value;
    let essais = [];
essais.push(valeur);
   
 // Bonus confort : remettre le focus dans le champ

}

// ------------------------------------------------------
// 5. Mise en place des événements au chargement de la page
// ------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // relier le bouton #btnTester à la fonction tester
    document.querySelector("#btnTester").addEventListener("click", tester);

    // relier le bouton #btnRejouer à la fonction demarrerJeu
    document.querySelector("#btnRejouer").addEventListener("click", demarrerJeu);

    // (facultatif) : valider avec la touche Entrée
    document.querySelector("#proposition").addEventListener("keydown", function (event) {
		// compléter le code ci-dessous
proposition.addEventListener("keydown", e => key=="Enter" && tester());
    });

    // appeler demarrerJeu() pour lancer la première partie
    demarrerJeu();
});
