function konvertering() {
    const gallon = 3.78541178;
    const ounces = 0.035274;
    const cups = 0.236588;
    const spiseskjeer = 0.0147868;
    const liter = 1;

    const input = parseFloat(document.getElementById("input").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    let output;

    switch (from) {
        case "gallon":
            output = input * gallon;
            break;
        case "ounces":
            output = input * ounces;
            break;
        case "cups":
            output = input * cups;
            break;
        case "spiseskjeer":
            output = input * spiseskjeer;
            break;
        case "liter":
            output = input * liter;
            break;
        default:
            output = input;
    }

    switch (to) {
        case "gallon":
            output /= gallon;
            break;
        case "ounces":
            output /= ounces;
            break;
        case "cups":
            output /= cups;
            break;
        case "spiseskjeer":
            output /= spiseskjeer;
            break;
        case "liter":
            output /= liter;
            break;
        default:
            output = input;
    }

    document.getElementById("output").innerText = "Konvertert verdi: " + output.toFixed(2);
}

const panildrom = input;
const endret = palindrom.split("").reverse().join("")
if (palindrom == endret){
    console.log("palindrom")
    //skal endres på en p tag hvis det er riktig
} else {
    console.log("ikke palindrom")
    //skal endres på en p tag hvis det er feil
}



//   function literTilOunces(valueNum) {
//     document.getElementById("outputLeters").innerHTML=valueNum/33.814;
//   }


//   function maddeforstaarikkjejs() {
//     const Gallons = 3.78541;
//     const Ounces = 0.0295735;
//     const Cups = 0.236588;
//     const Spiseskjeer = 0.0147868;
//     const input = document.getElementById("mInput").value;
//     const measure = document.getElementById("measure");
//     if(measure.value == "Spiseskjeer"){
//         document.getElementById("output").innerHTML = input/Spiseskjeer
//     }else if(measure.value == "Ounces"){
//         document.getElementById("output").innerHTML = input/Ounces
//     }else if(measure.value == "Cups"){
//         document.getElementById("output").innerHTML = input/Cups
//     }else if(measure.value == "Gallons"){
//         document.getElementById("output").innerHTML = input/Gallons
//     }
