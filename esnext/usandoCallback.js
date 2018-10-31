//Utilizando sem promise, usando callbacks
// Não foi usado axios porque não é o intuito (Não teria desafio), mas seria o ideal

const http = require('http') // adicionando o módulo http interno do node

// Recebe a letra para usar na url
// Recebe uma callback que será chamada quando o json estiver carregado
const getTurma = (letra,callback) => { 
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` //url do Json
    http.get(url, res => { //função callback que retorna uma string de dados, de forma parcial
        let resultado = ''

        res.on('data', dados => { // Interceptar a recepção dos dados
            resultado += dados // Concatena os dados quando chegar por completo 
        })
    
        // Quando finalizar a chegada dos dados, será recebido o 'end'
        res.on('end', () => {
            // Converter o objeto para JSON e passa para a função de callback de getTurma
            callback(JSON.parse(resultado)) // Converter o objeto para JSON,
        })
    })
}

let nomes = [] // Array para guardar todos os registros

//callback hell
getTurma('A', alunos => { // 
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) //Buscando os alunos da turma A e concatenando no array
    //console.log(nomes)
    //Passando a callback getTurmaB para A
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`)) //Buscando os alunos da turma B e concatenando no array
        //console.log(nomes)
        //Passando a callback getTurmaC para B
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`)) //Buscando os alunos da turma C e concatenando no array
            console.log(nomes)
        })
    })
})