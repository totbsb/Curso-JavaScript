//criar um novo Array com as notas menores que 7 utilizando callback

const notas =[7.7,6.5,5.2,8.9,3.6,7.1,9.0]

//Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com callback utilizando o filter
const notasBaixas2 = notas.filter(function (nota) { //filtrar os elementos de um array com base numa função de callback
 return nota < 7
}) 
console.log(notasBaixas2)

//Callback utilizando o filter, com uma arrow function
const notasBaixas3 = notas.filter(nota => nota < 7) //passa o array e a condição
console.log(notasBaixas3)

//Callback utilizando o filter, com uma arrow function e uma variável
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7) //passa a função que está numa variável
console.log(notasBaixas4)