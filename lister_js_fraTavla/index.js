let elev_liste = ["Pål", "Per", "Pernille", "Paul", "Pauline", "Pablo", "Peter", "Paula", "Proxima Centauri"];


console.log("---WHILE-LØKKE---");
let plass = 0; //Denne skal kun brukes i while-løkken
while(plass < elev_liste.length){ 
    //Gjenta loopen SÅ LENGE (while) plass er mindre enn antall plasser i elev_liste

    console.log(plass); //Skriver ut indexen/plassen
    console.log(elev_liste[plass]); //Skriver ut eleven på indexen/plassen

    plass++; //Øker plass med 1 før neste sykel. VELDIG VIKTIG!!

}

console.log("\n\n\n---FOR-LØKKE 1---")
for(elev in elev_liste){ // elev settes til index/plassen i elev_liste 

    console.log(elev); //Skriver ut indexen/plassen
    console.log(elev_liste[elev]); //Skriver ut eleven på indexen/plassen 

}

console.log("\n\n\n---FOR-LØKKE 2---")
for(let i = 0; i < elev_liste.length; i++){ 

    console.log(i); //Skriver ut indexen/plassen
    console.log(elev_liste[i]); //Skriver ut eleven på indexen/plassen 

}

console.log("\n\n\n---MAP-FUNKSJON---")
elev_liste.map((item, index)=> {
    console.log(index, item); //Skriver ut indexen, samt eleven på den gitte indexen
})