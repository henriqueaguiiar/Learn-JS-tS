//Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número.
//  Exiba os tipos de dados resultantes no console.

let idade = 25;
console.log(`Idade: ${idade} ${typeof idade}`);
let tamanho = "1.70";
console.log(`Tamanho: ${tamanho} ${typeof tamanho}`);

let idadeConvertida = idade.toString();
let tamanhoConvertido = parseFloat(tamanho);
console.log(`Idade convertida: ${idadeConvertida} ${typeof idadeConvertida}`);
console.log(`Tamanho convertido: ${tamanhoConvertido} ${typeof tamanhoConvertido}`);