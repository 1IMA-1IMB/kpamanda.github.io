function konvertering() {
    // dette er constant variabel, som betyr at value kan ikke endres, eller bli gitt på nytt et annet sted.
    const Gallons = 3.78541;
    const Ounces = 0.0295735;
    const Cups = 0.236588;
    const Spiseskjeer = 0.0147868;
    let input = document.getElementById("input").value;
    // input variablen henter sin verdi fra input type=number i html filen. 
    const measure = document.getElementById("measure");
    // measure verdien kommer fra select taggen i html filen. verdien kan da være "gallons", "ounces", osv.
    
    if (measure.value == "Gallons"){

        document.getElementById("output").innerHTML = ("det er " + (input * Gallons) + " gallons i " + input + " liter");
        //getElementById finner elementet i html filen ved hjelp av id navnet, og jeg bestemmer at den blir hentet fra html filen ved å skrive "innterHTML".
        //og svaret etter = tegnet endres ved at input verdien endres ved hvilket tall som en velger. om noen velger å konvertere fra antallet 3, så er input = 3. 
    
    }  else if (measure.value == "Ounces"){

        document.getElementById("output").innerHTML = ("det er " + (input * Ounces) + " ounces i " + input + " liter");

    } else if (measure.value == "Cups"){

        document.getElementById("output").innerHTML = ("det er " + (input * Cups) + " cups i " + input + " liter");

    } else if (measure.value == "Spiseskjeer") {

        document.getElementById("output").innerHTML = ("det er " + (input * Spiseskjeer) + " spiseskjeer i " + input + " liter");

    }
}
function palindrom() {
    // her er input den samme som input øverst, så tallet du skriver inn i inputen blir tatt imot her og.
    let input = document.getElementById("input").value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    //constant variablen reversed gjør dette med input informasjonen: den deler opp tallet med split, så endrer vei slik at den står motsatt vei (liksom 123 blir 321)
    //og join setter tallet sammen igjen. dette vil da si at nå er tallet motsatt vei fra det det var før.
    const reversed = input.split("").reverse().join("");

    if (input === reversed) {

        document.getElementById("resultat").innerHTML = "Strengen er et palindrom";
        //i denne if setningen så er resultat det som skriver i p taggen i html filen.
        //og hvis input = reversed, vil dette skrives.

    } else {

        document.getElementById("resultat").innerHTML = "Strengen er ikke et palindrom";
        //men hvis input er annerledes fra reversed, så vil dette skrives. 

    }
}
