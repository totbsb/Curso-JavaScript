const a = 1
const b = 2
const c = 3

const obj1 = {a: a,b: b,c: c}
//Melhoria para a criação do objeto, evitando a duplicidade anterior
const obj2 = {a,b,c}
console.log(obj1)
console.log(obj2)


const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr //Coloca entre colchetes o nome do atributo e passa o valor
console.log(obj3)

//nova forma para o caso acima, obj3
const obj4 = {[nomeAttr]: valorAttr} 
console.log(obj4)


const obj5 = {
    funcao1: function() { //Como era definida função anteriormente, de maneira tradicional
        // ....
    },
    funcao2() { //Como funciona hoje. Não é necessário colocar a palavra 'function'
        // .....
    }
}
console.log(obj5)