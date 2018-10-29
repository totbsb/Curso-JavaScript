const alunos = [
    { nome: 'João',  nota: 7.3, bolsista: true},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: true},
    { nome: 'Ana',   nota: 8.7, bolsista: true}
]

//Desafio 1: Todos os alunos são bolsistas?
bolsista = b => b.bolsista //Função para retornar somente os atributos 'bolsista'
allBolsista = (acumulador, inicial) => acumulador && inicial //função pra verificar todos bolsistas
const todosBolsistas = alunos.map(bolsista).reduce(allBolsista) //reduce com as duas funções acima
//Formatar string para informar se todos os alunos são bolsistas
const todos = (todosBolsistas) ? "sim" : "não"
console.log(`Todos os alunos são bolsistas: ${todos}`) 

//Desafio 2: Algum aluno é bolsista?
anyBolsista = (acumulador, inicial) => acumulador || inicial
//usando a função da linha 9 e o reduce com a função da linha 17
const algumBolsista = alunos.map(bolsista).reduce(anyBolsista) 
//Formatar string para informar se algum aluno é bolsista
const algum = (algumBolsista) ? "E" : "Não e"
console.log(`${algum}xistem bolsistas`) 