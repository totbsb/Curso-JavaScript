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

// Recurso do ES8
// Objetivo de simplificar o uso de promises, simulando de forma sequencial algo assíncrono
let obterAlunos = async () => { //await só funciona com funções que são marcadas com async
    // Executa de forma paralela e só retorna após todas as conclusões
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta,tb,tc)    
} // Uma função async retorna um objeto AsyncFunction

obterAlunos() // Chama a função acima configurada
    .then(alunos => alunos.map(a => a.nome)) // Filtra só para os nomes
    .then(nomes => console.log(nomes)) // Imprime os nomes