// Chamando no terminal node 'nomedoarquivo.js' -a
// Essas funções só funcionam via terminal
// O '-a' é interpretado abaixo
const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo) { // Se passar o '-a'
    process.stdout.write('Fala Anônimo!\n')  // Escreve na tela
    process.exit() // Finaliza o processo
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // Recebe dados do terminal
        const nome = data.toString().replace('\n','') //Configura para imprimir

        process.stdout.write(`Fala ${nome}!!\n`) // Escreve na tela
        process.exit() // Finaliza o processo
    })
}