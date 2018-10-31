// Foi utilizado no terminal o comadno 'npm init -y'
// Foi instalado o 'npm i --save express@4.16.2 -E'
// Foi instalado o 'npm i --save body-parser'

// Necessário para saber a porta que a aplicação vai utilizar
// Duas aplicações não podem rodar na mesma porta ao mesmo tempo
const porta = 3003 //porta padrão é 80. Porta = processo


const express = require('express') //importando o express
const app = express() //Instanciando o express
const bodyParser = require('body-parser') // usado para converter os dados enviados por 'post'
const bancoDeDados = require('./bancoDeDados') //Importando o arquivo do nosso banco

app.use(bodyParser.urlencoded({extended: true})) //Todas as requisições devem ter esta conversão

//'App.use' executa em qualquer requisição, quando retirada o primeiro atributo
//localhost:porta/'qualquercoisa'
// app.use((req, res, next) => { 
//     res.send({nome: 'Eu apareço em qualquer requisição', preco: 123.45})
//     next()
// })


// app.get('/produtos', (req, res, next) => { 
//     console.log('Middleware 1...')
//     next() // Se não colocar o next(), vai parar aqui a requisição
// })


// 'get' é uma forma de requisição, passando um padrão middleware
// para requisição 'post' basta mudar o 'get' abaixo
app.get('/produtos', (req, res, next) => { 
    // buscando todos os produtos
    res.send(bancoDeDados.getProdutos()) //Pegando a função do módulo bancoDeDados
    // Usando só a resposta, res
    //res.send({nome: 'Notebook', preco: 123.45}) // Converte automaticamente para JSON
})

// Buscando pelo id do produto
// Exemplo: '/produtos/:id/:nome' aqui são dois parâmetros, um id e um nome  
app.get('/produtos/:id',(req, res, next) => {
    //req.params.id é o valor passado na requisição, no lugar de ':id'
    res.send(bancoDeDados.getProduto(req.params.id)) //Pegando a função do módulo bancoDeDados
})

app.post('/produtos', (req,res, next) => {
    const produto = bancoDeDados.salvarProduto({ //Pegando a função do módulo bancoDeDados
        nome: req.body.nome, //Forma de pegar o que está na requisição post
        preco: req.body.preco //Forma de pegar o que está na requisição post
    })
    res.send(produto) //Devolvendo o produto em JSON
})

app.put('/produtos/:id', (req,res, next) => {
    const produto = bancoDeDados.salvarProduto({ //Pegando a função do módulo bancoDeDados
        id: req.params.id, //Forma de pegar o que está na requisição put
        nome: req.body.nome, //Forma de pegar o que está na requisição put
        preco: req.body.preco //Forma de pegar o que está na requisição put
    })
    res.send(produto) //Devolvendo o produto em JSON
})

app.delete('/produtos/:id', (req,res, next) => {
    const produto = bancoDeDados.excluirProduto( //Pegando a função do módulo bancoDeDados
    req.params.id //Forma de pegar o que está na requisição
    )
    res.send(produto) //Devolvendo o produto em JSON
})

app.listen(porta, () => { //Passa a porta e a função a ser executada
    console.log(`Servidor executando na porta ${porta}.`) // Mensagem de verificação da conexão
})
