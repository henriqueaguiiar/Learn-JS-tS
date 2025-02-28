//os operadores logicos são utilizados para fazer comparações entre valores e variáveis
//Os operadores lógicos são:
// && - E   
// || - OU
// ! - NÃO
// == - Igual
// != - Diferente
// > - Maior

const notaFinal = 7;
const faltas = 5;


if(notaFinal < 7 || faltas > 4){ //Uso do operador lógico OU || so entra no if se uma das condições for verdadeira
    console.log("Reprovado");
}
else{
    console.log("Aprovado");
}

// ----------------------------------------------

if(notaFinal >= 7 && faltas <= 4){ //Uso do operador lógico E && so entra no if se as duas condições forem verdadeiras
    console.log("Aprovado");
}
else{
    console.log("Reprovado");
}