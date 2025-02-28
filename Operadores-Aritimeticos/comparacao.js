// Código omitido. 


if ("0" == 0) {// comparação de valor com dois iguais Compara apenas o conteudo
    console.log('Passou na comparação');
  } else {
    console.log('Não passou na comparação');
  }

  if ("0" === 0) {// comparação de valor com dois iguais mas tambem compara o tipo
    console.log('Passou na comparação');
  } else {
    console.log('Não passou na comparação');
  }

  //por boas praticas sempre usar o === para comparação de valores e tipos foi introduzido no ES6