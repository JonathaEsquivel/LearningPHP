/*PALABRA AL REVES O INVERTIDA*/

let word = 'Hola Mundo'
function wordInverted(word) {

    let inverted = word.split('').reverse().join('')

    return inverted
}
console.log('Texto a Invertir: ' + word + ' Texto al reves: ' + wordInverted(word))
