
// seperation of concernsv - å separere javascript fra html
// string er en datatype. heltall. en annen datatype er desimaltall og sånne ting. en string er tekst med '' rundt teksten. tekst er ikke en string, men en string kan være tekst. å gjøre noe til en string er å lagge anførselstegn rundt.

// a)
let x = "Amanda";
let y = "16";
let z = "Hei " + x + ", du er " + y + "år gammel";
console.log(z);

// b)
// kommandoen for å lage en variabel heter "let". det er en lignende kommando som heter "var" og de er veldig like, men vi skal bruke "let".


//c)
let erenelev = true;

//d)
if( !erenelev ) {

    console.log( "du er en elev!" );

} else {

    console.log( "du er ikke en elev!" );

}

// på console her fikk jeg "du er en elev!" fordi 

//del 2 a)
let svar = 2 + 2;
console.log(svar);

//b)
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

//c)

function test(number1, number2) {
    console.log(number1, number2)
}

test(3, 7);
