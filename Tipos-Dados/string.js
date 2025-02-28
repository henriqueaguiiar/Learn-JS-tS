
const estudante = "Henrique";
const docente = "Ana";

//ao usar citação dentro de uma String usamos  "" duplas  para String e '' simples para a citação
const comprimento = "Nosso lema é 'Aprender sempre' ";
console.log(comprimento);


//template String uma forma mais legivel para concatenar Strings veio no ES6
//usamos crase ` ` para template String e ${} para interpolação/VARIAVEL
const mensagem = `Olá, ${estudante}! Seja bem-vindo à plataforma de ensino!`;
console.log(mensagem);

//Exemplos para alterar Strings usando função uppercase
//Lembrando que o JavaScript é case sensitive
const senha = "Senha123" + estudante.toUpperCase();
console.log(senha);