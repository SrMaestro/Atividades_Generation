import readline from 'readline-sync';

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = readline.questionInt("Digite o número que deseja: ");
let encontrado = false;
let posicao;

for (let i = 0; i < vetor.length; i++) {
    if (numero === vetor[i]) {
        posicao = i;
        encontrado = true;
        break; 
    }
}

if (encontrado) {
    console.log(` O número ${numero} está na posição ${posicao}.`);
} else {
    console.log(`O número ${numero} não foi encontrado.`);
}


