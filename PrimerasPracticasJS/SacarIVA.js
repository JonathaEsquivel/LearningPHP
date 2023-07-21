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