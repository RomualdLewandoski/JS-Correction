window.addEventListener('load', function () {
    console.log("document chargé")
    var btnAffiche = document.getElementById('btnAffiche')
    var btnCache = document.getElementsByName('btnCache')[0] // <= TABLEAU
    var survol = document.getElementById('parTexte')
    var postit = document.getElementById('PostIt')




    btnAffiche.addEventListener('click', function () { //Action au clic sur afficher
        writeInside(postit, "Vous avez cliqué sur le bouton 'Affiche' !")
    })
    btnCache.addEventListener('click', function () {
        hide(postit)
    })
    survol.addEventListener('mouseover', function () {
        writeInside(postit, "C’est gentil de me survoler...")
    })
    survol.addEventListener('mouseout', function () {
        hide(postit)
    })


})

function display(element){
    element.style.visibility = "visible"
}

function hide(element){
    element.style.visibility = "hidden"
}

function writeInside(element, text){
    display(element)
    element.innerHTML = text
}

