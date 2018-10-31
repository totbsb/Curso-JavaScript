// Operador ... rest (juntar) / spread (espalhar)
// usar rest com parâmetro de função

//Usando spread com objeto
const funcionario = { nome: 'Maria', salario: 2433.34} //definindo um objeto
 //criando um objeto clone e adicionando uma variável 'ativo' e o objeto funcionário
const clone = {ativo: true, ...funcionario} // Efetuando o 'spread' (espalhando) do objeto funcionario
console.log(clone) //

//Usando spread com Array
const grupoA = ['João', 'Pedro','Gloria'] // Definindo o array
const grupoFinal =['Maria',...grupoA, 'Rafaela'] //Efetuando o 'spread' com adição de dois elementos
// A ordem do '...grupoA' interfere nos índices do array 'grupoFinal'.
console.log(grupoFinal)
