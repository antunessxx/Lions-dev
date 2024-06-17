let nome
let idade

console.log('Como é seu nome?')

process.stdin.once('data', function(data) {
   nome = data.toString().trim()
   console.log('Qual é sua idade?')

   process.stdin.once('data', function(data){
    idade = parseInt(data.toString().trim())
    processamento(nome, idade)
    process.exit()
 

   })
})

function processamento(nome,idade){
    if(idade >= 18){
        console.log(`${nome},voce já é maior de idade!`)
    } else {
        console.log(`Ola ${nome},voce vai ser maior de idade em ${18 - idade} anos.`)
    }
}