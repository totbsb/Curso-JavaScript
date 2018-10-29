//criando uma função que retorna um valor aleatório entre dois números passados como array
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //verifica qual é o maior e inverte, se for o caso
    const valor = Math.random() * (max - min) + min //(diferença entre os dois)*Math.random + o minimo, pra ficar no intervalo 
    return Math.floor(valor) //retornar o valor encontrado, arredondando para baixo
}

console.log(rand([50,40])) // Passando dois atributos
console.log(rand([992])) // Passando somente o primeiro atributo. O segundo será o padrão '1000'
console.log(rand([,10])) // Passando somente o segundo atributo. O primeiro será o padrão '0'
console.log(rand([])) // Sem nenhum atributo. O primeiro e o segundo serão padrões.
//console.log(rand()) // Gera erro porque não foi passado o array, mesmo em branco, como atributo da função rand()