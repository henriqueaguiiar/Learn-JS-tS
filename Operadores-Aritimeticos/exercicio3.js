//Considere uma situação em que você está verificando se um usuário está logado e 
// tem permissão de administrador para acessar determinada funcionalidade. 
// Utilize variáveis booleanas para simular essas condições e use o operador AND
//  para verificar se ambas são verdadeiras.

let usuarioLogado = true;
let permissaoAdmin = true;

if(usuarioLogado === true && permissaoAdmin === true){
    console.log("Usuário logado e com permissão de administrador");

}
else if(usuarioLogado === true && permissaoAdmin === false){
    console.log("Usuário logado, mas não tem permissão de administrador");
    
}
else if(usuarioLogado === false && permissaoAdmin === true){
    console.log("Usuário não está logado, mas tem permissão de administrador");
}
else{
    console.log("Usuário não está logado e não tem permissão de administrador");
}