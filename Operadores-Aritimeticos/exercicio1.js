//Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária,
//  depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, 
// considerando a função de cada variável criada anteriormente.Exiba os resultados finais no console.

let saldo = 1000;
let deposito = 500;
let saque = 200;

operacao1 = saldo + deposito;
operacao2 = operacao1 - saque;

console.log(`Saldo: ${saldo}`);// saldo inicial
console.log(`Deposito: ${deposito}`);// valor depositado
console.log(`Saldo final: ${operacao1}`);// saldo com deposito
console.log(`Saque: ${saque}`);// valor sacado
console.log(`Saldo final: ${operacao2}`);// saldo final