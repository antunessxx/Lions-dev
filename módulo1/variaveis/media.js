var nota1
var nota2

console.log('primeira nota:')
process.stdin.once('data', function(data){
    nota1= data.toString().trim()
    console.log('segunda nota:')

    process.stdin.once('data', function(data){
        nota2= parseFloat(data.toString().trim())
        media(nota1,nota2)
        process.exit()
    })
})
function media(nota1,nota2){
(let=(nota1 + nota2)/2)
console.log('a média é:')
}
