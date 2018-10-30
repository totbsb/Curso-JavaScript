// middleware pattern (chain of responsibility)

// ctx é o contexto a ser passado para a próxima função (next)
const passo1 = (ctx,next) => { 
    ctx.valor = 'mid1' //adiciona automaticamente no objeto 'valor: mid1'
    next() //chama a próxima função
}

const passo2 = (ctx,next) => {
    ctx.valor2 = 'mid2' //adiciona automaticamente no objeto 'valor: mid2'
    next() //chama a próxima função
}

// Não possui um next, somente o contexto. A execução finaliza nele
const passo3 = ctx => ctx.valor3 = 'mid3' //mesma regra dos anteriores

// Função que recebe o contexto e um conjunto de funções middleware
const exec = (ctx, ...middlewares) => { //contexto e array de funções middlewares
    // Responsável por executar conforme o indice passado. 'middlewares[0,1,2....]'
    const execPasso = indice => { 
        middlewares &&  // Verifica se o array é true, ou seja, existe (setado)
        indice < middlewares.length && // verifica se o índice está dentro do array
        // Aqui chama no array de funções de acordo com o índice, 'middlewares[indice]'
        // Na função da vez '[0,1,2...]' é passado o contexto (ctx) e a função 'next'
        // A função next será '() => execPasso(indice + 1)'
        middlewares[indice](ctx, () => execPasso(indice + 1)) //função recursiva, até o final do array
    }
    execPasso(0) //chamando a função desde a primeira função
}

const ctx = {} //criando um objeto vazio
exec(ctx, passo1, passo2, passo3) // Chamando o exec e passando o ctx e um array de funções
//exec(ctx, passo3, passo2, passo1) // Nesse caso a execução para no passo3, por não ter 'next'
console.log(ctx)