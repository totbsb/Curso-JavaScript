// Função factory é uma função que retorna um objeto
/* 
const prod1 = { //instância de um objeto
        nome: '...',
        preco: 45
    }

    const prod2 = { //instância de um objeto
        nome: '...',
        preco: 1234
    }   */  

//Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}    

console.log(criarPessoa())