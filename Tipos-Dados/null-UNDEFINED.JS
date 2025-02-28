// null e undefined ausencia de valores

//undefined é um valor primitivo que representa a ausência intencional de um valor de variável.
 let nomeEstudante;
 console.log(nomeEstudante);
 console.log(typeof nomeEstudante); // esta variavel é do tipo undefined a variavel existe mas não tem conteudo


 //Tipo null é muito util em cadastros de estudantes, onde o campo telefone pode ser nulo
 let telefoneEstudante = null;
 console.log(telefoneEstudante);
 console.log(typeof telefoneEstudante); // Estou afirmando que esta variavel não tem valor mas tem o campo

 console.log(telefoneEstudante + 3); // o null dentro desta operação matematica se comporta como valor 0
 console.log(nomeEstudante + 3); // o undefined dentro desta operação matematica se comporta como NaN Representa uma operação matematica mal formada
// tipo NaN é um valor primitivo que representa um valor que não é um número.
// NaN é o resultado de operações matemáticas inválidas.
// NaN é uma propriedade do objeto global.
// NaN é do tipo number.
