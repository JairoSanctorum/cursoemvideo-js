var idade = 22
if (idade < 18) {
    console.log('Menor de idade')
} else {
    console.log('Maior de idade')
}



var idade = 82
console.log(`A idade é ${idade}!`)
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('voto opcional')
    } else {
        console.log('Voto obrigatório')
    }
}