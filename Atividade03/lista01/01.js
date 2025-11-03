import readline from 'readline-sync';



let n1 = readline.questionInt("Digite um numero: ");
let n2 = readline.questionInt("Digite outr0 numero: ");


if (n1 < n2 && n1 > 0 && n2> 0 ) {
    for (let i  = n1; i  < n2; i ++) {
        if (i% 3 === 0 && i % 5 === 0) {
            console.log(`${i} e multiplo por 3  e 5`);
            
        }
    }
}else {
    console.log("intervalo é inválido ");
    
}