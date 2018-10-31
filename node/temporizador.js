// Foi incluido via terminal este pacote 'npm -i node-schedule@1.3.0 -E'
// Módulo para fazer temporizadores, de forma mais rica
// '-E' para ser a versão exata 

const schedule = require('node-schedule') //importando o pacote
// ('55 20 9 31 10 3') (sec,hor,min,dia,mes,diaSemana [0-7] sendo 0 e 7 domingo)
// '*/5' é o mesmo que 'a cada 5 segundos'
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () { // '*' são todos
    console.log('Executando Tarefa 1!', new Date()) // Tarefa a ser executada
})

setTimeout(function () { // Usando o setTimeout
    tarefa1.cancel() // Cancela a função tarefa1
    console.log('Cancelando Tarefa 1!') 
}, 20000)

const regra = new schedule.RecurrenceRule() // Cria uma regra de execução
// Os valores não setados ficam como '*'
regra.dayOfWeek = [new schedule.Range(1,5)] //de segunda a sexta
regra.hour = 9 
regra.second = 10

// Chamando tarefa2 com as regras setadas acima
const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date())
})

// setInterval serve para agendar execução de funções.
// setImmediate é similar ao setTimeout, com temporizador '0'