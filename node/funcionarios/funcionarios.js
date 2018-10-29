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