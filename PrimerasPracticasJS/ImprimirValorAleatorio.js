/*IMPRIMIR UN VALOR ALEATORIO ENTRE 0 Y 99*/
let min = 1
let max = 99

let NumPosibilidades = max - min
let NumAleatrio = Math.random() * (NumPosibilidades)
NumAleatrio = Math.floor(NumAleatrio)

console.log('Numero Aleatorio:' + NumAleatrio)