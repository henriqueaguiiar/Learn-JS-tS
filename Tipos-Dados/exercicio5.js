//Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase,
//  slice ou outros, para modificar a string original. Exiba os resultados finais no console.

let frase = "O rato roeu a roupa do rei de Roma";
console.log(`Frase Original: ${frase}`);

console.log(`Frase Maiuscula: ${frase.toUpperCase()}`);//converte a string para maiúsculas
console.log(`Frase Minuscula: ${frase.toLowerCase()}`);//converte a string para minúsculas
console.log(`Frase Slice: ${frase.slice(2, 10)}`); //exibe os caracteres entre a posição 2 e 10
console.log(`Frase Replace: ${frase.replace("Roma", "Brasil")}`); //substitui a palavra Roma por Brasil