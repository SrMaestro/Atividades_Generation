import readline from 'readline-sync';


let salario = readline.questionFloat("Digite seu salário: ");
let abono = readline.questionFloat("Digite o abono: ");
let novoSalario = salario + abono


console.log(`Seu novo salário é R$ ${novoSalario.toFixed(2)}`);