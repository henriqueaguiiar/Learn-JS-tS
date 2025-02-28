//Declare uma variável usando var fora de um bloco de código (por exemplo, if) 
// e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e 
// fora dele utilizando console.log e analise os resultados. 
// Faça o mesmo processo utilizando let e compare com os resultados anteriores.


//var idade = 25;
//var maiorIdade = true;

//if(idade >= 18){
   // maiorIdade = true;
   // var nome = "Henrique";
//}

//console.log(nome);
//console.log(maiorIdade);


// ----- Não é possivel acessar a variável nome fora do bloco if, pois ela foi declarada dentro do bloco.
// ----- A variável maiorIdade pode ser acessada fora do bloco if, pois foi declarada fora do bloco if.
let idade = 25;
let maiorIdade = true;

if(idade >= 18){
    maiorIdade = true;
    let nome = "Henrique";
}

console.log(nome);
console.log(maiorIdade);