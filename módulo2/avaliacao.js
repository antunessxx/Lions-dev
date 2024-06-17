let notas=[7.5,8.0,6.0,9.5,5.0,8.5,7.0,10.0,6.5,9.0]
let media = 0
let maiorNota = notas[0]
let menorNota = notas[0]
let soma=0
let notasAcimaMedia = 0
let Reprovadas=0

for (let i = 0;i < notas.length; i++){
   console.log(notas[i]) 
}
// Calcular média
//.length=quantidade dentro do vetor
for (let i = 0;i < notas.length; i++){
   soma = soma + notas[i]
}
media = soma / notas.length

console.log(`A média das notas é ${media}`)

// Nota mais Alta e mais baixa
for (let i = 0;i < notas.length; i++){
    if(notas[i] > maiorNota){
        maiorNota = notas[i]                                                     
    }
    if (notas[i] < menorNota){
        menorNota = notas[i]
    }
}
console.log(`A nota máxima é ${maiorNota}`)
console.log(`A nota mínima é ${menorNota}`)

// Conte e exiba quantas estao acima da media
for (let i = 0;i < notas.length; i++){
    if (notas[i] > media){
        notasAcimaMedia++
    }
}
console.log(`O vetor notas possui ${notasAcimaMedia} notas acima da media ${media}`)

//Adicione notas ao array
notas.push(8.0)
console.log(notas)

//Conte e exiba as notas reprovadas
for (let i = 0;i < notas.length; i++){
    if(notas[i]< 6){
      Reprovadas++
    }
}
console.log(`As notas reprovadas foram ${Reprovadas}`)
