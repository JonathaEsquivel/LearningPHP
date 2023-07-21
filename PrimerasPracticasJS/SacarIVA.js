/*FUNCION PARA SACAR EL IVA*/

let price = 0
let iva = 0
function aplyIVA(price,iva){

    if (iva != null) {
        let getIVA = (iva * price) / 100
        let priceWhitIVA = getIVA + price

        return priceWhitIVA
    }
    else{
        let getIVA = (21 * price) / 100
        let priceWithIVA = getIVA + price

        return priceWithIVA
    }

}
console.log('Total con el IVA aplicado ' + aplyIVA(50,16))
