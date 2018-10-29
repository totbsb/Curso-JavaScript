const [a] = [10] //destructuring em array
console.log(a)

const [n1, ,n3, , n5, n6 = 0] = [10,7,9,8] //atribuindo valores para um array
console.log(n1,n3,n5,n6) //aparece '10 9 undefined 0'. O último aparece '0' por ser padrão na linha anterior.

// Não utilizável por ser de difícil leitura
const[ , [ , nota]] = [ [, 8, 8], [9, 6, 8]] //array dentro de outro array, desestruturando e adicionando na variável 'nota'
console.log(nota) //mostra o segundo elemento do segundo array, no caso '6'