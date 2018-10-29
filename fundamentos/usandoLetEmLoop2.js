const funcs = []

for(let i = 0; i < 10; i++) { //utilizando o let
    funcs.push(function() { //Aqui podemos armazenar uma função anonima no array
        console.log(i)
    })
}

//Importando o valor passado, vai aparecer o valor correspondente de i, por usar 'let'
funcs[2]() //aparece o valor 2
funcs[8]() //aparece o valor 8
funcs[6]() //aparece o valor 6

//A função tem consciência do local que foi definida. Conceito de Closure