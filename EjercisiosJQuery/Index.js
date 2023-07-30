$(document).ready(function (){

    addClass()
    function addClass() {
        //Ejercisio1
        $("div.card-header").addClass("bg-primary text-white");
        //Ejercisio2
        $("div.card-body").addClass("be-light");
    }//en function

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

    function validateDescription(description){

        let min = 15;
        let max = 25;
        let nText = description.length;

        if (nText >= min && nText <= max){

            $("#vDescripcion").show().text("Es Valido").removeClass("text-danger").addClass("text-success");

            return true
        }
        else{
            $("#vDescripcion").show().text("No es valido").removeClass("text-success").addClass("text-danger");
            return false

        }

    }//end funcion

    function validateAll(){

        nameVT = $("#iNombre").val();
        ageVT = $("#iEdad").val();
        description = $("#tDescripcion").val();

        if (validateName(nameVT) == true && validateAge(ageVT) == true && validateDescription(description) == true){

            $("#bEnviar").attr('disabled',false);

        }else{
            $("#bEnviar").attr('disabled',true);
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
    function callAjax() {
        $.ajax({
            type: "GET",
            url: "https://dummyjson.com/products/1",
            dataType: "json",
            success: function (data) {
                console.log(data)
                insertTable(data);
                selectImage(data)
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
    function insertTable(data){

        $("#image").attr("src",data.images[1])
        $("#brand").text(data.brand)
        $("#category").text(data.category)
        $("#desc").text(data.description)
        $("#price").text(data.price)

    }//end funcion

    //INTENTO DE SELECCIONAR IMAGEN CON EL SELECT NO EXITOSO SE REVISA CON PM :)
    function selectImage(data){

        let opSelect = $("#opciones").val();

        switch (opSelect) {
            case 1:
                $("#image").attr("src",data.images[1]);break;

            case 2:
                $("#image").attr("src",data.images[2]);
            break;

            case 3:
                $("#image").attr("src",data.images[3]);
            break;
        }//end switch

    }//end funcion

    $("#opciones").on("change",function (){

        let options = $(this).val();
        selectImage(options);

    })

}); //end ready
