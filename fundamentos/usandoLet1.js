// utilizando let, a variável não sobrescreve o valor declarado anteriormente
// É respeitado o escopo do bloco, diferente de 'var'
var numero = 1
{
    let numero = 2
    console.log('dentro: ',numero)
}
console.log('fora: ',numero)

//Exemplo em que as funções buscam as variáveis do escopo menor para o maior
var numero = 1
{
    let numero2 = 2
    console.log('dentro: ',numero) //vai imprimir do escopo maior
}
console.log('fora: ',numero)