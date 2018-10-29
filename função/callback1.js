//Evento loop que dispara o evento passado para cada elemento, gerando o callback

const fabricantes = ["Mercedes", "Audi","BMW"]

function imprimir(nome, indice) {  //respeita a ordem retornada pelo callback
    console.log(`${indice + 1}. ${nome}`) //Pega o valor do índice e incrementa
}

//as funções em callback do Array retornam na ordem: 'valor', 'indice', 'array completo'
//chama uma função de callback para cada elemento do array
fabricantes.forEach(imprimir) //chama a função criada acima

fabricantes.forEach(function(fabricante) { //pegando só o atributo 'valor' numa função em callback
    console.log(fabricante) //usando o atributo 'valor'
})

// Exemplo de utilização do atributo 'valor' em uma arrow function
fabricantes.forEach(fabricante => console.log(fabricante))

//Recebendo 'valor', 'índice' e 'array completo' e utilizando numa função declarada diretamente
fabricantes.forEach(function(fabricante2,indice2,a) {
    console.log(fabricante2)
    console.log(indice2)
    console.log(a)
})