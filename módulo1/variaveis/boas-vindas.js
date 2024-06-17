var nome = ''
console.log("digite seu nome: ")

process.stdin.on('data', function(data){

    let nome = data.toString();

    var saudacao = "olá " + nome 
    console.log(saudacao)

    process.exit()
})