import readline from 'readline-sync';

let nota1 = readline.questionFloat("Digite no n1: "); 
let nota2 = readline.questionFloat("Digite no n2: ");
let nota3 = readline.questionFloat("Digite no n3: ");
let nota4 = readline.questionFloat("Digite no n4: ");

let media =  (nota1 + nota2 + nota3 + nota4) / 4 ;

console.log(`Sua media e ${media}`)
