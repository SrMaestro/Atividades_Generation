import readline from 'readline-sync';

let impar = 0;
let par = 0;
let numero;

for (let i = 0; i < 10; i++) {
    numero = readline.questionInt("Entre com um número: ");

    if (numero % 2 === 0) {
        par++;
    } else {
        impar++;
    }
}

console.log(`\nTotal de números pares: ${par}`);
console.log(`Total de números ímpares: ${impar}`);