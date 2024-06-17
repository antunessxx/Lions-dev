let opcoes=[Pedra,Papel,Tesoura]
let escolhaComputador=''
let escolhaUsuario=''

console.log('pedra,papel,tesoura')
process.stdin.once('data',function(data){
  escolhaUsuario = data.toString().trim()
  jogo(escolhaUsuario)
  process.exit()
})

function jogo(){
    escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)]

    if(escolhaUsuario == escolhaComputador){
        resultado == 'empate'
    }else if(
        (escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura')||
        (escolhaUsuario == 'papel' && escolhaComputador == 'pedra')||
        (escolhaUsuario == 'tesoura' && escolhaComputador == 'papel')||) 
    {
            resultado = 'voce ganhou'
        }else{
            resultado = 'voce perdeu'
        }
    }
    console.log(`voce escolheu ${escolhaUsuario}`)
    console.log(`o computador escolheu ${escolhaComputador}`)
    console.log(resultado)

    
