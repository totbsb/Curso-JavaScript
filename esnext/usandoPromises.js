//Utilizando sem promise, usando callbacks
// Não foi usado axios porque não é o intuito, mas seria o ideal

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    //Retorna uma Promise que executa o resolve (Dando certo) ou reject (Dando errado)
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
        
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado)) //Após a leitura de todo o JSON, chama o resolve
                } catch (e) {
                    reject(e) // Chamado caso dê erro
                }
            })
        })
    })
}

let nomes = []

//callback hell
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//         //console.log(nomes)
//         getTurma('B').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//                 //console.log(nomes)
//                 getTurma('C').then(alunos => {
//                     nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//                         console.log(nomes)
//                 })
//         })
// })

Promise.all([getTurma('A'),getTurma('B'),getTurma('C')]) //Fica esperando a solução das Promises
.then(turmas => [].concat(...turmas)) //Cria um único array com os três arrays recebidos
.then(alunos => alunos.map(aluno => aluno.nome)) // Filtra só o nome dos alunos
.then(nomes => console.log(nomes)) //Imprime o nome de todos
.catch(e => console.log("Deu ruim! ",e.message)) // Caso dê erro, cairá nesta opção

//.then(x => console.log(x))
//getTurma('D').catch(e => console.log(e.message))

