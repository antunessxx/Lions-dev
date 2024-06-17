var somaPares=0
var somaImpares=0
var totalPares=0
var totalImpares =0
var mediaPares
var mediaImpares

for (let i = 0;i <= 999; i++){
 if( i % 2 == 0){
    somaPares +=i 
    totalPares ++
 }else{
    somaImpares += i
    totalImpares ++
 }
 
}

mediaPares = somaPares / totalPares
mediaImpares = somaImpares / totalImpares
console.log(`A soma dos números pares é ${somaPares}`)
console.log(`A soma dos números Impares é ${somaImpares}`)
console.log(`A soma do total dos números pares é ${somaPares}`)
console.log(`A soma do total dos números pares é ${somaImpares}`)
console.log(`A media dos números pares é ${mediaPares}`)
console.log(`A media dos números pares é ${mediaImpares}`)
if (mediaPares > mediaImpares){
    console.log('media dos pares é maior ')
}else if (mediaPares == mediaImpares){
    console.log('as medias sao iguais')
}else {
    console.log('a media dos impares e maior')
}
console.log(`a media dos pares é ${mediaPares},e dos ímpares é ${mediaImpares}`)
