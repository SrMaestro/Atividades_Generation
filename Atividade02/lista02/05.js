import readline from 'readline-sync';
let valueProduct;

let codicoDoItem = readline.questionInt("Digite um numero entre 1 e 6: ");
let quantidade = readline.questionInt("Digite a quantidade :");


switch (codicoDoItem) {
    case 1:
        valueProduct = 10.00
        console.log(`Cachorro Quente`);
        console.log(`Valor Total: R$${(valueProduct * quantidade).toFixed(2)}`);
        break;
    case 2:
        valueProduct = 15.00
        console.log(`Produto: X-Salada`);
        console.log(`Valor Total: R$${(valueProduct * quantidade).toFixed(2)}`);
        break;
    case 3:
        valueProduct = 18.00
        console.log(`X-Bacon`);
        console.log(`Valor Total: R$${(valueProduct * quantidade).toFixed(2)}`);
        break;
    case 4:
        valueProduct = 12.00
        console.log(`Bauru`);
        console.log(`Valor Total: R$${(valueProduct * quantidade).toFixed(2)}`);
        break;
    case 5:
        valueProduct = 8.00
        console.log(`Refrigerante`);
        console.log(`Valor Total: R$${(valueProduct * quantidade).toFixed(2)}`);
        break;
    case 4:
        valueProduct = 13.00
        console.log(`Suco de laranja`);
        console.log(`Valor Total: R$${(valueProduct * quantidade).toFixed(2)}`);
        break;
    default:
        console.log("Pedido Invalido");

}
