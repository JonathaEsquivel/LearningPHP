/*IMPRIMIR UN VALOR ALEATORIO ENTRE 0 Y 99*/
let min = 0
let max = 99

let numPosibilities = max - min

let numRandom = Math.random() * (numPosibilities)

numRandom = Math.floor(numRandom)

console.log('Numero Aleatorio:' + numRandom)
