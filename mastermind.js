"use strict"; Timéo Vigneron

// ------------------------------------------------------
// Jeu du Mastermind 4 chiffres
// ------------------------------------------------------

// combinaisonSecrete 	: tableau de 4 chiffres différents entre 0 et 9
// essaiCourant      	: numéro de l'essai en cours (de 0 à essaiMax)
// essaiMax          	: nombre maximal d'essais (10)
// partieTerminee    	: booléen qui indique la fin de la partie

let combinaisonSecrete = [];
let essaiCourant = 0;
let essaiMax = 10;
let partieTerminee = false;

// Références vers les éléments du DOM (remplies à l'initialisation)
let champProposition = null;
let spanEssaiCourant = null;
let spanEssaiMax = null;
let zoneMessage = null;
let corpsHistorique = null;



// ------------------------------------------------------
// 1. Fonction de tirage aléatoire
//    Retourne un nombre entier entre min et max inclus
// ------------------------------------------------------
function tirageNombre(min, max) {
	// A completer
    function tirageNombre(min, max) {
    let nombre = Math.floor(Math.random() * (max - min + 1)) + min;
	return nombre;
}



// ------------------------------------------------------
// 2. Génération de la combinaison secrète
//    - vider le tableau combinaisonSecrete[]
//    - tirer des chiffres aléatoires entre 0 et 9
//    - vérifier qu'ils ne sont pas déjà présents (indexOf)
//    - chercher les chiffres jusqu'à avoir 4 valeurs distinctes
// ------------------------------------------------------
function genererCombinaisonSecrete() {
	// A completer
    function genererCombinaisonSecrete() {
	var combinaisonSecrete = [];   // 

    function genererCombinaisonSecrete(); {
    return Math.random() * (9 - 0)+0; 
    combinaisonSecrete.length = 0;

    
    while (combinaisonSecrete.length < 4); {
        var chiffre = Math.floor(Math.random() * 10); 
        }
    }
}
}



// ------------------------------------------------------
// 3. Affichage des messages
//    - afficher un texte dans #message
//    - ajouter une classe CSS en fonction du type de message
//      (message-bon, message-mauvais ou aucune)
// ------------------------------------------------------
function afficherMessage(texte, estBon) {
	// A completer
    function afficherMessage(texte, estBon) {	
	console.log(texte, estBon);
	function testMessage(a);
	function testMassage(b);
	let result;
	if (a = TRUE){;
	result = "message-bon";
	 } else {
    if (b = FALSE);{
    result = "message-mauvais";
  }
	 }
    return result;
		
}



// ------------------------------------------------------
// 4. Ajout d'une ligne à l'historique
//    - créer une ligne <tr>
//    - 4 cellules : numéro d'essai, proposition, bien placés, mal placés
//    - ajouter la ligne dans le <tbody id="historique">
// ------------------------------------------------------
function ajouterHistorique(propositionTexte, nbBienPlaces, nbMalPlaces) {
	// A completer
    function ajouterHistorique(propositionTexte, nbBienPlaces, nbMalPlaces) {
	historique.innerHTML += historique.rows.lenght+1; 
}



// ------------------------------------------------------
// 5. Vérification d'une proposition
//    - lire la saisie dans #champProposition
//    - contrôler qu'il y a exactement 4 chiffres
//    - transformer la proposition en tableau de nombres
//    - calculer :
//        * nbBienPlaces  : même chiffre, même position
//        * nbMalPlaces   : chiffre présent mais à une autre position
//    - incrémenter essaiCourant et mettre à jour l'affichage
//    - appeler ajouterHistorique(...)
//    - tester fin de partie :
//        * si nbBienPlaces == 4 : victoire
//        * sinon si essaiCourant >= essaiMax : défaite + dévoiler la combinaison
//        * sinon : afficher un message d'indice
// ------------------------------------------------------
function verifierProposition() {
	// A completer
	function verifierProposition() {
    let s = champProposition.value.trim();
    return("4 chiffres !");
    
    let a = s.split("").map(Number);
        b = combinaisonSecrete.slice();
        c = 0, m = 0;
    }

    essaiCourant++;
    ajouterHistorique(a,b,c);

    if (b === 4) afficherMessage("Gagné !");
    else if (essaiCourant >= essaiMax);
        afficherMessage("Perdu, solution : " + combinaisonSecrete.join(""));
		else
			... 
}

}



// ------------------------------------------------------
// 6. Nouvelle partie
//    - réinitialiser essaiCourant et partieTerminee
//    - vider l'historique
//    - effacer le message et le champ de saisie
//    - générer une nouvelle combinaison secrète
// ------------------------------------------------------
function nouvellePartie() {
	// A completer
    function nouvellePartie() {
	reset("essaiCourant");
	reset("partieTerminee");
	var deletingAll = browser.history.deleteAll();
	console.log(delete("message"));
	console.log(delete("champ de saisie"));
	const GeneratorFunction = Object.combinaisonSecrete(function* () {}).constructor;
}



// ------------------------------------------------------
// 7. Mise en place des événements au chargement de la page
//    - récupérer toutes les références (querySelector)
//    - afficher essaiMax dans #essaiMax
//    - relier :
//        * #btnProposer      -> verifierProposition
//        * #btnNouvellePartie-> nouvellePartie
//    - valider avec [Entrée] dans #champProposition
//    - lancer la première partie avec nouvellePartie()
// ------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {

	// A completer : récupération des éléments du DOM
 let valeur = document.querySelector("#références").value;

	// Affichage du nombre d'essais maximum


	// A completer : installation des gestionnaires d'événements


	// A completer : valider avec la touche Entrée dans le champ de saisie


	// Lancer la première partie
	nouvellePartie();
});
