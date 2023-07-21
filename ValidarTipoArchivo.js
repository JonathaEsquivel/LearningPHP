/*Validar Tipo de Archivo*/
    function ValidarImagen(input){
    let imagen = input.files[0]
    let arr = ['image/jpg','image/jpeg','image/png']

    if (arr.indexOf(imagen.type) != -1 ){
    console.log('es valido')
}
    else{
    input.value = ''
    console.log('no es valido')
    alert('No es Valido, Selecciona otro archivo')
}

    console.log(input)
}