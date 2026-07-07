const prompt = require("prompt-sync")();

function verif(i){
    i = Number(prompt("Quantos anos você tem?: "))

    if (i<18) {
        console.log("Menor de Idade")
    }
    else{
        console.log("Maior de Idade")
    }
}
verif()