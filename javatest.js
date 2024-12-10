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