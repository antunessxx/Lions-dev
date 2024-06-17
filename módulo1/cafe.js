let cafe
let gostaDeCafe

console.log('Você gosta de café?')
process.stdin.once('data', function(data){
    cafe = data.toString().trim()
    processamento(cafe)
    process.exit()
})

function processamento(cafe) {
  if (cafe == 'sim'){
       gostaDeCafe = true
  } else {
    gostaDeCafe = false
  }
  if (gostaDeCafe == true){
    console.log('Que bom que gosta de café')
  } else {
    console.log('Poxa, que pena')
  }
}  
  