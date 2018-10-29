// Exemplo de sobrescrever uma variável de mesmo nome em blocos diferentes
var numero = 1
{
    var numero = 2
    console.log('dentro: ',numero)
}
console.log('fora: ', numero)
