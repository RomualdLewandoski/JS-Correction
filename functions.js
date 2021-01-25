//LES FONCTIONS EN JAVASCRIPTS

// INTERET 1  : Ne pas avoir a réécrire le meme code a plusieurs endroits
//ex: on va dire bonjour a un utilisateur

function greetings(name) {
    let genre
    if (name.endsWith("e")) {
        genre = "Mme"
    } else {
        genre = "Mr"
    }
    alert("Bonjour " + genre + " " + name)
}


greetings("Jordan")
greetings("Romu")
greetings("Seb")
greetings("Juliette")


// INTERET 2 : Séparer les codes des uns des autres

// Inconvénient :
// Réflexion et conception de façon générique
// Notion de portabilité des variables (cad leur durée d'existance dans le code)

//Portabilité des variables
// 3 types de variables
const constanteName = "A BESOIN D'UNE VALEUR DEFINIT PAR DEFAUT"
// /!\ la constante ne peut etre modifié ensuite
// Portabilité tout le code qui suit la déclaration de la constante

let letName = "coucou"
// La portabilité de cette variable est limité au bloc

var varName = "tutu"

//la portabilité est similaire au let a l'exception que le var peut
//sortir d'une fonction


letName
varName

function f() {
    var testVar = "titi"
    constanteName
    letName
    varName
    testVar
}


if (true) {
    let otherLet = "toto"
    var otherVar = "tata"
    constanteName
    letName
    otherLet
    varName
    otherVar

}
otherVar
otherLet // n'existe pas
varName
constanteName
letName


// Sortir une information d'une fonction

function f1() {
    if(constanteName == "toto"){
        return 2 + 2
    }else{
        return 1 + 1
    }
}

// return permet de faire sortir une information d'une fonction
// return permet aussi de stopper l'execution de cette fonction
// TOUT LE CODE ECRIT APRES LE RETURN NE S'EXECUTERA PAS
//return a une portée de bloc

// Faire entrer de infos dans une fonctions
// On va utiliser des paramètre ils sont définits
// dans les () de la fonction (juste apres le nom de la fonction)
//comme on fonctionne de manière générique
// on va nommé nos paramètres de façon claire
// pour ajouter un paramète a une fonction il suffit de lui donner un nom
// les paramèteres sont séparer entre eux par une ,
function f2(name, genre, heure) {
    let maPhrase;
    if (heure < 6 || heure > 20){
        maPhrase = "Bonne nuit "
    }else{
        maPhrase = "Bonjour "
    }
    maPhrase = maPhrase + genre + " " + name

    return maPhrase
}
//appel de fonction :
//cad lancer une fonction
//si la fonction a besoin de paramètres on va en définir les valeurs enter les ()
f2("Jordan", "Mr", 9)
f1()

// 2 types de fonctions !

// fonctions anonymes ET fonctions nommées

//une fonction nommée a un nom ce qui veux dire qu'on peut l'appeler n'importe quand
//Une fonction anonyme n'as pas de nom, elle ne peut donc etre appeler qu'une fois

// construction d'une fonction anonmye :
    (function() {

})

// construction d'une fonction nommée :
function nomDeMaFonction(){

}

//auto execution d'une fonction anonyme :
// on va encapsuler entre () puis a la suite de la dernière ) on va rajouter : ()
(function () {

})()
// on dit a JS d'executer cette fonction anonyme

// l'intéret ici est inexistant cependant on va utiliser les fonctions anonymes
//lors de la gestion d'évènement via JavaScript

// TYPES possibles en JavaScript

// Chaine de caractère : String => affichage : commence par " ou ' ou `
// Entier : int => affichage : une suite de nombre sans " ou ' ou `
// Boléan : Bool => Affichage : true / false sans " ou ' ou `
// Nombre a virgules : Float => Affchage pareil que le int la virguule est représenté par .
//ex : 40.5
// Tableaux : array => affichage : commence par [ et finit par ]
// Peut contenir un ensemble d'inforamations
// on va le voir comme une liste
//chaque élément d'un tableau est séparer par une ,
// on va essayer de stocker les memes types dans un tableau :
// var fruit = ["pommes", "tomates", "bannanes"]

//Récupération d'un éléments dans un tableau :

// on va utiliser son index cad sa position dans la liste :
// pour cela on va appeler notre tableau ex fruits
// puis on va ajouter [ suivit de l'index puis ]
// /!\ L'index commence a 0
//Donc si je veux récupérer pommes
// fruit[0]
//Attention la taille d'un tableau commence a 0 aussi mais 0 représente
// un tableau vide
// var fruit = [] //taille de 0
// var fruit = ["pomme"] //taille de 1 MAIS un index de 0
// var fruit = ["pomme", "Poires"] //taille de 2 MAIS un index de 1
// donc l'index est egal a la taille de mon tableau - 1

// comment récupérer un éléments précis sans connaitre sa position ?

var fruits = ["pommes", "tomates", "bannanes", "poires", "annanas"]

// Boucles :

