//criando uma função que retorna um valor aleatório entre dois números passados como objetos
function rand({min = 0, max = 1000}) { //recebe como parâmetro um objeto com dois parâmetros, tendo valores padrões, '0' e '1000'
    const valor = Math.random() * (max - min) + min //(diferença entre os dois)*Math.random + o minimo, pra ficar no intervalo 
    console.log(valor)
    return Math.floor(valor) //retornar o valor encontrado, arredondando para baixo
}

const obj = {max: 50, min: 40} //declaração de um objeto
console.log(rand(obj)) //chamando a função rand e passando o objeto declarado na linha anterior
console.log(rand({min:955})) //passando só o valor min, o máximo será o padrão
console.log(rand({})) //Sem passar valores, assume os valores padrões. Se não colocar as {} gera erro

