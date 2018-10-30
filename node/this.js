console.log(this === global) //false. 'this' fora da função aponta para module.exports

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)  //false porque 'this' aponta para 'global'
    //console.log(this) // 'this' aponta para global quando está dentro de uma função
}

logThis()