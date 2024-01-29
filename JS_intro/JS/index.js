
// seperation of concernsv - å separere javascript fra html
// string er en datatype. heltall. en annen datatype er desimaltall og sånne ting. en string er tekst med '' rundt teksten. tekst er ikke en string, men en string kan være tekst. å gjøre noe til en string er å lagge anførselstegn rundt.

// a)
let x = "Amanda";
let y = "16";
let z = "Hei " + x + ", du er " + y + "år gammel";
console.log(z);

// b)
// kommandoen for å lage en variabel heter "let". det er en lignende kommando som heter "var" og de er veldig like, men vi skal bruke "let".


// c)
let erenelev = true;

// d)
if( !erenelev ) {

    console.log( "du er en elev!" );

} else {

    console.log( "du er ikke en elev!" );

}

// på console her fikk jeg "du er en elev!" fordi 

//del 2 a)
let svar = 2 + 2;
console.log(svar);

// b)
let svar1 = 11 * 1;
let svar2 = 11 * 2;
let svar3 = 11 * 3;
let svar4 = 11 * 4;
let svar5 = 11 * 5;
let svar6 = 11 * 6;
let svar7 = 11 * 7;
let svar8 = 11 * 8;
let svar9 = 11 * 9;
let svar10 = 11 * 10;
let svar11 = 11 * 11;
console.log(svar1, svar2, svar3, svar4, svar5, svar6, svar7, svar8, svar9, svar10, svar11);

// c)

//parameter er en verdi som en funksjon tar imot.
//"number1" og "number2" er navnet til verdiene 3 og 7. 

function test(number1, number2) {
    console.log(number1 * number2)
}

test(3, 7);


//dette er en funksjon. minFunksjon er navnet på funksjonen.
function minFunksjon() {

    console.log("hva som helst!");
}

//denne kaller på funksjonen og sier at den er her + skal vises. 
//skriv bare hva funksjonen heter + (); og så er du ferdig!
minFunksjon();

//tar imot parameteret, binder de opp til classen

// ! gjør det sant
let utsagn = false;

function ifSetning(){
    if(5 < 2) {

        //gjør masse greier her
        console.log("fiksa funksjon");

    } else {
        //gjør andre ting her hvis forige if ikke stemmer
        console.log(5 + 2);
    }
}

ifSetning();



let setning = false;

let tall1 = 7;
let tall2 = 4;

function ifSetninger(){
    
    if ( tall1 < tall2){

            console.log("første if er sann");

        } else if (tall1 === tall2) { 
            
            console.log("else if er stemte");

        } else {

            console.log("else en funket");
            
        }
    }


ifSetninger();





// F til C oppgave

function fahrenheitTilCelcius() {
    let fahrenheit = 80; //variabel

    let hjelp = (fahrenheit - 32) * 5 / 9; 

    console.log(hjelp);

}

fahrenheitTilCelcius();

function celciusTilFahrenheit() {
    let celcius = 20;

    let cf = (celcius * 1.8) + 32;

    console.log(cf);

}

celciusTilFahrenheit();


function moro() {

    console.log("haha moro");

}




///////////////////////////////////////




// a)

let sauer = 100;

function tellEnSau() {

    let sau = sauer - 1;

    console.log("du har " + sau + " sauer igjen å telle før du sovner.");
    
}

tellEnSau();

// b)

function tellNoenSauer(sau1) {

    let sau = sauer - sau1;

    console.log("du har " + sau + " sauer igjen å telle før du sovner.");
    
}

tellNoenSauer(40);

// c)

function mistetTellingen() {

    let sauer = 100;

}

console.log(sauer);


// d)

function ifSetning() {

    if(tellNoenSauer > 0) {

        console.log(sauer);
        
    } else {
        console.log("zzz zzz zzz");
    }

}

ifSetning();

// e) & f)

function klippSauer(antallSauer) {

    if(antallSauer>0 && 10>=antallSauer) {

        console.log("du fikk nok ull til et par sokker!");

    } else if(antallSauer>10 && 30>=antallSauer) {

        console.log("du fikk nok ull til en stor genser!");

    } else if(antallSauer>30 && 50>=antallSauer) {

        console.log("du fikk nok ull til kjeledress og sengetøy!");

    } else if(antallSauer>50 && 80>=antallSauer) {

        console.log("du fikk nok ull til å lage en saue-klone!");

    } else if(antallSauer>80 && 100>antallSauer) {

        console.log("du fikk nok ull til et ull-hoppselott!");

    } else if(antallSauer>100) {

        console.log("zzz zzz zzz")

    }

} 

klippSauer(75);

// oppgave fra tavla

let bool = true;
let bool2 = false;

 let tall = 5;

if(bool && !bool2) {

    console.log("riktig");

} else {

    console.log("gjør noe annet");

}

if(bool || !bool2) {

    console.log("riktig");

} else {

    console.log("gjør noe annet");

}