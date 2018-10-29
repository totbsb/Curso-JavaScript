// Array não é um tipo nativo, na verdade é um objeto internamente
// console.log(typeof Array, typeof new Array ,typeof [])
//Estrutura heterogênea, podendo colocar qualquer dados no array. A boa prática sugere evitar isto

// criação do Array não tão usual
let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

//Forma literal, mais usada, de atribuir a um array
aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0]) //buscando por index
console.log(aprovados[1]) //buscando por index
console.log(aprovados[2]) //buscando por index
console.log(aprovados[3]) //retorna undefined, por não ter no Array

aprovados[3] = 'Paulo'
console.log(aprovados[3]) //agora retorna o item 

aprovados.push('Thiago') //Adicionando elementos no array
console.log(aprovados.length) //retorna o tamanho do array
console.log(aprovados[8] === undefined)

aprovados[9] = 'Rafael' //os valores no intervalo do [4] e [9] ficarão como 'undefined'
console.log(aprovados.length) //comprovando o tamanho do array com 10 itens
console.log(aprovados)

aprovados.sort() //retorna o array de maneira ordenada, mudando o array de fato

console.log(aprovados)

delete aprovados[1] //deleta o valor desta posição, ficando undefined

console.log(aprovados) 

aprovados = ['Bia','Carlos','Ana'] //configurando novamente

// O método splice marca a posição no primeiro valor passado, o segundo é a quantidade a ser retirado
// Se passar mais atributos, este método adiciona os valores passados na posição marcada no primeiro atributo
aprovados.splice (1,1) //O primeiro valor é o índice que deve começar. o segundo é a quantidade a ser retirada
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana'] //configurando novamente

//Posição (1), não deleta ninguém (0), acrescenta os elementos passados e empurra os demais para o final do array
aprovados.splice (1,0, 'Elemento 1', 'Elemento 2')

console.log(aprovados)