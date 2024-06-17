let nome
let idade
let aniversario
const anoAtual = 2024

console.log('Como é seu nome?')
process.stdin.once('data', function(data) {
   nome = data.toString().trim()

   console.log('Qual é sua idade?')
process.stdin.once('data', function(data) {
    idade = parseInt(data.toString().trim())

   console.log('Já fez aniversario?')
process.stdin.once('data', function(data) {
   aniversario = data.toString().trim()

    processamento()
    process.exit()
 
   })
   })
})
  function processamento () {
  let ano = anoAtual - idade
    if (aniversario == 'sim'){
        aniversario = true
      } else if (aniversario == 'nao')
        {
        aniversario = false
      }
      if (aniversario == true){
        console.log(` Ola ${nome}, voce nasceu em ${ano}`)
      } else {
        console.log(` Ola ${nome}, voce nasceu em ${ano -1}`)
      }
  }