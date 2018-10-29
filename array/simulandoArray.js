const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}

console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', { //define uma propriedade para retornar os valores 
    value: function() { return Object.values(this)}, //Retorna como array
    enumerable: false
})
console.log(quaseArray[0])

const meuArray = ['Rafael','Ana','Bia']
console.log(quaseArray.toString(), meuArray)