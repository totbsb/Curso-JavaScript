const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

//console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a =>a.nota). //Pegar somente as notas e joga em um novo array (Map)
    // O reduce tem 'for' implícito, executa a função callback nas interações, com 'acumulador'
    //O reduce recebe uma função de callback e um valor inicial como parâmetros
    // Essa função de callback tem quatro argumentos. O primeiro é o acumulador de cada interação
    // Os demais seguem a regra do callback, 'valor atual', 'indice' e 'array completo', nesta ordem
    reduce(function(acumulador, atual) { //'acumulador' é passado de uma para outra interação. atual é cada item no loop
    //console.log(acumulador, atual)
    return acumulador + atual // Informação enviada para a próxima interação do loop como 'acumulador'
    },
    0) //O segundo argumento desta função é o valor a ser iniciado. Como padrão é '0'

console.log(resultado)