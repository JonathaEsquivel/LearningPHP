function appMate(param1,arrStr){ /*Declaramos la funcion que va a recibir un parametro entero y un array*/

    let res = param1 /*res es la variable que vamos autilizar para el guardar el resultado de la funciones atematicas y la inicializamos con el parametro entero que recibimos en la funcion*/
    let arrRes = new Array() /*Arreglo donde guarderemos las funciones matematicas*/
    let param1Orig = param1 /*esta variable es para optener el valor original que ingresamos en la funcion*/


    for (let i = 0; i < arrStr.length; i++){/*Iniciamos recorriendo el array que recibimos en la funcion como parametro2*/

        if (arrStr[i] == 'increment') { //realizamos las operacion de incrementar sumando 1 al valor que recibimos
            res = res + 1
        } else if (arrStr[i] == 'decrement') {//restamos -1 para decrementar el resultado
            res = res - 1
        } else if (arrStr[i] == 'reset') {//multiplicamos por 1 para resetear el valor
            res = param1Orig * 1
        }

        arrRes.push(res) //aqui estamos insertando los valores al array que vamos a imprimir
    }//end for

    return arrRes //regresamos el array

}//end function

console.log(appMate(1,['increment','increment','decrement','reset','reset']))//imprimimos la funcion ingresando los datos solicitados