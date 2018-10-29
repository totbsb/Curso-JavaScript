const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2},
]


//Abordagem imperativa para pegar a média dos alunos.
// Preocupação com o 'como' deve ser feito, de difícil reuso futuro
let total1 = 0 //declarando a variável de total
for (var i=0; i < alunos.length; i++) { //início do laço
    total1 += alunos[i].nota //somando as notas
}
console.log(total1 / alunos.length) //imprimir a média dos alunos

//Abordagem declarativa para pegar a média dos alunos
//Preocupação com o 'que' deve ser feito. Possibilidade de reuso posterior
const getNota = aluno => aluno.nota //função para pegar as notas dos alunos, podendo ser utilizada em outros lugares
const soma = (total, atual) => total + atual //função para somar as notas dos alunos, podendo ser utilizada em outros lugares
const total2 = alunos.map(getNota).reduce(soma) //map e reduce utilizando as duas funções anteriores
console.log(total2 / alunos.length) //imprimir a média dos alunos

//SQL e html são exemplos de linguagens declarativas, como abaixo:s
// select codigo, nome, email from clientes where ativo = 1