const pai = {
    nome: 'Pedro',
    corDoCabelo: 'preto'
}

const filha1 = Object.create(pai) //cria o objeto já apontando o prototipo para a classe pai

filha1.nome = 'Ana'
console.log(filha1.corDoCabelo) //herdado do atributo pai

//Passando o objeto pai e mudando alguns atributos daquele objeto
const filha2 = Object.create(pai, //primeiro parâmetro é o objeto pai. 
    {    //O segundo é um objeto que define os atributos e as configurações para o atributo criado
        nome: {
            value: 'Bia', writable: false,enumerable: true
        } //, teste:{value: 'a', enumerable: true} só mostraria o atributo 'teste' se deixar explícito enumerable: true
    }
)

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`)

console.log(Object.keys(filha1)) //Não mostra os atributos da classe pai por padrão
console.log(Object.keys(filha2)) //Não mostra os atributos da classe pai

console.log('----------------------------')

for(let key in filha2) {
    filha2.hasOwnProperty (key) ? //Se retorna true, o atributo é do objeto. falso é por herança
        console.log(`Do próprio objeto: ${key}`)  : console.log(`Por herança: ${key}`)
}



