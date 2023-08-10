function addClass() {
    //Ejercisio1
    $("div.card-header").addClass("bg-primary text-white");
    //Ejercisio2
    $("div.card-body").addClass("be-light");
}//en function

function validateName(Nombre){

    if(Nombre.length != 0){
        return true
    }else{
        return false
    }

}//end funcion

function validateAge(age){

    if (age != 0 && age != null){
        return true
    }else{
        return false
    }

}//end funcion


$(document).ready(function (){

    addClass()


    //Ejercisio3
    $("#iNombre").on("change", function (){

       var name = $(this).val()

        validateName(name);

        $("#nombre").text(name);

        validateAll();
    });

    //Ejercisio4
    $("#iEdad").on("input", function (){

        let age = $(this).val();

        this.value = this.value.replace(/[^0-9]/g,'');

        validateAge(age);
        validateAll();

    });

    //Ejercisio5
    $("#tDescripcion").on("input", function (){

        let description = $(this).val();

        validateDescription(description);
        validateAll();

    });//end funcion

    //Ejercisio6
    $("#cOpciones").on("change",function (){

        if (this.checked){

            $("#opciones").show(1000);

        }else {
            $("#opciones").hide(1000);
        }

    });

    //Ejercisio7


    function validateDescription(description){

        let nText = description.length;

        if (nText >= 15 && nText <= 25){

            $("#vDescripcion").show().text("Es Valido").removeClass("text-danger").addClass("text-success");

            return true
        }
        else{
            $("#vDescripcion").show().text("No es valido").removeClass("text-success").addClass("text-danger");
            return false

        }

    }//end funcion

    function validateAll(){

        buttonSend = $("#bEnviar");

        nameVT = $("#iNombre").val();
        ageVT = $("#iEdad").val();
        description = $("#tDescripcion").val();

        if (validateName(nameVT) == true && validateAge(ageVT) == true && validateDescription(description) == true){

            buttonSend.attr('disabled',false);

        }else{
            buttonSend.attr('disabled',true);
        }

    }//end funcion

//Ejercisio8
    $("#formulario").on("submit", function (event){

        event.preventDefault()

       let person = {

           name: $("#iNombre").val(),
           age: $("#iEdad").val(),
           description: $("#tDescripcion").val()

        }//end objeto
        console.log(person)
    })

//Ejercisio9
   let product;
    function callAjax() {
        $.ajax({
            type: "GET",
            url: "https://dummyjson.com/products/",
            dataType: "json",
            success: function (data) {
                product = data;
                insertTable();
            },
            failure: function (data) {
                alert(data.responseText);
            },
            error: function (data) {
                alert(data.responseText);
            }
        });
    }//end funcion
    callAjax()

//Ejercisio10
    function insertTable(){

        for (let i = 0; i < product.products.length; i++){

            //insertamos las filas de la tabla para presentar los productos que tiene data
            let tr = getTr(i)
            $("#cuerpo").append(tr)
            /*
            $("#image").attr("src",product.products[i].images[1])
            $("#brand").text(product.products[i].brand)
            $("#category").text(product.products[i].category)
            $("#desc").text(product.products[i].description)
            $("#price").text(product.products[i].price)
            */
        }//end for

    }//end funcion

    //funcion para insertar datos en la tabla
   function getTr(i){

        let pp = product.products;

        const tr = `  <tr>
                    <td><img src="${ pp[i].images[0]}" id="image" width="200"></td>
                    <td id="brand">${ pp[i].brand}</td>
                    <td id="category">${ pp[i].category}</td>
                    <td id="desc">${ pp[i].description}</td>
                    <td id="price">${ pp[i].price}</td>
                    </tr>`

       return tr;
   }

    //Esta funcion ya quedo obsoleta, ya que cambio el funcionamiento del select, ya que no es necesario
    function selectImage(){

        let opSelect = $("#opciones").val();

        $("#image").attr("src",product.images[opSelect]);

        /*
        switch (opSelect) {
            case '1':

                $("#image").attr("src",product.images[1]);
            break;

            case '2':

                $("#image").attr("src",product.images[2]);

            break;

            case '3':

                $("#image").attr("src",product.images[3]);
            break;
        }//end switch
       */
    }//end funcion

    $("#opciones").on("change",function (){

        //selectImage(product);
        selectImage();
    })

}); //end ready
