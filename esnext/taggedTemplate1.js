// Tagged templates - Fazer uma template string dentro de uma função

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
//usando a função 'tag' ele retornou 'Outra String', linha 6 acima
console.log(tag `${aluno} está ${situacao}.`)

