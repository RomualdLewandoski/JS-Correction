# Le format JSON

## Javascript Standard Object Notation

### Stockage d'information
- String
- int
- float
- tableau
- bool
- json


### Stockage : 
    String => Directement dans le code OU dans le LocalStorage ou en bdd ...
    Fichier => Au format .json
    
#### Fonctionnement:
Association Clé / Valeur

Commence par : 

    {

finit par :

    }
    
Séparation des différentes clé/valeur :

    ,
Séparation de la clé et de la valeur : 
    
    :

ex :

```json
{
  "clé1": "valeur1",
  "clé2": true,
  "clé3": 10,
  "clé4": ["valTableau1", "valTableau2"],
  "clé5": {
    "clé1Json2": "Value1Json2"
  },
  "clé6": [
      {
        "clé1TableauJson1": "val1TableauJson1"
      },
      {
        "clé1TableauJson2": "val1TableauJson2"
      }    
  ] 
}
```

Ex Concret :

```json

{
  "nom": "Havret",
  "prenom": "Cyril",
  "age": 27,
  "addresse": {
      "rue": "rue de la gare",
      "numero": 50,
      "CodePostal": 62300,
      "ville": "Lens"
  }
}

```
```javascript
var cyril = jsonDuDessus

//Récupération du nom de famille de cyril
cyril.nom
//Récupération de sa ville :
cyril.addresse.ville
//Sous forme javascript : 
var jsonEnJS = {
    nom : "Havret" ,
    prenom : "Cyril"
}

var jsonEnString = '
{
    "nom" : "Havret" ,
    "prenom" : "Cyril"
}
'
```

### Convertir JsonString en JsonJS
```javascript
//admettons que la variable jsonStr est mon json sous forme de string
jsonStr.nom // il me rect
var monJsonConverti = JSON.parse(jsonStr) //serra sous forme JsonJS
monJsonConverti.nom // OK
//pour modif un element du json
monJsonConverti.nom = "maNouvelleValeur"
//je reconverti en String
var monNouveauJsonEnString = JSON.stringify(monJsonConverti) 
// retour sous forme de chaine de charactère


document.getElementById('toto').innerHTML

let monObjet = {
    innerHtml: "le contenu de mon élément",
    style: {
        visibility: "invisible"
    },
    value: "Valeur de l'élément",
    
    
}

monObjet.style.visibility = "none"
```

###Exercice : 

- Créez un fichier .json pour un pokemon
- il doit contenir
    - le nom du pokemon
    - son niveau
    - son nombre de pv max
    - son nombre de pv actuel
    - l'emeble de ces 4 attaques 
        - une attaque contien : 
            - un nom
            - une puissance
            - un type
            - un PP Max (nombre de fois que l'on peut user l'attaque)
            - un PP actuel (min de 0)
    - statut (empoisoné, endormi, paraliser, brulé, rien)
    - nom du dresseur qui l'as attrapé
    - est il KO ? 
    - type (il peut avoir 2 types)
    
    
     