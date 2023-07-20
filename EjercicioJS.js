/*IMPRIMIR UN VALOR ALEATORIO ENTRE 0 Y 99*/
let min = 1
let max = 99

 let NumPosibilidades = max - min
 let NumAleatrio = Math.random() * (NumPosibilidades)
     NumAleatrio = Math.floor(NumAleatrio)

console.log('Numero Aleatorio:' + NumAleatrio)

/*-----------------------------------------------------------------*/
/*IMPRIMIR UN TEXTO EN MAYUSCULAS*/

let TextMayus = 'Hola Mundo soy El Jona'

console.log('Texto a Convertir: ' + TextMayus + ' Convertido: ' +  TextMayus.toUpperCase())
/*-----------------------------------------------------------------*/
/*PALABRA AL REVES O INVERTIDA*/

let palabra = 'Hola Mundo';

let invertida = palabra.split('').reverse().join('');
console.log('Texto a Invertir: '+ palabra + ' Texto al reves: ' + invertida);
/*-----------------------------------------------------------------*/
/*FUNCION PARA SACAR EL IVA*/

let precio = 0
let iva = 0
function AplicarIVA(precio,iva){

    if (iva != null) {
        let sacarIVA = (iva * precio) / 100
        let PrecioConIVA = sacarIVA + precio

        return(PrecioConIVA)
    }
    else{
        let sacarIVA = (21 * precio) / 100
        let PrecioConIVA = sacarIVA + precio

        return(PrecioConIVA)
    }

}
console.log('Total con el IVA aplicado ' + AplicarIVA(50,16))
/*-----------------------------------------------------------------*/
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









