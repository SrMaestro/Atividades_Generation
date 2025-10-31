import readline from 'readline-sync';

let nomeDoador = readline.question("Digite o nome do doador: ");
let idadeDoador = readline.questionInt("Digite a idade do doador: ");
let primeiraDoacao = readline.question("Primeira doação de sangue? (true/false): ").toLowerCase() === "false";


if (idadeDoador >= 18 && idadeDoador <= 69) {
    
    
    if (idadeDoador >= 60 && idadeDoador <= 69 && !primeiraDoacao) {
        console.log(`${nomeDoador} não está apto para doar sangue.`);
    }

    
    if (idadeDoador >= 60 && idadeDoador <= 69 && primeiraDoacao) {
        console.log(`${nomeDoador} está apto para doar sangue.`);
    }


    if (idadeDoador < 60) {
        console.log(`${nomeDoador} está apto para doar sangue.`);
    }

} 


if (idadeDoador < 18 || idadeDoador > 69) {
    console.log(`${nomeDoador} não está apto para doar sangue.`);
}