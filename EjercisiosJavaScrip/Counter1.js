/*Declarar variables a utilizar*/
let param1 = 0
let param2 = 0


function RegresarArr(param1,param2){ /*Iniciamos funcion*/
    let array = new Array(param2) /*Declaramos arreglo con el tamaño del parametro 2*/
    let retArray = new Array() /*Declaramos la variable detipo arreglo como un Array vacio*/

    for (let i = 0; i < array.length; i++){ /*Recorremos el arreglo qeu recibe el parametro 2*/
        let res = param1 + i /*En la variable res guardamos el resultado de la suma del parametro 1 con el numero de la iteracion del siclo*/
        retArray.push(res)/*Insertamos el valor de res a nuestro array vacio con la variable res*/
    }//end for
return retArray /*regresamos el arreglo con los valores ingresados */

}//end function

console.log(RegresarArr(10,3))/*Mandamos imprimir la funcion ingresando los dos valores numericos esperados*/

