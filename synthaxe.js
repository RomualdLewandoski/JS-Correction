//Commentaire

/*
Comentaire
multi
ligne
 */
/**
 * @deprecated
 * @see calcul()
 * @param number1
 * @param number2
 * @returns {*}
 */
function addition(number1, number2) {
    return number1 + number2
}

/**
 *
 */
function calcul() {

}

addition()


//Conditions

//SI est définit par if
// il est obligatoirement suivit par des ()
// dans ces () on va trouver la ou les conditions
var a, b, c, d, e, f, g, h, i, j
var result = "";
if (a < 10) {
    //bloc de code si a est plus petit que 10
    result = "un nombre"
} else { // sinon
    //bloc de code si la condition n'est pas remplie
    result = "le reste"
}

//condition ternaire
result = a < 10 ? "Un nombre" : "le reste";

// boucles :

// for => Execution Temps que la condition est respectée
// while => Idem
// do while => fait l'action 1 fois PUIS ensuite SI la condition est respectée

//FOR :

//for (var index; condition, action)
for (var i; i < a; i++) {

}
//parcours de tableau :
var tableaux = []
let j
for (j in tableaux) {
    var currentTableau = tableaux[j]
}
for (var k; k < tableaux.length; k++) {
    var currentTableau = tableaux[k]
}

//WHILE : Condition
//Il a git comme un IF
a = 0
while (a < 10) {
    a++
}
//a serra égal à 9

var monObj = {
    nom: "Toto",
    age: 19
}
//recupération depuis OBJET
monObj.age
monObj.nom
//Editer un objet
monObj.age = 20

// Convertion OBJET EN STRING
var monObjStr = JSON.stringify(monObj)
// Convertion String en Objet
var monObj2 = JSON.parse(monObjStr)

//LocalStorage !
// NE PREND EN VALEUR QUE DES STRINGS !
//Tableau qui comporte 2 colones
// Col1 = Clé (identifier de le valeur)
// Col2 = Valeur
localStorage.getItem('clé') // récupère une valeur dans
// le localstorage
// OU renvoi FALSE
localStorage.setItem('clé', JSON.stringify(monObj2))

localStorage.removeItem('clé') // supprimer la ligne

localStorage.clear() // tout supprimer
//+-------------------------+
//|   Col1      |     Valeur|
//+-------------+-----------+
//| Joueur1     |  Toto     |
//+-------------+-----------+
//| Joueur2     |   Tutu    |
//+-------------+-----------+
localStorage.getItem('Joueur1') //=> Toto
localStorage.getItem('Joueur2') //=> Tutu
localStorage.setItem('Joueur3', 'Tata')
//+-------------------------+
//|   Col1      |     Valeur|
//+-------------+-----------+
//| Joueur1     |  Toto     |
//+-------------+-----------+
//| Joueur2     |   Tutu    |
//+-------------+-----------+
//| Joueur3     |   Tata    |
//+-------------+-----------+
localStorage.setItem('Joueur1', 'Titi')
//+-------------------------+
//|   Col1      |     Valeur|
//+-------------+-----------+
//| Joueur1     |  Titi     |
//+-------------+-----------+
//| Joueur2     |   Tutu    |
//+-------------+-----------+
//| Joueur3     |   Tata    |
//+-------------+-----------+
localStorage.removeItem('Joueur2')
//+-------------------------+
//|   Col1      |     Valeur|
//+-------------+-----------+
//| Joueur1     |  Titi     |
//+-------------+-----------+
//| Joueur3     |   Tata    |
//+-------------+-----------+

localStorage.clear()

//+-------------------------+
//|   Col1      |     Valeur|
//+-------------+-----------+


//FONCTIONS

//elles peuvent etre anonymes ou nomées
//une fonction anonyme n'aura pas de nom
// fonction se construit de la manière suivante :
//function <nom:optionel> () { //Code de la fonction  }
//EXEMPLE :
function maFunction() {

}

//Les fonctions peuvent etre de plusieurs types
// Les voids cad les fonctions qui ne font pas de retour
// Les fonctions qui font des retour

//une fonction avec un retour dois comporter l'instruction return
// /!\ le return met fin a l'execution de la fonction

function f1(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}

//le return n'as pas besoin de = on met directement la valeur
// a la suite du return
var greetingToto = greeting('Toto')
//greetingToto = "Salut Toto"
function greeting(nom, prenom) {
    return "Salut " + nom + " " + prenom
}

//intéret d'une fonction
//Regrouper un ensemble de code de façon générique
//Lorsque j'ai plusieurs fois le mme code mais
// (avec des paramètres qui changent OU PAS )
// je vais créer une fonction qui va regroupé ce code

//l'appel d'une fonction :
//nomDeLaFonction() et au besoin les params de la fonction
// dans les ()

greeting('JEAN-JEAN', 'JEAN')

function displayGreeting(greetingStr) {
    alert(greetingStr)
}

displayGreeting(
    greeting(
        localStorage.getItem('Nom'),
        localStorage.getItem('prenom')
    )
)


//Parametre :
// QQCH QUE L'ON VA PASSER DANS UNE FONCTION
// EX :
function test(age, sexe = "h") {
    if (age > 45){
        sexe == "h" ? alert("T'es vieux") : alert("T'es vielle")
    }else{
        sexe == "h" ?alert("T'as encore le temps") : alert("T'es fraiche")

    }
}

test(20)

//Portabilité des variables :
// 3 types de variables :
// const
// var
// let
//Const pour constante : ne peut etre changé ensuite
// porté de tout le script
//En général on va la trouver en haut de script
const maConstante = "Salut"

//var pour variable
// portabilité + réduite que la constante
// MAIS Lecture Ecriture dessus
//ex:

if (a < 10){
    var resultat = "Plop"
}

resultat
window.addEventListener('load', function () {
    //declaration de tes variables
    var totoDom = document.getElementById('totoDom')

})

// Organisation du code :

/* 1 - Event Qui attend le chargement de la page
   2 - Récupération des variables utiles
        - Elements du dom
        - Objets
        - variables du localStorage
        - etc...
    3 - Gestion évènements
    4 - Fonctions relatives aux évènements définit
    en écoute au dessus (avec commentaire VOIR avec annotations)
 */

//Manip de DOM :
//innerHTML / innerText
//style => width, z-index, display, visibility (attributs css)

