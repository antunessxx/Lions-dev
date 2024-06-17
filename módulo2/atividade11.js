let numero

console.log('Digite um numero:')
process.stdin.once('data', function(data){
  numero= parseInt(data.toString().trim())
  processamento(numero)   
    process.exit()
})

function processamento (numero){
    if (numero % 5 == 0){
        console.log('O numero é divisível por 5')
    } else {
        console.log('O número não é divisivel por 5')
    }
}