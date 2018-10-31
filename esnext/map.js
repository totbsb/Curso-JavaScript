const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) //NÃO é dessa maneira que busca a informação
console.log(tecnologias.get('react').framework) // Forma correta, usando o 'get'

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123,'Número']
])

chavesVariadas.forEach((vl, ch) => { //função para pegar a chave e o valor do Map
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //Verificar se tem alguma chave '123'
chavesVariadas.delete(123) //deletar a chave '123'
console.log(chavesVariadas.has(123)) 

console.log(chavesVariadas.size) // Tamanho do Map
// O Map não permite que tenham duas chaves de mesmo valor, sendo que um set sobrescreve o valor atual
chavesVariadas.set(123,'a') //atribuiu 'a' que será sobrescrito na próxima instrução
chavesVariadas.set(123,'b') //sobrescreveu com 'b'
console.log(chavesVariadas)


