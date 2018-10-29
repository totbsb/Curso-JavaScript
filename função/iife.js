//IIFE - Immediately Invoked Function Expression

//Principal objetivo é fugir do escopo global
(function() { //Definir a função dentro de parênteses
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})() //No momento da criação ele já chama através do final ()
