/*PALABRA AL REVES O INVERTIDA*/

let word = 'Hola Mundo'
function wordInverted(word) {

    return word.split('').reverse().join('')

}
console.log('Texto a Invertir: ' + word + ' Texto al reves: ' + wordInverted(word))
