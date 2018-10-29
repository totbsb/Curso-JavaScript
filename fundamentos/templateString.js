//Template String
// Pode ter quebra de linha
const nome = 'Alessa'
const concatenacao = 'Olá ' + nome + '!'


// Colocar uma crase para declarar uma template String
/*Considera todos os espaços, saindo assim:
    Olá
    Alessa! */
// aqui foi passada uma variável para o template string com ${nome}
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// aqui foi passada uma expressão matemática para o template string com ${1+1}
console.log(`1 + 1 = ${1+1}`)

// Arrow functions e exemplo de como chamá-las nos templates Strings, como exemplo o ${up('cuidado')}
const up = texto => texto.toUpperCase()
console.log(`Ei.... ${up('cuidado')}!`)




