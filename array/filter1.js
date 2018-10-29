const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

/* console.log(produtos.filter(function(p) {
    return p.preco > 2500 //Filtro para o array resultante do filter
    //return true  //retorna todos
    //return false não retorna ninguém
})) */

const fragil = produto => produto.fragil //função que retorna produtos frágeis
const caro = produto => produto.preco >= 500 //função que retorna produtos igual ou acima de 500
console.log(produtos.filter(fragil).filter(caro)) //aplicando os dois filtros
