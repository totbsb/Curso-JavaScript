function Aula(nome, videoID) { //criando uma função de exemplo
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula ('Bem Vindo',123) //usando o comando new
const aula2 = new Aula ('Até Breve',456) //usando o comando new
console.log(aula1,aula2) 

//simulando o new
function novo(f, ...params) {  //passa a função construtura e os parâmetros para a sua criação
    //o comando '...params' gera um array com todos os parâmetros passados após a função 'f'
    const obj = {} //cria o objeto de retorno
    obj.__proto__ = f.prototype //configura o atributo __proto__ desse objeto novo para o prototype da função passada
    //console.log(params)
    f.apply(obj, params) //executa a função 'f', passando o objeto e o array de parâmetros
    return obj //retorna o objeto criado com os parâmetros passados
}

const aula3 = novo(Aula, 'Bem Vindo',123) //usando a nova função criada, 'novo'
const aula4 = novo(Aula, 'Até Breve',456) //usando a nova função criada, 'novo'
console.log(aula3,aula4)