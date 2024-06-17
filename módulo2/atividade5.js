var numero

console.log('Escolha um número de 1 a 10:')
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()
})

function processamento (numero){
    for(let i=0; i<= 10;i++ )
        console.log(`${numero} x ${i} = ${numero * i}`)
}