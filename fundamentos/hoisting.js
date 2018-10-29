//Só funciona o içamento com a declaração 'var'
console.log('a =', a) //aqui ocorre o hoisting, ou seja, içamento da linha 2 para antes dessa linha
var a = 2 //esta declaração será 'içada' (hoisting)
console.log('a =', a)

//console.log('b =', b) //comentando a linha abaixo, dá erro nesta aqui porque não houve o hoisting
//var b = 2 //esta declaração deveria ser 'içada' (hoisting) se não estivesse comentada
//console.log('b =', b)

console.log('b =', b) //aqui não ocorre o hoisting por ser 'let'
let b = 2 //esta declaração não será 'içada' (hoisting)
console.log('b =', b)