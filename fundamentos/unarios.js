let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //retorna verdadeiro porque ele só usa o (--) depois que compara ('===')
console.log(num1 === num2) //Aqui ele retornará falso porque num2 já foi reduzido na linha anterior