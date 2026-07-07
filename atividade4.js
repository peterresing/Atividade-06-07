const prompt = require("prompt-sync")();

console.log("---- MENU ----")
console.log("1 - Ver mensagem de boas-vindas")
console.log("2 - Ver a data de hoje")
console.log("3 - Ver mensagem de despedida")
console.log("----------------------")
const opcao = prompt("Escolha uma opção (1-3): ")

switch (opcao) {
    case "1":
        console.log("\nOlá! Seja bem-vindo ao nosso sistema")
    
    case "2":
        const hoje = new Date().toLocaleDateString("pt-BR");
        console.log(`\nA data de hoje é: ${hoje} `)
        break;
    
    case "3":
        console.log("\nObrigado por usar nosso sistema")
        break

    default:
        console.log("\nescolha um número de 1 a 3.")
        break
}