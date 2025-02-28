const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3; // parseInt converte string para número inteiro

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if(media >= 7){
    media += media * 0.1;
}

console.log(`A Média é : ${total.toFixed(2)}`); //toFixed(2) arredonda para 2 casas decimais
