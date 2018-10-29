//Criando uma função similar ao reduce no prototype do array
Array.prototype.reduce2 = function(callback, valorInicial) { //Passando a função de callback e o valor inicial
    const indiceInicial = valorInicial ? 0 : 1 //usa só o primeiro registro no primeiro loop, se tiver passado algum valor inicial.
    let acumulador = valorInicial || this[0] //Caso não tenha o valor inicial passado, retorna o primeiro elemento do array
    for (let i = indiceInicial; i < this.length; i++) { //Percorre o array
        acumulador = callback(acumulador, this[i],i,this) //atribui a função para a variável acumulador
    }
    return acumulador //retorna o valor acumulado
}

const soma = (total,valor) => total + valor //define a função de callback
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma,21)) //passa a função de callback e um valor inicial