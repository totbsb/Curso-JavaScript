// Objetivo da Herança é evitar o copiar e colar. Todo objeto filho só tem um único objeto pai
// Sempre que possível, utilize a composição no lugar de herança
// No JavaScript a herança é por protótipo, tendo esse atributo em todos os objetos, podendo este ser null

const  ferrari = {
    modelo: 'F40',
    velMAx: 324
}

const  volvo = {
    modelo: 'V40',
    velMAx: 200
}


// O atributo prototype só está disponível dentro de uma função, no caso a função 'Object'

//Retorna 'undefined' porque o objeto possui um 'atributo' (__proto__) e não um método 'prototype' da função Object
console.log(ferrari.prototype) 
console.log(ferrari.__proto__) //Retorna um objeto vazio
console.log(ferrari.__proto__ === Object.prototype) //__proto__ é o mesmo que Object.prototype

//Todos apontam para o mesmo Object.prototype (padrão), com exceção das funções construtoras criadas pelo usuário
console.log(ferrari.__proto__ === volvo.__proto__)

console.log(Object.prototype.__proto__)

// Função construtora criada pelo usuário
function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(
    //Object.prototype,
    meuObjeto.prototype //retorna 'meuObjeto {}', local onde fica a function criada anteriormente 
    )