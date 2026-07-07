const prompt = require("prompt-sync")();

function saudacao(nome){
nome = prompt("Qual o seu nome?: ")
console.log(`Olá ${nome} seja bem Vindo`)
}
saudacao()