// Foi executado o comando 'npm init' no terminal para iniciar um mini-projeto
// Ele cria o arquivo package.json, descreve o objeto e todas as dependencias

// Foi rodado também 'npm i --save axios'.
// --save insere o pacote passado no package.json para ser puxado futuramente.
// --save-dev salva apenas em ambiente de desenvolvimento
// As versões podem ficar no formato "^1.1.0" ou "~1.1.0"
// Quando tem o ^ permite alterar só a versão minor "^1.(essa).0"
// Quando tem o ~ permite alterar somente o fix "~1.0.(essa)"

// Dentro do arquivo package.json foi modificado o valor "main" para "funcionarios.js"
// Foram incluidas duas chaves no script
// "start": "nodemon", // Para iniciar com o nodemon o arquivo dentro de main
// "dev": "nodemon", // ₢riado também para disparar o nodemon quando for chamado
// Basta digitar 'npm i' que o node vai puxar todas as dependências
// Para chamar o 'dev' configurado, deve ser digitado no terminal 'npm run dev'

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


//Desafio de encontrar a mulher chinesa com menor salário
const chineses = f => f.pais === 'China' //função para encontrar o país 'China'
const mulheres = f => f.genero === 'F' //função para encontrar o gênero feminino
const menorSalario = (func, funcAtual) => { //função para retornar o menor salário
    return func.salario < funcAtual.salario ? func : funcAtual
}

let res = []
axios.get(url).then(response => {
    const funcionarios = response.data //captura o valor do response.data
    
    const func = funcionarios //cria o array com dois filtros e um reduce
    .filter(chineses) //aplicando a função criada anteriormente no filter
    .filter(mulheres) //aplicando a função criada anteriormente no filter
    .reduce(menorSalario) //aplicando a função criada anteriormente no reduce

    console.log(func) //imprimindo o resultado
    res = func
})

setInterval(a => console.log(res.salario),2000)