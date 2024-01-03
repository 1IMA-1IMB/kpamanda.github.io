// seperation of concernsv - å separere javascript fra html
// string er en datatype. heltall. en annen datatype er desimaltall og sånne ting. en string er tekst med '' rundt teksten. tekst er ikke en string, men en string kan være tekst. å gjøre noe til en string er å lagge anførselstegn rundt.

// a)
let x = "Amanda";
let y = "16";
let z = "Hei " + x + ", du er " + y + "år gammel";
console.log(z)

// b)
// kommandoen for å lage en variabel heter "let". det er en lignende kommando som heter "var" og de er veldig like, men vi skal bruke "let".

let erenelev = true;

if( !erenelev ) {

    console.log( "du er ikke en elev!" );

} else {

    console.log( "du er en elev!" );

}

// på console her fikk jeg "du er en elev!" fordi