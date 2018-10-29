// Closure é o escopo criado quando uma função é declarada
// Permite acessar e manipular as variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro () {
        return x  //Pelo conceito de closure, sempre vai apontar para a variável do seu contexto léxico, no caso 'Local'
    }
    return dentro //Retorna a função 'dentro()' quando chamada
}

const minhaFuncao = fora() 
console.log(minhaFuncao()) //Mesmo sendo chamada fora, o X retornado é o do escopo da função 'fora'