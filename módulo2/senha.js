let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv0123456789'
senha= ''
let numeroAleatorio

console.log('Qual o tamanho da senha desejada?')
process.stdin.once('data',function(data){
let comprimentoSenha= parseInt(data)
 
    for(let i = 0; i < comprimentoSenha; i++){
        numeroAleatorio = Math.floor(Math.random() * caracteres.length)
        senha = senha + caracteres.charAt(numeroAleatorio)
    }
console.log("Sua senha aleatoria é:" + senha)
process.exit
})