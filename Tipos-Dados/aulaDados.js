
//Todos os números em JavaScript são do tipo Number, que é um tipo de dado primitivo.
//Os números podem ser inteiros ou decimais.
//Os números inteiros são números sem uma parte decimal.
//Os números decimais são números com uma parte decimal.
//Os números decimais são chamados de números de ponto flutuante.
// Quando é realizado uma expressão amtematica de um numero com uma string o resultado é NaN (Not a Number) 
// Exemplo: console.log(5 * 'a'); // NaN

const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number.parseInt("5"); // parseInt converte string para número inteiro

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

console.log(`Média: ${total.toFixed(2)}`); //toFixed(2) arredonda para 2 casas decimais
