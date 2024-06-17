let coresFavoritas = []
let coresEspeciais =[]
let corDoUsuario

console.log("qual sua cor favorita?")
process.stdin.once('data', function(data){
corDoUsuario =data.toString().trim()
processamento (corDoUsuario)
process.exit()
})
function processamento(corDoUsuario){
    if(coresFavoritas.includes(corDoUsuario)){
        console.log('a sua cor favorita é uma das')
    }else{
        coresEspeciais.push(corDoUsuario)
            console.log('A sua cor favorita é diferente')
        
    }
    for (let i = 0; i < coresFavoritas.length; i++) {
        console.log(coresFavoritas[i])
    }
}