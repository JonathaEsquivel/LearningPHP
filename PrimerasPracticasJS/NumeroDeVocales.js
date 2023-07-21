/*SACAR EL NUMERO DE VOCALES*/

let vocales = ['A','E','I','O','U']
let numVocales = 0

let texto = 'Hola Mundo'
texto = texto.toUpperCase()
let textoArray = texto.split('')

for (let i = 0; i < textoArray.length; i++){
    if (vocales.includes(textoArray[i])){
        numVocales++
    }//end if
}//end for

console.log('Numero de vocales: ' + numVocales)