import readline from 'readline-sync';

let n1 = readline.questionFloat("Digite no n1: "); 
let n2 = readline.questionFloat("Digite no n2: ");
let n3 = readline.questionFloat("Digite no n3: ");
let n4 = readline.questionFloat("Digite no n4: ");

let calculo =  (n1 * n2) - (n3 * n4)

console.log(`RESULTADO :  ${calculo}`)
