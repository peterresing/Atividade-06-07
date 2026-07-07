const prompt = require("prompt-sync")();

function boasVindas() {
    console.log("\nOlá! Seja bem-vindo ao nosso sistema!")
}

function mostrarData() {
    const hoje = new Date().toLocaleDateString("pt-BR")
    console.log(`\nA data de hoje é: ${hoje} `)
}

function despedida() {
    console.log("\nObrigado por usar nosso sistema")
}

function opcaoInvalida() {
    console.log("\nescolha um número de 1 a 3.")
}

console.log("---- MENU (COM FUNÇÕES) ----")
console.log("1 - Ver mensagem de boas-vindas")
console.log("2 - Ver a data de hoje")
console.log("3 - Ver mensagem de despedida")
console.log("------------------------------------")
const opcao = prompt("Escolha uma opção (1-3): ")
switch (opcao) {
    case "1":
        boasVindas();
        break;
    
    case "2":
        mostrarData();
        break;
    
    case "3":
        despedida();
        break;
    
    default:
        opcaoInvalida();
        break;
}