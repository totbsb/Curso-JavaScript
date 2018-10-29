const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
    nome: 'Ana',
    nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
    nome: 'Roberto',
    nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota //recebe um array de alunos e devolve a nota destes
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno) //recebe um array de turmas e devolve a nota dos alunos por turma
const notas1 = escola.map(getNotasDaTurma) //Devolve um array com dois arrays, um pra cada turma
console.log(notas1) //Imprime o array com dois arrays, um pra cada turma
console.log([].concat(notas1[0],notas1[1])) //Retorna todos em um só, mas de forma direta (passando as duas turmas explicitamente)


//criando a função flatMap (Não está na API padrão no JavaScript)
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([],this.map(callback)) //array vazio com a junção de todos os valores em um só array
}
const notas2 = escola.flatMap(getNotasDaTurma) //Chama o flatMap para deixar todas as notas em um único array
console.log(notas2)