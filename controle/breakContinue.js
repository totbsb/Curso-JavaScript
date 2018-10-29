const nums = [1,2,3,4,5,6,7,8,9,10]

// O 'for' vai parar quando chegar ao valor anterior ao break
for (let x in nums) {
    if (x == 5) break //break só funciona no for, while, switch mais próximo
    console.log(`${x} --> ${nums[x]}`)
}

// O for vai sair dessa volta do loop quando chegar na condição, mas continua o loop
//Pulou o índice 5
for (let y in nums) {
    if (y == 5) continue //continue só funciona no for, while mais próximo
    console.log(`${y} --> ${nums[y]}`)
}    

//Não é utilizável, tendo outras formas mais elegantes de ser usadas
externo: //Cria um rótulo associado a um laço 'for'
for(a in nums) {
    interno:
    for(b in nums) { 
        if(a==2 && b==3) break externo //interno sai só do loop interno. externo sai do maior 'for'
        console.log(`Par = ${a},${b}`)
    }

}