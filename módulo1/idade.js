var nome
var idade

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
  function processamento (nome, idade) {
  const anoAtual = 2024
  let ano = anoAtual - idade
  console.log(` Ola ${nome}, voce nasceu em ${ano} ou ${ano-1} se ainda nao fez aniversario`)
  }