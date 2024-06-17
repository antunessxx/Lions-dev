let vetorNotas=[7,5.4,9.1,3,9.8,4,1,6.7,8.8,4.6]
let mediaNotas = 0
let maiorNota = vetorNotas[0]
let menorNota = vetorNotas[0]
let soma=0
let notasAcimaMedia = 0
let notasReprovadas=0

// Calcular média
//.length=quantidade dentro do vetor
for (let i = 0;i < vetorNotas.length; i++){
   soma = soma + vetorNotas[i]
}
media = soma / vetorNotas.length

// Nota mais Alta e mais baixa
for (let i = 0;i < vetorNotas.length; i++){
    if(vetorNotas[i] > maiorNota){
        maiorNota = vetorNotas                                                      
    }
    if (vetorNotas[i] < menorNota){
        menorNota = vetorNotas[i]
    }
}
console.log(maiorNota)
console.log(menorNota)

// Conte e exiba quantas estao acima da media
for (let i = 0;i < vetorNotas.length; i++){
    if (vetorNotas[i] > media){
        notasAcimaMedia++
    }
}
console.log(`O vetor notas possui ${notasAcimaMedia} notas acima da media ${mediaNotas}`)

//Adicione notas ao array
vetorNotas.push(14)
console.log(vetorNotas)

//Conte e exiba as notas reprovadas
for (let i = 0;i < vetorNotas.length; i++){
    if(vetorNotas[i]< 8){
      notasReprovadas++
    }
}
console.log(notasReprovadas)