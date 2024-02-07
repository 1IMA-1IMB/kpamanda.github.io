// a)

let sauer = 100;

function tellEnSau() {

    sauer -= 1;

    console.log("du har " + sauer + " sauer igjen å telle før du sovner."); 
}

tellEnSau();


// b)

function tellNoenSauer(antall) {

    sauer = sauer - antall;

    console.log("du har " + sauer + " sauer igjen å telle før du sovner.");
    
}

tellNoenSauer(0);

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

