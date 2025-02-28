
// o operador ternario tem a seguinte sintaxe
// condicao ? valor1 : valor2
// se a condição for verdadeira retorna valor1 se for falsa retorna valor2
// exemplo:
const valor = 50;
const texto = valor < 50 ? 'valor insuficiente' : 'valor suficiente';
console.log(texto); // retorna ‘valor suficiente’

//valor ternario é usado para substituir o if else em casos simples como o exemplo acima
//o operador ternario é muito utilizado em frameworks como React e Angular

let matriculaAtiva = true;

function verificaMatriculaAtiva() {
 if (matriculaAtiva === true) {
   return 'matrícula ativa no sistema';
 } else {
   return 'matrícula não está ativa';
 }
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'

//----------------------------------------
// mesma verificação usando operador ternario
let matriculaAtiva2 = true;

function verificaMatriculaAtiva() {
 return matriculaAtiva2 === true ? 'matrícula ativa no sistema' : 'matrícula não está ativa';
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'