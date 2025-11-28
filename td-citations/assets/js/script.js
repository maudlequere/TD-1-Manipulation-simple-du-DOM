const data = [
    { quote: "La seule façon de réaliser l'impossible est de croire que c'est possible.", author: "Charles Kingsleigh" },
    { quote: "Le succès est la somme de petits efforts répétés jour après jour.", author: "Robert Collier" },
    { quote: "N'attendez pas. Le temps ne sera jamais juste.", author: "Napoléon Hill" },
    { quote: "Vous êtes le maître de votre destin. Vous pouvez influencer, diriger et contrôler votre environnement.", author: "Napoléon Hill" },
    { quote: "Soyez le changement que vous voulez voir dans le monde.", author: "Gandhi" },
    { quote: "À chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", author: "Mark Twain" },
    { quote: "Le succès c'est tomber sept fois, se relever huit.", author: "Proverbe japonais" },
    { quote: "La vie n'est pas d'attendre que les orages passent, c'est d'apprendre à danser sous la pluie.", author: "Sénèque" },
    { quote: "Le courage, ce n'est pas l'absence de peur, mais la capacité de la surmonter.", author: "Nelson Mandela" },
    { quote: "La créativité, c'est l'intelligence qui s'amuse.", author: "Albert Einstein" }
];

let ancienIndice = 10;
let minute = 29;
let seconde = 59;

function temps(){

    seconde = seconde - 1
    while (seconde == 0){
        minute = minute - 1
        if (minute == 0){
            minute = 30
        }
        seconde = 59
    }

    return `${minute} min ${seconde}`

    console.log(seconde)

    setTimeout(temps,1000);
}

function actualiser(){
    const nomCouleur = "#" + (Math.floor(Math.random()*0xFFFFFF).toString(16));
    let couleur = document.getElementsByClassName("container");
    couleur[0].style.backgroundColor = nomCouleur;

    console.log("ancien indice " + ancienIndice);
    
    let indice = parseInt(Math.random()*10);
    console.log("recherche indice 1 : " + indice);
    
    if (indice == ancienIndice){
        while (indice == ancienIndice){
        indice = parseInt(Math.random()*10);
        console.log(indice);
        }
    }

    ancienIndice = indice;
    console.log('indice ' + indice);
    console.log('\n');
    
    let citationAuteur = data[indice];
    
    let citation = Object.values(citationAuteur)[0];
    
    let auteur = Object.values(citationAuteur)[1];

    let changementTexte = document.getElementById("texte");
    let changementAuteur = document.getElementById("auteur");

    changementTexte.textContent = citation;
    changementAuteur.textContent = auteur;

    let changementMinuteur = document.getElementById("delai");

    changementMinuteur.textContent = temps()

    let charge = 1000; //1800000 milliseconde pour 30min
    setTimeout(actualiser,charge);
}

window.onload = actualiser;





