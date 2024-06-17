let prova1
let prova2
let notas=[]

console.log('Digite sua primeira nota:')
process.stdin.once('data', function(data){
  prova1= parseFloat(data.toString().trim())

  console.log('Digite sua segunda nota:')
  process.stdin.once('data', function(data){
   prova2= parseFloat(data.toString().trim())
   notas.push(prova1, prova2)
   media()
   process.exit()
  })
})
function media (){
let resultado =(notas[0] + notas[1])/2
  console.log(`O resultado da media é ${resultado}`)
}