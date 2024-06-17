let nota

console.log('Digite sua nota:')
process.stdin.once('data', function(data){
  nota= parseFloat(data.toString().trim())
  console.log( processamento(nota))      
    process.exit()
})

function processamento (nota){
    switch (true){
        case (nota >= 90 && nota <= 100):
          return 'nota A,aprovado'
            break
        case (nota >= 80 && nota <= 89):
            return 'nota B,aprovado'
            break
        case (nota >= 70 && nota <= 79):
                return 'nota C,aprovado'
                break
        case (nota >= 60 && nota <= 69):
                    return 'nota D,reprovado'
                      break
        case (nota >= 0 && nota <= 59):
          return 'nota F,reprovado'
            break
        default:
          nota ='Nota Invalida'
          break
    }
}
