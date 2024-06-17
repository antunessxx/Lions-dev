console.log('Bem vindos!')
const readline = require('readline')
var cont=1

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
let numero = Math.floor(Math.random() * 100)+1
palpite()

function palpite () {
rl.question('Digite um número:',(resposta) => {
    if(cont != 10){
    switch(true){
case (resposta == numero) :
console.log('Você acertou!')
console.log(`Você acertou em ${cont} jogadas!`)
rl.close()
break
case(resposta > numero && resposta < 101):
console.log('Errou,é um número menor!') 
cont++
palpite()
break
 case(resposta < numero):
console.log('Errou,é um número maior!') 
cont++
break
default:console.log('número invalido!')
palpite()
    }
}else{
    console.log(`Acabou as tentativas!O numero era ${numero}`)
    rl.close()
}
})
}
palpite()
