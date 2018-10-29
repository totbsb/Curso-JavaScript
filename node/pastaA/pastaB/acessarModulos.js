const moduloA = require('../../moduloa') //foi colocado 'moduloa', sem 'A'. Windows e MAC, ok. Linux não roda
const moduloB = require('D:/Projetos JavaScript/node/moduloB') // Utilizando caminho absoluto. Não recomendado

console.log(moduloA.ola)

//Criando uma pasta 'saudacao' dentro da pasta 'node_modules', com um 'index.js' (não recomendado)
//console.log(saudacao.ola) //acessando o atributo ola do index.js na pasta 'saudacao'

const c = require('./PastaC') //não precisa colocar o 'index.js' para importar
console.log(c.ola2)


//Importando módulos que já existem no Node
//o http pode ser visto pelo browser
const http = require('http') //modulo interno do Node
http.createServer((req, res) => { //cria um servidor com uma callback que possui requisição e resposta
    res.write('Bom dia!') //Escreve o texto no browser
    res.end() //Finaliza a resposta
}).listen(8080) //acessa através da porta 8080