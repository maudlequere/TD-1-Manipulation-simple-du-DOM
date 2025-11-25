function heureCourante(UTC) {
    let dateDuJour = new Date();
    let heure = dateDuJour.getHours() + UTC;
    let minute = dateDuJour.getMinutes();
    let seconde = dateDuJour.getSeconds();
    if (heure < 10){heure='0'+ heure}
    if (minute < 10){minute='0'+ minute}
    if (seconde < 10){seconde='0'+ seconde}
    let heureActualise = `${heure}:${minute}:${seconde}`;
    return  heureActualise; 
}

function actualiser(){

    const paragraphes = document.getElementsByTagName("p");

    paragraphes[0].textContent= heureCourante(1); // heure local Paris UTC+1
    paragraphes[1].textContent= heureCourante(0); // heure local Londres UTC-0
    paragraphes[2].textContent= heureCourante(-5); // heure local New York UTC -5
    paragraphes[3].textContent= heureCourante(+9); // heure local Londres UTC +9

    let charge = 1000;
    setTimeout(actualiser,charge);
}


window.onload = actualiser;

