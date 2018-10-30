//Necessário para ler arquivos do sistema, no caso "arquivo.json"
const fs = require('fs') //Módulo responsável por ler e escrever arquivos e diretórios

const caminho = __dirname + '/arquivo.json' // Definindo o caminho do arquivo

// Fazendo a leitura de forma síncrona
const conteudo = fs.readFileSync(caminho, 'utf-8') // Leitura síncrona passa o arquivo e a codificação
console.log(conteudo)

// Fazendo a leitura de forma assíncrona
// Tem uma função de callback que recebe o erro e o conteudo
fs.readFile(caminho, 'utf-8', (err, conteudo) => { 
    const config = JSON.parse(conteudo) // Convertendo o JSON em Objeto
    console.log("Existem erros: ",err) // Se tiver erro na leitura aparece nesta variável
    console.log(`${config.db.host}:${config.db.port}`)
}) 

// O require já retorna um Json convertido para objeto, de forma síncrona
const config2 = require('./arquivo.json')
console.log(config2.db.host,":",config2.db.port) //mesmo resultado da leitura assíncrona

// Função para ler todos os arquivos de uma pasta
// O primeiro atributo foi o '__dirname', que é o diretório atual
// A callback recebe os erros gerados e um array com a lista de arquivos
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos) //Passando os arquivos para a impressão
})