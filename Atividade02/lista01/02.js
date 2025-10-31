import readline from 'readline-sync';


let number = readline.questionInt("Digite um numero: ");

if (number === 0) {
  console.log(`O número ${number} é par e igual a zero.`);
}

if (number % 2 === 0 && number > 0) {
  console.log(`O número ${number} é par e positivo!`);
}

if (number % 2 === 0 && number < 0) {
  console.log(`O número ${number} é par e negativo!`);
}

if (number % 2 !== 0 && number > 0) {
  console.log(`O número ${number} é ímpar e positivo!`);
}

if (number % 2 !== 0 && number < 0) {
  console.log(`O número ${number} é ímpar e negativo!`);
}
