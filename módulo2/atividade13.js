let vetor1 = [27,10,3,0,20,5,6,3]
let vetor2 = []
let vetor3 = []

vetor1.push(16)
for (let i = 0; i < vetor1.length; i++) {
   if(vetor1[i] % 2  == 0){
     vetor2.push(vetor1[i])  
}else if (vetor1[i] % 2 == 1){
    vetor3.push(vetor1[i])
}
}
console.log(vetor2)
console.log(vetor3)