// plusieurs méthodes possibles :
// méthode age de pierre
//  Définition d'un compteur appeler i ; condition d'execution de la boucle ; action a effectuer (en général l'incrémentation du compteur)
for(let i = 0; i < fruits.length; i++){
    let fruitActuel = fruits[i]
    if (fruitActuel == "poires"){
        alert("La position de poires dans le tableau est "+i)
        break; // cette instruction permet
        // d'arréter une boucle ou une fonction sans pour
        // autemps faire de retour
    }
}

// méthode while()
// décomposition de la méthode du dessus
let i = 0
while (i < fruits.length){
    let fruitActuel = fruits[i]
    if (fruitActuel == "poires"){
        alert("La position de poires dans le tableau est "+i)
        break; // cette instruction permet
        // d'arréter une boucle ou une fonction sans pour
        // autemps faire de retour
    }
    i++
}

// méthode rapide
let x
for (x in fruits){
    // au passage 1 x = 0
    // au passage 2 x = 1
    // au passage 3 x = 2 etc...
    let fruitActuel = fruits[x]
    if (fruitActuel == "poires"){
        alert("La position de poires dans le tableau est "+i)
        break; // cette instruction permet
        // d'arréter une boucle ou une fonction sans pour
        // autemps faire de retour
    }
}


// le dernier elements est : l'objet javascript
// un objet commence par { et finit par un }
// on peut identifié le principe d'une objet a celui du tableau
// a la différence que celui ci peut (et c'est meme son but)
// contenir plusieurs types d'information et de valeurs
// un objet peut contenir des strings, des ints, des bool, des floats, des array
// ET MEME D'AUTRES OBJETS
// ex: la voiture
// marque string
// modele string
// places => Tableau
                //Objet => siège
                        //marque
                        // matière etc...*
//roues => Tableau
            // Objet => Roue
                        //Marque
                        // diamètere
//etc...
// ATTENTION UN OBJET EN JS DOIT POUVOIR ETRE IDENTIFIE AU NIVEAU DE SES VALEURS
// il va donc y avoir un système de clé et valeur
//ex
var maVoiture = {
    marque: "Tesla",
    modele: "Model 3",
    roues: [
        {
            marque: "Michelin",
            etat: "Correct",
            diametre: "15pouces"
        },
        {
            marque: "PointP",
            etat: "Correct",
            diametre: "15pouces"
        },
        {
            marque: "Carglass",
            etat: "Correct",
            diametre: "15pouces"
        },
        {
            marque: "Renault",
            etat: "Correct",
            diametre: "15pouces"
        }
    ]
}
// la clé est a saisir sans " ou ' ou `
// on sépare la clé et la valeur par :
// on sépare les différentes valeurs par ,

// Acces aux valeurs
maVoiture.marque
//acces aux sous objets depuis un tableau :
maVoiture.roues[0].marque

let y
for (y in maVoiture.roues){
    let maRoueActulle = maVoiture.roues[y]
    alert(maRoueActulle.marque)
}

// /!\ ne pas oublier les " ' ` dans une string : PK ?
// un appel a une fonction :
function salut() {

}

salut
"salut"



//récupération du DOM :

//le DOM représente le contenu de ta page
//donc de <html> a </html>
//il est identifié par l'instruction  document
// pour récupérer un éléments ils y'as plusieurs façon possibles :
// par son ID (dans ce cas on aura un retour UNIQUE)
// par une de ses classes (dans ce cas on aura un tableau MEME SI 1 SEUL ELEMENT EST TROUVE)
// par son type (ex: p div etc...) RETOUR EN TABLEAU

// par id :
document.getElementById("monID")

// par classe :
document.getElementsByClassName("maClass") // ATTENTION RETOUR EN TABLEAU

// par type
document.querySelector("p") // attention tableau aussi


//document est un OBJET javascript
// de meme les elements qui serront retournés serront des objets javascript
//avec des propriétées pre-remplis

//ex :
// <div id="maDiv>coucou</div>
var maDiv = document.getElementById('maDiv')

// je peut récupérer son contenu :
// pour cela 2 possibilitées  :
// soit au format Texte
// soit au format HTML

//au format TEXT => innerText
// au format HTML => innerHTML

// je peut soit récuéprer la valeur soit la réecrire

maDiv.innerText // je récupère la valeur
maDiv.innerText = "Toto" // je définit la nouvelle valeur

maDiv.innerHTML // je récupère la valeur au format HTML
maDiv.innerHTML = "<p>Salut</p>" // je définit la nouvelle valeur au format HTML

maDiv.visibility // récupère la visibilité actuelle de l'élément
maDiv.visibility = "visible" // passe la visibilité de la div en visible

// il existe BEAUCOUP d'information

// évènements :
//pour ajouter un évènement il faut se placer sur un objet
// ex sur le document :
//on va ensuite utiliser le addEventListener
// c'est une fonction qui prend 2 paramètres
// 1 c'est l'event
// 2 fonction dite de callback
        //cad la fonction qui serra executée lorsque l'event serra appeler
        // en général il s'agit la d'une fonction anonyme
        // je peut quand meme appeler une fonction nommée

document.addEventListener('load', function () {
    alert("Ton document est chargé")
    //de manière générale un script javascript
    //commence TOUJOURS PAR CET EVENT

    //ici on aura les auters gestion d'évènement etc ....


})

function f5(){
    alert("le document est chargé")
}

document.addEventListener('load', f5)
