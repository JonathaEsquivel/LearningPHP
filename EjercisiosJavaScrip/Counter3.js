function serieFibonacci(param1) {/*Se declara la funcion a usar*/

    let arrFibo = new Array(param1) /*Declaramos nuestra varaible tipo Array y pasaremos definimos el tamaño con el valor esperado en la funcion*/
    arrFibo[0] = 0 /*en la posicion 0 inicializamos con 0 */
    arrFibo[1] = 1 /*en la posicion 1 inicializamos con 1 ya que son los primeros valores para la suma de la serie fibonacci*/
    for (var i = 2; i < arrFibo.length; i++) {//iniciamos el ciclo en la posicion 2 y aplicamos la funcion matematica
        arrFibo[i] = arrFibo[i - 2] + arrFibo[i - 1] /*a la serie fibonacci sumamos 2 y restamos 1 al numero de iteracion*/
    }

    return arrFibo /*retornamos el arreglo*/

}

console.log(serieFibonacci(5))/*Imprimimos la funcion ingresando el parametro tipo entero*/