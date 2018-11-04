// Na pasta 'form' foi criado um servidor com 'npm init -y'
// Foram instalados os pacotes express@4.16.3 e body-parser@1.18.2
// npm i --save express@4.16.3 body-parser@1.18.2 -E
// Nesse exemplo, além de deixar o servidor funcionando, foi executado outro comando no terminal
// node server.js para deixar a porta escutando. No caso, porta 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) //Colocar os valores no body da req

//utiliza o método POST e aguarda a requisição na url 'http://localhost:3003/usuarios'
app.post('/usuarios', (req, resp) => { 
//app.get('/usuarios', (req, resp) => { //os dados vão pela url, e o objeto muda de req.body para req.query    
    console.log(req.body)
    //console.log(req.query) //Utilizado com o método GET
    resp.send('<h1>Parabéns</h1>') //Retorna o texto após conclusão da requisição 
})

//utiliza o método POST e aguarda a requisição na url 'http://localhost:3003/usuarios/:id'
app.post('/usuarios/:id', (req, resp) => { 
    console.log(req.params.id)
    console.log(req.body)
    resp.send(`<h1>Parabéns ${req.body.nome}! Alterado com sucesso!</h1>`) //Retorna o texto após conclusão da requisição 
})

app.listen(3003) //Fica escutando a porta especificada