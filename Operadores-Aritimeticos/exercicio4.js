//Declare duas variáveis booleanas e use o 
// operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.


let usuarioLogado = false;
let permissaoAdmin = true;

if(usuarioLogado === true || permissaoAdmin === true){
    console.log("Usuário logado ou com permissão de administrador");
}
else{
    console.log("Usuário não está logado e não tem permissão de administrador");
}