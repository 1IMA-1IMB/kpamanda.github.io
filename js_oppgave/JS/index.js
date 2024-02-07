
  
function velgMålenhet() {

const gallons = 3.78541;
const ounces = 0.0295735;
const cups = 0.236288;
const spiseskjeer = 0.0147868;
const input = document.getElementById("input").value;
const measure = document.getElementById("measure");

    if(measure.value == "spiseskjeer"){

        document.getElementById("output").innerHTML = ("det er " + input * spiseskjeer + " liter i " + input + " spiseskje");
    
    } else if (measure.value == "ounces"){
    
        document.getElementById("output").innerHTML = ("det er " + input * ounces + " liter i " + input + " ounces");
    
    } else if (measure.value == "cups"){
    
        document.getElementById("output").innerHTML = ("det er " + input * cups + " liter i " + input + " cups");
    
    } else if (measure.value == "gallons"){
    
        document.getElementById("output").innerHTML = ("det er " + input * gallons + " liter i " + input + " gallons");
    
    }

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
