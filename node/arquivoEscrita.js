const fs = require('fs') // Importa o módulo de leitura/gravação 

const produto = { // Cria o objeto a ser salvo
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// Primeiro parâmetro é o caminho e o nome do arquivo a ser salvo
// Segundo parâmetro é o conteúdo, no caso foi utilizado o stringify para converter o objeto para JSON
// O terceiro é uma callback que recebe um erro, se existir, e retorna o seu conteudo
fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})