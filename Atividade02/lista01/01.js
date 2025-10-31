import readline from 'readline-sync';


let aValue = readline.questionInt("Digite o valor de A: ");
let bValue = readline.questionInt("Digite o valor de B: ");
let cValue = readline.questionInt("Digite o valor de C: ");

if ((aValue + bValue) > cValue) {
    console.log(" A Soma de A + B é Maior do que C");
}

if ((aValue + bValue) < cValue) {
    console.log("A Soma de A + B é Menor do que C");
}

if ((aValue + bValue) === cValue) {
    console.log("A Soma de A + B é igual do que C");
    
}

