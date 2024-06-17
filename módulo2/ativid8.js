let numero1
let numero2
let operador

console.log('Digite o primeiro número:')
process.stdin.once('data', function(data){
  numero1= parseFloat(data.toString().trim())

  console.log('Digite o operador:')
process.stdin.once('data', function(data){
  operador= data.toString().trim()

  console.log('Digite o segundo numero:')
  process.stdin.once('data', function(data){
   numero2= parseFloat(data.toString().trim())
   calculadora(numero1,numero2,operador)
   console.log(calculadora(numero1,numero2,operador))
   process.exit()
  })
})
})
function calculadora (numero1,numero2,operador){
    if(operador == '+'){
        return numero1 + numero2
    }else if (operador == '-'){
        return numero1 - numero2
    }else if(operador == '*'){
        return numero1 * numero2
    }else if(operador == '/'){
        return numero1 / numero2
    }
    else{
        return 'Não foi possível fazer a operação'
    }
}