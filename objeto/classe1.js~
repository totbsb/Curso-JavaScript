class Lancamento {
    constructor(nome = 'Genérico', valor = 0) { //cria uma classe com os atributos passados (ou o padrão definido aqui)
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes,ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] //cria um array de lançamentos
    }

    addLancamentos(...lancamentos) { //recebe um ou  vários lançamentos e cria o array 'lancamentos'
         //pega o array recebido na linha anterior e adiciona na variavel do objeto criado, através do 'this'
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        console.log(this.lancamentos)
        let valorConsolidado = 0
        this.lancamentos.forEach (l => { //Percorre o array de lançamentos adicionados com o 'addLancamentos'
            valorConsolidado += l.valor //Soma todos os valores do array
        })
        return valorConsolidado //retorna o valor consolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz',-220)
const contaDeAgua = new Lancamento('Água',-120)
const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario,contaDeLuz,contaDeAgua)
console.log(contas.sumario())