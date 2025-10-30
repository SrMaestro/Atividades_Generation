import readline from 'readline-sync';

let salarioBruto = readline.questionFloat("Digite o salario: "); 
let adicionalNoturno = readline.questionFloat("Digite adicional noturno : "); 
let horasExtra = readline.questionFloat("Digite horas extras: "); 
let desconto = readline.questionFloat("Digite o desconto: "); 

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtra * 5) - desconto

console.log(`Seu salario bruto e igual a ${salarioBruto}`)