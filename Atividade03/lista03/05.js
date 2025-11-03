import readline, { question } from 'readline-sync';


let continuar = true;
let soma = 0

do {
    let numero = readline.questionInt("Digite um numero : ")

    if (numero > 0) {
        soma += numero
    }
    if (numero === 0) {
        continuar = false;
    }

} while (continuar);

console.log(`A soma dos números positivos é: ${soma}`);
