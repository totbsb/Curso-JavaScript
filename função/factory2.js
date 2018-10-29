//Função factory retornando objetos

function criarProduto(nome,preco,desconto = 10) {
   return {
       nome,
       preco,
       desconto: preco * (desconto/100),
       valorFinal: (preco - preco * (desconto/100))}
}

console.log(criarProduto('Geladeira',2,30))

