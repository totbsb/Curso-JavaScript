//Map é utilizado para transformar um array em outro, ocorrendo uma transformação
//O array inicial e o final devem ter o mesmo tamanho

const nums = [1,2,3,4,5]
//Gerar um array com o dobro utilizando o MAP

let resultado = nums.map(function(e) { //função de callback com os três argumentos: valores, indice e array completo
    return e * 2 //retorna o dobro dos valores. return é obrigatório por não ser função arrow
})

//console.log(resultado)

resultado2 = resultado.map(valor => valor*2) //Mesma função, com o retorno implícito da função arrow

console.log(nums) //array original não é modificado pelo 'map'
console.log(resultado) //array resultado do primeiro map, com uma função callback com return
console.log(resultado2) //array resultado do segundo map, fruto de uma arrow function de callback

const soma10 = e => e + 10 //função de callback para aumentar '10'
const triplo = e => e * 3 //função de callback para triplicar
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` //transformar em visualização monetária

resultado = nums.map(soma10). //executa a primeira callback
map(triplo). //executa a segunda callback em cima da primeira
map(paraDinheiro) //executa a terceira callback em cima da segunda

console.log(resultado) //Imprime o novo array com o resultado dos maps sucessivos
