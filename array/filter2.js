Array.prototype.filter2 = function(callback) { //Criando um novo filter, como aprendizagem
    const newArray = [] //cria um novo array
    for (i in this) { //percorre o array
    //faz o teste com a função de callback. True adiciona, falso passa para o próximo da lista
        if(callback(this[i], i, this)) { 
            newArray.push(this[i])
        }
    }
    return newArray
    
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]


const caro = produto => produto.preco >= 500 //função que retorna produtos igual ou acima de 500
const fragil2 = produto => produto.fragil //função que retorna produtos frágeis
//console.log(produtos.filter2(caro).filter2(fragil)) //aplicando os dois filtros

console.log('----------------------')
//Retorna os filtros criados de forma personalizada (não recomendado por ser no prototype do Array
console.log(produtos.filter2(f => f.preco < 500).filter2(f2 => f2.fragil == false))
console.log('----------------------')
