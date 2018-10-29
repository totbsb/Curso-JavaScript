const pessoa = {
    saudacao: 'Bom dia',
    falar() { //incluindo uma função direto no objeto, sem necessidade de uma chave
        console.log(this.saudacao) //this equivale a pessoa, nesse caso
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Não encontra o 'this' do objeto pessoa. Conflito entre paradigmas: funcional e OO

//bind serve para explicitar o 'this' que será utilizado
const falarDePessoa = pessoa.falar.bind(pessoa) //Retorna uma função sem alterar o anterior
falarDePessoa() //chama a função retornada

