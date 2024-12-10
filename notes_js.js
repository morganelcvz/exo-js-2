// structures itératives 
//1
let continuer = "o"
let resteDiv = 0
while (continuer == "o") {
    let dividende=prompt("Donner la valeur du dividende")
    console.log(dividende)
    let diviseur=prompt("Donner la valeur du diviseur")
    console.log(diviseur)
    if (diviseur == 0) {
        console.log("Le diviseur ne peut être 0")
    } else if (resteDiv == 1) {
        while(resteDiv != 0) {
            resteDibv == dividende % diviseur 
            if (resteDiv!=0) {
                dividende == diviseur
                diviseur == resteDiv
            } 
        }
        console.log(`Le PGCB est ${diviseur}`)
    }
    let continuer=prompt("Voulez vous continuer ? o/n")
    console.log(continuer) 
}

//2 

let nbgrains = 1 
for (let i = 1; i < 63; i++) {
    nbgrains = 2*nbgrains
}
console.log(`Nombre de grains: ${nbgrains} peut aussi être exprimé en ${Math.pow(2,36)}`)

// FONCTIONS 
function getEntier() {
    let entier;
    do {
        reponse = prompt("Donnez un nombre entier :");
        entier = parseInt(reponse);
        if(isNaN(entier)) {
            alert (`La réponse ${reponse} n'est pas correcte, saisir un nombre entier.`);
        }
    } while (isNaN(entier));
    return entier; 
}

getEntier()