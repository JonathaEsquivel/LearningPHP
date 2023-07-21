/*SACAR EL NUMERO DE VOCALES*/

let text = 'Hola Mundo soy Jona Crack'

text = text.toUpperCase()

let textArray = text.split('')

function countVowels(text) {
    let vowels = ['A', 'E', 'I', 'O', 'U']
    let numVowels = 0

    for (let i = 0; i < textArray.length; i++) {
        if (vowels.includes(textArray[i])) {
            numVowels++
        }//end if
    }//end for

    return numVowels
}

console.log('Texto: --'+ text + '-- Numero de vocales encontradas: ' + countVowels(text))
