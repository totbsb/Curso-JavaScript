// Quando é declarado 'var' em blocos, será visível inclusive fora do bloco
// Elas aparecem no objeto 'Window' no console do browser
// A variável só tem dois escopos: Dentro da função ou global (Window do browser)
{ 
    { 
        { 
            { 
                var sera = 'Será???' 
            } 
        } 
    } 
}
console.log(sera)

function teste() {
    var local = 123 //a declaração var nas funções só tem validade dentro do escopo
}

teste()
console.log(local)
