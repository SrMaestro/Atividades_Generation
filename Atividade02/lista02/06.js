import readline from 'readline-sync';

let nomeColaborador = readline.question("Digite o nome do colaborador: ");
let codicoDoCargo = readline.questionInt("Digite o Código do Cargo do Colaborador (número inteiro entre 1 e 6):");
let salario = readline.questionFloat("Digite o salário:");

let nomeCargo = "";
let novoSalario = 0;

switch (codicoDoCargo) {
    case 1:
        nomeCargo = "Gerente";
        novoSalario = salario * 1.10;
        break;
    case 2:
        nomeCargo = "Vendedor";
        novoSalario = salario * 1.07;
        break;
    case 3:
        nomeCargo = "Supervisor";
        novoSalario = salario * 1.09;
        break;
    case 4:
        nomeCargo = "Motorista";
        novoSalario = salario * 1.06;
        break;
    case 5:
        nomeCargo = "Estoquista";
        novoSalario = salario * 1.05;
        break;
    case 6:
        nomeCargo = "Técnico";
        novoSalario = salario * 1.08;
        break;
    default:
        console.log("Código de cargo inválido.");
} 

console.log(`\nNome do colaborador: ${nomeColaborador}`);
console.log(`Cargo: ${nomeCargo}`);
console.log(`Salário ajustado: R$ ${novoSalario.toFixed(2)}`);