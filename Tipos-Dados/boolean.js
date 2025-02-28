
//Tipo booleano é um tipo de dado que pode ter apenas dois valores: true ou false.
//O tipo booleano é útil para armazenar valores de verdadeiro ou falso.

const estudante = "Henrique";
const estaAprovado = true; //boolean

if(estaAprovado === true){
    console.log(`${estudante} está aprovado!`);
}
else{
    console.log(`${estudante} está reprovado!`);
}

//comparando o valor da variavel estudante com o que esperamos ter dentro. 
if(estudante === "Henrique"){
    console.log(`O estudante é ${estudante}`); //valor true
}else{
    console.log("O estudante não é Henrique"); //valor false
}